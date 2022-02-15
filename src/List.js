import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const List = () =>{
    const [ toDoData, setToDoData ] = useState()

    useEffect(() => {
        const url = `http://localhost:8005/todo`;

        axios.get(url)
        .then(res => {
            setToDoData(res.data)
        })
    }, [])

    return(
        <>
            {toDoData ? toDoData.map((todo) => {
                
                    return( 
                            <Card item={todo.item} id={todo._id}/>
                     
                    )
                }):console.log("NO DATA")
            }
        </>
    )

}

export default List;