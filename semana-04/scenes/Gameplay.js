/**
 * ========================================
 * CENA: GAMEPLAY (JOGO PRINCIPAL)
 * ========================================
 * 
 * Esta é a cena principal do jogo onde:
 * - O unicórnio se move e coleta cristais
 * - Obstáculos aparecem e causam dano
 * - O placar é atualizado
 * - Efeitos especiais (arco-íris) são criados
 * 
 * Requisitos atendidos:
 * - Cenário, Personagem, Plataformas, Placar
 * - Animações e Efeitos Especiais (arco-íris)
 * - Lógica com condicionais (if/else)
 * - Estrutura de dados (arrays/listas)
 * - Colisão e Overlap
 * - Código comentado e organizado
 */

class Gameplay extends Phaser.Scene {
    constructor() {
        super({ key: 'Gameplay' });
    }
    
    /**
     * Função preload: Carrega assets (já carregados na Welcome, mas deixamos como referência)
     */
    preload() {
        // Os assets já foram carregados na cena Welcome
        // Mas podemos recarregar aqui se necessário
    }
    
    /**
     * Função create: Configura todos os elementos do jogo
     */
    create() {
        // ========================================
        // VARIÁVEIS DE CONTROLE DO JOGO
        // ========================================
        
        // Placar (pontos do jogador)
        this.score = 0;
        this.vidas = 3;
        
        // Controle de spawn de obstáculos
        this.obstaculoTimer = 0;
        this.intervaloObstaculo = 2000; // 2 segundos entre obstáculos
        
        // Lista para armazenar plataformas (requisito: usar lista/array)
        this.plataformas = [];
        
        // Lista para armazenar cristais
        this.cristais = [];
        
        // Lista para armazenar obstáculos
        this.obstaculos = [];
        
        // ========================================
        // CRIAR FUNDO
        // ========================================
        
        this.add.image(400, 300, 'fundo').setScale(0.8);
        
        // ========================================
        // CRIAR PLATAFORMAS (ESTRUTURA DE REPETIÇÃO)
        // ========================================
        // Requisito: Usar estrutura de repetição (for/while)
        
        const configPlataformas = [
            { x: 100, y: 550 },
            { x: 400, y: 550 },
            { x: 700, y: 550 },
            { x: 200, y: 450 },
            { x: 600, y: 450 },
            { x: 400, y: 350 },
            { x: 150, y: 250 },
            { x: 650, y: 250 }
        ];
        
        // Loop para criar cada plataforma
        for (let i = 0; i < configPlataformas.length; i++) {
            const plat = this.physics.add.staticImage(
                configPlataformas[i].x,
                configPlataformas[i].y,
                'plataforma'
            );
            plat.setScale(0.6);
            this.plataformas.push(plat); // Adicionar à lista
        }
        
        // ========================================
        // CRIAR PERSONAGEM (UNICÓRNIO)
        // ========================================
        
        this.unicornio = this.physics.add.sprite(400, 100, 'unicornio');
        this.unicornio.setScale(0.15);
        this.unicornio.setBounce(0.2);
        this.unicornio.setCollideWorldBounds(true);
        
        // Velocidade máxima horizontal
        this.unicornio.maxVelocityX = 200;
        
        // ========================================
        // CONFIGURAR COLISÕES
        // ========================================
        // Requisito: Usar colisão/overlap
        
        // Unicórnio colide com plataformas
        for (let i = 0; i < this.plataformas.length; i++) {
            this.physics.add.collider(this.unicornio, this.plataformas[i]);
        }
        
        // ========================================
        // CRIAR CRISTAIS INICIAIS
        // ========================================
        
        this.criarCristaisAleatorios(5);
        
        // ========================================
        // CRIAR GRUPO DE OBSTÁCULOS
        // ========================================
        
        this.obstaculosGroup = this.physics.add.group();
        
        // Overlap: Unicórnio colidindo com obstáculos
        this.physics.add.overlap(
            this.unicornio,
            this.obstaculosGroup,
            this.atingidoPorObstaculo,
            null,
            this
        );
        
        // ========================================
        // CRIAR GRUPO DE CRISTAIS
        // ========================================
        
        this.cristaisGroup = this.physics.add.group();
        
        // Overlap: Unicórnio coletando cristais
        this.physics.add.overlap(
            this.unicornio,
            this.cristaisGroup,
            this.coletarCristal,
            null,
            this
        );
        
        // ========================================
        // CONFIGURAR CONTROLES DO TECLADO
        // ========================================
        // Requisito: Apresentar controles (setas)
        
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // ========================================
        // CRIAR TEXTOS DA INTERFACE
        // ========================================
        
        // Placar
        this.scoreText = this.add.text(20, 20, 'Pontos: 0', {
            fontSize: '28px',
            fontFamily: 'Arial Black',
            fill: '#FFD700',
            stroke: '#000000',
            strokeThickness: 3
        });
        
        // Vidas
        this.vidasText = this.add.text(20, 60, 'Vidas: 3', {
            fontSize: '28px',
            fontFamily: 'Arial Black',
            fill: '#FF1493',
            stroke: '#000000',
            strokeThickness: 3
        });
        
        // Instruções
        this.add.text(400, 20, 'Use SETAS para mover | ESPAÇO para pular', {
            fontSize: '14px',
            fontFamily: 'Arial',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2,
            align: 'center'
        }).setOrigin(0.5, 0);
    }
    
