import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import { listaAparelhos } from "../../listaAparelhos";
import "./VisualizarAparelho.css"
export default function VisualizarAparelho() {
  const { id } = useParams();
  const aparelho = listaAparelhos.find((a) => a.id === Number(id));


  if (!aparelho) {
    return <p>Aparelho não encontrado</p>;
  }

  return (
    <main className="visualizarAparelho">

      <h1 className='nome'>{aparelho.marca} {aparelho.modelo}</h1>
      <img className='img-aparelho' src={aparelho.imagem} alt={`${aparelho.marca} ${aparelho.modelo}`} />

      <div className='descr'>
        <h2>Descrição</h2>
        <p>{aparelho.descricaoFuncional}</p>
        <br />
        <h2>Especificação Técnica</h2>
        <p>{aparelho.descricao}</p>
      </div>
      
      <div className="comprar">
        <h2 className="preco">R$ {aparelho.preco}</h2>
        <button className='comprar-botao'>Comprar</button> <br />
        <Link to="/aparelhos">Voltar</Link>
      </div>
    </main>
  );
  }
