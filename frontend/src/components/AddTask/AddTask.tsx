import React, {useState, ChangeEvent, FormEvent} from 'react'
import './AddTask.css'

interface AddTaskProps {
    addTask: addTask,
}

export const AddTask: React.FC<AddTaskProps> = ({addTask}) => {
    const [newTask, setNewTask] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (newTask.trim() !== '') {
            let taskToAdd = formatNewTask()
            addTask(taskToAdd)
            setNewTask('')
        }
    }

    
    const formatNewTask = () => {
        return {
          id: null,
          user_id: null,
          title: newTask,
          created_at: Date.now(),
          is_finished: false,
          name: ''
        }
      }

    return (
        <form className='add-task-container'>
            <input className="add-input" type="text" value={newTask} onChange={handleChange}/>
            <button className="add-btn" type="submit" onClick={handleSubmit}>Submit new task</button>
        </form>
    )
}