    /**
     * Função update: Atualiza a lógica do jogo a cada frame
     */
    update() {
        // ========================================
        // CONTROLE DO PERSONAGEM
        // ========================================
        
        // Movimento horizontal (SETA ESQUERDA e SETA DIREITA)
        if (this.cursors.left.isDown) {
            // Requisito: Usar condicional (if)
            this.unicornio.setVelocityX(-200);
        } else if (this.cursors.right.isDown) {
            this.unicornio.setVelocityX(200);
        } else {
            this.unicornio.setVelocityX(0);
        }
        
        // Pulo (SETA PARA CIMA ou ESPAÇO)
        if ((this.cursors.up.isDown || this.cursors.space.isDown) && this.unicornio.body.touching.down) {
            this.unicornio.setVelocityY(-400);
            
            // Criar efeito de arco-íris ao pular
            this.criarEfeitoArcoIris();
        }
        
        // ========================================
        // SPAWN DE OBSTÁCULOS
        // ========================================
        
        this.obstaculoTimer += this.game.loop.delta;
        
        // Requisito: Usar condicional para spawn
        if (this.obstaculoTimer > this.intervaloObstaculo) {
            this.criarObstaculo();
            this.obstaculoTimer = 0;
            
            // Aumentar dificuldade: reduzir intervalo
            // Requisito: Usar condicional (if)
            if (this.intervaloObstaculo > 1000) {
                this.intervaloObstaculo -= 50;
            }
        }
        
        // ========================================
        // REMOVER OBSTÁCULOS QUE SAÍRAM DA TELA
        // ========================================
        
        // Usar forEach para iterar sobre obstáculos (requisito: estrutura de repetição)
        this.obstaculosGroup.children.entries.forEach(obstaculo => {
            if (obstaculo.y > 650) {
                obstaculo.destroy();
            }
        });
        
        // ========================================
        // VERIFICAR GAME OVER
        // ========================================
        
        if (this.vidas <= 0) {
            this.gameOver();
        }
        
        // Cair da tela = perder vida
        if (this.unicornio.y > 650) {
            this.perderVida();
        }
    }
    
    /**
     * Função para criar cristais aleatoriamente
     * Requisito: Usar função e lista/array
     */
    criarCristaisAleatorios(quantidade) {
        for (let i = 0; i < quantidade; i++) {
            const x = Phaser.Math.Between(50, 750);
            const y = Phaser.Math.Between(50, 300);
            
            const cristal = this.cristaisGroup.create(x, y, 'cristal');
            cristal.setScale(0.08);
            cristal.setBounce(0.7);
            cristal.setCollideWorldBounds(true);
            cristal.setVelocity(
                Phaser.Math.Between(-50, 50),
                Phaser.Math.Between(-50, 50)
            );
            
            this.cristais.push(cristal);
        }
    }
    
