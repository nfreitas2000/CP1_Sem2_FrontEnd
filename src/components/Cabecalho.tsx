import { Link } from "react-router-dom";
import "./Cabecalho.css"

export default function Cabecalho(){
    return(
        <>
            <header>

               <Link to={"/"}><h1 className="item nome-loja">N&N ELECTRONICS</h1></Link>
                <input type="text" className="item barra-pesquisa" placeholder="Buscar Produtos..."/>
            </header>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/aparelhos"}>Aparelhos</Link>
            </nav>
        </>
    )
}