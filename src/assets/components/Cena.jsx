import { Entity, Scene } from "aframe-react";
import { useState } from "react";


const Cena = (props) => {
    const propsClick = {animation__click : "property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 300; startEvents: click",
    animation__clickreset : "property: scale; to: 0.8 0.8 0.8; dur: 1; startEvents: animationcomplete__click",
    animation__fusing : "property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 300; startEvents: fusing"}

    return (
        <Scene vr-mode-ui="enabled:true" webxr="optionalFeatures: hit-test;">

            <a-assets>
                {/* Audio de click */}
                <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>

                <img id='primeiraImagem' src='../../../public/assets/imgs/teste.png' />
                <img id='segundaImagem' src='../../../public/assets/imgs/teste1.png' />

                <img id='cafeicultor' src='../../../public/assets/imgs/cafeicultor.jpg' />
                <img id='CastelodoCafe' src='../../../public/assets/imgs/CastelodoCafe.jpg' />

                <img id='Leopoldina' src='../../../public/assets/imgs/Leopoldina.jpg' />
                <img id='mapaManhu' src='../../../public/assets/imgs/mapaManhu.png' />
                <img id='seta' src='../../../public/assets/imgs/seta.png' />

                <a-asset-item id="porta" src='../../../public/assets/models_3d/base_basic_shaded.glb'></a-asset-item>

                <img id='bemVindo' src='../../../public/assets/text/BemVindo.png' />
            </a-assets>
            {props.children}
            
            <a-camera look-controls universal-controls="movementControls: checkpoint" checkpoint-controls="mode: animate">
                <a-cursor
                    {...propsClick}
                    fuse="true"
                    fuseTimeout="500"
                    rayOrigin="mouse"
                    material="color: #F00
                    shader: flat"
                ></a-cursor>
            </a-camera>
        </Scene>
    )
}

export default Cena;