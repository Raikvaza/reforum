import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from "../../features/auth";
const Login = () => {
    useEffect(()=> {   
            const inputText = document.querySelectorAll('.auth-form__input');
            inputText.forEach( function(input) {
                    input.addEventListener('focus', function() {
                        this.classList.add('focus');                            
                        this.parentElement.querySelector('.auth-form__placeholder').classList.add('focus');
                    });
                    input.addEventListener('blur', function() {
                        this.classList.remove('focus');
                        if (! this.value) {
                            this.parentElement.querySelector('.auth-form__placeholder').classList.remove('focus');
                        }
                    });
            });
    
            const togglers = document.querySelectorAll('.password-toggler');

            togglers.forEach( function(checkbox) {
                checkbox.addEventListener('change', function() {
        
                    const toggler = this.parentElement,
                            input   = toggler.parentElement.querySelector('.input-password'),
                            icon    = toggler.querySelector('.auth-form__icon');
        
                    if (checkbox.checked) {
                        input.type = 'text';
                        icon.classList.remove('la-eye')
                        icon.classList.add('la-eye-slash');
                    }
        
                    else
                    {
                        input.type = 'password';
                        icon.classList.remove('la-eye-slash')
                        icon.classList.add('la-eye');
                    }
                });
            });
    },[]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(null);
    const userData = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useEffect(() => {
    //     console.log(temp.value);
    // }, [temp.value])
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleStatus = () => {
        if (status === "Server-error"){
            return (  
                <Alert severity="error">
                    User doesn't exist
                </Alert>
            )
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        const response = (async() => {
            try {
            const response = await fetch(`http://localhost:8080/api/signin`, {
                headers: {
                    'Accept': 'text/plain',
                    'Content-type': 'text/plain',
                    'Credentials': 'include'
                },  
                method: 'POST',
                credentials: 'include',
        
                body: JSON.stringify({
                    Username: username,
                    password: password
                }),
                });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            dispatch(loginSuccess({ username: data.Username }));
            navigate("/");
            } catch (error) {
            console.error(error);
            }
        })()
        
      };
    
    return (
        <div className="modal__background">
        <div className="modal__window">
    
            <form className="auth-form" name="form-auth" onSubmit={handleLogin}>
    
                <label className="auth-form__label">
                    <span className="auth-form__placeholder">username</span>
                    <input className="auth-form__input input-email" type="username" value={username} onChange={handleUsername} name="username" autoComplete="off" required/>
                </label>
    
                <label className="auth-form__label">
                    <span className="auth-form__placeholder">password</span>
                    <input className="auth-form__input input-password" type="password" value={password} onChange={handlePassword} name="password" autocomlete="off" required/>
                    <div className="auth-form__toggler">
                        <i className="la la-eye auth-form__icon"></i>
                        <input type="checkbox" className="auth-form__checkbox password-toggler"/>
                    </div>
                </label>
    
                <div className="auth-form__answer">{handleStatus()}</div>
    
                <input className="auth-form__submit" type="submit" value="Login"/>
                
                <div className="auth-form__bottom">
                    <span>Have no account? </span>
                    <Link to = "/signup">
                    Create new
                    </Link>
                </div>
            </form>
    
        </div>
    </div>
    
    )
}

export default Login;