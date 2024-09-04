
import { Heart, MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="flex flex-col bg-slate-200">
        <div className="flex justify-center items-center p-2  bg-blue-neon">
          <p className="fs text-green-600 font-extrabold uppercase ">Frete grátis para todo Brasil!</p>
        </div>

        <div className="flex justify-between items-center p-8 bg-green-700">
     
          <div className="w-1/3 flex justify-center">
            <a href="/">
              <img src="https://ik.imagekit.io/image2233/logofar?updatedAt=1725451343173" alt="Logo-farmacia" className="" />
            </a>
          </div>

        
          <div className="w-1/3 flex justify-center items-center gap-2">
            <input type="text" name="buscar" id="buscar" placeholder="Busque o que precisa"  className="w-full p-2 border border-blue-neon rounded bg-green-700" />
            <label htmlFor="buscar"><MagnifyingGlass size={32} color="#ffff" /></label>
          </div>

         
          <div className="w-1/3 flex justify-end">
            <ul className="flex justify-center items-center gap-6">
              <li><a href=""><User size={32} color="#ffff" /></a></li>
              <li><a href=""><Heart size={32} color="#ffff" /></a></li>
              <li><a href=""><ShoppingCart size={32} color="#ffff" /></a></li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex justify-around p-4 bg-green-700 font-poppins font-semibold text-white uppercase">
        
            <li  className=" hover:text-lime-400"><Link to=''>Produtos </Link></li>
            <li  className="  hover:text-lime-400"><Link to='/categorias'>Categorias </Link></li>
            <li  className="  hover:text-lime-400"><Link to='/cadastrarcategoria'>Cadastrar Categoria </Link></li>
            <li  className=" hover:text-lime-400"><Link to='' >Sair</Link></li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
