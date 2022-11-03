import {useReducer} from 'react'
import UserReducer from './userReducer'
import UserContext  from './userContext'
import axios from 'axios';

const UserState = ({children}: {children: React.ReactNode}) => {
  const initialState = {
    profile: [],
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUser = async () => {
    await axios.get('');
  }

  return (
    <UserContext.Provider 
      value={{
        profile: state.profile
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState;
