import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import {Link} from 'react-router-dom'

function Team() {
  return (
    <>
      <Header/>
      <Container>
        <Title>
          <Text>Nuestro Equipo</Text>
          <Contain>
          <a href='https://www.linkedin.com/in/diego-prado-53024615a' target="_blank"><Product><Subtitle>Diego Prado</Subtitle><Subtitle1>CEO</Subtitle1></Product></a>
            <Product1><Subtitle>Juan Valderrama</Subtitle><Subtitle1>CSO/CS</Subtitle1></Product1>
            <a href='https://instagram.com/mlacouturem?igshid=YmMyMTA2M2Y=' target="_blank"><Product2><Subtitle>María Lacouture</Subtitle><Subtitle1>CCO</Subtitle1></Product2></a>
            <Product3><Subtitle>Sebastian Guevara</Subtitle><Subtitle1>CTO</Subtitle1></Product3>
          </Contain>
        </Title>
      </Container>
      <Footer/>
    </>
  )
}

export default Team

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    flex-wrap: wrap;
    a{
      text-decoration: none;
    }
`
const Product = styled.div`
    border: solid white 2px;
    width: 25vmax;
    height: 25vmax;
    margin: 3vmax;
    border-radius: 2vmax;
    background-color: #B5B5B5AD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url("images/diego.jpeg");
    background-size: cover; 
    &:hover {
        transform: scale(1.05);
        opacity: 0.6;
    }
`
const Product1 = styled(Product)`
  background-image: url("images/juanito.jpeg");
  background-size: cover;
`
const Product2 = styled(Product)`
  background-image: url("images/mia.jpeg");
  background-size: cover;
`
const Product3 = styled(Product)`
  background-image: url("images/sebas.jpeg");
  background-size: cover;
`
const Text = styled.div`
    color: white;
    font-size: 5vmax;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuLink = styled(Link) `

    text-decoration: none;
`

const Subtitle = styled.div`
  width: 100%;
  background: #3278B0ED;
  font-size: 2vmax;
  color: white;
  border-top-left-radius: 2vmax;
  border-top-right-radius: 2vmax;
`

const Subtitle1 = styled.div`
  width: 100%;
  background: #3278B0ED;
  font-size: 2vmax;
  color: white;
  border-bottom-left-radius: 2vmax;
  border-bottom-right-radius: 2vmax;
`