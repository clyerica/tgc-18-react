import React from "react";

export default class Tasklist extends React.Component {
    state = {
        tasks: [
            {
                _id: 1,
                description: 'walk the dog',
                done: false
            },
            {
                _id: 2,
                description: 'do laundry',
                done: false
            },
            {
                _id: 3,
                description: 'make the bed',
                done: false
            },
            {
                _id: 4,
                description: 'buy milk',
                done: false
            }
        ],
        newTaskName: '',
        taskBeingEdited: null,
        modifiedTaskName: ''
    }

    updateFormfield = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTask = () => {
        let newTask = {
            _id: Math.floor(Math.random() * 10000 + 1),
            description: this.state.newTaskName,
            done: false
        }
        this.setState({
            tasks: [...this.state.tasks, newTask],
            newTaskName: ''
        })
    }

    updateTaskDone = (task) => {
        // 1. Edit object
        //when an object has cloned keys, the final key-value pair will override the previous value
        let clonedTask = { ...task, done: !task.done }
        // 2. Replace object to be modified
        // a. find object 
        // cannot use indexOf because only works for primitive values
        let index = this.state.tasks.findIndex(function (t) {
            if (t._id === clonedTask._id) {
                return true
            } else {
                return false
            }
        })
        //b. update Array
        // let clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask;
        // // 3. set array in state
        // this.setState({
        //     tasks: clonedTaskArray
        // })

        // functional update to array
        this.setState({
            tasks: [...this.state.tasks.slice(0, index),
                clonedTask,
            ...this.state.tasks.slice(index + 1)
            ]
        })
    }

    beginEditTask = (task) => {
        this.setState({
            taskBeingEdited: task,
            modifiedTaskName: task.description
        })
    }

    displayTask = (task) => {
        return (
            <li className="mt-3">
                {task.description}
                <input type="checkbox"
                    className="form-check-input ms-3"
                    checked={task.done}
                    onChange={() => {
                        this.updateTaskDone(task)
                    }} />
                <button className="ms-3 btn btn-primary btn-sm"
                    onClick={() => {
                        this.beginEditTask(task);
                    }}
                >Edit</button>
                <button className="ms-3 btn btn-danger btn-sm"
                    onClick={() => {
                        this.deleteTask(task);
                    }}
                >Delete</button>
            </li>
        )
    }

    displayEditTask=(task)=> {
        return (<li className="mt-3">
           <input type="text" value={this.state.modifiedTaskName} onChange={this.updateFormfield} name="modifiedTaskName"/>
           <button className="btn btn-primary btn-sm ms-3" onClick={this.updateTask}>Update</button>
        </li>)
    }

    updateTask=()=> {
        const modifiedTask={
            ...this.state.taskBeingEdited,
            description:this.state.modifiedTaskName
        }
        // find task index
        let index=this.state.tasks.findIndex(t=>t._id===modifiedTask._id)

        //update middle of array
        // 1. clone array

        // 2. modify array

        // 3. replace original array with modified array
        this.setState({
            tasks:[...this.state.tasks.slice(0,index),
            modifiedTask,
            ...this.state.tasks.slice(index+1)],
            taskBeingEdited:null
        })
    }

    deleteTask=(task)=>{
        let index=this.state.tasks.findIndex(t=>t._id===task._id)
        this.setState({
            tasks:[
                ...this.state.tasks.slice(0,index),
                ...this.state.tasks.slice(index+1)
            ]
        })
    }

    render() {
        return (<React.Fragment>
            <h1>Todo List</h1>
            {
                this.state.tasks.map(t => (<React.Fragment key={t._id}>

                    {this.state.taskBeingEdited === null || this.state.taskBeingEdited._id !== t._id ?
                        this.displayTask(t)
                        :
                        this.displayEditTask(t)
                    }
                </React.Fragment>))
            }

                <h2 className="mt-3">Add New Task</h2>
                <label>Task name:</label>
                <input type='text' name='newTaskName' className='form-control' value={this.state.newTaskName} onChange={this.updateFormfield} />
                <button className="btn btn-light btn-sm mt-2" onClick={this.addTask}>Add</button>
            </React.Fragment>
        )
    }
}