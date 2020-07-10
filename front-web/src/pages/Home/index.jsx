import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import './styles.css';

import Header from '../../components/Header';

const Home = () => {
    
    return(
        <div id="page-home">
            <Header />

            <div className='content'>
                <p className='title'>Esta é a Home!</p>
                <hr/>   
            </div>
        </div>
    )
}

export default Home;