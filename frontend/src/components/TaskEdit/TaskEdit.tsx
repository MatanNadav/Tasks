import React, { Component, ChangeEvent } from 'react'
import './TaskEdit.css'
import { Link } from 'react-router-dom';

interface EditProps {
    id: number,
    getTask: getTask,
    updateTask: updateTask,
}

export default class TaskEdit extends Component<EditProps> {
    state: any = {
        task: null,
        newTitle: ''
    }
    componentWillMount() {
       let res = this.props.getTask(this.props.id)
       if (res.title) {
           this.setState({task: res})
           this.setState({newTitle: res.title})
       }
       else {
           this.setState({task: "no task  to edit"})
        }
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({newTitle: e.target.value})
    }
    updateTaskTitle = async () => {
        let newTask = this.state.task
        newTask.title = this.state.newTitle
        await this.props.updateTask(newTask)
    }
    render() {
        const {newTitle} = this.state
        return (
            newTitle && <section className="task-edit-container">
                <h1>Propit Todo App</h1>

                <h2>Edit the title of your task and Update</h2>
                <input type="text" value={newTitle} onChange={this.handleChange} />
                <Link to={"/"}><button onClick={this.updateTaskTitle} className="action-delete btn">Update</button></Link>
                
            </section>
        )
    }
}