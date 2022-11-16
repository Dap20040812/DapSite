import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

function Nosotros() {
  return (
    <>
    <Header/>
    <Container>
        <Contain>
            <Title>Nosotros</Title>
            <Text1>Somos una empresa de desarrollo de software a la medida y de productos escalables que se adaptan fácilmente a cualquier cliente sin la necesidad de un nuevo desarrollo.</Text1>
            <Section2>
                <Section>
                    <Subtitle>Misión</Subtitle>
                    <Text>Formar un mundo más equitativo a nivel de oportunidades en el ámbito de la tecnología e informática, reforzando así la economía latinoamericana en la industria tecnológica.</Text>
                </Section>
                <Section>
                    <Subtitle>Visión</Subtitle>
                    <Text>Representar a Colombia y Latinoamérica en el mundo de la tecnología y la informática a nivel mundial, siendo una de las compañías claves para el desarrollo tecnológico e informático del mundo.</Text>
                </Section>
            </Section2>
        </Contain>
    </Container>
    <Footer/>
    </>
    
  )
}

export default Nosotros

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Line = styled.div`
    width: 100%;
    background-color: #3278B0;
    height: 0.5vmax;
 
`
const Section = styled.div`
    border: solid white 2px;
    width: 40vmax;
    min-height: 20vmax;
    max-height: max-content;
    margin: 2vmax;
    border-radius: 2vmax;
    background-color: #B5B5B5AD;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Text = styled.div`
    color: white;
    font-size: 1.5vmax;
    margin: 1vmax;
    display: flex;
    align-items: center;
    margin-top: 4vmax;
    justify-content: center;
`
const Text1 = styled.div`
    color: white;
    font-size: 1.5vmax;
    margin: 1vmax;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-bottom: 2vmax;
`
const Subtitle = styled.div`
    color: white;
    font-size: 3vmax;
    font-weight: bold;
    width: 100%;
    background-color: #3278B0;
    border-radius:2vmax;
`

const Section2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;


`

const Title = styled.div`
    color: white;
    font-size: 4vmax;
`