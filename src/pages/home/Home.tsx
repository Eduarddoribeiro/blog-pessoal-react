function Home() {
    return (
        <>
            <main>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    backgroundColor: "#5403eb",
                }}>
                    <article style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white"
                    }}>
                        <h1 style={{
                            fontSize:"5vw"
                        }}>Seja Bem vindo!</h1>
                        <p>Expresse aqui seus pensamentos e opiniões</p>
                        <button style={{
                            border: "1rem",
                            borderRadius: "5px",
                            padding: "0.5rem"
                        }}>Nova postagem
                        </button>
                    </article>

                    <figure>
                        <img src="https://i.imgur.com/fyfri1v.png" alt="" width={"100%"} />
                    </figure>
                </section>
            </main>
        </>
    );
}

export default Home;
