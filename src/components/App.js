import React, { Component } from 'react';
//import logo from '../logo.svg';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends Component {

  constructor(props) {
    super(props);

    let tasks = JSON.parse(localStorage.getItem('TASKS'));
      if(!tasks) {
          tasks = [
          {task: 'Go to Dentist', isComplete: false},
          {task: 'Do Gardening', isComplete: true},
          {task: 'Renew Library Account', isComplete: false},
          ];
      }

      this.state = {
        newTask: "",
        tasks: tasks
      }
    
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  toggleTaskStatus(index) {
    let tasks = JSON.parse(JSON.stringify(this.state.tasks))
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({
        tasks:tasks
      });/**/
    console.log("toggleTaskStatus");
  } 
  
  addTask(task) {
        
    let newTask = { task, isComplete: false,};
    let tasks = JSON.parse(JSON.stringify(this.state.tasks))
    if(task !== '') {
      tasks.push(newTask);
      this.setState({
        tasks:tasks
      });
    } 
    console.log("addTask");
  } 
  
  deleteTask(taskIndex) {
    let tasks = JSON.parse(JSON.stringify(this.state.tasks))
    tasks.splice(taskIndex, 1);
    this.setState({
      tasks:tasks
    });
    console.log("deleteTask");
  }

  render() {
    return (
      <div className="App">
        <TaskForm onSubmit={this.addTask} />
        <TaskList tasks= {this.state.tasks} deleteTask={this.deleteTask} toggleTaskStatus={this.toggleTaskStatus}/>

      </div>
    );
  }
}

export default App;
