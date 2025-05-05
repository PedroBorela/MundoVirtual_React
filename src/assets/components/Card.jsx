import { Entity } from "aframe-react";

const Card = ({ texto, ...props }) => {
    return (
        <Entity
            geometry={{ primitive: 'plane', width: 1.5, height: 1.5 }}

            material={{ color: '#FFF', transparent: true, opacity: 0.7 }}
            text={{
                
                font:'fonte-msdf.json',
                value: texto,
                color: '#000',
                width: 1.5,
                align: 'center',
                zOffset: 0.1, // Garante que o texto fique na frente
                fontImage: 'fonte.png'
            }}
            {...props}
        >
        </Entity >
    )
}
export default Card;