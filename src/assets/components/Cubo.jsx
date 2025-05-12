import { Entity } from "aframe-react";

const Cubo = (props) => {
    return (
        // <a-plane position={props.posicao} width={props.tamanho} height={props.tamanho} rotation={props.rotacao} color={props.cor}></a-plane>
        <Entity
            primitive="a-image"
            src={props.caminho}
            position={props.posicao} width={props.tamanho} height={props.tamanho} rotation={props.rotacao}
        /> 
        
        
    )
}

export default Cubo;