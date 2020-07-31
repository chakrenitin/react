import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super();
        this.state = {
            userProfile : {},
            apiResponse : []
        };
    }

    callAPI() {
        fetch("http://localhost:9000/",{
            method : 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(res => this.setState({userProfile : res,apiResponse : res.post}));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render() {
        return (
            <div style={{marginTop:"5%"}}>
            <hr/>
            <div className="main" style={{backgroundColor: "ghostwhite"}}>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-3 col-md-6 col-lg-8 text-cente" style={{marginTop: "15px"}}>
                        
                            {
                                this.state.apiResponse.map( p =>
                            <div className="card mt-4" style={{width: "18rem", marginLeft: "20%", minWidth: "500px"}}>
                                            
                                <div className="row">
                                    <div style={{width: "10%",marginLeft: "5%"}} className="my-auto align-self-center">
                                        <img src={p.profile} className="rounded-circle" style={{maxWidth: "38px"}}/>
                                    </div>
                                    <div >
                                        <h7><b>{p.hand}</b></h7><br/>
                                        <h7>{p.name}</h7>
                                    </div> 
                                </div>
                                <hr/>
                                <img src={p.post} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">{p.comment}</p>
                                    <a href={`/post/${p.pid}`} className="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                                )
                            }
                           
                                    
                        </div>
                        <div className="col-sm-9 col-md-6 col-lg-4">
                            <div className="row" style={{marginTop: "15px"}}>
                                <a href={`/profile/${this.state.userProfile.uid}`}>
                                    <div style={{width: "10%",marginLeft: "5%"}} className="my-auto align-self-center">
                                        <img src={this.state.userProfile.profile} className="rounded-circle" style={{maxWidth: "38px"}}/>
                                    </div>
                                </a>
                                    <div style={{marginLeft: "5%;"}}>
                                        <a href={`/profile/${this.state.userProfile.uid}`} style={{textDecoration: "none",color: "inherit"}}><h7><b>{this.state.userProfile.hand}</b></h7></a><br/>
                                        <h7>{this.state.userProfile.name}</h7>
                                    </div> 
                            </div>
                            <div className="card" style={{width: "18rem",marginTop: "5%",maxHeight:"200px",overflowY: "scroll"}}>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 
            </div>
        </div>
        )
    }
}
