<p align="center">
  <img 
    src="https://capsule-render.vercel.app/api?type=blur&height=470&color=0:0A2A66,50:1E90FF,100:6EC6FF&text=Exercício%20Peixe&textBg=false&section=header&reversal=true&fontColor=FFFFFF&fontSize=40&fontAlign=50&animation=fadeIn&descAlign=16" 
    alt="Exercício Peixe Banner" 
    width="550"
  />
</p>

---

## 🐟 Sobre o projeto
&ensp; Este projeto foi desenvolvido conforme as instruções do **Projeto Individual – Parte 1: Exercício do Peixe**, descritas no tutorial da Semana 1 do Módulo 1.

&ensp; O **Exercício Peixe** é um jogo simples desenvolvido com a biblioteca **Phaser.js**, com o objetivo de praticar conceitos fundamentais de programação e desenvolvimento de jogos em JavaScript.

## 🗂 Estrutura de pastas do projeto


```text
ExercicioPeixe/
│
├── assets/
│   ├── audio/
│   │   └── background_music.mp3
│   │
│   ├── peixes/
│   │   ├── peixe_verde.png
│   │   └── tubarao.png
│   │
│   ├── bg_azul-claro.png
│   ├── bg_azul-escuro.png
│   ├── logo-inteli_azul.png
│   └── logo-inteli_branco.png
│
├── lib/
│   └── phaser.js
│
├── src/
│   └── peixe.js
│
├── index.html
└── README.md 
```

---
## ✅ Requisitos solicitados na atividade

De acordo com o enunciado, os seguintes requisitos foram atendidos:

- Criação de uma página web utilizando **HTML**
- Desenvolvimento do jogo com **JavaScript** e o framework **Phaser**
- Execução local por meio do **Live Server**
- Organização dos arquivos conforme solicitado:
  - `index.html`
  - `peixe.js`
  - `phaser.js`
  - pasta `assets/` com imagens e subpasta `peixes/`
- Exibição de um cenário de fundo do mar
- Inserção de um peixe que **segue a posição do cursor do mouse**
- Carregamento e uso de imagens via `preload()` e `create()`
- Atualização contínua da posição do peixe na função `update()`
- Centralização da tela do jogo na página utilizando **CSS**
- Alteração do título da aba do navegador (`<title>`) com o nome da autora
- Uso de `console.log()` para relatar a experiência com o tutorial
- Inserção de **um novo elemento visual adicional** na tela
- Publicação do projeto em **repositório individual**, conforme orientado

## Como Funciona? 

&ensp; No jogo, o jogador controla um tubarão que segue o movimento do mouse e deve **capturar todos os peixinhos espalhados pela tela**. A cada peixe capturado, a pontuação aumenta, e o jogo termina quando todos os peixes são coletados.

## 🎮 Mecânica do jogo

- O tubarão segue a posição do mouse do jogador
- Ao encostar em um peixe:
  - O peixe desaparece
  - A pontuação aumenta
- Quando todos os peixes são coletados:
  - Uma mensagem de vitória é exibida
  - A física do jogo é pausada

---


## ⭐ Highlights 
&ensp; Além dos requisitos obrigatórios, o projeto inclui algumas extensões e cuidados adicionais que **não eram exigidos**, mas foram implementados com fins de aprendizado, organização e experimentação:

- Estruturação mais detalhada de pastas (separação lógica de assets)
- Ajustes visuais adicionais, como:
  - Escala personalizada de sprites
  - Espelhamento (`setFlip`) para melhor orientação visual

- Inclusão de mais de um elemento gráfico na cena
- Organização do código com foco em legibilidade e clareza didática
- README documentado com explicação do funcionamento e das decisões tomadas
- Atenção à consistência visual e apresentação do projeto

&ensp; Esses pontos não alteram o escopo original da atividade, mas demonstram exploração consciente das ferramentas apresentadas no tutorial e maior familiaridade com a estrutura de projetos em JavaScript e Phaser.

---