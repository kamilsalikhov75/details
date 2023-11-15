import { useState } from 'react'
import { Header } from './Components/Header'
import { Filter } from './Components/Filter'
import './App.css'
import { Container } from '@mui/material'
import { Main } from './Components/Main'


function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>



  )
}

export default App
