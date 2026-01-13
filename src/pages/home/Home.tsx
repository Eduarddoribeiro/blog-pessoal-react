function Home() {
    return (
        <>
            <main>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    backgroundColor: "#312E81",
                }}>
                    <article style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: "1rem",
                        gap: "1rem",
                        paddingBottom: "1rem",
                        color: "white"
                    }}>
                        <h1 style={{
                            fontSize: "3rem",
                        }}>Seja Bem vindo!</h1>
                        <p style={{
                            fontSize: "1.25rem"
                        }}>Expresse aqui seus pensamentos e opiniões</p>
                        <button style={{
                            backgroundColor: "transparent",
                            border: "2px solid white",
                            color: "white",
                            borderRadius: "0.5rem",
                            padding: "0.5rem 1rem",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}>Nova postagem
                        </button>
                    </article>

                    <figure style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img src="https://i.imgur.com/fyfri1v.png" alt="Imagem Página Home" width={"100%"} />
                    </figure>
                </section>
            </main>
        </>
    );
}

export default Home;
