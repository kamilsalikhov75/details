import { useState } from 'react'
import { Header } from './Components/Header'
import { Filter } from './Components/Filter'
import './App.css'
import { Container } from '@mui/material'
import { Main } from './Components/Main'
import { useContext } from 'react'
import { Layout } from './Components/Layout'
import { TokenProvider } from './utils/userContext'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <TokenProvider>
        <Layout />
      </TokenProvider>

    </div>
  )
}

export default App
