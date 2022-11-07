import {useState, useEffect} from 'react';

import axios from 'axios'

const Status = () => {
  const [status, setStatus] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users/status/')
      .then((response) => setStatus(response.data))
      .catch(error => new Error(error.message))
  },[])

  return (
    <div className="w-[90%] px-10">
      <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="py-3 px-6">
                        Fecha
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Peso (Kg)
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Altura
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Perimetro Cintura (cm)
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Perimetro Cadera (cm)
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Tension Arterial Maxima
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Tension Arterial Minima
                      </th>
                      <th scope="col" className="py-3 px-6">
                        IMC
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                  status.map(data => {
                    return (
                      <tr className="bg-white dark:bg-gray-800" key={data.id}>
                          <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                            {data.date}
                          </th>
                          <td className="py-4 px-6">
                            {data.weight}
                          </td>
                          <td className="py-4 px-6">
                            {data.height}
                          </td>
                          <td className="py-4 px-6">
                            {data.hip}
                          </td>
                          <td className="py-4 px-6">
                            {data.waist}
                          </td>
                          <td className="py-4 px-6">
                            {data.maximum_pressure}
                          </td>
                          <td className="py-4 px-6">
                            {data.minimum_pressure}
                          </td>
                          <td className="py-4 px-6">
                            {data.imc}
                          </td>
                      </tr>
                    )
                  })
                }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Status;
