const Cubo = (props) => {
    return (
        <a-plane position={props.posicao} width={props.tamanho} height={props.tamanho} rotation={props.rotacao} color={props.cor}></a-plane>
    )
}

export default Cubo;