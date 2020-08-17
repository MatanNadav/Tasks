import React from 'react'
import { TaskPreview } from '../TaskPreview/TaskPreview'
import './TaskList.css'
import { updateTask } from '../../services/TaskService'

interface TaskProps {
    tasks: Array<Task>,
    toggleTask: toggleTask,
    deleteTask: deleteTask,
    updateTask: updateTask
}

export const TaskList: React.FC<TaskProps> = ({tasks, toggleTask, deleteTask}) => {

    return (
        <div className="list-container">
            <h1>Propit Todo App</h1>

            <table className = "table-container">
               <thead>
                   <tr>
                        <th>title</th>
                        <th>created at</th>
                        <th>status</th>
                        <th>actions</th>
                   </tr>
               </thead>
               <tbody>
                    {
                        (tasks) ? 
                        tasks.map( (task, i) => <TaskPreview key={i} task={task}  toggleTask={toggleTask} deleteTask={deleteTask}></TaskPreview>) :
                        <h1>No tasks to display</h1>
                    }
               </tbody>
            </table>

        </div>
    )
}