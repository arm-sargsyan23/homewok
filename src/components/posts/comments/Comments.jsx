import React from "react";
import request from "../../request/request";

export default class Comments extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        const postId = +window.location.href.split("?")[1].split("=")[1]
        request("https://jsonplaceholder.typicode.com/comments", "GET", (response) => {
            this.setState({
                comments: response.filter( comm => postId === comm.postId)
            })
        })
    }

    render(){
        return <div>
            <div style={{display: "flex", padding: "20px", flexWrap: "wrap", gap: "15px", flexDirection: "column"}}>
                {
                    this.state.comments.map((comm, id) => {
                        return <div key={id} style={{backgroundColor: "lightgreen", padding: "20px", borderRadius: "10px", fontWeight: "700"}}>
                            <h2 style={{fontSize: "20px"}}>{comm.email}</h2>
                            <h3>{comm.body}</h3>
                        </div>
                    })
                }   
            </div>
        </div>
    }
}