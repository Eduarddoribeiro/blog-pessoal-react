import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Postagem from "../../../models/Postagem"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"

function DeletarPostagem() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarPostagem() {
        setIsLoading(true)

        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Postagem apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                alert('Erro ao deletar a postagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/postagens")
    }
    
    return (
        <div className='container w-full mx-auto min-h-[80vh] flex flex-col justify-center items-center'>
            
            <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-100'>
                
                <div className='bg-slate-50 p-6 border-b border-slate-200 text-center'>
                    <h1 className='text-2xl font-bold text-blue-900 mb-2'>
                        Excluir Postagem
                    </h1>
                    <p className='text-slate-500 text-sm'>
                        Tem certeza que deseja apagar esta postagem? Essa ação não pode ser desfeita.
                    </p>
                </div>

                <div className='p-6 bg-white'>
                    <div className='bg-slate-50 rounded-lg p-4 border-l-4 border-blue-900 shadow-sm'>
                        <h2 className='text-lg font-bold text-slate-800 line-clamp-1'>
                            {postagem.titulo}
                        </h2>
                        <p className='text-slate-600 text-sm mt-1 line-clamp-3'>
                            {postagem.texto}
                        </p>
                    </div>
                </div>

                <div className='flex items-center p-6 pt-0 gap-4'>
                    <button 
                        className='flex-1 border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold py-3 rounded-xl transition-all'
                        onClick={retornar}>
                        Cancelar
                    </button>
                    
                    <button 
                        className='flex-1 bg-red-500 text-white hover:bg-red-600 font-semibold py-3 rounded-xl shadow-md transition-all flex justify-center items-center'
                        onClick={deletarPostagem}>
                        
                        {isLoading ? 
                            <ClipLoader color="#ffffff" size={20} /> 
                            : 'Sim, Excluir'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem