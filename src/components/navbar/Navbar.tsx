import { useContext, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Navbar() {

    const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    function logout() {
        handleLogout();
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/');
    }

    function toggleMenu() {
        setIsOpen(!isOpen)
    }


    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <nav className="w-full bg-white/90 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
                <div className="container flex justify-between items-center px-8 py-4 mx-auto">
                    <Link to='/home' className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        Blog<span className="text-blue-800">Pessoal</span>
                    </Link>

                    <button onClick={toggleMenu} className='md:hidden text-slate-900 focus:outline-none'>
                        {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
                    </button>

                    <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
                        <Link to='/postagens' className='hover:text-blue-800 transition-all'>Postagens</Link>
                        <Link to='/temas' className='hover:text-blue-800 transition-all'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:text-blue-800 transition-all'>Cadastrar Tema</Link>
                        <Link to='/perfil' className='hover:text-blue-800 transition-all'>Perfil</Link>
                        <Link to='/' onClick={logout} className='border-2 border-blue-800 text-blue-800 px-6 py-1.5 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300 font-bold'>
                            Sair
                        </Link>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 w-full">
                        <div className="flex flex-col gap-4 p-4 font-medium text-slate-600">
                            <Link to='/postagens' onClick={toggleMenu} className='hover:text-blue-800'>Postagens</Link>
                            <Link to='/temas' onClick={toggleMenu} className='hover:text-blue-800'>Temas</Link>
                            <Link to='/cadastrartema' onClick={toggleMenu} className='hover:text-blue-800'>Cadastrar Tema</Link>
                            <Link to='/perfil' onClick={toggleMenu} className='hover:text-blue-800'>Perfil</Link>
                            <Link to='/' onClick={() => { toggleMenu(); logout(); }} className='hover:text-blue-800 text-red-500'>Sair</Link>
                        </div>
                    </div>
                )}
            </nav>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar