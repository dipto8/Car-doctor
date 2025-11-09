
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import { useContext } from 'react'

function PrivateRouter({children}) {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
  return (
    <NavLink to='/login' replace></NavLink>
  )
}

export default PrivateRouter