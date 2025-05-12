import Cubo from "./Cubo"


const Sala = ({tamanho}) => {
    const metadeTamanho = tamanho / 2;

    return (
        <>
            {/* teste */}
            {/* chão */}
            <Cubo posicao='0 0.1 0' repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='-90 0 0' caminho='#chao' />
            {/* parede esquerda */}
            <Cubo posicao={`${metadeTamanho} 0 0`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 -90 0' caminho='#parede' />
            {/* parede direita */}
            <Cubo posicao={`-${metadeTamanho} 0 0`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 90 0' caminho='#parede' />
            {/* parede traseira */}
            <Cubo posicao={`0 0 ${metadeTamanho}`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 180 0' caminho='#parede' />
            {/* parede frontal */}
            <Cubo posicao={`0 0 -${metadeTamanho}`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='0 0 0' caminho='#parede' />
            {/* teto */}
            <Cubo posicao={`0 ${metadeTamanho} 0`} repeat={`${tamanho} ${tamanho}`} tamanho={tamanho} rotacao='90 0 0' caminho='#teto' />


        </>
    )



}

export default Sala