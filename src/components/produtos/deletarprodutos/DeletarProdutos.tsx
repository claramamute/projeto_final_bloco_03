import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import {   buscar, deletar } from "../../../services/Service"

import Produto from "../../../models/Produto"



function DeletarProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

   

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error) {
           alert('Houve um erro')
        }
    }


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
       

        try {
            await deletar(`/produtos/${id}`)

            alert('Produto apagado com sucesso')

        } catch (error) {
            
                alert('Erro ao deletar produto.')
            
        }

        
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }
    
    return (
        <div className='container text-green-900 w-1/3 mx-auto '>
            <h1 className='text-4xl text-center  my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-green-700 text-white font-bold text-2xl'>
                   Produto
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{produto.nome}</p>
                    <p>{produto?.categoria?.nome}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 hover:bg-red-400 bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-green-700
                        hover:bg-green-400 flex items-center justify-center'
                        onClick={deletarProduto}>
                       
                            <span>Sim</span>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto