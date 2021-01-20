import Cookies from 'js-cookie'
import jwt_decode from "jwt-decode";
// import { query } from '../api/api'

export const getAccessToken = () => {
    const token = Cookies.get('access_token')
    // const result = await query(`query listExercises { getSessions(token: "${token}"){ token expiration }}`)
    if(!token) {
        console.log('bad token')
        return false
    }
    const decodedToken = jwt_decode(token)
    if(decodedToken.expiration < Date.now()){
        console.log(`decodedToken expiration: ${decodedToken.expiration} || currentTime: ${Date.now()}`)
        console.log('expired token')
        return false
    }
    console.log('good token')
    return true
}

export const logout = () => {
    document.cookie = 'access_token=""'
    return true
}
export const getRefreshToken = () => Cookies.get('refresh_token')