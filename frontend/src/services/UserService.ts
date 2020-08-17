import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "//localhost:8080/"

var axios = Axios.create({
    withCredentials: true
})

export async function login(user:Object): Promise<any> {
    const res = await axios({
        method: 'post',
        url: `${BASE_URL}user/login`,
        data:{user: user}
    })
    return res
}



// export async function createTask(newTask: Task): Promise<any> {
//     const res = axios({
//         method: 'post',
//         url:`${BASE_URL}task`,
//         data: {task:newTask}
//     })
//     return res
// }