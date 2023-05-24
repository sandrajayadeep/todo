import React,{useEffect,useState}from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useForm } from "react-hook-form"; 
import Form from"./Form.jsx"

export default function App() {
  
   const[todo,setTodo ]= useState([]);
   const getData = async () =>{
    const data= await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonData = await data.json();
    setTodo(jsonData)
   }
   useEffect(()=>{
    getData();
   },[]
   )
    return (
      
    <div>
    <Container className = 'text-center mt-5'>
      <h1>To Do LIST</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
            
          </tr>
        </thead>
        <tbody>
  {todo.map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.completed?"completed":"pending"}</td>
    </tr>
  ))}
</tbody> 
      </Table>
    
      </Container>
    </div>
  )
}
