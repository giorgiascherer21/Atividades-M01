# Resolução das Questões objetivas



## **1)** **Alternativa:**
 
  _A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console._

**Justificativa:**  

A expressão segue a ordem normal dos operadores:

- Primeiro o operador `%` (módulo)
- Depois as comparações (`===`, `>`, `<`)
- Em seguida o operador `&&`
- Por fim o operador `||`

Fazendo as contas:

- `p % q = 10 % 3 = 1` → `1 === 1` → true  
- `r * 2 = 12` → `12 > 10` → true  
- `q + r = 9` → `9 < 10` → true  

Então a expressão fica:

(true && true) || true → true

Após isso, o código percorre o array multiplicando todos os valores, resultando em 29160.

----

## **2)** **Alternativa**

_A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'_

**Justificativa:**

Ambas as funções percorrem o array de compras somando os valores enquanto o total não ultrapassa o limite e ainda há elementos a serem processados.

A soma evolui da seguinte forma:
- 2500 → 3700 → 4500 → 4600

Como o total final (4600) é menor que o limite (5000), o saldo disponível será:
5000 - 4600 = 400

Como o saldo é positivo, o status permanece como "aprovado".

Apesar da diferença entre `while` e `do...while`, neste caso específico ambas executam o mesmo número de iterações, pois a condição de parada impede que o limite seja ultrapassado. Portanto, o resultado final é idêntico nas duas funções.

## **3)** **Alternativa**

_B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!"._

**Justificativa:**  

O código usa uma estrutura condicional encadeada para classificar a idade. Como o valor é 21, ele entra na primeira condição (entre 18 e 60), sendo considerado adulto.

----

## **4)** **Alternativa**

_B)_

- Dispositivo 1 ligado. Energia restante: 900  

- Dispositivo 2 ligado. Energia restante: 300  

- Dispositivo 3 ligado com bateria extra. Energia restante: 200  

- Dispositivo 4 não pode ser ligado. Energia insuficiente.  

- Dispositivo 5 não pode ser ligado. Energia insuficiente.  

**Justificativa:**

Inicialmente:
- energiaDisponivel = 1200
- bateriaExtra = 400

**Dispositivo 1 (300):**
Consumo menor que energia disponível → ligado normalmente  
Energia restante: 1200 - 300 = 900

**Dispositivo 2 (600):**
Consumo menor que energia disponível (900) → ainda cabe na energia principal  
Energia restante: 900 - 600 = 300

**Dispositivo 3 (500):**
Consumo maior que energia disponível (300), mas menor que energia total disponível (300 + 400 = 700)  
→ ligado utilizando a bateria extra  
Energia restante: 700 - 500 = 200  

Após isso:
- energiaDisponivel é zerada
- bateriaExtra é reduzida com base no consumo restante, podendo assumir valores negativos devido à forma como o código foi implementado

**Dispositivos 4 e 5:**
Não podem ser ligados, pois não há energia suficiente disponível.

Portanto, a alternativa correta é a B.

---

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
        return "Método deve ser sobrescrito";
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

        let consumo = this.kmRodados / this.litrosConsumidos;

        return `Carro: ${consumo.toFixed(2)} km/L`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, ano, kmRodados, litrosConsumidos, cilindradas) {
        super(modelo, ano);
        this.kmRodados = kmRodados;
        this.litrosConsumidos = litrosConsumidos;
        this.cilindradas = cilindradas;
    }

    calcularConsumo() {
        if (this.litrosConsumidos <= 0) {
            return "Dados inválidos";
        }

        let consumoBase = this.kmRodados / this.litrosConsumidos;

        if (this.cilindradas > 500) {
            consumoBase *= 0.9;
        }

        return `Moto: ${consumoBase.toFixed(2)} km/L`;
    }
}

```

### **Justificativa:**

A solução aplica herança para reutilizar atributos da classe base e sobrescreve o método de consumo nas subclasses. A validação evita divisões inválidas, tornando o código mais confiável.

----

## **9)**

```javascript
function simularPouso(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo, desaceleracaoMinima) {
    let tempo = 0;
    let velocidade = velocidadeInicial;

    if (desaceleracao < desaceleracaoMinima) {
        return "Falha: desaceleração insuficiente para pouso seguro";
    }

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
        return "Falha: tempo máximo excedido";
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
function MultiplicarMatrizesInvestimento(matrizA, matrizB) {
    // Verifica compatibilidade
    if (matrizA[0].length !== matrizB.length) {
        return "As matrizes não podem ser multiplicadas. Dimensões incompatíveis.";
    }

    let linhasA = matrizA.length;
    let colunasA = matrizA[0].length;
    let colunasB = matrizB[0].length;

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