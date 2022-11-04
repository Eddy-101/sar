import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true)
      navigate('/')
    }   
  },[])

  if(!isAuthenticated) return <Navigate to="/login" />

  return children
}

export default ProtectedRoute;
