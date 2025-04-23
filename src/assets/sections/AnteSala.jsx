import Cena from "../components/Cena";
import Link from "../components/Link";
import Sala from "../components/Sala";
import Texto from "../components/Texto";

const AnteSala = () =>{
    return (
        <Cena>
            <Sala tamanho={7}/>
            {/* <Texto texto='Seja bem vindo ao Museu Virtual de Manhuaçu' posicao='0 2 -2' rotacao='0 0 0'/> */}
            <Link texto='Entrar'  ref='/hallDeEntrada' posicao={'0 1 -2.3'} rotacao={'0 0 0'} primeiraImagem='#bemVindo' segundaImagem='#bemVindo' tamanhoImagem='3'/>
            
        </Cena>
    )
}

export default AnteSala;