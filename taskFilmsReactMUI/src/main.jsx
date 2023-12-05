import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './utils/error-page.jsx'
import { FilmCard } from './Components/FilmCard.jsx'
import { FilmWindow } from './Components/FilmWindows.jsx'
import { FilmGrid } from './Components/FilmGrid.jsx'
import { Layout } from './Components/Layout.jsx'
import { Main } from './Components/Main.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
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

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
