import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page1 from './P1';
import Page2 from './P2';
import logo from './logo.svg';
import AddForm from './component/Addform'
import UpdateForm from './component/Updateform';
import './App.css';
import UserTable from './component/UserTable';
import {Route,Link,Routes} from 'react-router-dom'
import User from './component/User';
import Urlnotfound from './component/Urlnotfound';
const App = (props) => {
  const [page, setPage] = useState(true);
  const initialFormState = { name: "", email: "", contact: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [viewData, setViewData] = useState(initialFormState);
  const show = (userData) => {
    props.showData(userData)
  }
  return (
    <div>
        
        {page? <AddForm /> : <UpdateForm data={currentUser} editRow={(page)=>setPage(page)}/>}
        <UserTable editRow={(page)=>setPage(page)} currentUser={(currentUser)=>setCurrentUser(currentUser)} viewData={(viewData)=>setViewData(viewData)} />  
        {show(viewData)}   
        {console.log(viewData.name+"<--")}
    </div>
  );
}
export default App;
