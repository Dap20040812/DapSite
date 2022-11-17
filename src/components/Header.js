import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()


    const main= () => {
      history.push("/")
    }

  return (
    
    <Nav>
        <Left>
        <Logo onClick={main} src='images/Daplogow.png' width="100%"/>
        </Left>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <NavMenu isOpen={isOpen}>
            <MenuLink to={`/`}> <span>Inicio</span> </MenuLink>
            <MenuLink to={`/nosotros`}> <span>Nosotros</span> </MenuLink>
            <MenuLink to={`/products`}> <span>Nuestros Productos</span> </MenuLink>
            <MenuLink to={`/team`}> <span>Equipo</span> </MenuLink>
        </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.div `
  padding: 0 6vh 0 2vw; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #3278B0;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`

const Left = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`

const Logo = styled.img `
    height: 12vh;
    margin: 2.5px 10px 0px;
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #F1EDE9;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`

const MenuLink = styled(Link) `
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in;
    font-size: 1.4rem;
    color: #F1EDE9;
    font-weight: bold;
    span{
        position: relative; 
        &:after{
            content:"";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
  }
`