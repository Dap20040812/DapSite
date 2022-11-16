import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Products() {

  return (
    <>
    <Header/>
    <Container>
        <Title>
            <Text>Nuestros Productos</Text>
            <Contain>
            <MenuLink to={`/album`}>
                <Product>
                    <img src='https://i.imgur.com/iNHZAWZ.png' width="100%"/>
                </Product>
            </MenuLink>
                <Product>
                    <img src='images/table.png' width="90%"/>
                </Product>
            </Contain>
        </Title>
    </Container>
    <Footer/>
    </>
    
  )
}

export default Products

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;  
  font-size: 4rem;
  font-weight: bold;
  width: 100%;
  height: max-content;
  background-repeat: no-repeat;
  background-size: cover;
`

const Container = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    align-items: center;
    position: relative;

`
const Contain = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Product = styled.div`
    border: solid white 2px;
    width: 25vmax;
    height: 25vmax;
    margin: 3vmax;
    border-radius: 2vmax;
    background-color: #B5B5B5AD;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: scale(1.05);
        opacity: 0.6;
    }
`
const Text = styled.div`
    color: white;
    font-size: 5vmax;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Subtitle = styled.div`
    color: white;
    font-size: 2vmax;
`

const MenuLink = styled(Link) `

    text-decoration: none;
`