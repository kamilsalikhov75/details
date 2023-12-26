import './App.css'
import { Container } from '@mui/material'
import { Main } from './Components/Main'
import { useContext } from 'react'
import { Layout } from './Components/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { FilmWindow } from './Components/FilmWindows'
import ErrorPage from './utils/error-page'

import {Provider} from 'react-redux'
import { store } from './store'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
      errorElement={<ErrorPage/>}
    >
      <Route
        path='' element={<Main />}
      />
      <Route
        path='/film/:id' element={<FilmWindow />}
      />
    </Route>
  )
)




function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
