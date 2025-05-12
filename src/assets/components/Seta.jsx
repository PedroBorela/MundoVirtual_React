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

const Seta = ({ onTrocarAmbiente, setas }) => {

    const direcoes = {esquerda: '-1.5 -0.5 -3', direita: '1.5 -0.5 -3', frente: '0 -0.5 -4' , tras: '0 -0.5 -2'};

    // Animações de escala para as setas
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


        const setasPresentes = setas.split(' ');
        console.log(setasPresentes);
    return (
        <Entity>
            {/* Seta Frente */}
            <Imagem
                posicao={direcoes.frente}
                rotacao='90 0 -90'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: frente"
            />

            {/* Seta Direita */}
            <Imagem
                posicao={direcoes.direita}
                rotacao='90 0 30.5'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: direita"
            />
            
            {/* Seta esquerda */}
            <Imagem
                posicao={direcoes.esquerda}
                rotacao='90 0 160'
                idImagem='#seta'
                tamanho='0.7'
                {...scaleAnimations}
                click-handler="direcao: esquerda"
            />
            
            <Imagem
                posicao={direcoes.tras}
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
