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
    const {id} =useParams();
    const imagem = imagens[id];
    return (
        <Cena>
            <a-sky src={imagem}></a-sky>
            <Seta/>
            
        </Cena>
    )
}

export default Ambiente360;