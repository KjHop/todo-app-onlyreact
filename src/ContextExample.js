import React from "react";

const randomData = {name : "Registration",
    promptForAge: 10
}

const TenantContext = React.createContext();

let Title= ()=>{
    return(
        <TenantContext.Consumer>
            {tenant=>(
                <h1>{tenant.name}</h1>
            )}
        </TenantContext.Consumer>
    );
}

class ContactForm extends React.Component{
    state={
        name: "",
        age:0
    };

    handleSubmit(e){
        console.log(this.state);
        e.preventDefault();
    }

    render(){
        const {name, age} = this.state;
        return(
            <TenantContext.Consumer>
                {
                    tenant =>(
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <p> Enter your details ...</p>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={(e) => this.setState({name: e.target.value})}/>
                            </div>
                            {tenant.promptForAge &&
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" className="form-control" id="age" value={age} onChange={(e)=>this.setState({age: e.target.value})}/>
                                </div>
                            }
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    )
                }
            </TenantContext.Consumer>
        );
    }
}

class App extends React.Component{
    state ={
        tenant:null
    }

    componentDidMount(){
        this.setState({tenant: randomData})
    }

    render(){
        const {tenant} = this.state;
        return(
            <TenantContext.Provider value={tenant}>
                {tenant &&
                    <div className="container">
                        <Title/>
                        <ContactForm />
                    </div>
                }
            </TenantContext.Provider>
        );
    }
}

export default App