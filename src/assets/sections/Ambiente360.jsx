import { useParams } from "react-router-dom";
import Cena from "../components/Cena";
import Seta from "../components/Seta";
import { useState } from "react";

const imagens = {
    ambiente1: '/assets/imgs/img360_1.jpg',
    ambiente2: '/assets/imgs/img360_2.avif',
    ambiente3: '/assets/imgs/img360_3.avif',
}
const imagensS1 = {
    ambiente1: '/assets/imgs/s1.jpg',
    ambiente2: '/assets/imgs/s2.jpg',
    ambiente3: '/assets/imgs/s3.jpg',
}
const imagensS2 = {
    ambiente1: '/assets/imgs/sala1.jpg',
    ambiente2: '/assets/imgs/sala2.avif',
    ambiente3: '/assets/imgs/sala3.jpg',
}

const conjuntos = {
    imagens,
    imagensS1,
    imagensS2,
};

const Ambiente360 = () => {
    const { id } = useParams();
    const [estado, setEstado] = useState({
        conjunto: 'imagens',
        ambiente: id,
    });

    const getImagemAtual = () => {
        const img = conjuntos[estado.conjunto][estado.ambiente];
        return img || '/assets/imgs/s3.jpg';
    };

    const trocarAmbiente = (direcao) => {
        console.log('Direção clicada:', direcao);

        let novoAmbiente = estado.ambiente;
        if (direcao === 'frente') novoAmbiente = 'ambiente2';
        else if (direcao === 'direita') novoAmbiente = 'ambiente3';
        else if (direcao === 'esquerda') novoAmbiente = 'ambiente1';

        let novoConjunto = estado.conjunto;
        if (novoAmbiente === 'ambiente1') novoConjunto = 'imagens';
        if (novoAmbiente === 'ambiente2') novoConjunto = 'imagensS1';
        if (novoAmbiente === 'ambiente3') novoConjunto = 'imagensS2';

        setEstado({
            conjunto: novoConjunto,
            ambiente: novoAmbiente,
        });

        console.log('Novo estado:', { novoAmbiente, novoConjunto });
    };

    return (
        <Cena>
            <a-sky src={getImagemAtual()}
                animation__fade="property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade"
                animation__fadeback="property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
            ></a-sky>
            <Seta onTrocarAmbiente={trocarAmbiente} />
        </Cena>
    );
};

export default Ambiente360;
