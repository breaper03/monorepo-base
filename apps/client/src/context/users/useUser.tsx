import { useContext } from "react";
import { UserContext } from "./userContext"
export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('los usuarios deberian estar dentro de un task provider')
  return context
}