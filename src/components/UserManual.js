import React from 'react'
import styled from 'styled-components'
import AlbumHeader from './AlbumHeader'

function UserManual() {

  return (
    <>
    <AlbumHeader/>
      <ManualPage>
        <Title>Descubre como utilizar correctamente todas las funcionalidades que Album Club tiene para ofrecerte.</Title>
        <iframe width="85%" height="600vh" src="https://www.youtube.com/embed/IPNMhn1eM34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </ManualPage>
    </>
    
  )
}

export default UserManual

const ManualPage = styled.div `
    display: flex;
    height: max-content;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    background-color: #F1EDE9;
    padding-bottom: 4vmax;

`

const Title = styled.h1 `
    text-align: center;
    font-size: 8vmin;
    color: #500A1E;
    width: 90%;
`