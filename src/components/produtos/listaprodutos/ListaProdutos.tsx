import { useEffect, useState } from "react"
import Produto from "../../../models/Produto"
import { useNavigate } from "react-router-dom"
import { buscar } from "../../../services/Service"
import CardProdutos from "../cardprodutos/CardProdutos"

function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    const navigate = useNavigate()

    async function buscarProdutos() {

        try{
          await buscar('/produtos', setProdutos)
    
        } catch (error){
          alert('Houve um erro!')
          navigate("/")
          
        }
        
      }
    
      useEffect(() =>{
        buscarProdutos()
      }, [produtos.length])

  return (
    <div>
        
      <div className='container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {produtos.map((produto) => (
          <CardProdutos key={produto.id} produto= {produto} />
        ))}
           
      </div>
    </div>
  )
}

export default ListaProdutos