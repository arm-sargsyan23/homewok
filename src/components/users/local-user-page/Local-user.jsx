import React from "react";
import request from "../../request/request";
import {Link} from "react-router-dom"

export default class LocalUser extends React.Component{
    constructor(){
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount(){
        const userId = window.location.href.split("?")[1].split("=")[1]
        request("https://jsonplaceholder.typicode.com/users", "GET", (response) =>{
            this.setState({
                user: response.filter( user => user.id === +userId)[0]
            })
        })
    }
    
    render(){
        const user = this.state.user
        return <div style={{width:" 100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px", fontWeight: "900"}}>
            <div style={{width: "680px", height: "430px", backgroundColor: "lightgreen", borderRadius: "25px", padding: "20px", display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", margin: "30px 0 0 10px"}}>
                    <img
                        src="https://sun9-29.userapi.com/impg/LX1Q_mLy31aofzip8b385ySG_S2N6yVAKrs55Q/LDY81bmK5jE.jpg?size=1240x1240&quality=95&sign=f133efc623fa57b02e9e0c48ea5dfbb3&c_uniq_tag=_M_wsznnVXlzxR-csO9taXs_VvAWQSrWiJqpWWQfqi0&type=album" alt="user-img"
                        style={{width: "200px", height: "200px", borderRadius: "50%"}}
                    />
                    <div style={{display: "flex", alignItems: "center", width: "50%", margin: "30px", flexDirection: "column", gap: "20px"}}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                    </div>
                </div>
                <div style={{width: "50%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0 0 0", gap: "25px"}}>
                    <h2><span>Username:</span>{user.username}</h2>
                    <h2><span>Phone Number:</span>{user.phone}</h2>
                    <h2><span>Website:</span>{user.website}</h2>
                    <div style={{display: "flex", gap: "10px", height: "35%", alignItems: "end"}}>
                        <Link to={`/posts?userid=${user.id}`}>
                            <button style={{padding: "6px 6px", border: "0.5px solid", borderRadius: "10px", width: "80px"}}>Posts</button>
                        </Link>
                        <Link to={`/albums?userid=${user.id}`}>
                            <button style={{padding: "6px 6px", border: "0.5px solid", borderRadius: "10px", width: "80px"}}>Albums</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }
}