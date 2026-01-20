import { Link, useNavigate } from "react-router-dom";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { useState, useContext, useEffect, type ChangeEvent, type FormEvent } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";
import imagemLogin from '../../assets/login-img.svg'; 

function Login() {

    const navigate = useNavigate();
    
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== '') {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-white">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-slate-900 text-5xl font-extrabold tracking-tight mb-4">
            Entrar
          </h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-slate-700 mb-1">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-slate-700 mb-1">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button
            type='submit'
            className="rounded-full bg-blue-800 flex justify-center hover:bg-blue-900 text-white w-1/2 py-2 shadow-lg shadow-blue-800/20 transition-all duration-300 mt-2"
          >
            {isLoading ? 
              <ClipLoader color="#ffffff" size={24} /> :
              <span>Entrar</span>
            }
          </button>

          <hr className="border-slate-200 w-full my-4" />

          <p className="font-normal text-slate-600">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-blue-800 font-bold hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <figure className="w-4/5 mx-auto drop-shadow-lg"> 
    <img
        src={imagemLogin} 
        alt="Ilustração de Login"
        className="w-full max-w-xl mx-auto drop-shadow-lg"
    />
</figure>
      </div>
    </>
  );
}

export default Login;