import React, {useState} from 'react'
import styled from 'styled-components'

const muchoTexto = [
    {
        question: '¿Cuántas personas puedo agregar a una sala?',
        answer: 'El número máximo de personas que pueden pertenecer a una sala son 10.'
    }, {
        question: '¿A cuántas salas puedo pertenecer?',
        answer: 'No hay un límite para el número de salas a las que puede pertenecer una persona.'
    }, {
        question: '¿En qué dispositivos funciona la aplicación?',
        answer: 'Actualmente solo funciona para sistemas operativos Android, próximamente estará disponible para iOS.'
    }, {
        question: '¿Qué debo hacer si olvido mi usuario o contraseña?',
        answer: 'No me pagan lo suficiente.'
    }
]

function FAQ() {

    const [accordion, setAccordion] = useState(false)

    const toggle = index => {
        if(accordion === index) {

            return setAccordion()
        }

        setAccordion(index)
    }

  return (
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
  )
}

export default FAQ

const FAQPage = styled.div `
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    flex-direction: column;
`

const Titles = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Title = styled.div `
    text-align: center;
    font-size: 4rem;
    color: #500A1E;
    font-weight: bold;
    padding: 2vh 0vh;
`

const Subtitle = styled.div `
    text-align: center;
    font-size: 2.25rem;
    color: #500A1E;
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
    color: #8b1638;
    border-color: #8b1638;
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
        background-color: #8b1638;
        color: #F1EDE9;
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
    background: #8b1638d9;
    color: #F1EDE9;
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
`

const TIcon = styled.div `
    font-size: 2rem;
`