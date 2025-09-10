import { Entity } from "aframe-react";
import { useState, useEffect } from "react";

// É uma boa prática definir constantes fora do componente 
// se elas não dependem de props ou estado.
const escala = {
  animation__scale: "property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter",
  animation__scale_reverse: "property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
};

const Card = ({ texto, posicao, rotacao = "0 0 0", ...props }) => {
  const [informacao, setInformacao] = useState(false);

  const mudaComponente = () => {
    // Usar a forma de callback garante que você está usando o estado mais recente
    setInformacao(prevState => !prevState);
  };

  // Opcional: Se você quiser ver o estado *atualizado* após a mudança,
  // use o hook useEffect.
  useEffect(() => {
    console.log("O estado 'informacao' agora é:", informacao);
  }, [informacao]);

  if (!informacao) {
    // ---- Este é o estado do ícone de informação (pequeno) ----
    return (
      <Entity
        primitive="a-image"
        src="#info"
        width="0.2"
        height="0.2"
        position={posicao}
        rotation={rotacao}
        events={{
          click: mudaComponente,
        }}
        {...escala}
        {...props}
      />
    );
  } else {
    // ---- Este é o estado do card expandido ----
    return (
      <Entity position={posicao} rotation={rotacao}>
        {/* Plano de Fundo e Texto */}
        <Entity
          geometry={{ primitive: 'plane', width: 1.5, height: 1.5 }}
          material={{
            color: '#FFF',
            transparent: true,
            opacity: 0.7,
          }}
          text={{
            font: '/assets/font/fonte-msdf.json',
            value: texto,
            color: '#F00',
            width: 1.5,
            align: 'center',
            wrapCount: 28,
            negate: false, // `negate` deve ser um booleano, e não uma string
            lineHeight: 60,
            zOffset: 0.01,
            fontImage: '/assets/font/fonte.png'
          }}
          position="0 0 0" // Posicionado no centro do elemento pai
          renderOrder={1}
        />
        {/* Botão de Fechar */}
        <Entity
          primitive="a-image"
          src="#fechar"
          width="0.2"
          height="0.2"
          // Esta posição é relativa à Entidade pai. O cálculo complexo não é necessário.
          position="0.6 0.6 0.1"
          material={{ transparent: true, opacity: 1 }}
          renderOrder={10} // renderOrder maior para aparecer na frente
          depthTest={false} // Desativa o teste de profundidade para evitar que seja cortado
          events={{
            click: mudaComponente,
          }}
          {...escala}
        />
      </Entity>
    );
  }
};

export default Card;