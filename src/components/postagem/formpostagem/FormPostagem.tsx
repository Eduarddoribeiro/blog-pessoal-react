import { type ChangeEvent, type FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cadastrar, atualizar, buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import type Postagem from '../../../models/Postagem';
import type Tema from '../../../models/Tema';
import { ClipLoader } from 'react-spinners';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function FormPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [temas, setTemas] = useState<Tema[]>([]);

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', });
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas();
        if (id !== undefined) {
            buscarPostagemPorId(id);
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: { Authorization: token },
                });
                ToastAlerta('Postagem atualizada com sucesso', 'sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar a Postagem', 'erro');
                }
            }
        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: { Authorization: token },
                });
                ToastAlerta('Postagem cadastrada com sucesso', 'sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar a Postagem', 'erro');
                }
            }
        }

        setIsLoading(false);
    }

    const carregandoTema = tema.descricao === '';

   return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 font-extrabold text-slate-900">
                {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaPostagem}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo" className="text-slate-700 font-bold">Título da Postagem</label>
                    <input
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="texto" className="text-slate-700 font-bold">Texto da Postagem</label>
                    <textarea
                        placeholder="Texto"
                        name="texto"
                        required
                        rows={4}
                        className="bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal"
                        value={postagem.texto}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-slate-700 font-bold">Tema da Postagem</p>
                    <select 
                        name="tema" 
                        id="tema" 
                        className='bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-800 focus:border-transparent outline-none transition-all font-normal'
                        onChange={(e) => buscarTemaPorId(e.target.value)}
                    >
                        <option value="" selected disabled>Selecione um Tema</option>
                        {temas.map((tema) => (
                            <option key={tema.id} value={tema.id}>{tema.descricao}</option>
                        ))}
                    </select>
                </div>

                <button
                    type='submit'
                    disabled={carregandoTema}
                    className='rounded-full bg-blue-800 hover:bg-blue-900 text-white font-bold w-1/2 mx-auto py-2 flex justify-center shadow-lg transition-all duration-300 disabled:bg-slate-200'
                >
                    {isLoading ?
                        <ClipLoader color="#ffffff" size={24} /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormPostagem;