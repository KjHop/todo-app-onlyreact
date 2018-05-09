import React from "react"

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClicksPerClickAdd = this.handleClicksPerClickAdd.bind(this);
    }
    state={
        clicks: 0,
        clicksPerSec: 0,
        clicksPerClick: 1
    }

    handleClick(){
        this.setState(prevState=>({
            clicks: prevState.clicks + prevState.clicksPerClick
        }))
    }
    handleClicksPerClickAdd(){
        this.setState(prevState=>({
            clicksPerClick: prevState.clicksPerClick + 1
        }))
    }

    render(){
        return(
            <div>
                <h1>You clicked {this.state.clicks} times!</h1>
                <button onClick={this.handleClick}>Click me!</button><br/>
                <button onClick={this.handleClicksPerClickAdd}>MORE CLICKS!</button>
            </div> 
        );
    }
}
export default App