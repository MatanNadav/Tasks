import React from 'react'
import { TaskPreview } from '../TaskPreview/TaskPreview'
import { AddTask } from '../AddTask/AddTask'
import './TaskList.css'

interface TaskProps {
    tasks: Array<Task>,
    toggleTask: toggleTask,
    deleteTask: deleteTask,
    addTask: addTask
}

export const TaskList: React.FC<TaskProps> = ({tasks, toggleTask, deleteTask, addTask}) => {

    return (
        <div>
            <table className = "tasks-table">
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
                        tasks.map(task => <TaskPreview key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask}></TaskPreview>) :
                        <h1>No tasks to display</h1>
                    }
               </tbody>
            </table>

        <AddTask addTask={addTask}></AddTask>
        </div>
    )
}