/**
 * ========================================
 * CENA: WELCOME (TELA INICIAL)
 * ========================================
 * 
 * Esta cena exibe a tela de boas-vindas do jogo
 * com o título, instruções de controle e botão para iniciar
 * 
 * Requisitos atendidos:
 * - Estrutura de Cena (Phaser.Scene)
 * - Apresentação dos controles do jogo
 * - Transição para a cena de gameplay
 */

class Welcome extends Phaser.Scene {
    constructor() {
        // Definir a chave da cena (identificador único)
        super({ key: 'Welcome' });
    }
    
    /**
     * Função preload: Carrega todos os assets necessários
     * (imagens, sons, spritesheet, etc.)
     */
    preload() {
        // Carregar imagens dos assets
        this.load.image('fundo', 'assets/fundo-floresta.png');
        this.load.image('unicornio', 'assets/unicornio-sprite.png');
        this.load.image('cristal', 'assets/cristal-sprite.png');
        this.load.image('obstaculo', 'assets/obstaculo-sprite.png');
        this.load.image('plataforma', 'assets/plataforma-sprite.png');
    }
    
    /**
     * Função create: Configura os elementos visuais da cena
     * (textos, imagens, botões, etc.)
     */
    create() {
        // Adicionar fundo da cena
        this.add.image(400, 300, 'fundo').setScale(0.8);
        
        // Adicionar título do jogo com estilo
        this.add.text(400, 80, 'UNICÓRNIO ARCO-ÍRIS', {
            fontSize: '48px',
            fontFamily: 'Arial Black',
            fill: '#FFFFFF',
            stroke: '#FF69B4',
            strokeThickness: 3,
            align: 'center'
        }).setOrigin(0.5);
        
        // Adicionar subtítulo
        this.add.text(400, 140, 'Colete os cristais mágicos!', {
            fontSize: '24px',
            fontFamily: 'Arial',
            fill: '#FFFFFF',
            stroke: '#9370DB',
            strokeThickness: 2,
            align: 'center'
        }).setOrigin(0.5);
        
        // ========================================
        // SEÇÃO: INSTRUÇÕES DE CONTROLE
        // ========================================
        // Requisito: Apresentar controles do jogo
        
        // Título da seção de controles
        this.add.text(400, 200, 'COMO JOGAR:', {
            fontSize: '28px',
            fontFamily: 'Arial Black',
            fill: '#FFD700',
            align: 'center'
        }).setOrigin(0.5);
        
        // Lista de controles (usando estrutura de dados - array)
        const controles = [
            '← SETA ESQUERDA: Mover para esquerda',
            '→ SETA DIREITA: Mover para direita',
            '↑ SETA PARA CIMA: Pular',
            '🌟 Colete os cristais para ganhar pontos',
            '⚠️ Evite as nuvens escuras!'
        ];
        
        // Loop (for) para exibir cada controle na tela
        // Requisito: Usar estrutura de repetição (for)
        let yPosition = 260;
        for (let i = 0; i < controles.length; i++) {
            this.add.text(400, yPosition, controles[i], {
                fontSize: '16px',
                fontFamily: 'Arial',
                fill: '#FFFFFF',
                align: 'center'
            }).setOrigin(0.5);
            yPosition += 35;
        }
        
        // ========================================
        // BOTÃO PARA INICIAR O JOGO
        // ========================================
        
        // Criar um retângulo como botão
        const botao = this.add.rectangle(400, 520, 200, 50, 0xFF1493);
        botao.setInteractive();
        botao.setStrokeStyle(3, 0xFFFFFF);
        
        // Texto do botão
        this.add.text(400, 520, 'INICIAR JOGO', {
            fontSize: '22px',
            fontFamily: 'Arial Black',
            fill: '#FFFFFF',
            align: 'center'
        }).setOrigin(0.5);
        
        // Efeito ao passar o mouse sobre o botão
        botao.on('pointerover', () => {
            botao.setFillStyle(0xFF69B4);
        });
        
        // Efeito ao sair do mouse do botão
        botao.on('pointerout', () => {
            botao.setFillStyle(0xFF1493);
        });
        
        // Evento de clique: Iniciar o jogo
        botao.on('pointerdown', () => {
            // Transição para a cena Gameplay
            this.scene.start('Gameplay');
        });
        
        // Permitir iniciar com ENTER também
        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.start('Gameplay');
        });
    }
    
    /**
     * Função update: Atualiza a lógica a cada frame
     * (não é necessária nesta cena, mas deixamos como referência)
     */
    update() {
        // Nesta cena, não há lógica de atualização necessária
    }
}