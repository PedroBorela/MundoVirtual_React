import { Entity } from "aframe-react"
import Imagem from "./Imagem"


const animacao = "property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseenter"
const animacao_inversa = "property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
const Seta = () => {

    return (
        <Entity>
            {/* Seta pra frente */}
            <Imagem posicao='0 -0.5 -4' rotacao='90 0 -90' idImagem='#seta' tamanho='0.7' animation__scale={animacao} animation__reverse={animacao_inversa}></Imagem>
            
            {/* Seta para a direita */}
            <Imagem posicao='3.5 -0.5 1.5' rotacao='90 0 45' idImagem='#seta' tamanho='0.7' animation__scale={animacao} animation__reverse={animacao_inversa}></Imagem>

            {/* Seta para a esquerda */}
            <Imagem posicao='-3.5 -0.5 1.5' rotacao='90 0 160' idImagem='#seta' tamanho='0.7' animation__scale={animacao} animation__reverse={animacao_inversa}></Imagem>
        </Entity>
    )
}

export default Seta