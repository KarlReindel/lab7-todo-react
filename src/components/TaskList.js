import React, { Component } from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {
        localStorage.setItem('TASKS', JSON.stringify(this.props.tasks));
        return (
            <div className="row">
                { this.props.tasks.map((task, index) => 
                    <Task 
                    task={task} 
                    index={index} 
                    deleteTask={this.props.deleteTask}
                    toggleTaskStatus={this.props.toggleTaskStatus}/>
                )};
            </div>
        );
    }
}

export default TaskList;
/*
    this.tasks.reduce((html, task, index) => html += this.generateTaskHtml(task, index), '');
    document.getElementById("taskList").innerHTML = tasksHtml;

{ days.map((day, index) => <WeatherListItem key={day.dt} day={day} index={index} onDayClick={this.props.onDayClick}/>)};
*/