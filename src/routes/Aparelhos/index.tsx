import { Link } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";
import "./aparelhos.css"

export default function Aparelhos(){
    
    const smartphones = listaAparelhos.filter(item => item.tipo === "Smartphone");
    const tablets = listaAparelhos.filter(item => item.tipo === "Tablet");

    
    return(
        <main>
            <div className="frases">
                <h1>Nossos Produtos</h1>
                <p>Confira abaixo nossa seleção de smartphones e tablets. Reunimos os modelos mais buscados do mercado, com diferentes configurações para atender às suas necessidades — seja para trabalho, estudo ou lazer.</p>
                <p>Explore cada opção, compare recursos e escolha o aparelho ideal para o seu dia a dia. Todos os produtos contam com qualidade garantida e preços competitivos, além de opções exclusivas que você só encontra aqui.</p>
                <p>Seu próximo dispositivo está logo abaixo. Aproveite e encontre já o seu!</p>
            </div>
            
            <h2>Smartphones</h2>
            <div className="bloco-smartphones">
                {smartphones.map((celulares) =>(
                    <Link to={`/aparelhos/visualizar/${celulares.id}`}>
                        <div className="smartphones" key={celulares.id}>
                            <img src={celulares.imagem} className="img-smartphones" /> <br />
                            {celulares.nome} <br /> R${celulares.preco}
                        </div>
                    </Link>
                ))}
                

            </div>
            <h2>Tablets</h2>
            <div className="bloco-tablets">
                {
                tablets.map((tablet)=>(
                    <Link to={`/aparelhos/visualizar/${tablet.id}`}>
                        <div className="tablets" key={tablet.id}>
                            <img src={tablet.imagem} className="img-tablets"/> <br />
                            <p>{tablet.nome} <br /> R${tablet.preco}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        </main>
    )
}