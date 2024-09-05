import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';


function CadastroProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();


  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
  });
  const [produto, setProduto] = useState<Produto>({} as Produto);


  async function buscarProdutoPorId(id: string) {

    try{
      await buscar(`/produtos/${id}`, setProduto);

    } catch (error){
        alert('Ocorreu um erro!')
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
        await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
        alert('Ocorreu um erro!')
    }
}

  async function buscarCategoria() {
    try {
      await buscar(`/categorias`, setCategorias)
  } catch (error) {
        alert('Ocorreu um erro!')
  }
}



  useEffect(() => {
    buscarCategoria();

    if (id != undefined) {
        buscarProdutoPorId(id);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();


    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert('Produto atualizado com sucesso')
        retornar();
      } catch (error) {    
          alert('Erro ao atualizar a Postagem')
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);

        alert('Produto cadastrado com sucesso');
        retornar();
      } catch (error: any) {
            alert('Erro ao cadastrar o Produto');
        
      }
    }
  }

  const carregandoCategoria = categoria.nome === '';

  return (
    <div className="container flex flex-col mx-auto items-center text-green-900 font-semibold">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do produto</label>
          <input
            type="text"
            placeholder="Titulo"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto </label>
          <input 
            type="text"
            placeholder="Foto"
            name="foto"
            
            className="border-2 border-slate-700 rounded p-2"
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço </label>
          <input 
            type="text"
            placeholder="Valor"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do Produto</p>
          <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.nome}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-green-400 hover:bg-green-700 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default CadastroProduto;