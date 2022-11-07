import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js"
import {Line} from 'react-chartjs-2'
import {faker} from '@faker-js/faker'
import {useState, useEffect} from 'react';

import axios from 'axios'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Estado Fisico por fechas',
    },
  },
};



export default function LineChart() {
  const [status, setStatus] = useState([])
  const [labels, setLabels] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/users/status/')
      .then((response) => {
        setStatus(response.data)
        const array = []
        response.data.forEach(data => array.push(data.date))
        setLabels(array)
      })
      .catch(error => new Error(error.message))

  },[])

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: status.map((data) => faker.datatype.number({ min: data.minimum_pressure, max: data.maximum_pressure })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: status.map((data) => faker.datatype.number({ min: -100, max: 100 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
