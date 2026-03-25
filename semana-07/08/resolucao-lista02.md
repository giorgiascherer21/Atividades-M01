# Resolução das Questões objetivas



## **1)** **Alternativa:**
 
  _A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console._

**Justificativa:**  

A expressão lógica resulta em true, pois todas as comparações da expressão são verdadeiras. Depois disso, o código percorre o array multiplicando seus valores, resultando em 29160.

----

## **2)** **Alternativa**

_A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'_

**Justificativa:**


As duas funções percorrem o array de compras somando os valores progressivamente até atingir o limite ou o fim do array. Ao final, a soma total é 4600, que ainda está dentro do limite de 5000, resultando em um saldo disponível de 400. Como esse valor é positivo, o crédito permanece aprovado. Apesar da diferença entre `do...while` e `while`, nesse caso específico ambas executam o mesmo número de iterações, levando exatamente ao mesmo resultado.

## **3)** **Alternativa**

_B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!"._

**Justificativa:**  

O código usa uma estrutura condicional encadeada para classificar a idade. Como o valor é 21, ele entra na primeira condição (entre 18 e 60), sendo considerado adulto.

----

## **4)** **Alternativa**

_D) Dispositivo 1 ligado. Energia restante: 900  
Dispositivo 2 ligado. Energia restante: 300  
Dispositivo 3 ligado com bateria extra. Energia restante: 200  
Dispositivo 4 não pode ser ligado. Energia insuficiente.  
Dispositivo 5 não pode ser ligado. Energia insuficiente._

**Justificativa:**  

Os dois primeiros dispositivos consomem apenas a energia disponível. No terceiro, a energia não é suficiente e a bateria extra é utilizada. Após o uso da bateria extra no terceiro dispositivo, a energia disponível e a bateria restante não são suficientes para os próximos.

----

## **5)** **Alternativa**

_B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena._

**Justificativa:**  

O método `update()` roda a cada frame do jogo, sendo responsável por manter a lógica dinâmica, como movimentação e interações em tempo real.

----

## **6)** **Alternativa**

_A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças._

**Justificativa:**  

O Matter.js é um motor de física que permite simular comportamentos mais realistas, como colisões, forças e gravidade entre objetos.

# Resolução das  Questões Dissertativas

## **7)**

```javascript
function classificarFrete(valorCompra) {
    if (valorCompra < 0) {
        return "Valor inválido";
    }

    if (valorCompra < 50) {
        return "Frete não disponível!";
    } else if (valorCompra <= 199.99) {
        return "Frete com custo adicional!";
    } else {
        return "Frete grátis!";
    }
}

// Exemplo de uso:
// console.log(classificarFrete(120));
```

### **Justificativa:**

A função utiliza uma estrutura condicional simples para classificar o frete conforme o valor da compra. Foi adicionada uma validação inicial para evitar valores inválidos, o que melhora a robustez da solução.

----

## **8)**

```javascript
class Veiculo {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }

    calcularConsumo() {
        return "Método não implementado";
    }
}

class Carro extends Veiculo {
    constructor(modelo, ano, kmRodados, litrosConsumidos) {
        super(modelo, ano);
        this.kmRodados = kmRodados;
        this.litrosConsumidos = litrosConsumidos;
    }

    calcularConsumo() {
        if (this.litrosConsumidos <= 0) {
            return "Dados inválidos";
        }
        return this.kmRodados / this.litrosConsumidos;
    }
}

class Moto extends Veiculo {
    constructor(modelo, ano, kmRodados, litrosConsumidos) {
        super(modelo, ano);
        this.kmRodados = kmRodados;
        this.litrosConsumidos = litrosConsumidos;
    }

    calcularConsumo() {
        if (this.litrosConsumidos <= 0) {
            return "Dados inválidos";
        }
        return this.kmRodados / this.litrosConsumidos;
    }
}

// Exemplo:
// const carro = new Carro("Civic", 2020, 500, 25);
// console.log(carro.calcularConsumo());

```

### **Justificativa:**

A solução aplica herança para reutilizar atributos da classe base e sobrescreve o método de consumo nas subclasses. A validação evita divisões inválidas, tornando o código mais confiável.

----

## **9)**

```javascript
function simularPouso(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo) {
    let tempo = 0;
    let velocidade = velocidadeInicial;

    while (velocidade > velocidadeSegura && tempo < tempoMaximo) {
        tempo++;
        velocidade = velocidadeInicial - desaceleracao * tempo;

        if (velocidade < 0) {
            velocidade = 0;
            break;
        }
    }

    if (velocidade <= velocidadeSegura) {
        return `Pouso seguro em ${tempo} segundos`;
    } else {
        return "Falha no pouso: tempo máximo excedido";
    }
}

// Exemplo:
// console.log(simularPouso(1000, 50, 100, 30));
```

### **Justificativa:**
O algoritmo simula a desaceleração ao longo do tempo usando a equação fornecida. Também considera limites físicos e de tempo, garantindo um resultado coerente com o cenário proposto.

---

## **10)**

```javascript
function multiplicarMatrizes(matrizA, matrizB) {
    // Verificação de compatibilidade
    if (matrizA[0].length !== matrizB.length) {
        return "Multiplicação impossível";
    }

    const linhasA = matrizA.length;
    const colunasB = matrizB[0].length;
    const colunasA = matrizA[0].length;

    let resultado = [];

    for (let i = 0; i < linhasA; i++) {
        resultado[i] = [];

        for (let j = 0; j < colunasB; j++) {
            let soma = 0;

            for (let k = 0; k < colunasA; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }

            resultado[i][j] = soma;
        }
    }

    return resultado;
}

// Exemplo:
// console.log(multiplicarMatrizes([[1,2],[3,4]], [[5,6],[7,8]]));

```

### **Justificativa:**

A função segue a definição clássica de multiplicação de matrizes, garantindo compatibilidade entre dimensões e utilizando três laços para calcular cada elemento corretamente.