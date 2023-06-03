/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useState } from 'react'
import { User } from '../../interfaces/user.interface'
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
  const [usersList, setUsersList] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User>({
    name: '',
    password: ''
  })

  useEffect(() => {
    getAllUsers()
        .then(data => setUsersList([...data]))
  }, [])

  const createUser = async (user: User) => {
    console.log(user)
    const res = await addUser(user)
    const data: User = await res.json()
    setUsersList([...usersList, data])
  }

  const userLogIn = async (user: User) => {
    const res = await logInUser(user)
    const data = await res.json()
    setCurrentUser(data)
  }

  const userLogOut = async (user: User) => {
    console.log(user)
    await logOutUser(user).then(() => {
      setCurrentUser({name: "", password: "", signed: ""})
    })
    console.log('currentUser', currentUser)
  } 

  return (
    <UserContext.Provider value={{usersList, currentUser, createUser, userLogIn, userLogOut}}>
      {children}
    </UserContext.Provider>
  )
}


