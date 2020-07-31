import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sign from './container/sign/sign';
import Nav from './container/navbar/Nav';
import Home from './container/Home';
import Follow from './container/follower/follower';
import NewPost from './newPost/newPost';
import Post from './container/post/post';
import Profile from './container/profile/profile';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Test from './container/test/test';
import TestProfile from './container/testProfile/testProfile';
import TestPost from './container/testPost/testPost';
import TestSign from './container/testSign/testSign';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Test}/>
        <Route path="/followers" exact component={Follow}/>
        <Route path="/newPost" exact component={NewPost}/>
        <Route path="/post/:pid" exact component={TestPost}/>
        <Route path="/profile/:id" exact component={TestProfile} />
        <Route path="/signin" exact component={TestSign}/>
      </div>
    </Router>
  );
}

export default App;
