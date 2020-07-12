import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "//localhost:8080/"

var axios = Axios.create({
    withCredentials: true
})


export async function fetchTasks(): Promise<any> {
    const res = await axios.get(`${BASE_URL}task`);

    if( res.data ) return res.data
    else {
        return "Couldnt get tasks"
    }
}

export async function fetchTaskById(id: string): Promise<any> {
    let q = `?q=${id}`
    const res = await axios.get(`${BASE_URL}task`+ q )
    return res.data
}

export async function deleteTaskById(id: number): Promise<any> {
    let q = `q=${id}`
    const res = await axios.delete(`${BASE_URL}task` + q)
    return res.data
}

export async function createTask(newTask: object): Promise<any> {
    console.log(BASE_URL);
    
    const res = axios({
        method: 'post',
        url:`${BASE_URL}task`,
        // url:`/localhost:8080/task`,
        data: {task:newTask}
    })
    return res
}

export async function updateTask(updatedTask: object): Promise<any> {
    
    const res = axios({
        method: 'put',
        url:`${BASE_URL}task`,
        data: {task: updatedTask}
    })
    return res
}