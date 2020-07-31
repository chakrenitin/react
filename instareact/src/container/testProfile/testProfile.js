import React, { Component } from 'react'

export default class TestProfile extends Component {
    constructor(props){
        super(props);
        this.uid = props.match.params.id;
        this.state = {
            userProfile : {},
            posts : []
        }
    }

    callAPI() {
        fetch(`http://localhost:9000/profile/?id1=${this.uid}`,{
            credentials: 'include',
        })
            .then(res => res.json())
            .then(res => this.setState({userProfile : res,posts : res.post}));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render() {
        return (
            <div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-md-6 col-lg-5 text-center">
                        <img src ={this.state.userProfile.profile} className="rounded-circle z-depth-20" alt="100x100 Hello" src="..."
                    data-holder-rendered="true" style={{maxWidth: "150px",margin: "6% 20%" }}/>
                    </div>
                    <div className="col-sm-3 col-md-6 col-lg-4 text-cente">
                        <div className="row">
                                <div className="col mt-5"><h3>{this.state.userProfile.handle}</h3></div>
                                <div className="col mt-5"><a href="/unfollow/?id1={{id}}" className="btn btn-danger">Unfollow</a></div>
                                <div className="col mt-5"><a href="/follow/?id1={{id}}" className="btn btn-primary">Follow</a></div>
                        </div>
                        <div className="row">
                            <div className="col mt-2 text-center" style={{marginLeft: "-8%;"}}><h7>1 Post</h7></div>
                            <div className="col mt-2"><a href="/followers/?id1={{id}}"  style={{textDecoration: "none",color: "inherit"}}><h7>{this.state.userProfile.followers} followers</h7></a></div>
                            <div className="col mt-2"><a href="/following/?id1={{id}}"  style={{textDecoration: "none",color: "inherit"}}><h7>{this.state.userProfile.following} following</h7></a></div>
                        </div>
                        <div className="row">
                            <div className="col mt-3" ><b><h7>{this.state.userProfile.name}</h7></b></div>
                        </div>
                    </div>
                </div>
                <hr/>
                    <div className="row mt-4">
                        {
                            this.state.posts.map( pos =>
                                    <div className="col-sm-6 col-md-4 text-center">
                                        <div className="card" style={{width: "18rem"}}>
                                        <img className="card-img-top" src={pos.post} alt="Card image cap"/>
                                        <div className="card-body">
                                            <p className="card-text">{pos.comment}</p>
                                        </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
            </div>
        </div>
        )
    }
}
