import React from 'react'

export default function Post() {
    return (
        <div className="card mt-5 shadow p-1 mb-2 bg-white rounded" style={{maxWidth: "70%",marginLeft: "14%",minHeight: "500px"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6" style={{height: "100%"}}>
                        <div className="card" style={{width: "23rem"}}>
                            <img className="card-img-top" src="{{pos.post}}" alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text"><b>13</b>Some Comment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="card" style={{width: "23rem",marginTop: "1px",minHeight: "400px",maxHeight: "400px",overflowY: "scroll"}}>
                            <div className="card-body">
                                    <div className="ml-3"> 
                                        <div className="row">
                                            <h7><b>14</b> Some Comment</h7>
                                        </div>
                                        <div className="row text-center">
                                            <h7 className="ml-6" style={{fontSize: "13px"}}><b><a href="/showCom/?cid={{this.comId}}">Show replies</a></b></h7>
                                        </div>
                                    </div>
                                    <hr/>
                            </div>
                        </div>
                        <div>
                            <form action="/postCom/?pid={{pos.postId}}" method="POST">
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
