import 'aframe';
import { Entity } from 'aframe-react';
import { useState } from 'react';
import Imagem from './Imagem';
import { useNavigate } from 'react-router-dom';

// import { Entity } from 'aframe-react';


const Link = (props) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (props.evento)
            props.evento()
        navigate(props.ref)
    }
    // let posi = props.posicao
    // console.log(posi)
    // console.log(typeof(posi))

    // Transforma string númerica em array
    const posArray = props.posicao.split(' ').map(Number);
    //Para não deixar a imagem sobrepor o link
    const eixoPositivoX = posArray[0] > 0 ? 0.01 : (-0.01);
    const eixoPositivoZ = posArray[2] > 0 ? 0.01 : (-0.01);

    const imagemPos = `${posArray[0] + eixoPositivoX} ${posArray[1] + 1} ${posArray[2] + eixoPositivoZ}`;

    return (
        <>
            <Imagem posicao={imagemPos} rotacao={props.rotacao} idImagem={hovered ? props.segundaImagem : props.primeiraImagem} tamanho={props.tamanhoImagem}></Imagem>
            <Entity class="link"
                geometry="primitive: plane; height: 0.25; width: 0.9"
                material={{
                    shader: 'flat',
                    color: hovered ? '#0f0' : '#00f',
                    transparent: true,
                    opacity: 0.9
                }}
                text={{
                    value: props.texto,
                    align: 'center',
                    width: 2,
                    color: 'black'
                }}
                animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
                events={{
                    click: handleClick,
                    mouseenter: () => setHovered(true),
                    mouseleave: () => setHovered(false)

                }}
                position={props.posicao}
                rotation={props.rotacao}
                // scale={hovered ? '1.2' : '1'}

            >

            </Entity>

        </>
    )
}

export default Link