import React from "react";
import request from "../request/request";
import { Link } from "react-router-dom";

export default class Albums extends React.Component{
    constructor(){
        super()
        this.state = {
            albums: []
        }
    }

    componentDidMount(){
        const userId = window.location.href.split("?")[1].split("=")[1]
        request("https://jsonplaceholder.typicode.com/albums", "GET", (response) =>{
            this.setState({
                albums: response.filter( albums => albums.userId === +userId)
            })
        })
    }
    
    render(){
        return <div>
            <div style={{display: "flex", padding: "20px", flexWrap: "wrap", gap: "15px", flexDirection: "column"}}>
                {
                    this.state.albums.map((album, id) => {
                        return <Link key={id} to={`/photos?userId=${album.id}`}>
                            <div style={{backgroundColor: "lightgreen", padding: "20px", borderRadius: "10px", fontSize: "16px", fontWeight: "700"}}>
                                {album.title}
                            </div>
                        </Link>
                    })
                }   
            </div>
        </div>
    }
}