import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
const User = (props) => {
    const post = props.name
    const location = useLocation();

    return(
        <div className='form-site'>
           <p>Name : {location.state.name}</p>
           <p>Email : {location.state.email}</p>
           <p>Contact : {location.state.contact}</p>
        </div>
    )
}

export default User;