import { useParams } from "react-router-dom";
import Cena from "../components/Cena";
import Imagem from "../components/Imagem";
import Seta from "../components/Seta";

const imagens = {
    ambiente1: '../../../public/assets/imgs/img360_1.jpg',
    ambiente2: '../../../public/assets/imgs/img360_2.avif',
    ambiente3: '../../../public/assets/imgs/img360_3.avif',
}

const Ambiente360 = () => {
    const { id } = useParams();
    const imagem = imagens[id];
    return (
        <Cena>
            <a-sky src={imagem}
                animation__fade="property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade"
                animation__fadeback="property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
            ></a-sky>
            <Seta />

        </Cena>
    )
}

export default Ambiente360;