import React from 'react'

import { Link } from 'react-router-dom'

import { Navbar } from './style'

const Header = () => (
    <Navbar>
        <Link to="/">Users List</Link>
        <Link to="/new">Create Users</Link>
    </Navbar>
)

export default Header