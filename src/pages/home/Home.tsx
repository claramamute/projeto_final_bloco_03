import './Home.css';

function Home() {
  return (
    <>
     <div className="
    fundoHome
    flex
    justify-center 
    ">
      <div className="
      container
      grid
      grid-cols-2
      text-white
      items-center justify-center">
        <div className="
        flex
        flex-col
        gap-6
        items-center
        justify-center
        py-4
      
        ">
          <div className='flex items-center gap-10'>
            <h2
            className="text-8xl
            font-bold
            text-slate-50
            font-poppins
            ">
              Olá
            </h2>

            <div className='flex flex-col items-center justify-center'>
              <p className="text-4xl uppercase font-poppins  text-slate-50 font-bold">
                Seja bem-vindo
              </p>
              <p className='text-2xl font-bold'>
                Farmácia bem-estar
              </p>
            </div>
          </div>

            <div className="flex justify-around gap-4">

              <div className="rounded border-blue-neon border-solid border-2 py-2 px-4 text-slate-50 hover:bg-green-700 hover:text-slate-50  font-poppins font-bold">
                 Produtos
              </div>

            </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Home