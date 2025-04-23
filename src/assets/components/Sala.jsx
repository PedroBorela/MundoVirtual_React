import Cubo from "./Cubo"


const Sala = ({tamanho}) => {
    const metadeTamanho = tamanho / 2;

    return (
        <>
            {/* teste */}
            {/* chão */}
            <Cubo posicao='0 0.1 0' repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='-90 0 0' cor="gray" />
            {/* parede esquerda */}
            <Cubo posicao={`${metadeTamanho} 0 0`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 -90 0' cor="yellow" />
            {/* parede direita */}
            <Cubo posicao={`-${metadeTamanho} 0 0`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 90 0' cor="blue" />
            {/* parede traseira */}
            <Cubo posicao={`0 0 ${metadeTamanho}`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 180 0' cor="pink" />
            {/* parede frontal */}
            <Cubo posicao={`0 0 -${metadeTamanho}`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 0 0' cor="orange" />
            {/* teto */}
            <Cubo posicao={`0 ${metadeTamanho} 0`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='90 0 0' cor="gray" />


        </>
    )



}

export default Sala