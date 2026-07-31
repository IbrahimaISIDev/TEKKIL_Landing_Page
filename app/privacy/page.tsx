import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Tekkil',
  description: 'Politique de confidentialité de l\'application Tekkil, plateforme de préparation aux concours au Sénégal.',
}

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0B50DA] mb-3">
              Confidentialité
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
            >
              Politique de confidentialité
            </h1>
            <p className="text-gray-400 text-sm">
              Dernière mise à jour : 5 mai 2026
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-10">
              TEKKIL est une application de préparation aux concours nationaux au Sénégal (Android, iOS et Web), éditée par{' '}
              <strong>K-Edtech</strong>. La présente politique décrit quelles données nous collectons, comment nous les utilisons et vos droits à leur égard.
            </p>

            {/* Section 1 */}
            <Section title="1. Données collectées">
              <SubSection title="1.1 Données d'inscription et de profil">
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Ville de résidence (optionnelle)</li>
                  <li>Photo de profil (optionnelle, stockée sur Cloudflare R2)</li>
                  <li>Mot de passe (stocké sous forme hachée — jamais en clair)</li>
                </ul>
              </SubSection>
              <SubSection title="1.2 Données d'apprentissage et de progression">
                <ul>
                  <li>Résultats aux QCM (questions répondues, réponses choisies, score par session)</li>
                  <li>Profil adaptatif par rubrique : taux de réussite, score de fragilité, niveau</li>
                  <li>Historique des sessions d'entraînement et d'examens blancs (date, durée, score)</li>
                  <li>Progression dans les cours, résumés, audios et vidéos (position de lecture)</li>
                  <li>Cartes mémo (flashcards) : score SM-2, intervalle de révision</li>
                  <li>Statistiques de streak (nombre de jours consécutifs d'entraînement)</li>
                </ul>
              </SubSection>
              <SubSection title="1.3 Données de paiement">
                <ul>
                  <li>Historique des achats (packs achetés, montant, date)</li>
                  <li>Méthode de paiement utilisée (Orange Money, Wave, carte bancaire via Stripe)</li>
                  <li><strong>Aucune donnée de carte bancaire n'est stockée sur nos serveurs</strong> — elles sont traitées directement par Stripe.</li>
                </ul>
              </SubSection>
              <SubSection title="1.4 Données techniques et d'appareil">
                <ul>
                  <li>Type d'appareil (mobile / web / desktop)</li>
                  <li>Adresse IP (pour la sécurité et la prévention de fraude)</li>
                  <li>Jeton de session (stocké de façon sécurisée, révocable à tout moment)</li>
                  <li>Journaux de connexion (date, heure, appareil)</li>
                </ul>
              </SubSection>
              <SubSection title="1.5 Données du chatbot IA">
                <ul>
                  <li>Messages échangés avec le chatbot contextuel (stockés pour l'historique de conversation)</li>
                  <li>Ces messages sont envoyés à OpenAI (GPT-4o-mini) de façon anonymisée pour générer les réponses.</li>
                </ul>
              </SubSection>
              <SubSection title="1.6 Notifications push">
                <ul>
                  <li>Jeton FCM (Firebase Cloud Messaging) pour recevoir les notifications — peut être révoqué depuis les paramètres de votre appareil.</li>
                </ul>
              </SubSection>
            </Section>

            {/* Section 2 */}
            <Section title="2. Utilisation des données">
              <p className="text-gray-600 mb-4">Vos données sont utilisées exclusivement pour :</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Finalité</th>
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Base légale</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {[
                      ['Créer et gérer votre compte', 'Exécution du contrat'],
                      ['Vous donner accès aux packs achetés', 'Exécution du contrat'],
                      ['Calculer et afficher votre progression', 'Exécution du contrat'],
                      ['Personnaliser les sessions d\'entraînement via le moteur adaptatif', 'Intérêt légitime'],
                      ['Afficher votre rang dans les classements', 'Intérêt légitime'],
                      ['Envoyer des notifications pédagogiques', 'Consentement'],
                      ['Prévenir la fraude et le partage de compte', 'Intérêt légitime'],
                      ['Améliorer nos contenus et fonctionnalités', 'Intérêt légitime'],
                    ].map(([finalite, base]) => (
                      <tr key={finalite} className="border-b border-gray-100">
                        <td className="px-4 py-3 border border-gray-200">{finalite}</td>
                        <td className="px-4 py-3 border border-gray-200">{base}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mt-4 font-medium">Vos données ne sont jamais vendues à des tiers.</p>
            </Section>

            {/* Section 3 */}
            <Section title="3. Partage des données avec des tiers">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Tiers</th>
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Rôle</th>
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Données partagées</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {[
                      ['Neon (PostgreSQL)', 'Hébergement de la base de données', 'Toutes les données applicatives'],
                      ['Cloudflare R2 + CDN', 'Stockage et diffusion des médias', 'Fichiers pédagogiques (PDF, audio, vidéo)'],
                      ['OpenAI', 'Réponses du chatbot IA', 'Contenu des messages du chatbot (anonymisé)'],
                      ['Firebase (Google)', 'Notifications push et analytics', 'Jeton FCM, événements d\'usage agrégés'],
                      ['Stripe', 'Paiement par carte bancaire', 'Informations de paiement (traitées côté Stripe)'],
                      ['Orange Money / Wave', 'Paiement Mobile Money', 'Redirection sécurisée vers leurs plateformes'],
                    ].map(([tiers, role, donnees]) => (
                      <tr key={tiers} className="border-b border-gray-100">
                        <td className="px-4 py-3 border border-gray-200 font-medium">{tiers}</td>
                        <td className="px-4 py-3 border border-gray-200">{role}</td>
                        <td className="px-4 py-3 border border-gray-200">{donnees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mt-4">Ces prestataires agissent en tant que sous-traitants et sont contractuellement tenus de protéger vos données.</p>
            </Section>

            {/* Section 4 */}
            <Section title="4. Durée de conservation">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Donnée</th>
                      <th className="text-left px-4 py-3 border border-gray-200 font-semibold text-gray-700">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {[
                      ['Données de compte actif', 'Pendant toute la durée du compte'],
                      ['Historique de progression', '3 ans après la dernière activité'],
                      ['Journaux de sécurité', '12 mois'],
                      ['Données de paiement', '5 ans (obligation légale comptable)'],
                      ['Compte supprimé', '30 jours, puis suppression définitive'],
                    ].map(([donnee, duree]) => (
                      <tr key={donnee} className="border-b border-gray-100">
                        <td className="px-4 py-3 border border-gray-200">{donnee}</td>
                        <td className="px-4 py-3 border border-gray-200">{duree}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Section 5 */}
            <Section title="5. Sécurité">
              <ul>
                <li>Chiffrement HTTPS sur toutes les communications</li>
                <li>Mots de passe hachés (bcrypt)</li>
                <li>Jetons JWT à courte durée de vie (15 min) avec rotation des refresh tokens</li>
                <li>Mécanisme anti-partage de compte (un seul appareil actif par session)</li>
                <li>Captures d'écran désactivées sur les contenus protégés (Android FLAG_SECURE, iOS overlay)</li>
                <li>Filigrane numérique (e-mail + date) sur tout le contenu pédagogique</li>
                <li>URLs des médias signées (TTL 15 min) — jamais accessibles sans authentification</li>
              </ul>
            </Section>

            {/* Section 6 */}
            <Section title="6. Vos droits">
              <p className="text-gray-600 mb-4">Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>Accès</strong> : obtenir une copie de vos données personnelles</li>
                <li><strong>Rectification</strong> : corriger des données inexactes</li>
                <li><strong>Suppression</strong> : demander la suppression de votre compte et de vos données</li>
                <li><strong>Opposition</strong> : vous opposer au traitement de vos données à des fins d'intérêt légitime</li>
                <li><strong>Portabilité</strong> : recevoir vos données dans un format structuré</li>
              </ul>
              <p className="text-gray-600 mt-4">Pour exercer ces droits, contactez-nous à l'adresse ci-dessous.</p>
            </Section>

            {/* Section 7 */}
            <Section title="7. Cookies et stockage local">
              <p className="text-gray-600">
                L'application mobile utilise un stockage sécurisé (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">flutter_secure_storage</code>) pour les jetons d'authentification — jamais de stockage non chiffré. L'application web utilise des cookies <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">httpOnly</code> sécurisés pour les jetons.
              </p>
            </Section>

            {/* Section 8 */}
            <Section title="8. Mineurs">
              <p className="text-gray-600">
                TEKKIL est destiné aux candidats aux concours, généralement âgés de 18 ans et plus. Nous ne collectons pas sciemment de données concernant des mineurs de moins de 15 ans.
              </p>
            </Section>

            {/* Section 9 */}
            <Section title="9. Modifications de la présente politique">
              <p className="text-gray-600">
                Toute modification substantielle sera notifiée par e-mail et/ou notification dans l'application au moins 7 jours avant son entrée en vigueur. La date de dernière mise à jour est indiquée en tête de document.
              </p>
            </Section>

            {/* Section 10 */}
            <Section title="10. Contact">
              <p className="text-gray-600 mb-2">Pour toute question relative à vos données personnelles :</p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="font-semibold text-gray-900 mb-1">K-Edtech — TEKKIL</p>
                <p className="text-gray-600 text-sm">
                  E-mail :{' '}
                  <a href="mailto:ibrahimadev6@k-edtech.com" className="text-[#0B50DA] hover:underline">
                    ibrahimadev6@k-edtech.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2
        className="text-xl md:text-2xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100"
        style={{ fontFamily: 'var(--font-roboto-condensed)' }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-gray-600">
        {children}
      </div>
    </div>
  )
}
