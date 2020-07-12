import React from 'react'
import './TaskPreview.css'
import { Link } from 'react-router-dom';
import { deleteTaskById, createTask} from "../../services/TaskService"

interface PreviewProps {
   task: Task,
   toggleTask: toggleTask,
   deleteTask: deleteTask,
}

export const TaskPreview: React.FC<PreviewProps> = ({task, toggleTask, deleteTask}) => {
  
    return (
        task && <tr>
            <td>{task.title}</td>
            <td>{task.created_at}</td>
            <td> 
                <label className={task.is_finished ? "complete" : undefined}>
                <input type="checkbox" checked={task.is_finished} onChange={() => toggleTask(task)}/> 
                </label>
            </td>
            <td>
                <button className="action-edit btn"><Link to={`task/${task.id}`}>Edit</Link></button>
                <button onClick={() => deleteTask(task)} className="action-delete btn">Delete</button>
                <button  className="action-delete btn">Update</button>
                {/* <button onClick={addTask} className="action-delete btn"></button> */}
            </td>
        </tr>
       
    )
}

