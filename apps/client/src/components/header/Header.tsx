import { useUser } from "../../context/users/useUser"
import { HiBell } from "react-icons/hi";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Tooltip } from "@mui/material";
export const Header = () => {
  const {currentUser, userLogOut} = useUser()

  const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Manage', href: '/manage', current: false },
    { name: 'Calendar', href: '/calendar', current: false },
  ]

  return (
    <>
      <div className="w-full px-8 py-5 bg-[#1f2937] flex flex-wrap items-center justify-around">
        {/* left */}
        <div className="px-3 py-2 rounded-lg">
          <h2 className="text-slate-200 font-semibold text-2xl"><span className="text-indigo-300">M</span>oney<span className="text-indigo-300">M</span>anager</h2>
        </div>
        {/* center */}
        <div className="flex flex-wrap items-center justify-around text-[1em] list-none">
          {
            navigation.map((nav) => (
              <div className="mx-2" key={Math.random()}>
                <a href={nav.href} className="px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-500 rounded-md">{nav.name}</a>
              </div>
            ))
          }
        </div>
        {/* right */}
        <div className="flex flex-wrap items-center justify-between"> {/* DropDown */}
          <button 
            onClick={() => alert('notifications')} 
            className="text-white border-2 border-white rounded-3xl p-2 mx-2"
          >
            <HiBell />
          </button>
          {
            currentUser.name
              ? (
                <div className="flex flex-wrap justify-around items-center" >
                  <button 
                    className="text-[1em] text-slate-400"
                  >
                    <Tooltip title="My Account">
                      <a href="/user-profile" className="bg-slate-600 rounded-3xl flex flex-wrap items-center p-1">
                        <span className="mx-2">{currentUser.name}</span>
                        <div className="text-[2em] text-white">
                          <FaUserCircle />
                        </div>
                      </a>
                    </Tooltip>
                  </button>
                  <Tooltip title="Sign Out">
                    <button 
                      onClick={() => userLogOut(currentUser)} 
                      className="text-white border-2 border-white rounded-3xl p-2 mx-2"
                    >
                      <FaSignOutAlt />
                    </button>
                  </Tooltip>
                  <div className="text-white" >

                  </div>
                </div>
              ) : (
                <>
                  <button 
                    className="text-[1em] text-slate-400"
                  >
                    <a href="/user-login" className="bg-slate-600 rounded-3xl flex flex-wrap items-center p-1">
                      <span className="mx-2">Login</span>
                      <div className="text-[1em] text-slate-400 bg-slate-100 p-2 rounded-3xl">
                        <FaSignInAlt />
                      </div>
                    </a>
                  </button>
                </>
              )
          }
        </div>
      </div>
    </>
  )
}
