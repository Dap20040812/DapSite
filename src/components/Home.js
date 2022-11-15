import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <HomePage>
        <Left>
            <Phone src='images/celular.png'/>
        </Left>
        <Right>
            <Title>¡Llena el álbum del mundial de forma colaborativa!</Title>
            <Desc>Crea salas, registra tus láminas y comparte la experiencia de llenar el álbum con tus amigos y familia de una forma fácil y organizada.</Desc>
            <BtnDownload href='https://docs.google.com/uc?export=download&id=1EUUP-hj9J02X32kH8r8LB7k-8gfsEVZk'> ¡Descargala aquí! </BtnDownload>
        </Right>
        <Bottom>
            <Support>¡Apóyanos con tu donación por Nequi!</Support>
            <Nequi src="images/NEQUI.png"/>
        </Bottom>
    </HomePage>
  )
}

export default Home

const HomePage = styled.div `
    display: flex;
    height: max-content;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Phone = styled.img `
    height: 75vh;
    align-items: center;
    justify-content: center;
`

const Left = styled.div `
    margin-top: 5vh;
    display: flex;
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
    color: #500A1E;
`

const Desc = styled.p `
    text-align: center;
    font-size: 5vmin;
    color: #500A1E;
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
    background-color: #8b1638;
    width: 25vh;
    height: 5vh;
    border-radius: 5vh;
    font-weight: bold;
    font-size: 1.3rem;
    text-decoration: none;
    color: white;

    &:hover {
        background-color: #C33760;
        font-weight: bold;
        transform: scale(1.1);

    }
`

const Bottom = styled.div `
    display: flex;
    background-color: #8b1638;
    margin: 2vmin 5vmin;
    border-radius: 4vh;
    width: 95vw;
    justify-content: space-around;
    align-items: center;
`

const Support = styled.p `
    font-size: 8vmin;
    font-weight: 500;
    color: #F1EDE9;
`

const Nequi = styled.img `
    height: 30vmin;
    margin: 4vmin;
`