import React, { Component }from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { TaskList } from "./components/TaskList/TaskList"
import { fetchTasks, deleteTaskById, createTask, updateTask } from "./services/TaskService"

export default class App extends Component {
  state = {
    tasks: []
  }
  async componentWillMount() {
    let res = await fetchTasks()
    res.forEach((task: Task) => {
      task.created_at = new Date(task.created_at).toDateString()
      if (task.is_finished) task.is_finished = true
      else task.is_finished = false
    })
    this.setState({ tasks: res})
  }

  toggleTask: toggleTask = (selectedTask) => {
    
    const newTasks = this.state.tasks.map( (task:Task) => {
      if (task.id === selectedTask.id) {
        return {
          ...task,
          is_finished: !task.is_finished
        }
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  deleteTask: deleteTask = async (selectedTask) => {
    let res = await deleteTaskById(selectedTask.id)
    
    if (res.status === "OK") {
      const renderTasks = this.state.tasks.map( ( task:Task, idx) => {
        
        if (task.id === selectedTask.id) {
          this.state.tasks.splice(idx, 1)
        }
        return task
    })
    console.log(this.state.tasks);
    
    
    this.setState({ tasks: renderTasks })
  }
}

async addTask(newTask: string) {
    if(newTask.trim() !== '') {
      let taskToAdd = this.formatNewTask(newTask)
      let res = await createTask(taskToAdd)
      if (res.status === "OK") {
        this.componentWillMount()
      }
  }
}

formatNewTask(taskText:string) {
  return {
    id: null,
    user_id: null,
    title: taskText,
    created_at: Date.now(),
    is_finished: false,
    name: ''
  }
}


  render() {
    const tasks = this.state.tasks
    return (
      <div className="tasks-app">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={() => <TaskList tasks={tasks} addTask={this.addTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask}/>}></Route>
            </Switch>
          </HashRouter>
          
      </div>
    );
  }
}

