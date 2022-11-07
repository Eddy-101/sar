import {AiOutlineDownload,  AiOutlineTable, AiOutlineLogout} from 'react-icons/ai'
import {GrDocumentUpdate} from 'react-icons/gr';
import {CgProfile} from 'react-icons/cg'
import {Outlet} from 'react-router-dom';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios'

const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [user, setUser] = useState([])
  const [state, setState] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users/user/')
      .then(response => setUser(response.data))
      .catch(error => new Error(error))
  }, [])

  const handleClick = () => {
    if (localStorage.getItem('token')) localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="w-[100%]">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold mb-5 text-center text-3xl">S. A. R.</h1>
        <button onClick={handleClick} className="flex items-center gap-1 px-3 py-1 bg-black rounded-full text-white">
          <AiOutlineLogout />
          Logout
        </button>
      </div>
      <div className="w-[100%] h-[200px] bg-blue relative mb-[130px]">
        <img className="absolute left-0 top-0 w-full h-full object-cover" src="https://codeworkshop.dev/static/350e6cb1b81f18a6053b50450249a7da/8ec0a/ibiza_sunset.jpg" alt="banner image" /> 
        <div className="absolute bottom-[-80px] flex items-end justify-between w-full px-[50px]">
          <div className="flex items-end gap-2">
            <div className="w-[200px] h-[200px] rounded-full bg-black overflow-hidden border-8 border-blue">
              <img className="w-full h-full object-cover" src={`http://localhost:8000/${user.image}`} alt="image profile" />
            </div>
            <div className="flex text-black gap-1 flex-col pb-5">
              <h1 className="text-lg">Maria Rosales Espinoza</h1>
              <div className="flex items-center text-sm justify-between">
                <span><strong>Edad:</strong> {user.age} años</span>
                <span><strong>Peso:</strong> 65 kg</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className={`rounded font-bold uppercase mb-2 ${ user.state == 'i' && "text-red"} ${user.state == 'r' && "text-blue"}`}>
              Estado { user.state == 'r' && "Regular"}
               { user.state == 'i' && "Irregular"}
               { user.state == 's' && "Saludable"}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[90%] mx-auto">
        <nav className="flex flex-col w-[10%] items-center">
          <Link className={`${location.pathname == '/' && 'bg-blue text-white'} py-3 hover:bg-blue hover:text-white w-[100%] flex items-center justify-center gap-1 text-md`} to="/"><CgProfile /> Perfil</Link>
          <Link className={`${location.pathname == '/update' && 'bg-blue text-white'} py-3 hover:bg-blue hover:text-white w-[100%] flex items-center justify-center gap-1 text-md`} to="/update"><GrDocumentUpdate /> Actualizar</Link>
          <Link className={`${location.pathname == '/status' && 'bg-blue text-white'} py-3 hover:bg-blue hover:text-white w-[100%] flex items-center justify-center gap-1 text-md`} to="/status"><AiOutlineTable /> Estado</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;
