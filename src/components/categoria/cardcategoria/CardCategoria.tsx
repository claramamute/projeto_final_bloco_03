import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps{
  categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <>
        <div className="overflow-hidden justify-between  rounded-2xl text-slate-50 flex flex-col w-96">
            <h2 className="bg-green-700 font-bold text-2xl py-2 px-6 font-poppins">Categoria</h2>
            <p className="bg-slate-200 text-3xl text-green-900 font-semibold p-8 h-full  ">{categoria.nome}</p>
           
            <div className="flex ">
                <Link to={`/editarcategoria/${categoria.id}`} className="bg-green-700 hover:bg-green-600 w-full text-white flex  justify-center  py-2 items-center">
                     <button>Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} className="bg-red-500 hover:bg-red-400 w-full text-white flex justify-center  py-2 items-center">
                     <button >Deletar</button>
                </Link>
            </div>
            
        </div>
    </>
  )
}

export default CardCategoria