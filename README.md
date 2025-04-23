# Novo Museu Virtual (Trem Virtual)

Este projeto foi projetado por Pedro Borela.

## Trabalhos Relacionados

- Acesse esse [site que lista 30 museus virtuais](https://educacao.sme.prefeitura.sp.gov.br/noticias/30-museus-virtuais-para-voce-visitar-sem-sair-de-casa/)
- Faça uma análise de funcionalidades destes museus virtuais e salve [nesta planilha ](https://docs.google.com/spreadsheets/d/1cLrjxU_usPfNqVd43Tkb6Te5HVrMuZyO6V4CfmDqfn0/edit?usp=sharing)

**OBSERVAÇÃO**:
- Somente deverão ser considerados museus virtuais como tour virtual. Exemplos: `Google Arts & Culture` e `Museu da Casa de Portinari`
- Os museus que estiverem usando o `Google Art & Culture`, suas funcionalidades devem ser registradas na coluna `Google Art & Culture` 
- Cada museu virtual deverá ser analisado a partir de 2 dispositivos: `Computador` e `Celular`. Registre as funcionalidades conforme as abas da planilha relacionada com o dispositivo.

## Histórias do Usuário

- Como um estudante, eu quero acessar o Museu Virtual para conhecer a história de Manhuaçu
- Como um estudante local, quero explorar um museu virtual de Manhuaçu, para aprender sobre a história e cultura da minha cidade de uma maneira interativa e imersiva pelo XR headset.
- Como um estudante, quero participar de simulações históricas em realidade aumentada, para entender melhor os eventos históricos de Manhuaçu.
- Como estudante e usuário quero que tenha várias portas que podem me direcionar para ambientes específicos, para contribuir com o entendimento dos locais históricos.
- Como usuário (mobile), quero dar “pinch” (e “spread”) na tela para dar zoom no ambiente virtual, e (desktop) usar o scroll do mouse, para examinar detalhes das obras.
- Como usuário, quero me locomover pelo ambiente virtual tocando e arrastando no celular ou clicando e arrastando no desktop, para explorar livremente o museu.
- Como usuário, quero tocar/clicar em ícones “(i)” espalhados pelo ambiente para abrir pop‑ups com detalhes da obra, sem sair da experiência imersiva.
- Como usuário, quero ver uma bússola ou mini‑mapa indicando minha posição e direção dentro do espaço, para não me perder durante a visita.
- Como visitante estrangeiro, quero alternar entre Português e Inglês (e, se possível, outros), para entender todas as descrições sem barreiras linguísticas.
- Como usuário, quero que a câmera faça um “fade in/fade out” ou “zoom in” ao mudar de sala, para uma transição menos brusca e mais confortável à visão.
- Como usuário, quero gerar um link ou compartilhar meu ponto de vista atual no ambiente virtual, para convidar amigos a ver exatamente o que estou vendo.
- Como usuário, quero ver uma galeria de fotos ou lista de obras fora do AV (num menu ou rodapé), para navegar rapidamente por todas sem percorrer todo o espaço.
- Como visitante, quero alternar entre modo claro e escuro, para adequar a visualização ao ambiente real onde estou (externo, à noite, etc.). (Baixa)
- Como usuário, quero poder clicar em pontos do espaço para abrir fotos esféricas 360°, para ter visões fotográficas de alta resolução de determinados ambientes. (Alta)
- Como usuário, quero acionar vídeos em 360° em alguns pontos, para assistir a registros animados do local em imersão completa.
- Como usuário, quero acessar uma linha do tempo ou galeria cronológica de obras fora do AV, para entender contexto histórico rapidamente.

## Comandos
- `npm start`: inicia o projeto no ambiente de produção
- `npm run dev`: inicia o projeto no ambiente de desenvolvimento
- `npm run build`: gera o arquivo `./public/javascripts/bundle.js` que compila todos as bibliotecas JavaScript definadas em `./src/main.js`
- `build-dev`: builda e inicia o projeto no ambiente de desenvolvimento


## Procedimentos ao instalar o Aframe e outros pacotes JS front-end via npm
- `npm install NOMEDOPACOTE`
- Inserir em `/.src/main` `require('NOMEDOPACOTE');`


## Estrutura de arquivos paras mundos virtuais

- `./bin`: 
- `./public`: 
    - `3dmodels`: armazenar arquivos 3D
    - `images`: armazenar imagens
    - `javascripts`: armazenar arquivos .js
    - `stylesheets`: armazenar arquivos .css e outros de estilo
- `./routes`: arquivos que configuram as rotas da aplicação
- `./src`: contém o arquivo `main.js`, no qual define as bibliotecas .js 
- `./views`: contém os arquivos de views
- `.env`: define as variáveis de ambiente do projeto
- `.gitignore`: arquivo que ignora arquivos que não devem ser rastreados pelo git
- `app.js`: arquivo principal da aplicação
- `package.json`: arquivo que contém os comandos e dependências do projeto
- `README.MD`: contém intruções do projeto para o desenvolvedor
- `webpack.config.js`: arquivo de configuração para compilação de bibliotecas .js

