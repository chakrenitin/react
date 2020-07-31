import React from 'react'

export default function Sign(props) {
    if(props.type == "1"){
        return (
            <div className="row" style={{marginTop:"10%"}}>
                <div className="col-md-4 col-md-offset-4 border p-3 mx-auto mt-5">
                    <h1>Signin</h1>
                    <form action="signin" method="post">
                        <div className="form group">
                            <label for="email">User Handle</label>
                            <input type="text" id="handle" name="handle" className="form-control"/>
                        </div>
                        <div className="form group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
                        <a href="/signup" style={{marginLeft:"60%",marginTop:"3%;"}}>Sign up</a>
                    </form>
                </div>
            </div>
        )
    }
    else{

        return(
            <div class="row" style={{marginTop:"10%"}}>
                <div class="col-md-4 col-md-offset-4 border p-3 mx-auto mt-5">
                    <h1>Signup</h1>
                    <form action="signup" method="post">
                        <div class="form group">
                            <label for="email">User Handle</label>
                            <input type="text" id="handle" name="handle" class="form-control"/>
                        </div>
                        <div class="form group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" class="form-control"/>
                        </div>
                        <div class="form group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
                    </form>
                </div>
            </div>
        )

    }
}
