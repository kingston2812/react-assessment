import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Page1 from './P1';
import Page2 from './P2';
import logo from './logo.svg';
import AddForm from './component/Addform'
import UpdateForm from './component/Updateform';
import './App.css';
import UserTable from './component/UserTable';
import App from './App';
import {BrowserRouter,Routes,Route,Router, Link} from 'react-router-dom';
import User from './component/User';
import Urlnotfound from './component/Urlnotfound';
function MainPage(props) {
  const [page, setPage] = useState(true);
  const initialFormState = { name: "", email: "", contact: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [showData, setShowData] = useState(initialFormState);
  
  return (
        <BrowserRouter>
            <Routes >
                <Route exact path="/" element={<App showData={(showData)=>setShowData(showData)}/>}/>
                <Route exact path="/view/:ID" element={<User/>}/>
                <Route exact path="*" element={<Urlnotfound />}/>
                {console.log(showData.name+" main")}
            </Routes>   

        </BrowserRouter>    
         
        
  );
}

export default MainPage;