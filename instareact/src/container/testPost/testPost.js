import React, { Component } from 'react'

export default class TestPost extends Component {

    constructor(props){
        super(props);
        this.pid = props.match.params.pid;
        this.state = {
            postDetail : {},
            comm : []
        }
    }

    callAPI() {
        fetch(`http://localhost:9000/post/?pid=${this.pid}`,{
            credentials: 'include',
        })
            .then(res => res.json())
            .then(res => this.setState({postDetail : res,comm : res.arr}));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="card mt-5 shadow p-1 mb-2 bg-white rounded" style={{maxWidth: "70%",marginLeft: "14%",minHeight: "500px"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6" style={{height: "100%"}}>
                        <div className="card" style={{width: "23rem"}}>
                            <img className="card-img-top" src={this.state.postDetail.post} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><b>{this.state.postDetail.userId}</b>{this.state.postDetail.comment}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="card" style={{width: "23rem",marginTop: "1px",minHeight: "400px",maxHeight: "400px",overflowY: "scroll"}}>
                            <div className="card-body">
                                {
                                    this.state.comm.map( com =>
                                        <div>
                                        <div className="ml-3"> 
                                            <div className="row">
                                                <h7><b>{com.userId}</b> {com.comm}</h7>
                                            </div>
                                            <div className="row text-center">
                                                <h7 className="ml-6" style={{fontSize: "13px"}}><b><a href={`showCom/?cid=${com.comId}`}>Show replies</a></b></h7>
                                            </div>
                                        </div>
                                        <hr/>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <form action={`/postCom/?pid=${this.state.postDetail.postId}`} method="POST">
                                <div className="row mt-3">
                                    <input className="form-control ml-3" type="text" placeholder="Comment" style={{width: "300px"}} id="comm" name="comm"/>
                                    <button type="submit" className="btn btn-primary ml-1">POST</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        )
    }
}
