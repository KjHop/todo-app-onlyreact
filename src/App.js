import React from 'react';

let allTasks = []

class ListOfTasks extends React.Component{
    render(){
        return(
            <div>
                <AddTask/>
            </div>
        );
    }
}

let ListTasks = props=>{
    const listTasks = props.tasks.map((task, index)=>
        <li key={index}>
            {task}
        </li>
    );
    return(
        <ul>{listTasks}</ul>
    );
}

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            task:event.target.value
        });
    }

    handleClick(){
        const task = this.state.task
        allTasks.push(task);
        this.setState({
            task:task
        });
    }

    render(){
        return(
            <div>
                <form>
                    <label>
                        Enter task: 
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="button" value="Click" onClick={this.handleClick}/>
                </form>
                <ListTasks tasks={allTasks}/>
            </div>
            
        );
    }
}

export default ListOfTasks;
