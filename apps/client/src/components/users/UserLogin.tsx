import { ChangeEvent, FormEvent, useState } from "react"
import { useUser } from "../../context/users/useUser"
import { Header } from "../header/Header"
import { redirect } from "react-router-dom"

export const UserLogin = () => {
  const {usersList, userLogIn} = useUser()
  const [newUser, setNewUser] = useState({
    name: "",
    password: ""
  })
  const [Error, setError] = useState({
    message: '',
    error: false
  })

  


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const obj = {...newUser, [e.target.name]: e.target.value}
    setNewUser(obj)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usersList.find(user => user.password === newUser.password)) {
      setError({message:'Datos incorrectos ...', error: true})
    } if (!usersList.find(user => user.name == newUser.name)) {
      setError({message:'Datos incorrectos ...', error: true})
    } else {
      userLogIn(newUser).then(() => redirect('/'))
      setError({message: 'Inicio de sesion correcto', error: false})
    }
}

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800 h-[93.2vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Inicia sesion en tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-white">
                Nombre de Usuario {
                  Error.error === true 
                    ? <p className="text-red-300">{Error.message}</p> 
                    : <p className="text-green-300">{Error.message}</p>
                  }
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvido su contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesion
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No eres miembro?{' '}
            <a href="/user-register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Crea una cuenta ...
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
