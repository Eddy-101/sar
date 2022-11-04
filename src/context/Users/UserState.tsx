import {useReducer} from 'react'
import UserReducer from './UserReducer'
import UserContext  from './UserContext'
import axios from 'axios';

const UserState = ({children}: {children: React.ReactNode}) => {
  const initialState = {
    profile: [],
    isAuthenticated: false
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUser = async () => {
    await axios.get('');
  }

  const Login = async (data: {email: string, password: string}) => {
    const response = await axios.post('http:localhost:8000/api/v1/users/login/', {
      data: data,
      "Content-Type": "application/json"
    })

    console.log(response)
  }

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  )
}


export default UserState;
