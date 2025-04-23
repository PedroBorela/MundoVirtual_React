import 'aframe';
import { Entity, Scene } from 'aframe-react';
import CaixaInterativa from "../components/CaixaInterativa";
import Link from '../components/Link';
import { useState } from 'react';
import Sala from '../components/Sala';
import Imagem from '../components/Imagem';
import Cena from '../components/Cena';

const HallDeEntrada = () => {

    return (
        <Cena>

            <Sala tamanho={7} />
            <Link texto='distritos' ref='/sala' posicao={'0 1 -2.3'} rotacao={'0 0 0'} tamanhoImagem='1.5' primeiraImagem='#mapaManhu' segundaImagem='#Leopoldina' />
            <Link texto='ola' ref='/sala' posicao={'0 1 2.3'} rotacao={'0 180 0'} tamanhoImagem='1.5' />
            <Link texto='ola' ref='/sala' posicao={'2.3 1 0'} rotacao={'0 -90 0'} tamanhoImagem='1.5' />
            <Link texto='ola' ref='/sala' posicao={'-2.3 1 0'} rotacao={'0 90 0'} tamanhoImagem='1.5' />

        </Cena>
    )
}

export default HallDeEntrada