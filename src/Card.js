import React from "react";
import axios from "axios";
import { Button } from "reactstrap";


const Card = (props) =>{
    const { item, id } = props
    const url = `http://localhost:8005/todo/${id}`

    const markComplete = () =>{
        axios.delete(url)
        window.location.reload()

    }


    return(
        <h3>
            -{item} 
            <Button onClick={markComplete} color='warning'>
                Click if Completed
            </Button>
        </h3>
    )
}

export default Card;