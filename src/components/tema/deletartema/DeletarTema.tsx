function DeletarTema() {
    return (
        <div className="container w-1/3 mx-auto">

            <h1 className="text-4xl text-center my-4">Deletar tema</h1>
            <p className="text-center font-semibold mb-4">Tem certeza que deseja deletar este tema?</p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
                    Tema
                </header>

                <p className="p-8 text-3xl bg-slate-200 h-full">Tema</p>
                <div className="flex">
                    <button className="w-full text-slate-100 bg-red-400 hover:bg-red-600 py-2">
                        Não
                    </button>
                    <button className="w-full text-slate-100 bg-red-400 hover:bg-red-600 py-2">
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}