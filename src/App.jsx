import React from "react";
import "./App.css";
import request from "./components/request/request";
import Users from "./components/users/users";
import { Routes , Route } from "react-router-dom"
import LocalUser from "./components/users/local-user-page/Local-user"
import Posts from "./components/posts/Posts";
import Comments from "./components/posts/comments/Comments";
import Albums from "./components/albums/albums";
import Photos from "./components/albums/photos/photos";

class App extends React.Component
{
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    request("https://jsonplaceholder.typicode.com/users", "GET", (response) => {
      this.setState({
        users: response
      })
    })
  }

  render(){
    return <div>
      <Routes>
        <Route path="/" element={<Users users={this.state.users}/>}/>
        <Route path="/local-page" element={<LocalUser/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/comments" element={<Comments/>}/>
        <Route path="/albums" element={<Albums/>}/>
        <Route path="/photos" element={<Photos/>}/>
      </Routes>
    </div>
  }
}

export default App