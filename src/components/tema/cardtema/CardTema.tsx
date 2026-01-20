import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";   

interface CardTemaProps{
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className="border border-slate-200 flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
            <header className="py-3 px-6 bg-blue-900 text-white font-bold text-xl tracking-wider">
                Tema
            </header>
            
            <p className="p-8 text-2xl text-slate-700 bg-slate-50 h-full font-medium">
                {tema.descricao}
            </p>

            <div className="flex gap-4 p-4 bg-white border-t border-slate-100">
                <Link to={`/editartema/${tema.id}`} 
                    className="w-full text-blue-800 border border-blue-800 hover:bg-blue-50 flex items-center justify-center py-2 rounded-xl transition-all font-bold">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} 
                    className="w-full text-red-500 border border-red-500 hover:bg-red-50 flex items-center justify-center py-2 rounded-xl transition-all font-bold">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardTema