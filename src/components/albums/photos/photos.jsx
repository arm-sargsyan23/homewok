import React from "react";
import request from "../../request/request";
// import { Link } from "react-router-dom";

export default class Photos extends React.Component{
    constructor(){
        super()
        this.state = {
            photos: []
        }
    }

    componentDidMount(){
        const albumId = window.location.href.split("?")[1].split("=")[1]
        request("https://jsonplaceholder.typicode.com/photos", "GET", (response) =>{
            this.setState({
                photos: response.filter( photo => photo.albumId === +albumId)
            })
        })
    }
    
    render(){
        return <div>
            <div style={{width: "100vw", height: "100vh", display: "flex", padding: "20px", flexWrap: "wrap", gap: "10px"}}>
                {
                    this.state.photos.map((photo, id) => {
                        return <div key={id}>
                            <img src={`${photo.thumbnailUrl}`} alt="img" style={{borderRadius: "20px"}}/>
                        </div>
                    })
                }   
            </div>
        </div>
    }
}