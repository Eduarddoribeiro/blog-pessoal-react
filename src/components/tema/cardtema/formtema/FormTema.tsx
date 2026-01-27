import { useContext, useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../../contexts/AuthContext";
import { buscar, cadastrar, atualizar } from "../../../../services/Service";
import type Tema from "../../../../models/Tema";
import { ToastAlerta } from "../../../../utils/ToastAlerta";

function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        }

    }

    useEffect(() => {
        if (token == "") {
            ToastAlerta("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function
        retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                ToastAlerta("Tema atualizado com sucesso!", "sucesso");
            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao atualizar tema!", "erro");
                }
            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                ToastAlerta("Tema cadastrado com sucesso!", "sucesso");
            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar tema!", "erro");
                }
            }
        }

        setIsLoading(false);
        retornar();
    }
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-blue-900 font-extrabold tracking-tight">
                {id === undefined ? "Cadastrar Tema" : "Editar Tema"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-slate-700 font-semibold text-lg">
                        Descrição do Tema
                    </label>
                    
                    <input
                        type="text"
                        placeholder="Ex: Tecnologia, Vida Pessoal, Back-end..."
                        name="descricao"
                        className="border-2 border-slate-200 rounded-xl p-3 focus:border-blue-800 focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                        value={tema.descricao || ""}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <button
                    className="rounded-xl text-slate-100 bg-blue-800 hover:bg-blue-900 w-1/2 py-3 mx-auto flex justify-center transition-all duration-300 font-bold mt-4 shadow-md hover:shadow-lg"
                    type="submit"
                >
                    {isLoading ?
                        <ClipLoader color="#ffffff" size={24} /> :
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    }
                </button>
            </form>
        </div>
    )

}

export default FormTema