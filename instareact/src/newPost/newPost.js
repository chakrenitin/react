import React from 'react'

export default function NewPost() {
    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4 border p-3 mx-auto mt-5">
                <h1>New Post</h1>
                <form action="newPost" method="post">
                    <div className="form group">
                        <label for="photoLink">Photo Link</label>
                        <input type="text" id="photoLink" name="photoLink" className="form-control" />
                    </div>
                    <div className="form group">
                        <label for="comment">Comment</label>
                        <input type="comment" id="comment" name="comment" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
                </form>
            </div>
        </div>
	
    )
}
