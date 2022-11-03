import {AiOutlineDownload} from 'react-icons/ai';
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-[100%]">
      <h1 className="text-xl font-semibold mb-5">Profile</h1>
      <div className="w-[100%] h-[200px] bg-blue relative mb-[130px]">
        <img className="absolute left-0 top-0 w-full h-full object-cover" src="https://wallpapercave.com/wp/wp3203389.jpg" alt="banner image" />
        <div className="absolute bottom-[-80px] left-[50px] flex items-end justify-between w-full pr-[80px]">
          <div className="flex items-end gap-2">
            <div className="w-[200px] h-[200px] rounded-full bg-black overflow-hidden border-8 border-blue">
              <img className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4bWG2aS2z_ao8B5ad7ry837IeOg_Ki2hTg&usqp=CAU" alt="image profile" />
            </div>
            <div className="flex text-black gap-1 flex-col pb-5">
              <h1 className="text-lg">Maria Rosales Espinoza</h1>
              <div className="flex items-center text-sm justify-between">
                <span><strong>Edad:</strong> 28 years</span>
                <span><strong>Peso:</strong> 65 kg</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded text-blue font-bold uppercase mb-2">
              Estado Saludable
            </div>
            <button className="flex items-center justify-center gap-1 rounded-full bg-blue p-2 text-white hover:bg-black">
              <AiOutlineDownload />
              <span className="text-sm">Download Info</span>
            </button>
          </div>
        </div>
      </div>

      <Outlet />

    </div>
  )
}

export default Home;
