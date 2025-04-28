import { Entity, Scene } from "aframe-react";
import { useState } from "react";


const Cena = (props) => {

    return (
        <Scene cursor={{ fuse: false, rayOrigin: "mouse" }} vr-mode-ui="enabled:true" webxr="optionalFeatures: hit-test;">


            {/* <a id="myEnterVRButton" href="#"></a> */}
            {/* <Entity
                id="myEnterVRButton"
                class="clickable"
                geometry="primitive: plane; width: 0.8; height: 0.3"
                material="color: #4CAF50; shader: flat; opacity: 0.9"
                text="value: ENTRAR EM VR; color: white; align: center; width: 2"
                position="1 1 -2"
                animation__scale="property: scale; to: 1.2 1.2 1.2; dur: 200; startEvents: mouseenter"
                animation__scale_reverse="property: scale; to: 1 1 1; dur: 200; startEvents: mouseleave"
                events={{
                    click: () => setIsVRMode(!isVRMode)
                }}
            /> */}

            <a-assets>
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
            <Entity
                cursor="rayOrigin: mouse" raycaster="objects: .clickable"></Entity>
            {/* <a-sky color="#ECECEC"></a-sky> */}

            {/* <Entity id="camera" movement-controls="controls: checkpoint, keyboard" checkpoint-controls="mode: animate">
                <Entity camera="active: true" position="0 1.6 0" rotate="0 90 0" cursor="rayOrigin: mouse" wasd-controls
                    look-controls="pointerLockEnabled: true"></Entity>
            </Entity> */}
            <a-camera>
                <a-cursor></a-cursor>
            </a-camera>
        </Scene>
    )
}

export default Cena;