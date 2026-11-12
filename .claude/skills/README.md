# Skills Claude Code de TEKKIL

Un skill = un dossier `<nom>/` contenant `SKILL.md` (en-tête YAML + procédure)
et, si besoin, `scripts/` (vérifications déterministes, code de sortie ≠ 0 en
cas d'erreur) et `references/` (règles longues, lues à la demande).

## Tous les skills du projet

| Skill | Dépôt | Usage | Invocation |
|---|---|---|---|
| `tekkil-deploy` | tekkil-api | Mise en ligne VPS : preflight, sauvegarde, ordre, postcheck, retour arrière | `/tekkil-deploy` (manuel) |
| `tekkil-migration-db` | tekkil-api | Migration TypeORM : conventions, relecture, rejeu sur base jetable | `/tekkil-migration-db` (manuel) |
| `tekkil-security-check` | tekkil-api | Gardes des routes, configuration, Gitleaks, Trivy | `/tekkil-security-check` (manuel) |
| `tekkil-nest-module` | tekkil-api | Nouveau module, endpoint, entité selon les conventions | automatique |
| `tekkil-moteur-adaptatif` | tekkil-api | Règles du moteur de QCM, non-régression | automatique |
| `tekkil-catalogue-vente` | tekkil-api | Règles de vente (offre complète, vente seule, rayon, recettes), vérification SQL sur base jetable | automatique |
| `tekkil-landing-page` | TEKKIL_Landing_Page | Pages et sections publiques de tekkilapp.com : API publique, cache, métadonnées, sitemap, rendu | automatique |
| `tekkil-import-qcm` | Tekkil-Front | Vérifier un Excel de QCM avant import dans l'admin | automatique |
| `tekkil-pwa` | Tekkil-Front | Manifeste, service worker, installabilité | automatique |
| `tekkil-journal` | tekkil-docs | Documenter incident, bug, décision, session | automatique |

Ce dossier (racine de l'espace de travail, **non versionnée**) ne contient
que des liens symboliques vers les skills des trois dépôts, pour qu'ils
soient disponibles dès l'ouverture d'une session à la racine. Les fichiers
réels et leur historique vivent dans chaque dépôt.

Outils requis : Node 20+, Python 3 (`openpyxl`, `pyyaml`), Docker (base
jetable), `gh` (état de la CI), `gitleaks` et `trivy` (dans `~/.local/bin`).

## Ajouter un skill

1. **Vérifier que c'est bien un skill** : fait ou convention courte →
   `CLAUDE.md` ; procédure récurrente en plusieurs étapes → skill ; garantie
   qui doit toujours s'appliquer → hook ou étape de CI.
2. Créer `<nom>/SKILL.md` dans le dépôt concerné (`tekkil-<sujet>`, minuscules
   et tirets, identique au nom du dossier). En-tête, sans tabulation :
   ```yaml
   ---
   name: tekkil-sujet
   description: Ce que fait le skill ET quand l'utiliser, avec des mots déclencheurs concrets (sans « : » suivi d'un espace, ou bien entre guillemets).
   disable-model-invocation: true   # seulement pour une action risquée (déploiement, migration, import en prod)
   ---
   ```
3. Corps de moins de 300 lignes : étapes numérotées et vérifiables, puis
   « Critères de réussite », « À ne jamais faire », « Historique des versions ».
   Les règles viennent du code ou de la documentation, jamais inventées.
4. Vérifications déterministes dans `scripts/` (exécutables, `chmod +x`, code
   de sortie ≠ 0 en cas d'erreur) ; longues références dans `references/`.
   Aucun secret, IP, mot de passe ou chaîne de connexion : noms de variables
   seulement. Toute action destructrice demande la confirmation d'Ibrahima.
5. Tester : en-tête YAML valide
   (`python3 -c "import yaml,re,sys;t=open(sys.argv[1]).read();print(yaml.safe_load(re.match(r'^---\n(.*?)\n---\n',t,re.S).group(1)))" <nom>/SKILL.md`),
   scripts lancés sur un cas réel et sur un cas volontairement faux,
   3 phrases qui doivent le déclencher et 2 qui ne doivent pas, aucun secret
   (`gitleaks dir <nom> --redact`).
6. Ajouter le lien symbolique à la racine
   (`cd tekkil_projects/.claude/skills && ln -s ../../<dépôt>/.claude/skills/<nom> <nom>`),
   une ligne dans ce tableau (les cinq README) et dans la section « Skills
   disponibles » du `CLAUDE.md` du dépôt.
7. Modifier un skill existant : mettre à jour son « Historique des versions »
   (version, date, résumé).
