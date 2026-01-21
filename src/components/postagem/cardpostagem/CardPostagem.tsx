import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem';

interface CardPostagemProps {
    postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagemProps) {


    return (
        <div className='border-slate-200 border flex flex-col rounded overflow-hidden justify-between bg-white shadow-md hover:shadow-lg transition-all duration-300'>
            <div>
                <div className="flex w-full bg-blue-900 py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 w-12 rounded-full object-cover border-2 border-white'
                        alt={postagem.usuario?.nome}
                    />
                    <h3 className='text-lg font-bold text-center uppercase text-white'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase text-slate-900 mb-2'>{postagem.titulo}</h4>
                    <p className="text-slate-700 mb-4">{postagem.texto}</p>
                    <div className="flex flex-col gap-1 text-sm text-slate-500">
                        <p><span className="font-bold text-slate-700">Tema:</span>  {postagem.tema?.descricao}</p>
                        <p><span className="font-bold text-slate-700">Data:</span>{new Intl.DateTimeFormat("pt-BR", {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(postagem.data))}</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`} className='w-full text-white bg-blue-700 hover:bg-blue-900 flex items-center justify-center py-2 transition-colors duration-300'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='text-white bg-red-500 hover:bg-red-700 w-full flex items-center justify-center py-2 transition-colors duration-300'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem