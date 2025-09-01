import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header>
            <Link to={"/"}>Home</Link>
            <Link to={"/aparelhos"}>Aparelhos</Link>
        </header>
    )
}