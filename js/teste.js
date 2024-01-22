

var nome = "Mádjan";
console.log("Mádjan")

var idade;
console.log(idade)

var idade = 20;
console.log(20)

console.log("Tá funcionando, tá lincado!")

var nome = "Mádjan";
var sobrenome = "Azevedo Pergola";
var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);
console.log(typeof nome);
console.log(typeof idade);

//template de String: `` feito c/crase

var amor = "Gustavo";
var frase = `Só com ${amor} a vida faz sentido`

console.log(frase)

var soma = 2;
var frase = `Com ${soma * 2} e 2  `

console.log(frase);

var palavraString = "palavraString";
console.log(palavraString);

var numeroString123 = "numeroString123";
console.log(typeof numeroString123);

var idade = 20;
console.log(idade);

var nome = "Madi",
    sobrenome = "Pergola",
    nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var frase = "It's time";
console.log(frase);

var tipoVariavelNome = "Mádjan";
console.log(typeof tipoVariavelNome);

var tipoVariavelNumero = 123;
console.log(typeof tipoVariavelNumero);

var soma = (2 + 4);
console.log(soma);

var divisao = (2 / 4);
console.log(divisao);

var nome = "Mádjan";
console.log(typeof nome);


var exp = 2e10;
console.log(2e10);

var idade = 2e2;
console.log(idade);

var idade = 2e-2;
console.log(idade);

var modulo = 14 % 5;
console.log(modulo)

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

var incremento = 5;
console.log(++incremento)

var incremento = 5;
console.log(--incremento)

var idade = 20;
console.log(-idade + 5)

var idade = 20;
console.log(+idade + 5)

var idade = "40";
var somaIdade = 5;
console.log(+idade + somaIdade);

var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

var soma = 'teste' / 2;
console.log(soma);

var expressao1 = 'teste' / 2;
console.log(expressao1);

var somar = +"200" + 50;
console.log(somar);

var incremento = 5;
console.log(++incremento)

var peso = 10,
    divisao = 2,
    totalDivisao = peso / divisao;
console.log(totalDivisao)

var numero = 80 / 2;
var unidade = 'kg';
var tudo = numero + unidade;
console.log(tudo)


// Boolean e Condicionais: 
var perguntaResposta = true;

if (perguntaResposta) {
    console.log('Sim');
} else {
    console.log('Não');
};

var possuiGraduacao = true;

if (possuiGraduacao) {
    console.log('É verdadeiro!')
} else {
    console.log('É falso')
}


// Condicionais Else If:

var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
    console.log('Possui graduacao.')
} else if (possuiDoutorado) {
    console.log('Possui graduacao e doutorado.')
} else {
    console.log('Não possui graduacao e doutorado.')
}


var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
    console.log('Possui graduacao e doutorado.')
} else if (possuiGraduacao) {
    console.log('Possui graduacao, mas não possui doutorado.')
} else {
    console.log('Não possui graduacao.')
}


var nome = 0 // zero é false
if (nome) {
    console.log(nome)
} else {
    console.log("Não é nome!")
}
//---- 
var nome = 5 - 5;
if (nome) {
    console.log(nome)
} else {
    console.log("Não é nome!")
}
//----
var nome;
if (nome) {
    console.log(nome)
} else {
    console.log("Só deixei a variavel, sem parametro!")
}
//----
var nome = "Madi";
if (nome) {
    console.log(nome);
} else {
    console.log('Não é nome!')
}

//------ ! é sinal de negação
var nome = "Madi";
if (!nome) { // ! negação
    console.log(nome);
} else {
    console.log('Não é nome!')
}


// Operadores de Comparação:

var x = 10
console.log(x !== 10)

var x = 10
console.log(x == 10)

var x = 10
console.log(x === 10)

var x = '10' // aspas string
console.log(x === 10)

var x = '10'//diferente de 10
console.log(x !== 10)

var x = '10'//nao é 10 estrito
console.log(x === 10)

if ((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
} else {
    console.log('falso');
};

var condicional = (5 - 5) && (5 + 5);
if (10) {
    console.log('Verdadeiro', condicional)
} else {
    console.log('falso')
};


var condicional2 = (5 - 5) || (5 + 5);
if (condicional2) {
    console.log('É verdade, e eu que escrevi essa função, e acertei :D ', condicional2)
} else {
    console.log('É falso')
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2) // pode ser só isso só p/ conferir
if (condicional2) {
    console.log('É verdade, e eu que escrevi essa função, e acertei :D ', condicional2)
} else {
    console.log('É falso')
}

var corFavorita = 'rosa';

switch (corFavorita) {
    case 'rosa':
        console.log('Parede rosa')
        break;
    default:
        console.log('pintar varias paredes')
}

var numero = 3;

switch (numero) {
    case 3:
        console.log('é um numero')
        break;
    default:
        console.log('nao é um numero');
}

var cor = 'verde';

switch (cor) {
    case 'verde':
        console.log('é a cor verde mesmo.')
        break;
    default:
        console.log('nao é essa cor ')
}

var chule = 'pe';

switch (chule) {
    case 'pe':
        console.log('pe tem chule')
        break;
    default:
        console.log('nem todo pe fede')
}

var chocolate = 'brigadeiroBranco'; // troca aqui, que ele troca o assunto/caso/case  :D
switch (chocolate) {
    case 'brigadeiro':
        console.log('brigadeiro gourmet é uma delicia, o meu é o melhor do mundo!!!')
        break;
    case 'bolo':
        console.log('bolo nao é tao gostoso')
        break;
    case 'brigadeiroBranco':
        console.log('bolo nao é tao gostoso')
        break;// encontra, quebra aqui e retorna a resposta, senao tivesse nenhuma resposta ele ia seguir para o default
    default:
        console.log('Pode fazer de tudo com chocolate!')
}

//----Exercícios:
// 1
var minhaIdade = 11;
var minhaIrma = 12;
if (minhaIdade > minhaIrma) {
    console.log('É maior', minhaIdade)
} else if (minhaIdade === minhaIrma) {
    console.log('É igual')
} else {
    console.log('É menor. Não pode ter medo, vc tava e tá fazendo certo, às vezes esquece uma coisinha aqui e outra alí, mas tá tudo certo!!! Parabéns!!! :D')
}

// 2
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)


console.log(5 - ' ')

// 3
var nome = 'Madi';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// 4
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Mais habitantes no Brasil que na China.')
} else {
    console.log('Há mais habitantes na China que no Brasil.')
}
// ou desse jeito abaixo, tá certo também :D
if (brasil > china) {
    console.log('Mais habitantes no Brasil que na China.');
} else if (brasil === china) {
    console.log('Mesma quantidade de habitantes entre Brasil e China.');
} else {
    console.log('Há mais habitantes na China que no Brasil.')
}

//  5
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// 6

if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}

// teste...