import { LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <footer className="flex justify-center bg-blue-900 text-white transition-colors duration-300">
                <div className="container flex flex-col items-center py-8">
                    <p className="text-xl font-bold tracking-wide">
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    
                    <p className="text-lg my-2 font-light">
                        Acesse nossas redes sociais
                    </p>

                    <div className="flex gap-4 mt-2">
                       <a href="https://www.linkedin.com/in/eduardoribeirodefraga/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:scale-110 hover:text-blue-200 transition-all duration-300"
                        >
                            <LinkedinLogoIcon size={48} weight="bold" />
                       </a>
 
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer