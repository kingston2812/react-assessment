import React,{useState} from "react";
import firebase from '../utils/firebase'
import '../css/form.css'
function UpdateForm (todo){
    const initialFormState = {userId:null, name: todo.data.name, email: todo.data.email, contact: todo.data.contact };
    const [user, setUser] = useState(initialFormState);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setUser({...user,[name]:value});
    }
    const updateUser = () => {
        firebase.database().ref('to').child(todo.data.id).update({
            name:user.name,
            email:user.email,
            contact:user.contact
        })
        todo.editRow(true)
    }
    function btnCancel () {
        todo.editRow(true)
    }
    return(
        <div className='form-site'>   
                {console.log(todo.data.id+"<-")}
                <h2>UPDATE USER</h2>
                <h6>Name</h6>
                <p>
                    <input 
                        placeholder='Name'
                        type='text' 
                        name='name'
                        className="form-control"
                        
                        onChange={handleOnChange} 
                        value={user.name}
                        required
                    />
                </p>
                <h6>Email</h6>
                <p>
                    
                    <input 
                        placeholder='Email'
                        type='email' 
                        name='email'
                        className="form-control"
                        onChange={handleOnChange} 
                        value={user.email}
                        required
                    />
                </p>
                <h6>Contact</h6>
                <p>
                    <input 
                        placeholder='Contact'
                        type='text' 
                        name='contact'
                        className="form-control"
                        onChange={handleOnChange} 
                        value={user.contact}
                        required
                    />
                </p>
                
                <button className="add-btn btn btn-warning" type='submit' onClick={updateUser} >Update</button>
                <button className="add-btn btn btn-danger" onClick={btnCancel} >Cancel</button>
                <hr/>

        </div>
    )
}
export default UpdateForm;