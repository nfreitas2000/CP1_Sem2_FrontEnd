import iphone16 from "../public/iphone-16.png"
import samsungs24 from "../public/samsung-galaxy-s24-ultra.png"
import xiaomi14 from "../public/xiaomi-14.png"
import pixel8 from "../public/pixel8.png"
import oneplus12 from "../public/oneplus12.png"
import ipadm4 from "../public/ipad-pro.png"
import samsungs9 from "../public/galaxy-tab-s9.png"
import mipad6 from "../public/miPad6.png"
import lenovoTabExtreme from "../public/lenovoTabExtreme.png"
import matepadPro from "../public/matepadPro.png"


export const listaAparelhos = [
    // Smartphones
    {
        id: 1,
        tipo: "Smartphone",
        nome: "iPhone 15 Pro",
        modelo: "15 Pro",
        marca: "Apple",
        descricao: "Tela OLED 6,1\", chip A17 Pro, câmera tripla (48MP), acabamento em titânio.",
        descricaoFuncional: "Ideal para quem busca o melhor desempenho em jogos e fotos profissionais, com design sofisticado e durabilidade premium.",
        preco: 9999,
        imagem: iphone16
    },
    {
        id: 2,
        tipo: "Smartphone",
        nome: "Samsung Galaxy S24 Ultra",
        modelo: "S24 Ultra",
        marca: "Samsung",
        descricao: "Tela AMOLED 6,8\" QHD+, Snapdragon 8 Gen 3, câmera principal 200MP, suporte à S Pen.",
        descricaoFuncional: "Perfeito para quem ama registrar cada detalhe em fotos incríveis e precisa de produtividade com a S Pen integrada.",
        preco: 8999,
        imagem: samsungs24
    },
    {
        id: 3,
        tipo: "Smartphone",
        nome: "Xiaomi 14 Pro",
        modelo: "14 Pro",
        marca: "Xiaomi",
        descricao: "Tela AMOLED 6,7\", Snapdragon 8 Gen 3, câmeras Leica (50MP), carregamento ultrarrápido.",
        descricaoFuncional: "Excelente opção para quem busca inovação com preço competitivo, oferecendo carregamento rápido e fotos de altíssima qualidade.",
        preco: 5999,
        imagem: xiaomi14
    },
    {
        id: 4,
        tipo: "Smartphone",
        nome: "Google Pixel 8 Pro",
        modelo: "8 Pro",
        marca: "Google",
        descricao: "Tela OLED 6,7\" LTPO, chip Tensor G3, câmera tripla com processamento avançado de IA.",
        descricaoFuncional: "O smartphone perfeito para quem gosta de fotos automáticas impressionantes e integração total com o ecossistema Google.",
        preco: 7499,
        imagem: pixel8
    },
    {
        id: 5,
        tipo: "Smartphone",
        nome: "OnePlus 12",
        modelo: "12",
        marca: "OnePlus",
        descricao: "Tela AMOLED 6,8\" 120Hz, Snapdragon 8 Gen 3, bateria 5400mAh com carregamento 100W.",
        descricaoFuncional: "Ideal para quem não gosta de esperar: bateria que dura o dia todo e recarrega em minutos, sem abrir mão de desempenho.",
        preco: 6299,
        imagem: oneplus12
    },

    // Tablets
    {
        id: 6,
        tipo: "Tablet",
        nome: "iPad Pro M4",
        modelo: "Pro M4 12,9",
        marca: "Apple",
        descricao: "Tela Liquid Retina XDR, chip M4, compatível com Apple Pencil 2, ideal para criadores.",
        descricaoFuncional: "Perfeito para designers, estudantes e profissionais que querem substituir o notebook com portabilidade e desempenho de ponta.",
        preco: 12999,
        imagem: ipadm4
    },
    {
        id: 7,
        tipo: "Tablet",
        nome: "Samsung Galaxy Tab S9 Ultra",
        modelo: "Tab S9 Ultra",
        marca: "Samsung",
        descricao: "Tela AMOLED 14,6\", Snapdragon 8 Gen 2, S Pen inclusa, multitarefa avançada.",
        descricaoFuncional: "Feito para produtividade: use a S Pen, divida a tela e transforme o tablet em um verdadeiro computador portátil.",
        preco: 8799,
        imagem: samsungs9
    },
    {
        id: 8,
        tipo: "Tablet",
        nome: "Xiaomi Pad 6 Pro",
        modelo: "Pad 6 Pro",
        marca: "Xiaomi",
        descricao: "Tela LCD 11\", Snapdragon 8+ Gen 1, suporte a teclado magnético e caneta stylus.",
        descricaoFuncional: "Um ótimo custo-benefício para quem quer estudar, assistir vídeos e ter ferramentas de produtividade em um só lugar.",
        preco: 3899,
        imagem: mipad6
    },
    {
        id: 9,
        tipo: "Tablet",
        nome: "Lenovo Tab Extreme",
        modelo: "Tab Extreme",
        marca: "Lenovo",
        descricao: "Tela OLED 14,5\", chip MediaTek Dimensity 9000, suporte a stylus e teclado destacável.",
        descricaoFuncional: "Feito para quem trabalha em movimento: tela enorme, multitarefa fluida e acessórios que transformam em laptop.",
        preco: 6599,
        imagem: lenovoTabExtreme
    },
    {
        id: 10,
        tipo: "Tablet",
        nome: "Huawei MatePad Pro 13,2",
        modelo: "MatePad Pro 13,2",
        marca: "Huawei",
        descricao: "Tela OLED 13,2\", chip Kirin 9000s, suporte a M-Pencil e teclado magnético.",
        descricaoFuncional: "Voltado para criadores e produtividade, com design leve e bateria de longa duração, perfeito para o dia a dia.",
        preco: 7199,
        imagem: matepadPro
    }
];
