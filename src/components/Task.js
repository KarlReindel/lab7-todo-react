import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    }
    toggleTaskStatus(){
        this.props.toggleTaskStatus(this.props.index);
    }

    onDeleteClick(event) {
        event.preventDefault();
        this.props.deleteTask(this.props.index);
    }

    render() {
        const task = this.props.task;
        const onChange = this.toggleTaskStatus;
        const onDeleteClick = this.onDeleteClick.bind(this);
        const taskClassName = (!task.isComplete) ?
            'col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text' : 
            'col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text complete';
        return (
            <div className="row">
                <li className="list-group-item checkbox">
                    <div className="row">
                        <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                            <label>
                                <input id={this.props.index} type="checkbox" value="" 
                                className="chechbox" checked={task.isComplete}
                                onChange={onChange} />
                            </label>
                        </div>
                        <div className={taskClassName}>
                            {task.task}
                        </div>
                        <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                            <a className="" href="/" onClick={onDeleteClick}>
                                <i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Task;