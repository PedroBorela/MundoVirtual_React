import { useEffect } from "react";
import { Entity } from "aframe-react";
import Imagem from "./Imagem";


AFRAME.registerComponent('click-handler', {
    schema: {
        direcao: { type: 'string' }
    },
    init: function () {
        this.handleClick = this.handleClick.bind(this);
        this.el.addEventListener('click', this.handleClick);
    },
    handleClick: function (e) {
        e.stopPropagation();
        // Dispara um evento personalizado (que o React vai ouvir)
        // O evento é disparado na janela, então qualquer parte do app pode ouvir
        const event = new CustomEvent('setaClicada', {
            detail: { direcao: this.data.direcao }
        });
        window.dispatchEvent(event);
    },
    remove: function () {
        this.el.removeEventListener('click', this.handleClick);
    }
});

const Seta = ({ onTrocarAmbiente }) => {
    const scaleAnimations = {
        animation__scale: "property: scale; to: 1.3 1.3 1.3; dur: 200; startEvents: mouseenter",
        animation__reverse: "property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
    };

    // Escuta o evento global e repassa pro React
    useEffect(() => {
        const handleSetaClicada = (e) => {
            const direcao = e.detail.direcao;
            onTrocarAmbiente(direcao);
        };
        // Adiciona o listener no evento global
        window.addEventListener('setaClicada', handleSetaClicada);
        // Remove o listener quando o componente desmontar
        return () => {
            window.removeEventListener('setaClicada', handleSetaClicada);
        };
    }, [onTrocarAmbiente]);

    return (
        <Entity>
            <Imagem
                posicao='0 -0.5 -4'
                rotacao='90 0 -90'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: frente"
            />
            <Imagem
                posicao='3.5 -0.5 1.5'
                rotacao='90 0 45'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: direita"
            />
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
