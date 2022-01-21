import React,{useState} from "react";
import firebase from '../utils/firebase'
import '../css/form.css'
function AddForm (){
    const initialFormState = {userId:null, name: "", email: "", contact: "" };
    const [user, setUser] = useState(initialFormState);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setUser({...user,[name]:value});
    }

    const createTodo = () => {
        const todoRef = firebase.database().ref('to');
        const todo = {
            name:user.name,
            email:user.email,
            contact:user.contact
        }
        console.log(todo.name)
        todoRef.push(todo)
    }
    return(
        <div className='form-site'>   
            <form onSubmit={createTodo}> 
                <h2>ADD USER</h2>
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
                
                <button className="add-btn btn btn-success" type='submit'  >Add</button>
                
            </form>
        </div>
    )
}
export default AddForm;