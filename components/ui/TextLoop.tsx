'use client';

import { CSSProperties, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './TextLoop.css';

export type TextLoopShape = 'wave' | 'circle' | 'infinity' | 'arch' | 'line';
export type TextLoopDirection = 'forward' | 'reverse';

export interface TextLoopProps {
  text?: string;
  shape?: TextLoopShape;
  path?: string;
  speed?: number;
  direction?: TextLoopDirection;
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
  viewBoxHeight?: number;
  preserveAspectRatio?: string;
}

interface Metrics {
  length: number;
  reps: number;
}

const VIEW_W = 1200;
const CX = VIEW_W / 2;
const EDGE_PAD = 6;

const getShapeHeight = (shape: TextLoopShape, curviness: number, ribbonWidth: number): number => {
  const c = Math.max(0, curviness);
  const rw = Math.max(0, ribbonWidth);
  switch (shape) {
    case 'line':
      return Math.max(50, rw + 24);
    case 'wave': {
      const a = c * 2.2;
      return Math.max(120, Math.ceil(a * 2 + rw + 32));
    }
    case 'arch':
      return 360;
    case 'circle':
    case 'infinity':
    default:
      return 520;
  }
};

const buildPath = (shape: TextLoopShape, curviness: number, ribbonWidth: number, cy: number): string => {
  const c = Math.max(0, curviness);
  const room = Math.max(20, cy - Math.max(0, ribbonWidth) / 2 - EDGE_PAD);

  switch (shape) {
    case 'circle': {
      const r = Math.min(90 + c * 0.95, room);
      return `M ${CX - r} ${cy} A ${r} ${r} 0 1 1 ${CX + r} ${cy} A ${r} ${r} 0 1 1 ${CX - r} ${cy} Z`;
    }
    case 'infinity': {
      const r = 150 + c * 1.4;
      const h = Math.min(60 + c * 0.95, room);
      return [
        `M ${CX} ${cy}`,
        `C ${CX + r * 0.55} ${cy - h} ${CX + r} ${cy - h} ${CX + r} ${cy}`,
        `C ${CX + r} ${cy + h} ${CX + r * 0.55} ${cy + h} ${CX} ${cy}`,
        `C ${CX - r * 0.55} ${cy - h} ${CX - r} ${cy - h} ${CX - r} ${cy}`,
        `C ${CX - r} ${cy + h} ${CX - r * 0.55} ${cy + h} ${CX} ${cy}`,
        'Z'
      ].join(' ');
    }
    case 'arch': {
      const rise = Math.min(120 + c * 1.1, room * 2);
      return `M 120 ${cy + rise / 2} Q ${CX} ${cy - rise * 1.5} ${VIEW_W - 120} ${cy + rise / 2}`;
    }
    case 'line':
      return `M -320 ${cy} L ${VIEW_W + 320} ${cy}`;
    case 'wave':
    default: {
      const a = Math.min(c * 2.2, room * 2);
      return `M -320 ${cy} Q -160 ${cy - a} 0 ${cy} T 320 ${cy} T 640 ${cy} T 960 ${cy} T 1280 ${cy} T ${VIEW_W + 320} ${cy}`;
    }
  }
};

const TextLoop = ({
  text = 'React ✦ Bits',
  shape = 'wave',
  path,
  speed = 90,
  direction = 'forward',
  separator = '✦',
  curviness = 90,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color = '#ffffff',
  ribbon = true,
  ribbonColor = '#5227FF',
  ribbonWidth = 86,
  pauseOnHover = true,
  className = '',
  style = {},
  viewBoxHeight,
  preserveAspectRatio = 'xMidYMid meet'
}: TextLoopProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const measureRef = useRef<SVGTextElement | null>(null);
  const headRef = useRef<SVGTextPathElement | null>(null);
  const tailRef = useRef<SVGTextPathElement | null>(null);

  const [metrics, setMetrics] = useState<Metrics>({ length: 0, reps: 1 });

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, '')}`;

  const computedH = viewBoxHeight ?? getShapeHeight(shape, curviness, ribbonWidth);
  const cy = computedH / 2;

  const d = useMemo(() => path || buildPath(shape, curviness, ribbonWidth, cy), [path, shape, curviness, ribbonWidth, cy]);

  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? `\u00A0${separator}\u00A0` : '\u00A0\u00A0\u00A0';
    return `${base}${gap}`;
  }, [text, separator, uppercase]);

  const textStyle = useMemo<CSSProperties>(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px` }),
    [fontSize, fontWeight, letterSpacing]
  );

  useLayoutEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    if (!pathEl || !measureEl) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      let length = 0;
      let unitWidth = 0;
      try {
        length = pathEl.getTotalLength();
        unitWidth = measureEl.getComputedTextLength();
      } catch {
        return;
      }
      if (!length) return;

      if (!unitWidth) return;
      // Assez de copies pour couvrir toute la vague, et une période de boucle
      // égale à leur largeur NATURELLE : jamais de textLength qui étire ou
      // comprime l'espacement (c'est ce qui faisait se chevaucher les lettres
      // sur mobile, où la police mesurée diffère). Deux blocs (tête + queue)
      // couvrent [offset, offset + 2 × période] ⊇ la vague à tout instant.
      const reps = Math.min(20, Math.max(1, Math.ceil(length / unitWidth)));
      const period = reps * unitWidth;
      setMetrics(prev => (prev.length === period && prev.reps === reps ? prev : { length: period, reps }));
    };

    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [d, unit, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    const { length } = metrics;
    const head = headRef.current;
    const tail = tailRef.current;
    if (!head || !tail || !length) return undefined;

    // reverse (droite → gauche) : offset ∈ ]-période, 0], le second bloc suit
    // juste derrière ; forward : offset ∈ [0, période[, le second précède.
    const apply = (offset: number) => {
      const partner = offset > 0 || (offset === 0 && direction === 'forward') ? offset - length : offset + length;
      head.setAttribute('startOffset', String(offset));
      tail.setAttribute('startOffset', String(partner));
    };

    apply(0);

    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || speed <= 0) return undefined;

    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: direction === 'reverse' ? -length : length,
      duration: length / speed,
      ease: 'none',
      repeat: -1,
      onUpdate: () => apply(state.offset)
    });

    const root = rootRef.current;
    // Souris uniquement : au doigt, pointerleave n'arrive pas toujours et le
    // bandeau resterait figé après un simple toucher.
    const pause = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') tween.pause();
    };
    const resume = () => tween.resume();

    if (pauseOnHover && root) {
      root.addEventListener('pointerenter', pause);
      root.addEventListener('pointerleave', resume);
    }

    return () => {
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener('pointerenter', pause);
        root.removeEventListener('pointerleave', resume);
      }
    };
  }, [metrics, speed, direction, pauseOnHover]);

  const loopText = unit.repeat(metrics.reps);

  return (
    <div ref={rootRef} className={`text-loop ${className}`.trim()} style={style}>
      <svg
        className="text-loop-svg w-full h-full"
        viewBox={`0 0 ${VIEW_W} ${computedH}`}
        preserveAspectRatio={preserveAspectRatio}
        role="img"
        aria-label={text}
      >
        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbon ? ribbonColor : 'none'}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text ref={measureRef} className="text-loop-measure" style={textStyle} aria-hidden="true">
          {unit}
        </text>

        <text
          className="text-loop-text"
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
        >
          <textPath ref={headRef} href={`#${pathId}`} startOffset={0}>
            {loopText}
          </textPath>
        </text>

        <text
          className="text-loop-text"
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
        >
          <textPath ref={tailRef} href={`#${pathId}`} startOffset={0}>
            {loopText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TextLoop;
