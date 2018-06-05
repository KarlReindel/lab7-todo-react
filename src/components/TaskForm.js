import React, { Component } from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: ""
        };
        this.inputUpdated = this.inputUpdated.bind(this)
        this.submitTask = this.submitTask.bind(this)
    }

    inputUpdated(e) {
        const newTask = e.target.value;
        this.setState( {newTask: newTask} );
    } 

    submitTask (e) {
        e.preventDefault(); // don’t submit the form
        const { newTask } = this.state; // get the zipcode from the state
        const { onSubmit } = this.props; // the method from the App
        onSubmit(newTask); // the form calls a method on the App and passes the zipcode
        this.setState( {newTask : ""} ); // clear the zipcode in the class (and on the web page)
    }
    render() {
        return (
            <div className="row input-area">
                <form onSubmit={this.submitTask}>
                    <div className="col-md-1">
                        <label htmlFor="task">Task:</label>
                    </div>
                    <div className="form-group col-md-10">
                        <input className="form-control"
                            type="input" name="task" 
                            value={this.state.newTask}
                            onInput={this.inputUpdated}
                        />
                    </div>
                    <div className="form-group col-md-1">
                        <button type="submit" className="btn btn-success"> Add Task </button>
                    </div>
                    <div className="col-md-1"></div>
                </form>
            </div>
        );
    }
}

export default TaskForm;