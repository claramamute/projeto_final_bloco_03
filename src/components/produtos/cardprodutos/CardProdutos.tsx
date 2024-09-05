
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'


interface CardProdutoProps{
    produto: Produto
}

function CardProdutos({produto}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-green-700 py-2 px-4 items-center gap-4">
          <img 
            src={produto.foto} 
            className='h-12 rounded-full' 
            alt="" />
      
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
          <p>{produto.preco}</p>
          <p>{produto.categoria?.nome}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarprodutos/${produto.id}`} className='w-full text-white bg-green-700 hover:bg-green-900 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarprodutos/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProdutos