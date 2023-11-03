import React from "react";
import request from "../request/request";
import { Link } from "react-router-dom";

export default class Posts extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        const userId = +window.location.href.split("?")[1].split("=")[1]
        request("https://jsonplaceholder.typicode.com/posts", "GET", (response) => {
            this.setState({
                posts: response.filter( post => userId === post.userId)
            })
        })
    }

    render(){
        return <div>
            <div style={{display: "flex", padding: "20px", flexWrap: "wrap", gap: "15px", flexDirection: "column"}}>
                {
                    this.state.posts.map((post, id) => {
                        return <Link key={id} to={`/comments?postId=${post.id}`}>
                            <div style={{backgroundColor: "lightgreen", padding: "20px", borderRadius: "10px", fontSize: "16px", fontWeight: "700"}}>
                                {post.title}
                            </div>
                        </Link>
                    })
                }   
            </div>
        </div>
    }
}   