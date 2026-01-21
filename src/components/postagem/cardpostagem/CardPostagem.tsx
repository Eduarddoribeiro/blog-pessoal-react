import { Link } from 'react-router-dom'

function CardPostagem() {
    return (
        <div className='border-slate-200 border flex flex-col rounded overflow-hidden justify-between bg-white shadow-md hover:shadow-lg transition-all duration-300'>
            <div>
                <div className="flex w-full bg-blue-900 py-2 px-4 items-center gap-4">
                    <img
                        src='https://i.imgur.com/pK6vSCy.png'
                        className='h-12 w-12 rounded-full object-cover border-2 border-white'
                        alt=""
                    />
                    <h3 className='text-lg font-bold text-center uppercase text-white'>
                        Nome do Usuário
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase text-slate-900 mb-2'>Titulo</h4>
                    <p className="text-slate-700 mb-4">Texto</p>
                    <div className="flex flex-col gap-1 text-sm text-slate-500">
                        <p><span className="font-bold text-slate-700">Tema:</span> Tema da postagem</p>
                        <p><span className="font-bold text-slate-700">Data:</span> 12/12/2023</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to='' className='w-full text-white bg-blue-700 hover:bg-blue-900 flex items-center justify-center py-2 transition-colors duration-300'>
                    <button>Editar</button>
                </Link>
                <Link to='' className='text-white bg-red-500 hover:bg-red-700 w-full flex items-center justify-center py-2 transition-colors duration-300'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem