import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

function HomeDap() {
  return (
    <>
      <Header/>
      <Container>
        <Title>
                <Contain>
                    <img src='images/Daplogow.png' width="100%"/>
                    <Subtitle>Desarrollando sueños con tecnología</Subtitle>
                </Contain>
            </Title>
      </Container>
      <Footer/>
    </>
    
  )
}

export default HomeDap

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;  
  font-size: 4rem;
  font-weight: bold;
  width: 100%;
  height: 80vh;
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
    flex-direction: column;
`
const Subtitle = styled.div`
    font-size: 2vmax;
    color: white;
    font-weight: bold;
`
