import { useState } from 'react'
import { Box, Checkbox, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'

import { InputUsage } from './components/Input'
import { TaskList } from './components/Task'
import { TasksProvider } from './components/TaskContext'

import './App.css'


function App() {
  
  return (
    <TasksProvider>
      <Container fixed sx={{
        width: '514px', height: '766px', border: 1, borderColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }} >
        <Container fixed sx={{
          width: '450px', height: '702px', flexShrink: 0, border: 1, borderColor: 'black'
        }}>
          <div className='title'>
            <Typography variant='h4' color={'primary'} sx={{
              display: 'inline-flex',
              padding: '12px',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>TODO</Typography>
          </div>
          <div className='add__bar'>
            <InputUsage/>
          </div>
          <TaskList/>
        </Container>
      </Container >
    </TasksProvider>
  )

}

export default App
