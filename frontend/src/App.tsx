import React, { Component }from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { TaskList } from "./components/TaskList/TaskList"
import  TaskEdit  from "./components/TaskEdit/TaskEdit"
import { AddTask } from "./components/AddTask/AddTask"
import { fetchTasks, deleteTaskById, createTask, updateTask } from "./services/TaskService"

export default class App extends Component {
    state = {
      tasks: []
    }
  
    async componentWillMount() { // getting all tasks
      let res = await fetchTasks()
      res.forEach((task: Task) => {
        task.created_at = new Date(task.created_at).toDateString()
        if (task.is_finished) task.is_finished = true
        else task.is_finished = false
      })
      this.setState({ tasks: res})
    }
  
    toggleTask: toggleTask = async (selectedTask) => { // Changing task status
      selectedTask.is_finished = !selectedTask.is_finished

      this.updateTask(selectedTask)
    }
  
    deleteTask: deleteTask = async (selectedTask) => { // Deleting a task
      let tasksToRender:Array<Task> = []
      this.state.tasks.forEach( ( task:Task) => {
        if (task.id !== selectedTask.id) {
          tasksToRender.push(task)
        }
      })
      this.setState({ tasks: tasksToRender })
      let res = await deleteTaskById(selectedTask.id)
      if (res.status !== 200) alert("Error: task wasnt deleted from DB")
    }

    updateTask: updateTask = async (selectedTask) => { // Updating a task
        let tasksToRender:Array<Task> = this.state.tasks
        let idx = this.state.tasks.findIndex((task:Task) => {
          return (task.id === selectedTask.id)
        })
        if (idx >= 0) {
          tasksToRender[idx] = selectedTask
          this.setState({tasks: tasksToRender})
        }
      
      let res = await updateTask(selectedTask)
      if (res.status !== 200) alert("Error: task didint update to DB")

    }

    getTask: getTask = (id) => {
      let idx = this.state.tasks.findIndex( (task: Task) => {
        return (Number(task.id) === Number(id))
      })
      
      if (idx >= 0) return this.state.tasks[idx]
    }
  
    addTask: addTask = async (newTask: Object) => { // Adding a task
      let tasksToRender:Array<any> = this.state.tasks
      tasksToRender.push(newTask)
      let length = tasksToRender.length - 1
      tasksToRender[length].created_at = new Date(tasksToRender[length].created_at).toDateString()
      this.setState({tasks: tasksToRender})
      let res = await createTask(newTask)
      if (res.status !== 200) alert("Error: task didint add to DB")
    }
    


    

  render() {
    const tasks = this.state.tasks
    return (
      <div className="tasks-app">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={() => <TaskList tasks={tasks} updateTask={this.updateTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask}/>}></Route>
              <Route path="/:id" render={({match}) => (
                <TaskEdit updateTask={this.updateTask} getTask={this.getTask} id={match.params.id}></TaskEdit>
                )}></Route>
            </Switch>
            <Route exact path="/"><AddTask addTask={this.addTask}></AddTask></Route>
          </HashRouter>
          
      </div>
    );
  }
}

