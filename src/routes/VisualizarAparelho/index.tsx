import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";
import "../../App.css"

export default function VisualizarAparelho() {
  const { id } = useParams();
  const aparelho = listaAparelhos.find((a) => a.id === Number(id));


  if (!aparelho) {
    return <p>Aparelho não encontrado</p>;
  }

  return (
    <main className="visualizarAparelho">

        <img className='img-aparelho' src={aparelho.imagem} alt={`${aparelho.marca} ${aparelho.modelo}`} />

          <h1>{aparelho.marca} {aparelho.modelo}</h1>
          <p>{aparelho.descricao}</p>
          <p className="preco">R$ {aparelho.preco}</p>
          
          <div>
            <button className="COMPRA">Comprar</button>
            <Link to="/aparelhos">Voltar</Link>
          </div>
    </main>
  );
}
