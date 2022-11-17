import React, {useState} from 'react'
import styled from 'styled-components'
import TableHeader from './TableHeader'

const muchoTexto = [
    {
        question: '¿Cuántas mesas puedo agregar?',
        answer: 'No hay un límite para el número de mesas que puede tener tu restaurante.'
    }, {
        question: '¿Cuántos productos puedo tener en mi menú?',
        answer: 'No hay un límite para el número de productos que puede tener tu menú.'
    }, {
        question: '¿En qué dispositivos funciona la aplicación?',
        answer: 'Actualmente solo funciona para sistemas operativos Android, próximamente estará disponible para iOS.'
    }, {
        question: '¿Qué debo hacer si olvido mi usuario o contraseña?',
        answer: 'No me pagan lo suficiente.'
    }
]

function TableFAQ() {

    const [accordion, setAccordion] = useState(false)

    const toggle = index => {
        if(accordion === index) {

            return setAccordion()
        }

        setAccordion(index)
    }
  return (
    <>
    <TableHeader/>
    <FAQPage>
            <Titles>
                <Title>FAQ</Title>
                <Subtitle> Preguntas mas frecuentes</Subtitle>
            </Titles>
            <AccordionContainer>
                <Accordion>
                    {muchoTexto.map((item, index) => 
                            <>
                            <QuestionBox  onClick={() => toggle(index)} key={index}>
                                <Question>{item.question}</Question>
                                <QIcon>{accordion === index ? <TIcon>-</TIcon> : <TIcon>+</TIcon>}</QIcon>
                            </QuestionBox>
                            {accordion === index ? (
                                <QAnswer>
                                <Answer>{item.answer}</Answer>
                                </QAnswer>
                            ) : null}
                            </>  
                    )}
                </Accordion>
            </AccordionContainer>
    </FAQPage>
    </>
  )
}

export default TableFAQ

const FAQPage = styled.div `
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
    background-color: #F1EDE9;
`

const Titles = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Title = styled.div `
    text-align: center;
    font-size: 4rem;
    color: #58787a;
    font-weight: bold;
    padding: 2vh 0vh;
`

const Subtitle = styled.div `
    text-align: center;
    font-size: 2.25rem;
    color: #58787a;
`
const AccordionContainer = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
`

const Accordion = styled.div `
    margin-top: 3vh;
    margin-bottom: 4vh;
    display: flex;
    
    flex-direction: column;
    width: 90%;
`

const QuestionBox = styled.div `
    color: #252525;
    border-color: #252525;
    border-radius: 2vh;
    margin-top: 3vh;
    border: 2px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #252525;
        color: #afeff4;
    }
`

const Question = styled.div `
    padding: 2rem;
    font-size: 2rem;
`

const QIcon = styled.div `
    margin-right: 1.5rem;
`

const QAnswer = styled.div `
    background: #afeff4d9;
    color: #252525;
    width: 100%;
    height: calc(24vh - 5vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border: 2px solid #F1EDE9;
    border-radius: 2vh;
`

const Answer = styled.div `
    font-size: 1.45rem;
    padding: 2rem;
    font-weight: 600;
`

const TIcon = styled.div `
    font-size: 2rem;
`