import React from 'react'
import './TaskPreview.css'
import { Link } from 'react-router-dom';

interface PreviewProps {
   task: Task,
   toggleTask: toggleTask,
   deleteTask: deleteTask,
   updateTask: updateTask
}

export const TaskPreview: React.FC<PreviewProps> = ({task, toggleTask, deleteTask, updateTask}) => { 
    return (
        task && <tr>
            <td className={task.is_finished ? "complete" : undefined}>{task.title}</td>
            <td>{task.created_at}</td>
            <td> 
                <label>
                <input type="checkbox" checked={task.is_finished} onChange={() => toggleTask(task)}/> 
                </label>
            </td>
            <td>
                <button className="action-edit btn"><Link className="edit-link" to={`/${task.id}`}>Edit</Link></button>
                <button onClick={() => deleteTask(task)} className="action-delete btn">Delete</button>
            </td>
        </tr>
    )
}

