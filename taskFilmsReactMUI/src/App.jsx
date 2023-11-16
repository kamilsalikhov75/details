import { useState } from 'react'
import { Header } from './Components/Header'
import { Filter } from './Components/Filter'
import './App.css'
import { Container } from '@mui/material'
import { Main } from './Components/Main'


function App() {
  return (
    <div style={{height: '100vh'}}>
      <Header />
      <Main />
    </div>



  )
}

export default App
