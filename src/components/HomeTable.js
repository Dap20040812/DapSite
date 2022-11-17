import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import AlbumHeader from './AlbumHeader'
import TableHeader from './TableHeader'

function HomeTable() {
    
  return (
    <>
        <TableHeader/>
        <HomePage>
        <Right>
            <Title>¡Gestiona todo tu restaurante en una sola aplicación!</Title>
            <Desc>Organiza y une las mesas, ordenes y productos en uno con funciones para los meseros, cocineros y chefs.</Desc>
            <BtnDownload href='https://docs.google.com/uc?export=download&id=1EUUP-hj9J02X32kH8r8LB7k-8gfsEVZk'> ¡Descargala aquí! </BtnDownload>
        </Right>
        <Left>
            <Phone src='images/tablecel.png'/>
        </Left>
        <Bottom>
            <Support>¡Apóyanos con tu donación por Nequi!</Support>
            <Nequi src="images/NEQUI.png"/>
        </Bottom>
    </HomePage>
    </>
    
  )
}

export default HomeTable

const HomePage = styled.div `
    display: flex;
    height: max-content;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #F1EDE9;
`

const Phone = styled.img `
    height: 75vh;
    align-items: center;
    justify-content: center;
`

const Left = styled.div `
    margin-top: 5vh;
    display: flex;
    margin-right: 7vw;
`

const Right = styled.div `
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    width: 60vw;
`

const Title = styled.h1 `
    text-align: center;
    font-size: 10vmin;
    color: #252525;
`

const Desc = styled.p `
    text-align: center;
    font-size: 5vmin;
    color: #252525;
    width: 80%;
`

const BtnDownload = styled.a`
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh;
    margin-bottom: 2vh;
    background-color: #afeff4;
    width: 25vh;
    height: 5vh;
    border-radius: 5vh;
    font-weight: bold;
    font-size: 1.3rem;
    text-decoration: none;
    color: #252525;
    transition: 0.5s;

    &:hover {
        background-color: #252525;
        font-weight: bold;
        transform: scale(1.1);
        color: #ffffff;
    }
`

const Bottom = styled.div `
    display: flex;
    background-color: #afeff4;
    margin: 2vmin 5vmin;
    border-radius: 4vh;
    width: 95vw;
    justify-content: space-around;
    align-items: center;
`

const Support = styled.p `
    font-size: 8vmin;
    font-weight: 500;
    color: #252525;
`

const Nequi = styled.img `
    height: 30vmin;
    margin: 4vmin;
`