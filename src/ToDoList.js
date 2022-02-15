import React, { useState } from "react";
import { Form, FormGroup, Button, Input, Col } from 'reactstrap'
import axios from "axios";


const ToDoList = () =>{
    const initialState = {item: ''}
    const [ toDoState, setToDoState ] = useState(initialState)
    const url = "http://localhost:8005/todo"


    const handleChange = (event) =>{
        setToDoState({...toDoState, [event.target.id]: event.target.value})
    }

    const handleSubmit = () =>{
        axios.post(url, {item: toDoState.item})
        setToDoState(initialState)

    }



    return(
<>  
<Col xs='3'>
    <Form onSubmit={handleSubmit}>
        <FormGroup className="to do form">
             <Input
                id="item"
                name="to do item"
                placeholder="Dishes, Laundry, etc.."
                onChange={handleChange}
            />
        </FormGroup>
        <Button color='primary'>
            Add to List
        </Button>
    </Form>
    </Col>  
</>
    )
}

export default ToDoList;