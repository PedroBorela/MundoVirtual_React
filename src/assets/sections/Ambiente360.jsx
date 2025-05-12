import { useParams } from "react-router-dom";
import Cena from "../components/Cena";
import Seta from "../components/Seta";
import { useState } from "react";
import Card from "../components/Card";


// Ambiente 1
const imagens = {
    img1: {posicao:'0 -100 0', caminho: '/assets/fotos_CasaDeCultura/imagem1.jpg'},
    img2: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem2.jpg'},
    img3: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem3.jpg'},
    img4: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem3_1.jpg'},
}

//Ambiente 2
const imagensS1 = {
    img1: {posicao:'0 -90 0', caminho: '/assets/fotos_CasaDeCultura/imagem4.jpg'},
    img4: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem5.jpg'},
    img2: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem6.jpg'},
    img3: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem7.jpg'},


}

//Ambiente 3
const imagensS2 = {
    img1: {posicao:'0 90 0', caminho: '/assets/fotos_CasaDeCultura/imagem8.jpg'},
    img2: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem9.jpg'},
    img3: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem10.jpg'},
    img4: {posicao:'0 90 0', caminho:'/assets/fotos_CasaDeCultura/imagem11.jpg'},

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
            case 'frente': novaImagem = 'img2'; break;
            case 'direita': novaImagem = 'img3'; break;
            case 'esquerda': novaImagem = 'img4'; break;
            default: novaImagem = 'img1';
        }
        setImagemAtual(novaImagem);
    };

    // Obtém a imagem atual do conjunto correto
    const imagem = getConjuntoAtual()[imagemAtual]?.caminho || '/assets/imgs/s3.jpg';
    const rotacao = getConjuntoAtual()[imagemAtual]?.posicao || '0 0 0';

    return (
        <Cena>
            <a-sky src={imagem} rotation={rotacao}/>
            {/* <Card texto='Esse é o famoso Serafim Tiburcio, uma das personalidades mais importantes de Manhuaçu.' posicao='0 1.6 -2' /> */}
            <Seta onTrocarAmbiente={trocarImagem} setas='direita frente esquerda' />
        </Cena>
    );
};  

export default Ambiente360;
