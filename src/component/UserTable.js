import React,{useState,useEffect} from "react";
import firebase from '../utils/firebase'
import UpdateForm from "./Updateform";
import { Link,Route,Routes,useNavigate } from "react-router-dom";
import Urlnotfound from "./Urlnotfound";
import User from './User'
import Main from '../MainPage'
const UserTable = (props) => {
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState();
    
    useEffect(()=>{
        const todoRef = firebase.database().ref('to')

        todoRef.on('value',(snapshot)=>{
            const todos = snapshot.val();
            const todoList = [];
            for(let id in todos){
                todoList.push({id,...todos[id]});
            }
            setTodoList(todoList);
             
        })

    }, [])
    const viewUser = (todo) =>{
        props.viewData(todo)
        navigate('/view/'+todo.id,{state:{name:todo.name, email:todo.email, contact:todo.contact}})

        
    }
    const deleteUser = (todo) => {
        const todoRef = firebase.database().ref('to').child(todo)
        todoRef.remove();
    }
    const btnUpdate = (todo) => {
        props.editRow(false)
        props.currentUser(todo)
        console.log(todo.id+"///")
        //todoList.map((todo, index)=> <UpdateForm todo={todo} key={index}/>)
    }
    return(
        <div className='table'>
            
            <table className="table">
                <thead>
                <tr>
                    <th><p>name</p></th>
                    <th><p>email</p></th>
                    <th><p>contact</p></th>
                    <th><p>Action</p></th>  
                </tr> 
                </thead>
                <tbody>
                    <td>
                        {todoList ? todoList.map((todo)=> <p>{todo.name}</p>): ""}
                    </td>
                    <td>
                        {todoList ? todoList.map((todo)=> <p>{todo.email}</p>): ""}
                    </td>
                    <td>
                        {todoList ? todoList.map((todo)=> <p>{todo.contact}</p>): ""}
                    </td>
                    <td>
                        {todoList ? todoList.map((todo)=>
                        <p>
                  
                            <button className='btn btn-warning btn-sm' onClick={()=>viewUser(todo)}>View</button>
                            <button className='btn btn-info btn-sm' onClick={()=>btnUpdate(todo)}>Update</button>
                            <button className='btn btn-danger btn-sm' onClick={()=>deleteUser(todo.id)}>Delete</button>
                            
                        </p>
                        ): ""}
                        
                    </td>
                </tbody>
            </table>
           
            
        </div>
    )
}
export default UserTable;