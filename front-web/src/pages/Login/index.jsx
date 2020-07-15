import React, { useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Cookies } from 'react-cookie';

import api from '../../services/api'

import './styles.css';

const Login = () => {
    const [formData, setFormData] = useState({user: String, password: String});
    const [loginStatus, setLoginStatus] = useState('');

    const cookies = new Cookies();
    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();

        await api.post('users/authenticate', formData).then(response => {
            setLoginStatus('');
            cookies.set('userName', response.data.user, { path: '/' });
            history.push('/');
        }).catch(error => {
            if(error.response.status === 404) {
                setLoginStatus('Usuário não cadastrado!');
            }

            if(error.response.status === 400) {
                setLoginStatus('Senha incorreta!');
            }

            console.log(error.response.statusText);
        });
    }

    function handleInputChange(event){
        const { name, value } = event.target;

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
                        name="user" 
                        id="userNameInput"
                        onChange={handleInputChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        required
                        name="password" 
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
                    <Link className='link' to='/registerUser'>Ainda não tem uma conta?</Link>
                    <span className="login-status">{loginStatus}</span>
                </form>
            </div>
        </div>
    )
}

export default Login;