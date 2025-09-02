import "./home.css"
import iphone_promo from "../../../public/iphone-promocao.jpg"
import tablet_promo from "../../../public/tablet-promocao.jpg"
import { Link } from "react-router-dom";



export default function Home(){
    return(
    <main>
        <h1 className={"h1"}>Home</h1>
            <div className="corpo-principal">
                <div className="item bloco1">
                    <h3>Bem-vindo à nossa loja de eletrônicos! <br /></h3>
                    <p>
                        Aqui você encontra os últimos lançamentos em smartphones e tablets, com qualidade garantida e preços que cabem no seu bolso. Trabalhamos com as principais marcas do mercado, oferecendo desde modelos premium até opções acessíveis para o dia a dia. <br /><br />

                        Explore nosso catálogo e descubra aparelhos com tecnologia de ponta, desempenho rápido e design moderno, perfeitos para facilitar sua rotina e manter você sempre conectado. <br />

                        Aproveite nossas ofertas exclusivas e garanta já o seu próximo dispositivo! 
                    </p>
                </div>
                <Link to={"/aparelhos/visualizar/1"}>
                    <div className="item bloco2">
                        <h2>Iphone 15 Pro</h2>
                        <img src={iphone_promo} alt="" className="img-iphone"/>
                        <h3>Toda a tecnologia que você precisa, na palma da sua mão!</h3>
                        <h4>De R$12.999 por R$9.999 </h4>
                    </div>
                </Link>
                <Link to={"/aparelhos/visualizar/6"}>
                    <div className="item bloco4">
                        <h2>iPad Pro M4</h2>
                        <img src={tablet_promo} alt="" className="img-tablet" />
                        <h3>A tecnologia que transforma sua rotina em qualquer lugar!</h3>
                        <h4>De R$15.999 por R$12.999</h4>
                    </div>
                </Link>
                <div className="item bloco3">
                    
                        <h3>Por que comprar conosco? <br /></h3>
                    <p>
                        Na nossa loja, tecnologia e confiança caminham juntas. Além de trazer os melhores smartphones e tablets do mercado, também oferecemos: <br />

                        <ul>
                            <li>Variedade de marcas e modelos para todos os estilos e necessidades.</li>
                            <li>Garantia e suporte especializado, para você comprar sem preocupações.</li>
                            <li>Ofertas imperdíveis que tornam a inovação mais acessível.</li>
                            <li>Compra fácil e rápida, com segurança em cada etapa.</li>
                        </ul>
                    
                        Nosso compromisso é entregar não apenas produtos de ponta, mas também uma experiência de compra completa, do início ao fim.
                    </p>
                </div>
            </div>
            <Link to={"/aparelhos"}><button className="botao-produtos">Nossos produtos!!!</button></Link>
        </main>
    )

}