type Task = {
    id: number,
    user_id?: number,
    title: string,
    created_at: number | string,
    is_finished: boolean | undefined,
    name?: string | null
}

type User = {
    id: null,
    name: string,
    password: string,
    is_admin: boolean
}

type toggleTask = (selectedTask: Task) => void
type deleteTask = (selectedTask: Task) => void
type addTask = (newTask: Object) => void
type updateTask = (selectedTask: Task) => void
type getTask = (id: number) => any
type validateUser = (user: User) => void
type createUser = (user: User) => void