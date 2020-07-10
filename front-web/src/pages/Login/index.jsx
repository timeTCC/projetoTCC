import React, { useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Cookies } from 'react-cookie';

import './styles.css';

const Login = () => {
    const [formData, setFormData] = useState({userName: String, userPassword: String});

    const cookies = new Cookies();
    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();
        
        cookies.set('userName', formData.userName, { path: '/' });

        console.log(formData);

        history.push('/');
    }

    function handleInputChange(event){
        const { name, value } = event.target;

        console.log("has changed: " + name + " " + value);

        setFormData({ ...formData, [name]: value });
    }

    return(
        <div id="page-login">
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">login!</h1>

                    <input 
                        type="text" 
                        placeholder="Usuário"
                        required
                        name="userName" 
                        id="userNameInput"
                        onChange={handleInputChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        required
                        name="userPassword" 
                        id="userPasswordInput" 
                        onChange={handleInputChange}
                    />

                    <button type="submit" className="login-button">
                        <div className="button-text">
                            Entrar
                        </div>
                        <div className="button-icon">
                            <FiLogIn size={20}/>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;