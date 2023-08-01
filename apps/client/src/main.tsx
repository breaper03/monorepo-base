import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Users } from './components/users/Users'
import { UserLogin } from './components/users/UserLogin'
import { Dashboard } from './components/dashboard/Dashboard'
import { UserRegister } from './components/users/UserRegister'
import { UserProvider } from './context/users/userContext'
import { TasksProvider } from './context/tasks/tasksContext'
import { Header } from './components/header/Header'
import { ThemeProvider } from '@material-tailwind/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/user-register',
    element: <UserRegister />
  },
  {
    path: '/user-login',
    element: <UserLogin />
  },
  {
    path: '/user',
    element: <Users />
  },
  {
    path: '/user-profile',
    element: <Users />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <TasksProvider>
          <Header />
          <RouterProvider router={router} /> 
        </TasksProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
)
