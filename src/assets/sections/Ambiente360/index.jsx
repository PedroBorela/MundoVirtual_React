import { useParams } from "react-router-dom";
import Cena from "../../components/Cena";
import { useState } from "react";
import Card from "../../components/Card";
import Seta from "../../components/Seta";
import { conjuntos } from "./DadosAmbiente360";




const Ambiente360 = () => {
    const { id } = useParams(); // id = 'ambiente1', 'ambiente2' ou 'ambiente3'
    const [imagemAtual, setImagemAtual] = useState('img1'); // Controla apenas img1/img2/img3

    // Mapeia cada ambiente para seu conjunto específico
    const getConjuntoAtual = () => {
        switch (id) {
            case 'ambiente1': return conjuntos.imagens;
            case 'ambiente2': return conjuntos.imagensS1;
            case 'ambiente3': return conjuntos.imagensS2;
            default: return conjuntos.imagens;
        }
    };

    const trocarImagem = (direcao) => {
        // Define qual imagem do conjunto atual será usada
        let novaImagem;
        switch (direcao) {
            case 'frente': novaImagem = 'img2'; break;
            case 'direita': novaImagem = 'img3'; break;
            case 'esquerda': novaImagem = 'img4'; break;
            case 'tras': novaImagem = 'img1'; break;
            default: novaImagem = 'img1';
        }
        setImagemAtual(novaImagem);
    };

    // Obtém a imagem atual do conjunto correto
    const imagem = getConjuntoAtual()[imagemAtual]?.caminho || '/assets/imgs/s3.jpg';
    const rotacao = getConjuntoAtual()[imagemAtual]?.posicao || '0 0 0';
    const setas = getConjuntoAtual()[imagemAtual]?.setas || [];
    const cards = getConjuntoAtual()[imagemAtual]?.cards || [];

    return (
        <Cena>
            <a-sky src={imagem} rotation={rotacao} />
            {/* <Card texto='Esse é o famoso Serafim Tiburcio, uma das personalidades mais importantes de Manhuaçu.' posicao='0 1.6 -2' /> */}
            <Seta onTrocarAmbiente={trocarImagem} setas={setas} cards={cards} />
        </Cena>
    );
};

export default Ambiente360;
