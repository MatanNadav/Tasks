import Axios from 'axios'
import { storageService } from './StorageService'

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "//localhost:8080/"

var axios = Axios.create({
    withCredentials: true
})


export async function fetchTasks(): Promise<any> {
    // const res = await axios.get(`${BASE_URL}task`);
    let token = getTokenFromStorage()
    console.log('token from storage:', token);
    
    const res = await axios({
        method: 'get',
        url:`${BASE_URL}task`,
        headers: {
            "Authorization": token
        }
    })

    if( res.data ) return res.data
    else {
        return "Couldnt get tasks"
    }
}

export async function deleteTaskById(id: number | null): Promise<any> {
    if (!id) return 
    let q = `?q=${id}`
    const res = await axios.delete(`${BASE_URL}task`+ q)
    
    return res
}

export async function createTask(newTask: Task): Promise<any> {
    const res = await axios({
        method: 'post',
        url:`${BASE_URL}task`,
        data: {task:newTask}
    })
    return res
}

export async function updateTask(updatedTask: Task): Promise<any> {
    const res = await axios({
        method: 'put',
        url:`${BASE_URL}task`,
        data: {task: updatedTask}
    })
    return res
}

function getTokenFromStorage() {
    let token = storageService.load('token')
    return token
}