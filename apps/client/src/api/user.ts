import { User } from "../interfaces/user.interface"


const API = `http://localhost:9999/users`

export const addUser = (user: User) => 
    fetch(`${API}/create`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })


export const getAllUsers = async () => {
    const res = await fetch(`${API}`)
    const data = await res.json()
    return data
}

export const getUserById = async (_id: string): Promise<User> => {
    const res = await fetch(`${API}/${_id}`)
    const data = await res.json()
    return data
}

export const logInUser = async (user: User) => 
    await fetch(`${API}/login`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const logOutUser = async (user: User) => 
    await fetch(`${API}/login`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
