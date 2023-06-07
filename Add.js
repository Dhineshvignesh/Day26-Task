import React from 'react';
import{Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom'

function Add(){

    const[name, setName] = useState("");
    const[Age, setAge] = useState("");

    let history = useNavigate();
    const handlesubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;
        Employees.push({id: uniqueId, Name : a, age : b});


        history("/");
        
    }

    return(
        <div>
            <Form className= "d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="md-3" controlId="formName">
                    <form.control type="text" placeholder="Enter Name" reduired onchange={(e)=> setName(e.target.value)}>
                </form.control>
                </Form.Group>
                <Form.Group className="md-3" controlId="formAge">
                    <form.control type="text" placeholder="Enter age" reduired onchange={(e)=> setAge(e.target.value)}>
                </form.control>
                </Form.Group>
                <Button onClick={(e) => handlesubmit(e)} type="submit">Submit</Button>
            </Form>

        </div>
    )
}

export default Add;
