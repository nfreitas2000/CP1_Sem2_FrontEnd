import { Link } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";
import "./aparelhos.css"

export default function Aparelhos(){
    
    let format_img={
        width: "200px",
        height: "auto",
    }
    
    return(
        <main>
            <h1>Aparelhos</h1>
            <p>Confira nossos produtos!</p>
            <h2>Smartphones</h2>
            <h2>Tablets</h2>
            <div className="bloco-aparelhos">
                {
                listaAparelhos.map((aparelhos)=>(
                    <Link to={`/aparelhos/visualizar/${aparelhos.id}`}>
                        <div className="aparelhos" key={aparelhos.id}>
                            <img src={aparelhos.imagem} style={format_img}/> <br />
                            {aparelhos.nome} <br /> R${aparelhos.preco}
                        </div>
                    </Link>
                ))
            }
            </div>
        </main>
    )
}