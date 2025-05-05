
const Imagem = ({idImagem,posicao,rotacao,tamanho, ...rest}) => {
    // console.log(props.posicao)
    return (
        <a-image
            src={idImagem}
            position={posicao}
            rotation={rotacao}
            width={tamanho}
            height={tamanho}
            {...rest}
            className='clickable'
        ></a-image>
    )
}

export default Imagem