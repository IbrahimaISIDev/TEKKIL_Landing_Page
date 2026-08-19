// URLs des autres domaines TEKKIL — centralisées ici pour éviter de les
// dupliquer en dur dans chaque composant. Valeurs par défaut = production ;
// surchargeables via .env.local (voir .env.example) pour pointer vers un
// environnement de staging/preview sans toucher au code.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.tekkilapp.com'
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.tekkilapp.com/api/v1'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tekkilapp.com'

export const LOGIN_URL = `${APP_URL}/login`
export const REGISTER_URL = `${APP_URL}/register`
export const WAITLIST_API_URL = `${API_URL}/waitlist`
