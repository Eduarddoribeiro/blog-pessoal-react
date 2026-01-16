import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout} =useContext(AuthContext);

    function logout() {
        handleLogout();
        alert('O usuário foi desconectado com sucesso!');
        navigate('/');
    }

    return (
        <>
            <nav className="w-full flex justify-center py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100 sticky top-0 z-50">
    <div className="container flex justify-between items-center mx-8">
        <Link to='/home' className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Blog<span className="text-blue-800">Pessoal</span>
        </Link>

        <div className="flex gap-8 items-center font-medium text-slate-600">
            <Link to='/postagens' className='hover:text-blue-800 transition-all'>Postagens</Link>
            <Link to='/temas' className='hover:text-blue-800 transition-all'>Temas</Link>
            <Link to='/perfil' className='hover:text-blue-800 transition-all'>Perfil</Link>
            <Link to='/login' onClick={logout} className='border-2 border-blue-800 text-blue-800 px-6 py-1.5 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300 font-bold'>
                Sair
            </Link>
        </div>
    </div>
</nav>
        </>
    )
}

export default Navbar