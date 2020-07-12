import React, {useState, ChangeEvent, FormEvent} from 'react'

interface AddTaskProps {
    addTask: addTask
}

export const AddTask: React.FC<AddTaskProps> = ({addTask}) => {
    const [newTask, setNewTask] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTask(newTask)
        setNewTask('')
    }

    return (
        <form className='add-task-form'>
            <input type="text" value={newTask} onChange={handleChange}/>
            <button type="submit">Submit new task</button>
        </form>
    )
}