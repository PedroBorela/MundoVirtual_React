import { useParams } from "react-router-dom";
import Cena from "../components/Cena";
import Seta from "../components/Seta";
import { useState } from "react";

const imagens = {
    img1: '/assets/imgs/saladeAula1.jpg',
    img2: '/assets/imgs/saladeAula2.jpg',
    img3: '/assets/imgs/saladeAula3.jpg',
}
const imagensS1 = {
    img1: '/assets/imgs/saladeaula4.jpg',
    img2: '/assets/imgs/saladeaula5.jpg',
    img3: '/assets/imgs/saladeaula3.jpg',
}
const imagensS2 = {
    img1: '/assets/imgs/sala1.jpg',
    img2: '/assets/imgs/sala2.avif',
    img3: '/assets/imgs/sala3.jpg',
}

const conjuntos = {
    imagens,
    imagensS1,
    imagensS2,
};
const Ambiente360 = () => {
    const { id } = useParams(); // id = 'ambiente1', 'ambiente2' ou 'ambiente3'
    const [imagemAtual, setImagemAtual] = useState('img1'); // Controla apenas img1/img2/img3

    // Mapeia cada ambiente para seu conjunto específico
    const getConjuntoAtual = () => {
        switch(id) {
            case 'ambiente1': return conjuntos.imagens;
            case 'ambiente2': return conjuntos.imagensS1;
            case 'ambiente3': return conjuntos.imagensS2;
            default: return conjuntos.imagens;
        }
    };

    const trocarImagem = (direcao) => {
        // Define qual imagem do conjunto atual será usada
        let novaImagem;
        switch(direcao) {
            case 'frente': novaImagem = 'img1'; break;
            case 'direita': novaImagem = 'img2'; break;
            case 'esquerda': novaImagem = 'img3'; break;
            default: novaImagem = 'img1';
        }
        setImagemAtual(novaImagem);
    };

    // Obtém a imagem atual do conjunto correto
    const imagem = getConjuntoAtual()[imagemAtual] || '/assets/imgs/s3.jpg';

    return (
        <Cena>
            <a-sky src={imagem} />
            <Seta onTrocarAmbiente={trocarImagem} />
        </Cena>
    );
};  

export default Ambiente360;
