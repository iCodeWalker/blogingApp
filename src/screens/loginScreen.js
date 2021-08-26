import React, { useState } from 'react';
import './loginScreen.css';
import {Link} from 'react-router-dom';
import '../components/blogForm.css';

const LoginScreen = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    const handleNameChange =(e) =>{
        setName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div>
        <h1>Start Your Bloging Journey Here</h1>
        <h2>Login here</h2>
        <div className="main">
        <div className="form_group">
                    <input name="title" placeholder="Enter Username" value={name} onChange={handleNameChange}
                    type="text" class="form__input" id="name" required="" 
                    />
                </div>
                
                
                <div className="form_group">
                    <input name="category" placeholder="Enter Password" value={password} onChange={handlePasswordChange}
                    type="password" class="form__input" id="name" required="" 
                    />
                </div>
            </div>
        <div  className="main"><button  className="table_login_button"><Link to={{ pathname:"/"}} className = "link_style_login">LOGIN</Link></button></div>
        </div>
    )
}
export default LoginScreen;