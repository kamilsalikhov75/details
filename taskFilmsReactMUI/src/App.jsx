import { useState } from 'react'
import { Header } from './Components/Header'
import { Filter } from './Components/Filter'
import './App.css'
import { Container } from '@mui/material'
import { Main } from './Components/Main'
import { useContext } from 'react'
import { Layout } from './Components/Layout'
// import { TokenProvider } from './utils/userContext'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { FilmWindow } from './Components/FilmWindows'
import ErrorPage from './utils/error-page'
import {createStore} from 'redux'
import { tokenReducer } from './reducers/tokenReducer'
import {Provider} from 'react-redux'


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


const store = createStore(tokenReducer)

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

// function App() {
//   return (
//     <TokenProvider>
//       <RouterProvider router={router}/>
//     </TokenProvider>
//   )
// }

export default App
