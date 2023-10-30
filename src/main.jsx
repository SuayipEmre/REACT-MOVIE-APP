import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/app'
import routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>

)
