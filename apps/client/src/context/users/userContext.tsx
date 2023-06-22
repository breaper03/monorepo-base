/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from 'react'
import { CurrentUser, User } from '../../interfaces/user.interface'
import React from 'react'
import { getAllUsers, addUser, logInUser, logOutUser } from '../../api/user'

interface UserContexValue {
  usersList: User[]
  currentUser: User
  createUser: (user: User) => Promise<void>
  userLogIn: (user: User) => Promise<unknown>
  userLogOut: (user: User) => Promise<unknown>
}

export const UserContext = createContext<UserContexValue>({
  usersList: [],
  currentUser: {name: "", password: "", signed: ""},
  createUser: async (user) => {},
  userLogIn: async (user) => {},
  userLogOut: async (user) => {}
})

interface Props {
  children: React.ReactNode
}

export const UserProvider: React.FC<Props> = ({children}) => {
  let LogInOut = false
  const [usersList, setUsersList] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<CurrentUser>({
    name: '',
    password: '',
    token: ''
  })

  useEffect(() => {
    getAllUsers()
        .then(data => {
          setUsersList([...data])
          getCurrent(data)
        });
  }, [])

  useEffect(() => {
    getAllUsers()
        .then(data => {
          getCurrent(data)
        });
  }, [LogInOut])

  const createUser = async (user: User) => {
    const res = await addUser(user)
    const data: User = await res.json()
    setUsersList([...usersList, data])
  }

  const userLogIn = async (user: User) => {
    const res = await logInUser(user)
    const data = await res.json()
    const users = await getAllUsers()
    const { token } = users.find((res: User) => res.name === user.name)

    localStorage.setItem('token', token)
    setCurrentUser({...data})
    LogInOut = true
  }

  const userLogOut = async (user: User) => {
    await logOutUser(user)
    setCurrentUser({name: "", password: "", signed: "", token: ""})
    localStorage.removeItem('token')
    LogInOut = false
  }

  const getCurrent = (data: User[]) => {
    const token = localStorage.getItem('token')
    const users = data

    if (token !== null) {
      const current = users.find((user: User) => user.token === token)
      current ? setCurrentUser(current) : setCurrentUser({name: "", password: "", signed: "", token: ""})
    } else {
      setCurrentUser({name: "", password: "", signed: "", token: ""})
    }
  }

  return (
    <UserContext.Provider value={{usersList, currentUser, createUser, userLogIn, userLogOut}}>
      {children}
    </UserContext.Provider>
  )
}


