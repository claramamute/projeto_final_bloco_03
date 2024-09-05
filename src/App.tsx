
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ListaCategoria from './components/categoria/listacategoria/ListaCategoria'
import CadastrarCategoria from './components/categoria/formcategoria/CadastrarCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import CadastroProduto from './components/produtos/cadastrarprodutos/CadastroProduto'
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProdutos'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className= 'min-h-[80vh] fundoApp'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path= "/cadastrarcategoria" element= {<CadastrarCategoria/>} />
            <Route path="/editarcategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastrarprodutos/:id" element={<CadastroProduto />} />
            <Route path="/editarprodutos/:id" element={<CadastroProduto />} />
            <Route path="/deletarprodutos/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
