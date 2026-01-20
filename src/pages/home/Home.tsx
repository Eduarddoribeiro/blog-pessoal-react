import imagemHome from '../../assets/home-img.svg';

function Home() {
    return (
        <>
            <main className="bg-slate-50 flex justify-center min-h-[80vh] transition-colors duration-300">
                <section className="container grid grid-cols-1 md:grid-cols-2 text-slate-900 mx-auto p-4">
                    
                    <article className="flex flex-col gap-6 items-center justify-center py-4 text-center md:text-left">
                        <h1 className="text-5xl font-extrabold tracking-tight text-blue-900">
                            Seja bem vindo!
                        </h1>
                        
                        <p className="text-xl text-slate-700 max-w-md">
                            Expresse aqui seus pensamentos e opiniões de forma livre e conectada.
                        </p>

                        <div className="flex justify-around gap-4 mt-4">
                            <button className='rounded-xl text-blue-900 border-2 border-blue-900 py-3 px-8 font-bold hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl'>
                                Nova Postagem
                            </button>
                        </div>
                    </article>

                    <figure className="flex justify-center items-center py-8 md:py-0">
                        <img 
                            src={imagemHome} 
                            alt="Imagem Página Home" 
                            className="w-2/3 md:w-3/4 drop-shadow-xl" 
                        />
                    </figure>
                </section>
            </main>
        </>
    );
}

export default Home;
