import Cookies from 'js-cookie'
import { query } from '../api/api'

export const getAccessToken = async () => {
    const token = Cookies.get('access_token')
    const result = await query(`query listExercises { getSessions(token: "${token}"){ token expiration }}`)
    if(!result) {
        console.log('bad token')
        return false
    }
    console.log('good token')
    return true
}
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !getAccessToken()

// export const authenticate = async () => {
//     if (getRefreshToken()) {
//       try {
//         const tokens = await refreshTokens() // call an API, returns tokens
  
//         const expires = (tokens.expires_in || 60 * 60) * 1000
//         const inOneHour = new Date(new Date().getTime() + expires)
  
//         // you will have the exact same setters in your Login page/app too
//         Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
//         Cookies.set('refresh_token', tokens.refresh_token)
  
//         return true
//       } catch (error) {
//         redirectToLogin()
//         return false
//       }
//     }
  
//     redirectToLogin()
//     return false
//   }