import React, {useState} from 'react';
import { Cookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import './styles.css';

const Header = () => {
    const history = useHistory();
    const cookies = new Cookies();
    const [userName, setUserName] = useState('');

    if (!cookies.get('userName')){
        history.push('/login');
    }

    function handleLogout() {
        cookies.remove('userName');
        history.push('/login');
    }

    return(
        <header className="header">
            <div className="title">
                Olá, {cookies.get('userName')}!
            </div>
            <div className="logout-button" onClick={handleLogout}>
                <div className="text">
                    Sair
                </div>
                <div className="icon">
                    <FiLogOut />
                </div>
            </div>
        </header>
    )
}

export default Header;