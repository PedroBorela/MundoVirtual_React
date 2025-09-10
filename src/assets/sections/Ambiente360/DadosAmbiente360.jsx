// Ambiente 1
export const imagens = {
    img1: {
        posicao: '0 -100 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem1.jpg',
        setas: ['frente'],
        cards: [

            {
                "texto": "Serafim Tibúrcio foi um coronel e político brasileiro da cidade de Manhuaçu, em Minas Gerais. Em 1896 liderou um movimento emancipacionista e proclamou a República do Manhuaçu.",
                "posicao": "0.5 1.9 -2.3"
            },
            {
                "texto": "A economia de Manhuaçu sempre foi ligada ao café, sendo a cidade um dos polos cafeeiros de Minas Gerais.",
                "posicao": "-1 0.9 -3"
            },

        ],
        objeto3d: [{ "posicao": '0 0 -6', "scale": '0.5 0.5 0.5' }]

    },
    img2: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem2.jpg',
        setas: ['esquerda', 'tras'],
        cards: [

            {
                "texto": "O Palácio da Cultura de Manhuaçu, restaurado em 2020, é um dos principais patrimônios arquitetônicos da cidade.",
                "posicao": "0.2 1.5 -1"
            },
            {
                "texto": "O nome 'Manhuaçu' tem origem tupi e significa 'rio grande', referência ao rio que corta a cidade.",
                "posicao": "-0.5 1.5 -3"
            },

        ]
    },
    img3: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem3.jpg',
        setas: ['direita', 'esquerda', 'tras'],
        cards: [
{/*
            {
                "texto": "A colonização da região começou no século XVIII com o bandeirante Pedro Bueno Cacunda.",
                "posicao": "3 1.5 -3",
                "rotacao": "0 90 0"
            },
            {
                "texto": "A cidade já teve sua sede em São Simão (atual Simonésia) antes de ser transferida para a Vila de São Lourenço em 1881.",
                "posicao": "-3 1.5 -2"
            },
            */}

        ],
        links: [
            {
                "texto": "Deseja entrar na próxima sala?",
                "ref": "/ambiente/ambiente2",
                "posicao": "0 1.5 -3.5",
                "rotacao": "0 0 0",
                "tamanhoImagem": "1.5",
                "primeiraImagem": "#entradaProxSala",
                "segundaImagem": "#entrandoPrt"
            }
        ]
    },
    img4: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem3_1.jpg',
        setas: ['direita'],
        cards: [
            {
                "texto": "Em 1896, o coronel Serafim Tibúrcio proclamou a República de Manhuaçu, que durou 22 dias.",
                "posicao": "0 1.5 -2"
            },
            {
                "texto": "A Estátua do Cafeicultor, símbolo da importância do café para Manhuaçu, está localizada no trevo da BR-262.",
                "posicao": "3 1.5 -1.7",
                "rotacao": "0 -45 0"
            },
            {
                "texto": "A colonização da região começou no século XVIII com o bandeirante Pedro Bueno Cacunda.",
                "posicao": "-2 1 -1.2",
                "rotacao": "0 45 0"
            }
        ],
        
    },
    botoes: [{
        "texto": "avançar",
        "rotacao": "0 0 0",
        "posicao": "0 0 0"
    }]
}

//Ambiente 2
export const imagensS1 = {
    img1: {
        posicao: '0 -90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem4.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],
    },
    img4: {
        posicao: '0 0 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem5.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],
    },
    img2: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem6.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],
    },
    img3: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem7.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],
    },


}

//Ambiente 3
export const imagensS2 = {
    img1: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem8.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],

    },
    img2: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem9.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],

    },
    img3: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem10.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],

    },
    img4: {
        posicao: '0 90 0',
        caminho: '/assets/fotos_CasaDeCultura/imagem11.jpg',
        setas: ['frente', 'esquerda', 'direita', 'tras'],

    },

}

export const conjuntos = {
    imagens,
    imagensS1,
    imagensS2,
};


export const assets = <>

    <img id='info' src='/assets/imgs/info.png' />
    <img id='fechar' src='/assets/imgs/fechar.png' />
    <img id='parede' src='/assets/imgs/parede.png' />
    <img id='teto' src='/assets/imgs/teto.png' />
    <img id='chao' src='/assets/imgs/chao.png' />
    <a-asset-item id="bustoSerafim" src='/assets/models_3d/Busto2SerafimTiburcio/SerafimTiburcio.glb'></a-asset-item>



</>
