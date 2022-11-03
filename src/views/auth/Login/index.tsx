import {FcGoogle} from 'react-icons/fc';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-purple to-blue w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-white w-[400px] p-[40px] rounded">
        <h1 className='text-black font-semibold text-2xl text-center mb-8'>Login</h1>
        <button className="flex gap-5 items-center py-3 w-[100%] justify-center border rounded border-black"><FcGoogle size={25}/>Inicia sesion con Google</button>
        <div className="text-sm text-center text-black">No tienes una cuenta? <a href="#" className="font-semibold">Puedes crearla aqui</a></div>
        <hr className="my-10"/>
        <form>
          <label className="flex flex-col w-[100%] gap-2 mb-4">
            <span>Email</span>
            <input type="email" className="border boder-black outline-none h-[40px] px-1"/>
          </label>
          <label className="flex flex-col w-[100%] gap-2 mb-4">
            <span>Password</span>
            <input type="password" className="border boder-black outline-none h-[40px] px-1"/>
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
