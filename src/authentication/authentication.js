import Cookies from 'js-cookie'
// import { query } from '../api/api'

export const getAccessToken = async () => {
    const token = Cookies.get('access_token')
    // const result = await query(`query listExercises { getSessions(token: "${token}"){ token expiration }}`)
    if(!token) {
        console.log('bad token')
        return false
    }
    console.log('good token')
    return true
}
export const getRefreshToken = () => Cookies.get('refresh_token')