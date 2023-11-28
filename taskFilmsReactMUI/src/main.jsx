import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './utils/error-page.jsx'
import { FilmCard } from './Components/FilmCard.jsx'
import { FilmWindow } from './Components/FilmWindows.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route
        path='/film/:kinopoiskId'
        element={<FilmWindow />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
