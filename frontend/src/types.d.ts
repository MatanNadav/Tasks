type Task = {
    id: number,
    user_id?: number,
    title: string,
    created_at: number | string,
    is_finished: boolean | undefined,
    name?: string | null
}

type toggleTask = (selectedTask: Task) => void
type deleteTask = (selectedTask: Task) => void
type addTask = (selectedTask: string) => void