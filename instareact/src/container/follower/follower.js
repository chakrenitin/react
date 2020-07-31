import React from 'react'

export default function Follow() {
    return (
        <div className="card mt-5 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: "50%", marginLeft: "25%",marginTop : "100px"}}>
            <h5>Followers</h5>
                <hr/>
                <div className="row text-center card-body" style={{marginTop: "1px", marginLeft: "25%"}}>
                    <a href="/profile/?id1={{this.userId}}">
                        <div style={{width: "10%"}} className="my-auto align-self-center">
                            <img src="" className="rounded-circle mt-1" style={{maxWidth: "38px"}}/>
                        </div>
                    </a>
                        <div style={{marginLeft: "5%"}}>
                            <a href="/profile/?id1={{this.userId}}" style={{textDecoration: "none", color: "inherit"}}><h7><b>Nitin chakre</b></h7></a><br/>
                            <h7>Nitin Chakre</h7>
                        </div> 
                </div>
        </div>
    )
}
