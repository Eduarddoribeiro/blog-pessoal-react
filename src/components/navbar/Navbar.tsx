function Navbar() {
    return (
        <>
            <nav className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <div className="container flex justify-between text-lg mx-8">
                    <div className="font-bold text-2xl cursor-pointer">
                        Blog Pessoal
                    </div>

                    <div className="flex gap-4">

                        <div className='hover:underline cursor-pointer'>Postagens</div>
                        <div className='hover:underline cursor-pointer'>Temas</div>
                        <div className='hover:underline cursor-pointer'>Cadastrar tema</div>
                        <div className='hover:underline cursor-pointer'>Perfil</div>
                        <div className='hover:underline cursor-pointer'>Sair</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar