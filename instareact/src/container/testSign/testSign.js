import React, { Component } from 'react'

export default class TestSign extends Component {

    constructor(props){
        super(props);
        this.state ={
            handle : "",
            password : ""
        }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value });
        console.log(this.state.handle);
    }

    handleSubmit = event =>{

        event.preventDefault();
        const data = { handle:this.state.name, password:this.state.email }

        fetch('http://localhost:9000/signin', { 
            method: 'POST',
            credentials: 'include', 
            body: JSON.stringify({ handle:this.state.handle, password:this.state.password }),
            headers: {"Content-Type": "application/json"} 
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
     }
    render() {
        return (
            <div className="row" style={{marginTop:"10%"}}>
                <div className="col-md-4 col-md-offset-4 border p-3 mx-auto mt-5">
                    <h1>Signin</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form group">
                            <label for="email">User Handle</label>
                            <input type="text" id="handle" name="handle" className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control" onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
                        <a href="/signup" style={{marginLeft:"60%",marginTop:"3%;"}}>Sign up</a>
                    </form>
                </div>
            </div>
        )
    }
}
