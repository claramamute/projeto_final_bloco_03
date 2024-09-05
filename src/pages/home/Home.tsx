import ListaProdutos from '../../components/produtos/listaprodutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalprodutos/ModalProduto';
import './Home.css';

function Home() {
  return (
    <>
      <div className="
        fundoHome
        flex
        items-center
        justify-center
        
      ">
        <div className="
          text-center
          text-white
          flex
          flex-row
          items-center
          gap-10
        ">
          <h2 className="
            text-8xl
            font-bold
            font-poppins
          ">
            Olá
          </h2>
          <div className="
            flex
            flex-col
            items-center
          ">
            <p className="text-6xl uppercase font-poppins font-bold">
              Seja bem-vindo
            </p>
            <p className='text-4xl font-bold'>
              Farmácia bem-estar 
            </p>
           
          </div>
          <div className="flex justify-around gap-4">
              <ModalProduto />
              
            </div>
        </div>
      </div>
        <ListaProdutos/>
      
    </>
  );
}

export default Home;
