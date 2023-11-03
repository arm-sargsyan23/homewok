import React from "react";
import { Link } from "react-router-dom";

export default class Users extends React.Component{
    render(){
        return <div style={{display: "flex", width: "100vw", height: "100%", gap: "10px", justifyContent: "center", padding: "20px", flexWrap: "wrap"}}>
        {
          this.props.users.map((user, id) => {
            return <Link key={id} to={`/local-page?userId=${user.id}`}>
                <div style={{width: "210px", height: "130px", backgroundColor: "lightgreen", borderRadius: "20px", display: "flex", justifyContent: "center", padding: "10px"}}>
                    <h3 style={{fontSize: "16px", fontWeight: "700"}}>{user.name}</h3>
                </div>
            </Link>
          })
        }
      </div>
    }
}