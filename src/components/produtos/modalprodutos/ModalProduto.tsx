import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';

import './ModalProduto.css'
import CadastroProduto from "../cadastrarprodutos/CadastroProduto";

function ModalPostagem() {
  return (
    <>
    <Popup
    trigger={<button className='border rounded px-6 py-6 hover:bg-white hover:text-green-700 font-semibold' >Novo Produto</button>} modal>
        <div>
            <CadastroProduto/>
        </div>
    </Popup>
    </>
  )
}

export default ModalPostagem