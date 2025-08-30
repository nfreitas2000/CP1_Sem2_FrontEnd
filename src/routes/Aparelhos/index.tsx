import { Link } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";
import "../../App.css"

export default function Aparelhos(){
    
    let format_img={
        width: "200px",
        height: "auto",
    }
    
    return(
        <main>
            <h1>Aparelhos</h1>
            <div className="bloco-aparelhos">
                {
                listaAparelhos.map((aparelhos)=>(
                    <Link to={`/aparelhos/visualizar/${aparelhos.id}`}>
                        <div className="aparelhos" key={aparelhos.id}>
                            <img src={aparelhos.imagem} alt="" style={format_img}/> <br />
                            {aparelhos.nome} R${aparelhos.preco}
                        </div>
                    </Link>
                ))
            }
            </div>
        </main>
    )
}