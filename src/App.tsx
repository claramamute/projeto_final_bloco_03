
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ListaCategoria from './components/categoria/listacategoria/ListaCategoria'
import CadastrarCategoria from './components/categoria/formcategoria/CadastrarCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'

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
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
