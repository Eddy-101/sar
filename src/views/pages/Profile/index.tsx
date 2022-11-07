import {useEffect, useState} from 'react';
import LineChart from '../../../components/LineChart'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users/user/')
      .then(response => setUser(response.data))
      .catch(error => new Error(error))
  }, [])

  return (
    <div className="px-10 w-[90%]">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="font-semibold text-xl mb-3">Informacion Personal</h2>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-md font-semibold">Correo Electronico</h3>
              <span>{user.email}</span>
            </div>
            <div>
              <h3 className="text-md font-semibold">Peso Objetivo</h3>
              <span>{user.objective_weight}Kg</span>
            </div>
            <div>
              <h3 className="text-md font-semibold">Indice Cintura-Cadera</h3>
              <span>0,89 cm</span>
            </div>
            <div>
              <h3 className="text-md font-semibold">Grasa Corporal</h3>
              <span>27%</span>
            </div>
            <div>
              <h3 className="text-md font-semibold">Descripcion basica</h3>
              <span>{user.description}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-3">Datos</h2>
          <div className="flex justify-around mb-10">
            <div className="bg-red flex flex-col w-[90px] h-[90px] text-2xl rounded items-center justify-center">
              <span className="font-bold">68<span className="text-sm">Kg</span></span>
              <span className="text-xs text-center">IMC</span>
            </div>
            <div className="bg-red flex flex-col w-[90px] h-[90px] text-2xl rounded items-center justify-center">
              <span className="font-bold">58<span className="text-sm">Cm</span></span>
              <span className="text-xs text-center">Altura</span>
            </div>
            <div className="bg-red flex flex-col w-[90px] h-[90px] text-2xl rounded items-center justify-center">
              <span className="font-bold">58<span className="text-sm">Cm</span></span>
              <span className="text-xs text-center">Perimetro Cintura</span>
            </div>
            <div className="bg-red flex flex-col w-[90px] h-[90px] text-2xl rounded items-center justify-center">
              <span className="font-bold">58<span className="text-sm">Cm</span></span>
              <span className="text-xs text-center">Perimetro Cadera</span>
            </div>
          </div>
          <div className="w-[500px]">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
