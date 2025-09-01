import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
            <h1>404 - Página não encontrada!</h1>
            <Link to={"/"}>Clique aqui para voltar para a página inicial</Link>
        </>
    )
}
    
