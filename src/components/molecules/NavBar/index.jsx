import React from 'react'
import Brand from '@components/atoms/Brand'
import Button from '@components/molecules/Button'
import { logout } from '@src/utils/auth'
import { Link } from "react-router-dom";
import { Nav } from './styles'

const NavBar = () => {
  return (
    <Nav>
      <Link to="/home">
        <Brand size="medium" />
      </Link>
      <Button theme="light" value="Sair" inline onClick={() => logout()} />
    </Nav>
  )
}

export default NavBar;
