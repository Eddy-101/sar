import {useState} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

type Inputs = {
  example: string,
  exampleRequired: string,
};

const CreateData = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = status => {

    const data = {
      ...status,
      user: 1
    }
    
    axios.post('http://localhost:8000/api/v1/users/status/', data)
    navigate('/status')
  };

  return (
    <div className="w-[80%] m-auto">
      <h2 className="mb-5 uppercase">Agregar Datos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm">Altura</span>
            <input type="number" {...register("height", {required: true})} className="outline-none border border-black"/>
            {errors.height && <span className="text-red text-xs">La altura es requerida</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Peso</span>
            <input type="number" {...register("weight", {required: true})} className="outline-none border border-black"/>
            {errors.weight && <span className="text-red text-xs">El peso es requerida</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Perimetro cadera</span>
            <input type="number" {...register("hip", {required: true})} className="outline-none border border-black"/>
            {errors.pc && <span className="text-red text-xs">El perimetro de cadera es requerido</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Perimetro cintura</span>
            <input type="number" {...register("waist", {required: true})} className="outline-none border border-black"/>
            {errors.pca && <span className="text-red text-xs">El perimetro de cintura es requerido</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Tension Arterial Maxima</span>
            <input type="number" {...register("maximum_pressure", {required: true})} className="outline-none border border-black"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Tension Arterial Minima</span>
            <input type="number" {...register("minimum_pressure", {required: true})} className="outline-none border border-black"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">IMC</span>
            <input type="number" {...register("imc", {required: true})} className="outline-none border border-black" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Fecha</span>
            <input type="date" {...register("date", {required: true })} className="outline-none border border-black"/>
          </label>
        </div>
        <button type="submit" className="py-2 px-3 bg-blue text-white rounded text-sm">Agregar</button>
      </form>
    </div>
  )
}

export default CreateData;
