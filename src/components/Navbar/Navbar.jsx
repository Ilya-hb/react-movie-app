import React from 'react'
import { AppBar, Toolbar, Box, CircularProgress } from '@mui/material';
import Input from '../Input/Input';
import RM_white_string from '../../assets/RM_white_string.svg'
import { NavLink } from 'react-router-dom';
import { debounce } from 'lodash';
const setActive = ({ isActive }) => isActive ? 'active-link' : '';

export default function Navbar({ onChange }) {

    const handleChange = (e) => {
        onChange(e?.target?.value);
    }

    const debouncedOnChange = debounce(handleChange, 200);

    return (
        <AppBar position='static'>
            <Toolbar>
                <NavLink to='/' className={setActive}>
                    <img src={RM_white_string} width='200px' alt='React movie logo' className='logo' />
                </NavLink>
                <Input onChange={debouncedOnChange} />
                <NavLink to='/people' className={setActive}>People</NavLink>
                <NavLink to='/networks' className={setActive}>Networks</NavLink>
            </Toolbar>



        </AppBar>

    )
}
