# Exercício do Alien – Jogo 2D com Phaser

<div align="center">

<h1 style="
    padding: 40px;
    border-radius: 16px;
    background: linear-gradient(135deg, #0f2027, #2c7744, #00ff88);
    color: white;
    font-size: 48px;
    letter-spacing: 4px;
">
JOGO ALIEN
</h1>

</div>

## Como Executar o Projeto? 

1. Clone o repositório.
2. Abra o projeto no VS Code.
3. Inicie o Live Server.
4. Acesse:

http://127.0.0.1:5500/semana-03/ExercícioAlien/index.html

### Sobre o Projeto

O Exercício do Alien é um jogo 2D desenvolvido com o framework Phaser 3, utilizando o motor de física Arcade. O jogador controla um alien que deve coletar moedas enquanto interage com obstáculos e bônus especiais.

### Mecânica do Jogo

- O jogador movimenta o alien utilizando as setas do teclado.

- O cenário possui duas plataformas que funcionam como obstáculos físicos.

- O objetivo principal é coletar moedas espalhadas pelo jogo.

- A cada 10 moedas coletadas, surge um coração como bônus.

- Cada coração vale 5 pontos adicionais.

- O bônus continua aparecendo a cada múltiplo de 10 pontos.

- Ao atingir 50 moedas, o jogador vence a partida.

- Após a vitória, é possível reiniciar o jogo.

### Funcionalidades Técnicas

- Utilização do motor Arcade Physics do Phaser.

- Sistema de colisão entre personagem e plataformas.

- Detecção de overlap para coleta de moedas e bônus.

- Sistema de pontuação dinâmica.

- Controle de estado do jogo (jogo ativo e vitória).

- Reinício da cena após conclusão.

#### O código está organizado seguindo o ciclo de vida do Phaser:

`preload()` – carregamento dos assets

`create()` – criação e configuração dos objetos

`update()` – lógica executada continuamente durante o jogo

### Estrutura do Projeto
```
projeto-alien/
├── index.html
├── README.md
└── assets/
    ├── alienigena.png
    ├── bg.png
    ├── turbo.png
    ├── tijolos.png
    ├── moeda.png
    └── coracao.png

    
```
`index.html:` contém toda a lógica e estrutura do jogo.

`assets/`: pasta com as imagens utilizadas no projeto.

`README.md`: documentação do projeto.

### Tecnologias Utilizadas

- HTML5

- JavaScript

- Phaser 3

## Objetivo

Este projeto foi desenvolvido com o objetivo de praticar:

- Física em jogos 2D

- Colisões e detecção de contato

- Organização de código

- Estruturação de projetos simples com separação de arquivos