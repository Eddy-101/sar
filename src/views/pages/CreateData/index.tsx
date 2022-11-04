import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const CreateData = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="w-[80%] m-auto">
      <h2 className="mb-5 uppercase">Agregar Datos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm">Altura</span>
            <input {...register("height", {required: true})} className="outline-none border border-black"/>
            {errors.height && <span>La altura es requerida</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Peso</span>
            <input {...register("weight", {required: true})} className="outline-none border border-black"/>
            {errors.weight && <span>El peso es requerida</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Perimetro cadera</span>
            <input {...register("pc", {required: true})} className="outline-none border border-black"/>
            {errors.pc && <span>El perimetro de cadera es requerido</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Perimetro cintura</span>
            <input {...register("pca", {required: true})} className="outline-none border border-black"/>
            {errors.pca && <span>El perimetro de cintura es requerido</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Tension Arterial Maxima</span>
            <input {...register("tamax", {required: true})} className="outline-none border border-black"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Tension Arterial Minima</span>
            <input {...register("tamin", {required: true})} className="outline-none border border-black"/>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm">Tension Arterial Minima</span>
            <input type="date" {...register("date", {required: true})} className="outline-none border border-black"/>
          </label>
        </div>
        <button type="submit" className="py-2 px-3 bg-blue text-white rounded text-sm">Agregar</button>
      </form>
    </div>
  )
}

export default CreateData;
