import {FcGoogle} from 'react-icons/fc'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data: any) => {
    const response = await axios.post('http://localhost:8000/api/v1/users/login/', data)
    localStorage.setItem('token', response.data.token)
    navigate('/')
  }

  return (
    <div className="bg-gradient-to-r from-purple to-blue w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-white w-[400px] p-[40px] rounded">
        <h1 className='text-black font-semibold text-2xl text-center mb-8'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="flex flex-col w-[100%] gap-2 mb-4">
            <span>Email</span>
            <input 
              type="email" 
              {...register('email', {required: true})} 
              className="border boder-black outline-none h-[40px] px-1"
            />
            {errors.email && <span className="text-xs text-red">El email es requerido</span>}
          </label>
          <label className="flex flex-col w-[100%] gap-2 mb-4">
            <span>Password</span>
            <input 
              type="password" 
              {...register('password', {required:true})} 
              className="border boder-black outline-none h-[40px] px-1"
            />
            {errors.password && <span className="text-xs text-red">El password es requerido</span>}
          </label>
          <label className="flex items-center gap-2 mb-5">
            <input type="checkbox" />
            <span className="text-xs">Mantenerme Conectado</span>
          </label>
          <button type="submit" className="w-[100%] bg-blue py-3 text-white rounded">Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
