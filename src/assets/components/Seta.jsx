import { Entity } from "aframe-react";
import Imagem from "./Imagem";

//  Registra o componente de clique para as setas
// Este componente adiciona um evento de clique a cada seta, que pode ser usado para navegar entre as cenas ou executar outras ações.
AFRAME.registerComponent('click-handler', {
    //Define os parâmetros do componente
    // Neste caso, estamos definindo um parâmetro chamado "direcao" que é uma string.
    schema: {
        direcao: { type: 'string' }
    },

    init: function () {
        //
        this.handleClick = this.handleClick.bind(this);
        this.el.addEventListener('click', this.handleClick);
    },
    handleClick: function (e) {
        e.stopPropagation()
        console.log(`Seta ${this.data.direcao} clicada`);
    },
    // Remove o evento de clique quando o componente é removido
    // Isso é importante para evitar vazamentos de memória e garantir que o evento não seja chamado quando o elemento não estiver mais na cena.
    remove: function () {
        this.el.removeEventListener('click', this.handleClick);
    }
});

const Seta = () => {
    // Define as animações de escala para as setas
    const scaleAnimations = {
        animation__scale: "property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseenter",
        animation__reverse: "property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
    };

    return (
        <Entity>
            {/* Forward arrow */}
            <Imagem
                posicao='0 -0.5 -4'
                rotacao='90 0 -90'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: frente"
            />

            {/* Right arrow */}
            <Imagem
                posicao='3.5 -0.5 1.5'
                rotacao='90 0 45'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: direita"
            />

            {/* Left arrow */}
            <Imagem
                posicao='-3.5 -0.5 1.5'
                rotacao='90 0 160'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: esquerda"
            />
        </Entity>
    );
};

export default Seta;