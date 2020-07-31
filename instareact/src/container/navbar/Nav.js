import React from 'react'

export default function Nav() {
    return (
        <nav class="navbar navbar-light bg-light bg-white fixed-top"  style={{margin: "0px 0px 0px 0px"}}>
            <a class="navbar-brand">Navbar</a>
            <form class="form-inline" method="POST" action="/search">
                <a href="/newPost"> <i class="fa fa-plus-circle fa-2x" aria-hidden="true" style={{margin:"0px 25px 0px 0px",minWidth : "20px"}}></i></a>
                <input list="tags" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="hand" id="hand" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}
