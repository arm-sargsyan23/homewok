import React from "react";
import "./App.css"
import dataBase from "./lib/data"

class App extends React.Component{
  render(){
    const users = dataBase.users

    return <div className="container">
      <div className="user-container">
        {users.map( user => {
          return <div className="info-container" key={user.id}>
            <div className="user-decoration">
              <h4><strong>Name:</strong></h4><h4>{user.name}</h4>
            </div>
            
            <div className="user-decoration">
              <h4><strong>Email:</strong></h4><h4>{user.email}</h4>
            </div>

            <div className="user-decoration">
              <h4><strong>City:</strong></h4><h4>{user.address.city}</h4>
            </div>

            <div className="user-decoration">
              <h4><strong>Phone:</strong></h4><h4>{user.phone}</h4>
            </div>

            <div className="user-decoration">
              <h4><strong>Webside:</strong></h4><h4>{user.website}</h4>
            </div>

            <div className="user-decoration">
              <h4><strong>Company:</strong></h4><h4>{user.company.name}</h4>
            </div>
          </div>
        })}
      </div>
    </div>
  }
}

export default App