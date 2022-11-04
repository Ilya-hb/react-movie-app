import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import Input from '../Input/Input';
import RM_white_string from '../../assets/RM_white_string.svg'
import { NavLink } from 'react-router-dom';


const setActive = ({ isActive }) => isActive ? 'active-link' : '';
export default function Navbar() {

    return (
        <AppBar position='static'>
            <Toolbar>
                <NavLink to='/' className={setActive}>
                    <img src={RM_white_string} width='200px' alt='React movie logo' />
                </NavLink>
                <Input />
                <NavLink to='/people' className={setActive}>People</NavLink>
                <NavLink to='/networks' className={setActive}>Networks</NavLink>
            </Toolbar>
        </AppBar >

    )
}
