import { useParams } from "react-router-dom";
import Cena from "../../components/Cena";
import { Suspense, useState, useEffect } from "react";
import Seta from "../../components/Seta";
import { assets, conjuntos } from "./DadosAmbiente360";
import Utilizaveis from "../../components/Utilizaveis";
import Objeto3D from "../../components/Objeto3D";
import Fade from "../../components/Fade"
import Link from "../../components/Link";



const Ambiente360 = () => {
    const { id } = useParams(); // id = 'ambiente1', 'ambiente2' ou 'ambiente3'
    const [imagemAtual, setImagemAtual] = useState('img1'); // Controla apenas img1/img2/img3

    // Reset imagemAtual para 'img1' quando mudar de ambiente
    useEffect(() => {
        setImagemAtual('img1');
    }, [id]);

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
    const links = getConjuntoAtual()[imagemAtual]?.links || [];
    const Objeto3D = getConjuntoAtual()[imagemAtual]?.objeto3d || [];

    return (
        <Cena>
            <Utilizaveis>
                {assets}
            </Utilizaveis>

            <Suspense fallback={<Fade />}>

                <a-sky src={imagem} rotation={rotacao} />

                <Seta onTrocarAmbiente={trocarImagem} setas={setas} cards={cards} obj3d={Objeto3D} />
                
                {links.map((link, index) => (
                    <Link
                        key={index}
                        texto={link.texto}
                        ref={link.ref}
                        posicao={link.posicao}
                        rotacao={link.rotacao}
                        tamanhoImagem={link.tamanhoImagem}
                        primeiraImagem={link.primeiraImagem}
                        segundaImagem={link.segundaImagem}
                    />
                ))}
                {/* <Objeto3D posicao='-1 0 -6' scale='0.5 0.5 0.5' /> */}
                </Suspense>

        </Cena>
    );
};

export default Ambiente360;
