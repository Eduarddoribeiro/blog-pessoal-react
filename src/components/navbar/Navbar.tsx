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
            <nav className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className="flex gap-4">

                        <div className='hover:underline cursor-pointer'>Postagens</div>
                        <div className='hover:underline cursor-pointer'>Temas</div>
                        <div className='hover:underline cursor-pointer'>Cadastrar tema</div>
                        <div className='hover:underline cursor-pointer'>Perfil</div>
                        <Link to='/login' onClick={logout} className='hover:underline cursor-pointer'>Sair</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar