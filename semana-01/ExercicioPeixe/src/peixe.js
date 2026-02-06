// Configuração básica do jogo Phaser
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    // Adiciona o objeto de física ao jogo, usando o sistema Arcade do Phaser
    physics: {
        default: 'arcade', //  Define arcade
        arcade: {
            gravity: { y: 0 }, // Sem gravidade no eixo Y
            debug: false 
        }
    },
    // Define as funções principais do jogo
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Cria uma nova instância do jogo Phaser com a configuração definida
var game = new Phaser.Game(config);

// Declaração de variáveis que serão usadas no jogo
var tubaraozinho;
var peixinhos;
var pontuacao = 0;
var pontuacaoText;

// A função preload carrega os recursos do jogo antes de começar
function preload() {
    // Carrega as imagens necessárias para o jogo
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
    this.load.image('peixe_verde', 'assets/peixes/peixe_verde.png'); // Carrega a imagem do novo peixe
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.audio('background_music', 'assets/audio/background_music.mp3');
}

// A função create é chamada uma vez quando o jogo começa, para configurar os elementos iniciais
function create() {
    // Adiciona o fundo do mar
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);

    // Variável para a música de fundo
      var musica = this.sound.add('background_music', { // Adiciona a música de fundo
        loop: true, // Loop infinito
        volume: 0.5 // Volume da música
    });

    musica.play();

    // Adiciona o tubarão como um sprite com física
    tubaraozinho = this.physics.add.sprite(400, 300, 'tubarao'); // Adiciona física ao tubarão, agora ele pode interagir com outros objetos
    tubaraozinho.setCollideWorldBounds(true); // Impede que o tubarão saia das bordas da tela
    tubaraozinho.setScale(0.5).setFlip(true, false); // Reduz o tamanho do tubarão e o vira horizontalmente

    // Adicione novos elementos de peixinhos
    peixinhos = this.physics.add.staticGroup(); // Grupo estático para os peixinhos, ou seja, nao se movem 

    // Adiciona alguns peixinhos ao grupo em posições aleatórias
    for (var i = 0; i < 5; i++) {
        var x = Phaser.Math.RND.between(100, 700); // Gera uma posição X aleatória dentro da tela
        var y = Phaser.Math.RND.between(100, 500); // Gera uma posição Y aleatória dentro da tela
        peixinhos.create(x, y, 'peixe_verde').setScale(0.3).refreshBody(); // Adiciona o peixe verde ao grupo, reduz seu tamanho e atualiza a física
    }

    // Adiciona o texto da pontuação
    pontuacaoText = this.add.text(16, 16, 'Pontos: 0', { fontSize: '32px', fill: '#000000ff' });

    // Define a colisão entre o tubarão e os peixinhos
    // Quando eles se sobrepõem, a função 'comerPeixe' é chamada
    this.physics.add.overlap(tubaraozinho, peixinhos, comerPeixe, null, this);
}
// Atualiza a posição do tubarão a cada frame com base no ponteiro do jogador
function update() {
    // Faz o tubarão seguir a posição do mouse (ponteiro)
    tubaraozinho.x = this.input.x;
    tubaraozinho.y = this.input.y;
}

// Função para quando o tubarão "come" um peixe
function comerPeixe(tubarao, peixe) { // ( Phaser passa os dois objetos que colidiram como argumentos para esta função)
    // "Desativa" o peixe, fazendo-o desaparecer
    peixe.disableBody(true, true);

    // Aumenta a pontuação
    pontuacao += 10;
    pontuacaoText.setText(`Pontos: ${pontuacao}`);

    // Verifica se ainda existem peixes ativos
    if (peixinhos.countActive(true) === 0) { // Se não houver mais peixes ativos, o jogador venceu (condição de vitória)
        // Se não houver mais peixes, exibe a mensagem de vitória
        this.add.text(400, 300, 'You Win!', { fontSize: '64px', fill: '#627602c2' }).setOrigin(0.5);
        // Pausa a física do jogo
        this.physics.pause();
    }
}
