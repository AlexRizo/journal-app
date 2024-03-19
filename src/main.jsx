import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AppRouter } from './router/AppRouter'
import { store } from './store';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ createBrowserRouter(AppRouter) } />
    </Provider>
  </React.StrictMode>,
)
