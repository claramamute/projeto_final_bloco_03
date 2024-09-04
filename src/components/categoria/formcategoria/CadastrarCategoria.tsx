import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service"


function CadastrarCategoria() {

  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>(
    {} as Categoria
  )

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id:string) {
    try{
      await buscar(`/categorias/${id}`, setCategoria)

    } catch(error){
      alert('Ocorreu um erro')
    }
  }


  useEffect(() =>{
    if(id !== undefined){
      buscarPorId(id)
    }
  }, [id])


  function retornar() {
    navigate('/categorias')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setCategoria({
      ...categoria,
      [e.target.name] : e.target.value
    })
  }

  async function gerarCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(id !== undefined){
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        alert('Categoria atualizada com sucesso!')
        retornar()

      } catch (error) {
       
        alert('Houve algum erro!');
      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)

        alert('Categoria cadastrada com sucesso!')
        retornar()

      } catch (error: any) {
        console.error('Erro ao cadastrar:', error.response?.data || error.message);
        alert('Houve algum erro!');
      }

      
    }
    
  }

  return (
    <>
    <div className="flex flex-col justify-center container mx-auto items-center">
      <h1 className="text-4xl text-center my-8  text-green-900">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form
        onSubmit={gerarCategoria}
        className="w-1/2 flex flex-col gap-4">

        <div className="flex flex-col gap-2 text-green-900 font-semibold" >
          <label htmlFor="tipo">Descrição da Categoria:</label>
          <input type="text" id="nome" name="nome" placeholder="Descrição" className="border-2 border-green-600 bg-white rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button className="rounded  bg-green-800 text-slate-50 hover:bg-green-600 w-1/2 py-2 mx-auto flex  justify-center"
          type="submit">
            {id === undefined ? 'Cadastrar' : 'Atualizar'}
        </button>
      </form>

    </div>
  </>
    
  )
}

export default CadastrarCategoria