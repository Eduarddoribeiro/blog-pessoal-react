import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/tema/cardtema/listatemas/ListaTemas'
import FormTema from './components/tema/cardtema/formtema/FormTema'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import ListaPostagens from './components/postagem/listapostagens/ListaPostagens'
import FormPostagem from './components/postagem/formpostagem/FormPostagem'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/cadastro" element={<Cadastro />}></Route>
              <Route path="/temas" element={<ListaTemas />}></Route>
              <Route path="/cadastrartema" element={<FormTema />}></Route>
              <Route path="/editartema/:id" element={<FormTema />}></Route>
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App