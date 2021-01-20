import React from 'react';
import '../styles/Navigation.css'
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Nav = () => {
    return <React.Fragment>
        <nav className='nav'>
            <div style={{float: 'left', fontWeight: '500', margin: '10px', marginLeft: '20px'}}>
                AMTICA
            </div>
            <ul className='ul'>
                <li className='li'>
                <a href='#' style={{color: 'black', textDecoration: 'none'}}>Login /</a> 
                <a href='#' style={{color: 'black', textDecoration: 'none'}}> Signup</a>
                </li>
                <li className='li'>Cart</li>
                <AiOutlineShoppingCart style={{fontSize: '25px', margin: '7.5px 0px 0px -6px', color: 'green'}}/>
            </ul>
        </nav>
    </React.Fragment>
}

export default React.memo(Nav);