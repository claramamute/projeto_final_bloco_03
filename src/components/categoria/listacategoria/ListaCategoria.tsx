import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import CardCategoria from "../cardcategoria/CardCategoria"

function ListaCategoria() {

  const navigate = useNavigate()

  const [categorias, setCategoria] = useState<Categoria[]>([])

  async function buscarCategorias(){
    try{
      await buscar('/categorias', setCategoria)
    } catch(error){
      alert('Erro ao listar categorias')
      navigate('/')
    }
  }
  
  

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])


  return (
    <>
        <div className="flex justify-center w-full py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {categorias.map((categoria) => (
                
                <CardCategoria key={categoria.id} categoria={categoria}/>
              ))}
            </div>
        </div>
    </>
  )
}

export default ListaCategoria