import React, { useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import api from '../../services/api'

import './styles.css';

const RegisterUser = () => {
    const [formData, setFormData] = useState({user: String, password: String, confirmPassword: String});
    const [passwordStatus, setPasswordStatus] = useState(' ');
    const [userRegisterStatus, setUserRegisterStatus] = useState(' ');
    const [disableButton, setdisableButton] = useState(false);

    const history = useHistory();
    const cookies = new Cookies();

    function handleSubmit(event){
        event.preventDefault();

        const parsedFormData = {
            user: formData.user,
            password: formData.password
        }

        api.post('/users/registerUser', parsedFormData).then((response)=>{
            cookies.set('userName', parsedFormData.user, { path: '/' });
            history.push('/');
        }).catch((error)=>{
            if(error.response.status == 400){
                setUserRegisterStatus('Oops, já temos alguém com esse nome.');
            }
            if(error.response.status == 500){
                setUserRegisterStatus('Oops, algo deu errado.');
            }
        })

        console.log(formData);
    }

    function handleInputChange(event){
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        console.log(formData)

        if(formData.password != formData.confirmPassword){
            setPasswordStatus('Senhas Diferem!');
            setdisableButton(true);
        } else {
            setPasswordStatus('');
            setdisableButton(false);
        }
        
    }, [formData]);

    useEffect(() => {
        if(disableButton == true){
            document.getElementById('register-button').style.cursor = 'not-allowed';
        } else {
            document.getElementById('register-button').style.cursor = 'pointer';
        }
        }, [disableButton]);

    return(
        <div id="page-registerUser">
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Crie seu usuário!</h1>
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
                        id="passwordInput"
                        onChange={handleInputChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Confirma senha"
                        required
                        name="confirmPassword" 
                        id="confirmPasswordInput"
                        onChange={handleInputChange}
                    />
                    <span className='status'>{passwordStatus}</span>
                    <button id="register-button" type="submit" className="login-button" disabled={disableButton}>
                        <div className="button-text">
                            Registrar-se!
                        </div>
                    </button>
                    <span className='status'>{userRegisterStatus}</span>
                </form>
                
            </div>
        </div>
    )
}

export default RegisterUser;