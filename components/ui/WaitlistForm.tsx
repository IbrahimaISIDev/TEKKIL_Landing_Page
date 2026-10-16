'use client'

import { useState } from 'react'
import { WAITLIST_API_URL } from '@/lib/urls'

// Liste d'attente d'un concours pas encore disponible : POST /waitlist (même
// route que l'ancien formulaire du pied de page), source = « landing-pack-<slug> »
// pour mesurer la demande par concours dans l'admin.
export function WaitlistForm({
  packId,
  packName,
  tone = 'light',
}: {
  packId: string
  packName: string
  /** dark : sur fond sombre (page concours). */
  tone?: 'light' | 'dark'
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch(WAITLIST_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: `landing-pack-${packId}`.slice(0, 50) }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-xs font-semibold text-emerald-800">
        C&apos;est noté ! Tu seras prévenu(e) dès l&apos;ouverture du {packName}.
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-2 pt-1">
      <p className={`text-center text-xs ${tone === 'dark' ? 'text-white/60' : 'text-slate-500'}`}>
        Laisse ton e-mail pour être prévenu(e) dès son lancement.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`waitlist-${packId}`} className="sr-only">Adresse e-mail</label>
        <input
          id={`waitlist-${packId}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ton.email@exemple.com"
          className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-[#0D9488]"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold text-white transition-opacity disabled:opacity-60"
          style={{ background: 'linear-gradient(135deg, #1A2356 0%, #27316F 55%, #0D9488 100%)' }}
        >
          {status === 'loading' ? 'Envoi…' : 'Me prévenir'}
        </button>
      </div>
      {status === 'error' && (
        <p role="alert" className={`text-center text-xs ${tone === 'dark' ? 'text-red-300' : 'text-red-600'}`}>
          L&apos;inscription n&apos;a pas abouti. Réessaie dans un instant.
        </p>
      )}
    </form>
  )
}
