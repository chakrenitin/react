import React,{useState, useEffect} from 'react'
import { render } from '@testing-library/react';

export default function Home() {
    const [state, setstate] = useState("Hello");

    useEffect(() => {
        const data = new FormData();
        fetch('/', {
            method: 'POST',
            body : data
        })
        .then((response) => {
        console.log(response);
        response.json().then((result)=>setstate(result))
        })
    });
  
    return (
        <div style={{marginTop:"5%"}}>
            <hr/>
            <div className="main" style={{backgroundColor: "ghostwhite"}}>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-3 col-md-6 col-lg-8 text-cente" style={{marginTop: "15px"}}>
                            <div className="card mt-4" style={{width: "18rem", marginLeft: "20%", minWidth: "500px"}}>
                                <div className="row">
                                    <div style={{width: "10%",marginLeft: "5%"}} className="my-auto align-self-center">
                                        <img src="{{this.profile}}" className="rounded-circle" style={{maxWidth: "38px"}}/>
                                    </div>
                                    <div >
                                        <h7><b>{state}</b></h7><br/>
                                        <h7>Nitin Chakre</h7>
                                    </div> 
                                </div>
                                <hr/>
                                <img src="{{this.post}}" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Nice Picture</p>
                                    <a href="/post/?pid={{this.pid}}" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 col-md-6 col-lg-4">
                            <div className="row" style={{marginTop: "15px"}}>
                                <a href="/profile/:id1={{id}}">
                                    <div style={{width: "10%",marginLeft: "5%"}} className="my-auto align-self-center">
                                        <img src="" className="rounded-circle" style={{maxWidth: "38px;"}}/>
                                    </div>
                                </a>
                                    <div style={{marginLeft: "5%;"}}>
                                        <a href="/profile/4" style={{textDecoration: "none",color: "inherit;"}}><h7><b>Nitin Chakre</b></h7></a><br/>
                                        <h7>14</h7>
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

