
const Imagem = (props) =>{
    // console.log(props.posicao)
    return (
        <a-image 
        src={props.idImagem}
         position ={props.posicao} 
         rotation={props.rotacao}
         width={props.tamanho}
         height={props.tamanho}></a-image>
    )
}

export default Imagem