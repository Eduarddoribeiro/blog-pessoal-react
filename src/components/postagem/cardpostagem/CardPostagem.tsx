import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem';

interface CardPostagemProps {
    postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagemProps) {


    return (
        <div className='border-slate-100 border bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden'>

            <div className="flex w-full bg-slate-50 py-3 px-4 items-center gap-4 border-b border-slate-100">
                <img
                    src={postagem.usuario?.foto}
                    className='h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm'
                    alt={postagem.usuario?.nome}
                />
                <h3 className='text-sm font-bold uppercase text-slate-700'>
                    {postagem.usuario?.nome}
                </h3>
            </div>

            <div className='p-6 flex-1'>
                <h4 className='text-xl font-bold text-blue-900 mb-3 leading-tight'>
                    {postagem.titulo}
                </h4>
                <p className="text-slate-700 mb-6 leading-relaxed line-clamp-3 wrap-break-word">
                    {postagem.texto}
                </p>

                <div className="flex items-center justify-between mt-auto">

                    {postagem.tema?.descricao && (
                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                            {postagem.tema.descricao}
                        </span>
                    )}

                    <span className="text-slate-400 text-xs italic">
                        {new Intl.DateTimeFormat("pt-BR", {
                            dateStyle: 'short',
                            timeStyle: 'short',
                        }).format(new Date(postagem.data))}
                    </span>
                </div>
            </div>

            <div className="flex gap-4 p-4 border-t border-slate-100 bg-slate-50/50">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white flex items-center justify-center py-2 rounded-xl transition-all font-bold shadow-sm text-sm'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='w-full text-red-600 border border-red-500 hover:bg-red-600 hover:text-white flex items-center justify-center py-2 rounded-xl transition-all font-bold shadow-sm text-sm'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem