import Axios from 'axios'
import { storageService } from './StorageService'

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "//localhost:8080/"

var axios = Axios.create({
    withCredentials: true
})

export async function login(user:User): Promise<any> {
    console.log('in service login', user)
    const res = await axios({
        method: 'post',
        url: `${BASE_URL}user/login`,
        data:{user: user},
    })
    if (res.data.token) {
        storageService.store('token', res.data.token)
        // console.log("the user that server sent is:", res.data)
        return {id: 1, name: 'shim', password: null, is_admin: false}
    }
}