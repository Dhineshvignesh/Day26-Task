import React, { useState, useEffect } from 'react';
import{Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'

function Edit(){
    
    const[name, setName] = useState("");
    const[Age, setAge] = useState("");
    const[Age, setId] = useState("");

    let history  = useNavigate();
    var index = Employees.map(functio(e){
        return e.id
    }).indexof(id);

    const handlesubmit =(e) => {
        e.preventDefault();

       let a = Employees[index];
       a.Name =name;
       a.Age = age;



        history("/");
        
    }
    useEffect(()=>{
        setName(localstorage.getItem('Name'))
        setName(localstorage.getItem('Age'))
        setName(localstorage.getItem('Id '))


    })



 return(
    <div>
         <Form className= "d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="md-3" controlId="formName">
                    <form.control type="text" placeholder="Enter Name" value={name} reduired onchange={(e)=> setName(e.target.value)}>
                </form.control>
                </Form.Group>
                <Form.Group className="md-3" controlId="formAge">
                    <form.control type="text" placeholder="Enter Age" value={Age}reduired onchange={(e)=> setAge(e.target.value)}>
                </form.control>
                </Form.Group>
                <Button onClick={(e) => handlesubmit(e)} type="submit">Submit</Button>
            </Form>

    </div>
 )


}

export default Edit;
