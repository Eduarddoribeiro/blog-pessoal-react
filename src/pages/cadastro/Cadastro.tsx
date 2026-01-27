import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom"
import { cadastrarUsuario } from "../../services/Service";
import type Usuario from "../../models/Usuario";
import { ClipLoader } from "react-spinners";
import imagemCadastro from '../../assets/cadastro-img.svg';
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false)

  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function toggleSenha() {
    setMostrarSenha(!mostrarSenha)
  }

  function toggleConfirmarSenha() {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso')
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro')
      }
    } else {
      ToastAlerta('Dados do usuário inconsistentes! Verifique as informações do cadastro.', 'info')
      setUsuario({ ...usuario, senha: '' })
      setConfirmarSenha('')
    }

    setIsLoading(false)
  }


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-white">
        <figure className="w-4/5 mx-auto drop-shadow-lg flex justify-center items-center">
          <img
            src={imagemCadastro}
            alt="Ilustração de Cadastro"
            className="w-full max-w-xl mx-auto drop-shadow-lg"
          />
        </figure>

        <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-slate-900 text-5xl font-extrabold tracking-tight mb-4'>
            Cadastrar
          </h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-slate-700 mb-1">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-slate-700 mb-1">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="seu_email@exemplo.com"
              className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-slate-700 mb-1">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Link da foto (ex: https://...)"
              className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-slate-700 mb-1">Senha</label>
            <div className="relative w-full">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                id="senha"
                name="senha"
                placeholder="Crie uma senha (mín. 8 caracteres)"
                className="bg-slate-50 border border-slate-200 rounded-lg p-2 pr-10 w-full focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              <button
                type="button"
                onClick={toggleSenha}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-700 hover:text-blue-800 transition-colors cursor-pointer"
              >
                {mostrarSenha ? (
                  <EyeSlashIcon size={20} weight="bold" />
                ) : (
                  <EyeIcon size={20} weight="bold" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-slate-700 mb-1">Confirmar Senha</label>
            <div className="relative w-full">
              <input
                type={mostrarConfirmarSenha ? 'text' : 'password'}
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Repita a senha anterior"
                className="bg-slate-50 border border-slate-200 rounded-lg p-2 pr-10 w-full focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
              <button
                type="button"
                onClick={toggleConfirmarSenha}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-700 hover:text-blue-800 transition-colors cursor-pointer"
              >
                {mostrarConfirmarSenha ? (
                  <EyeSlashIcon size={20} weight="bold" />
                ) : (
                  <EyeIcon size={20} weight="bold" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-around w-full gap-4 mt-4">
            <button
              className='rounded-full text-red-500 border border-red-500 hover:bg-red-500 hover:text-white w-1/2 py-2 transition-all duration-300'
              onClick={retornar}
              type='reset'
            >
              Cancelar
            </button>

            <button
              className='rounded-full text-white bg-blue-800 hover:bg-blue-900 w-1/2 py-2 flex justify-center shadow-lg shadow-blue-800/20 transition-all duration-300'
              type='submit'
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro