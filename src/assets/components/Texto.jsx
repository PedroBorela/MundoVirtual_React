import { Entity } from 'aframe-react';


const Texto = (props) =>{
    return (
        <Entity class="texto"
                        geometry="primitive: plane; height: 1; width: 2"
                        material={{
                            shader: 'flat',
                            color:  '#00f',
                            transparent: true,
                            opacity: 0.9
                        }}
                        text={{
                            value: props.texto,
                            align: 'center',
                            width: 2,
                            color: 'black'
                        }}
                        // events={{
                        //     click: handleClick,
                        //     mouseenter: () => setHovered(true),
                        //     mouseleave: () => setHovered(false)
        
                        // }}
                        position={props.posicao}
                        rotation={props.rotacao}
                        // scale={hovered ? '1.2' : '1'}
        
                    >
        
                    </Entity>
    )
}

export default Texto;