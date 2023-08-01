import { useTasks } from "../../../context/tasks/useTasks"
import { useUser } from "../../../context/users/useUser"


export const UserAccount = () => {
  const {currentUser} = useUser()
  const {getUserTask} = useTasks()
  const tasklist = getUserTask()

  return (
    <>
      <div className="flex flex-col items-start justify-center p-8">
        <h1 className='font-bold text-3xl text-white text-center w-full mb-5'>
          Mi cuenta
        </h1>
        <div className="bg-white shadow-lg rounded-lg w-full max-h-3/4 p-5">
          {/* Information */}
          <div className="">
            <h1 className="font-semibold text-xl">Mi informacion:</h1>
            <ul>
              <li>Nombre y Apellido: <span className="font-semibold">{currentUser.name} {currentUser.lastname}</span></li>
              <li>Nombre de Usuario: <span className="font-semibold">{currentUser.userName}</span></li>
              <li>Telefono: <span className="font-semibold">{currentUser.phone}</span></li>
              <li>Correo Electronico: <span className="font-semibold">{currentUser.email}</span></li>
              <li>Balance: en desarrollo</li>
              <li>Numero de transacciones: <span className="font-semibold">{tasklist.length}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};
