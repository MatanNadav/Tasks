import React, { Component }from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { TaskList } from "./components/TaskList/TaskList"
import { UserLogin } from "./components/UserLogin/UserLogin"
import  TaskEdit  from "./components/TaskEdit/TaskEdit"
import { AddTask } from "./components/AddTask/AddTask"
import { fetchTasks, deleteTaskById, createTask, updateTask } from "./services/TaskService"
import { login } from "./services/UserService"

export default class App extends Component {
    state = {
      tasks: []
    }
  
    async componentWillMount() { // getting all tasks
      let res = await fetchTasks()
      res.forEach((task: Task) => {
        task.created_at = new Date(task.created_at).toDateString()
        if (task.is_finished) task.is_finished = !!task.is_finished // converting binary value to boolean
      })
      this.setState({ tasks: res })
    }
  
    toggleTask: toggleTask = async (selectedTask) => { // Changing task status
      selectedTask.is_finished = !selectedTask.is_finished
      this.updateTask(selectedTask)
    }
  
    deleteTask: deleteTask = async (selectedTask) => { // Deleting a task
      let res = await deleteTaskById(selectedTask.id)
      if (res.status !== 200) {
        alert("Error: task wasnt deleted from DB")
        return
      }
      this.setState({ tasks: this.state.tasks.filter( (task:Task) => task.id !== selectedTask.id)})
    }

    updateTask: updateTask = async (selectedTask) => { // Updating a task
    
      this.setState({ tasks: this.state.tasks.map((task: Task) => {
        if (task.id === selectedTask.id) return selectedTask
        else return task
      })})

      let res = await updateTask(selectedTask) // updating DB after DOM for user experience | TODO: Loader
      if (res.status !== 200) alert("Error: task wasnt updated in DB")
    }

    getTask: getTask = (id) => {
      let task = this.state.tasks.find((tasks:Task) => {return Number(tasks.id) === Number(id)})
      if (task) return task
    }

  
    addTask: addTask = async (newTask) => { // Adding a task
      let res = await createTask(newTask)
      if (res.status !== 200) {
        alert("Error: task didint add to DB")
        return
      }
      newTask.created_at = new Date(newTask.created_at).toDateString() // converting timestap into date string
      let tasksToRender:Array<Task> = this.state.tasks
      tasksToRender.push(newTask)
      this.setState({tasks: tasksToRender})
    }

    loginUser: loginUser = async (user) => {
      let res = await login(user)
      
    }

    validateUser: validateUser = (newUser) => {
      console.log(newUser)
    }

    createUser: createUser = async (user) => {
      console.log(user)
    }

  render() {
    const tasks = this.state.tasks
    return (
      <div className="tasks-app">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={()=> <UserLogin validateUser={this.validateUser} loginUser={this.loginUser}  ></UserLogin>}></Route>
              <Route exact path="/tasks" component={() => <TaskList tasks={tasks} updateTask={this.updateTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask}/>}></Route>
              <Route path="/tasks/:id" render={({match}) => (
                <TaskEdit updateTask={this.updateTask} getTask={this.getTask} id={match.params.id}></TaskEdit>
                )}></Route>
            </Switch>
            <Route exact path="/"><AddTask addTask={this.addTask}></AddTask></Route>
          </HashRouter>
          
      </div>
    );
  }
}