    /**
     * Função para coletar cristal
     * Requisito: Usar overlap e função
     */
    coletarCristal(unicornio, cristal) {
        // Requisito: Usar condicional
        if (cristal.active) {
            cristal.destroy();
            
            // Aumentar pontos
            this.score += 10;
            this.scoreText.setText('Pontos: ' + this.score);
            
            // Criar novo cristal
            this.criarCristaisAleatorios(1);
            
            // Efeito visual
            this.cameras.main.shake(100, 0.01);
        }
    }
    
    /**
     * Função para criar obstáculo
     * Requisito: Usar função
     */
    criarObstaculo() {
        const x = Phaser.Math.Between(50, 750);
        const y = -50;
        
        const obstaculo = this.obstaculosGroup.create(x, y, 'obstaculo');
        obstaculo.setScale(0.08);
        obstaculo.setVelocityY(Phaser.Math.Between(150, 250));
        
        // Movimento horizontal aleatório
        obstaculo.setVelocityX(Phaser.Math.Between(-100, 100));
    }
    
    /**
     * Função para criar efeito de arco-íris
     * Requisito: Efeito especial/animação
     */
    criarEfeitoArcoIris() {
        // Cores do arco-íris
        const coresArcoIris = [0xFF0000, 0xFF7F00, 0xFFFF00, 0x00FF00, 0x0000FF, 0x4B0082, 0x9400D3];
        
        // Criar partículas de arco-íris
        for (let i = 0; i < 5; i++) {
            const particula = this.add.circle(
                this.unicornio.x,
                this.unicornio.y,
                5,
                coresArcoIris[i % coresArcoIris.length]
            );
            
            // Animar a partícula
            this.tweens.add({
                targets: particula,
                x: particula.x + Phaser.Math.Between(-50, 50),
                y: particula.y + 50,
                alpha: 0,
                duration: 800,
                ease: 'Linear',
                onComplete: () => {
                    particula.destroy();
                }
            });
        }
    }
    
    /**
     * Função para quando o unicórnio é atingido por obstáculo
     * Requisito: Usar overlap
     */
    atingidoPorObstaculo(unicornio, obstaculo) {
        if (obstaculo.active) {
            obstaculo.destroy();
            this.perderVida();
        }
    }
    
    /**
     * Função para perder vida
     * Requisito: Usar função e condicional
     */
    perderVida() {
        this.vidas--;
        this.vidasText.setText('Vidas: ' + this.vidas);
        
        // Efeito visual de dano
        this.cameras.main.shake(200, 0.02);
        
        // Requisito: Usar condicional (if)
        if (this.vidas > 0) {
            // Resetar posição do unicórnio
            this.unicornio.setPosition(400, 100);
            this.unicornio.setVelocity(0, 0);
        }
    }
    
    /**
     * Função para Game Over
     */
    gameOver() {
        // Pausar física
        this.physics.pause();
        
        // Criar tela de Game Over
        const gameOverBg = this.add.rectangle(400, 300, 800, 600, 0x000000);
        gameOverBg.setAlpha(0.7);
        
        this.add.text(400, 250, 'GAME OVER', {
            fontSize: '64px',
            fontFamily: 'Arial Black',
            fill: '#FF1493',
            stroke: '#FFFFFF',
            strokeThickness: 4,
            align: 'center'
        }).setOrigin(0.5);
        
        this.add.text(400, 350, 'Pontuação Final: ' + this.score, {
            fontSize: '32px',
            fontFamily: 'Arial',
            fill: '#FFD700',
            align: 'center'
        }).setOrigin(0.5);
        
        this.add.text(400, 450, 'Pressione ENTER para voltar ao menu', {
            fontSize: '20px',
            fontFamily: 'Arial',
            fill: '#FFFFFF',
            align: 'center'
        }).setOrigin(0.5);
        
        // Voltar ao menu ao pressionar ENTER
        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('Welcome');
        });
    }
}