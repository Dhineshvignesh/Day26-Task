import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import{link,useNavigate} from 'react-router-dom'

function Home(){
    let history = useNavigate();
    const handleEdit = (id, name , age) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id); 
    }

    const handleDelete =(id) =>{
        var index = Employees.map(functio(e){
            return e.id
        }).indexof(id);
        Employees.splice(index,1);

        history('/');


    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Buttoon onclick={()=>handleEdit(item.id, item.Name, item.Age)}>Edit</Buttoon>
                                        </Link>
                                        &nbsp;
                                        <Buttoon onclick={()=> handleDelete(item.id)}>DELETE</Buttoon>
                                    </td>
                                </tr>
                            )
                        })
                        :
                    "No date Available"
                    }
                </Table>
                <br>
                </br>
                <link class='d-grid gap' to=" /create">
                    <Button size="lg">create</Button>
                </link>

            </div>
        </Fragment>
    )
}