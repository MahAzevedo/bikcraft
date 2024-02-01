

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

// 
// 
// 
//  Funções:
function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(4));

function areaRedondo() {
    console.log('Função ativa')
}

areaRedondo();

function pi() {
    return 3.14;
}

var total = 5 * pi();

console.log(total);

//  Parâmetros e Argumentos:

function imc(peso, altura) {
    var imc = peso / (altura ** 2);
    return imc;
}
console.log(imc(70, 1.70));

//  Parênteses executa função
function corDesfavorita(cor) {
    if (cor === 'rosa') {
        return 'Rosa é bom gosto!';
    } else if (cor === 'azul') {
        return 'Azul também tá bom';
    } else {
        return 'Senão é rosa nem azul, então é verde!';
    }
}
console.log(corDesfavorita('preto'));

// 

addEventListener('click', function () { console.log('oi, né que tá funcionando!') });

function mostraConsole() {
    console.log('Apareceu no console? Fiz certo a função!!!');
}

console.log(addEventListener('click', mostraConsole));

function imc2(peso, altura) {
    const imc2 = peso / (altura ** 2);
    console.log(imc2);
}

//  
//  Funções: Valores retornados 

imc2(10, 1.50);
console.log(imc2(100000, 1.50));

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Retorne a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
// Cuidado, aqui tem muitos tipos de dados na mesma função, isso não é bom: typeof; true que é boleano; false, que também é boleano, tá misturando número com string e boleano.
console.log(terceiraIdade());


function quartaIdade(idade) {
    if (idade >= 60) {
        return ('Igual ou maior que 60 anos é idoso.');
    } else if (idade <= 59) {
        return ('Com menos de 59 anos ainda não é idoso.')
    } else {
        return ('Maior que 70 anos é super idoso.')
    }
}
console.log(quartaIdade(0));

function quintaIdade(idade) {
    if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(quintaIdade(0));

function sextaIdade(idade) {
    if (idade >= 60) {
        return 'Você possui gratuidade! Por favor, preencha os campos do formulário: '
    } else if (idade <= 59) {
        return 'Se você é menor de 60 anos, você não possui gratuidade. Preencher sua idade no formulário: '
    } else {
        return 'Por favor, preencha o formulário com a sua idade: '
    }
}

console.log(sextaIdade());

//  Funções: Escopo

// Essa função aqui é de bloco{}, então tudo que está escrito dentro dela não pode ser visto do lado de fora, ou seja, a var dentro bloco{} não pode ser chamada do lado de fora no console, somente pode ser chamada pelo console o nome da função o function algumaCoisa() como está abaixo.

function faltaVisitar(paisesVisitados) {
    var totalDePaisesNoMundo = 193;
    return `Falta visitar ${totalDePaisesNoMundo - paisesVisitados} países.`
}

console.log(faltaVisitar(2));

// outra forme de fazer essa funcao: unico jeito de chamar essa funcao fora do bloco{} é se tirar a var de dentro do bloco{} e colocar do lado fora, aí dá pra chamar a função no console, como dá pra var abaixo.

var totalDePaisesNoMundoTodo = 193;

function aindaFaltaVisitar(paisesJaVisitados) {
    return `Falta visitar ${totalDePaisesNoMundoTodo - paisesJaVisitados} países.`
}

console.log(totalDePaisesNoMundoTodo);

//  Funções: Escopo Léxico

var profissao = 'frontend';

function dados() {
    var nome = 'Mádjan';
    var idade = 11;
    function outrosDados() {
        var endereco = 'niteroi';
        var idade = 22;
        return `${profissao}, ${nome}, ${idade}, ${endereco}`
    }
    return outrosDados();
}

console.log(dados());
// console.log(outrosDados());


//  Funções: Exercícos 1/7;
// 1/7: Crie uma função para verificar se um valor é Truthy: 

function isTruthy(dado) {
    return !!dado;
}

var eTruthy = isTruthy('funcionou no console?');
console.log(eTruthy)

// 2/7:  Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4;
}

// 3/7: Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome.

function nomeCompletoo(nomee, sobrenomee) {
    // return nomee + ' ' + sobrenomee;
    return `${nomee} ${sobrenomee}`;
}


// 4/7: Crie uma função que verifica se um número é par

function verificaSeENumeroPar(numero) {
    var modulo = numero % 2;
    if (modulo === 0) {
        return true;
    } else {
        return false;
    }
}

// 5/7: Crie uma função que retorne o tipo de dado do argumento passado nela (typeof).

function tipoDeDado(dado) {
    return typeof dado;
}
console.log(tipoDeDado(9))

// 6/7: addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.


addEventListener('scroll', function () {
    console.log('Madi Pergola');
});

addEventListener('click', function () {
    console.log('Madi Pergola')
});

// 7/7: Corrija o erro abaixo:
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));


// Funções: Objeto;
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
// variáveis são propriedades
// funções são métodos


// aqui nesse caso, pessoa é um objeto, qualquer nome dessa e outra variavel será um objeto, é por isso que sempre dizem que tudo é objeto.
var pessoa = {
    nome: 'Madi',
    idade: 10,
    profissão: 'frontend',
    possuiFaculdade: true,
}
console.log(pessoa.nome);

// Funç~ões: Métodos;
// É uma propriedade que possui uma função no local do seu valor.
// Uma propriedade pode ser uma função.

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(4));
console.log(quadrado.perimetro(8));


// this substitui a variavel dentro da função para evitar ficar se repetindo, é só colocar o ponto para acessar a variavel que o this representa e seguir a função.

// Abreviação do MÉTODO:

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.lados);
console.log(quadrado.area(4));
console.log(quadrado.perimetro(8));


// Funções: Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI;
Math.random();
var pi = Math.PI;
console.log(pi);


console.table(quadrado);


// Objetos: Criar um objeto:
// Um objeto é criado utilizando as chaves{}

var carro = {};
var pessoa = {};
console.log(typeof pessoa);

var pessoa = {
    nome: 'Laura',
    idade: 11,
    copo: 'vidro'
}
console.log(pessoa.copo);

var caderno = {
    nome: 'Madi',
    material: 'caderno',
    serve: 'informação',
    caderno: 'para armazenar informação'
}
caderno.nome;
console.log(caderno.caderno);

// Objetos: Métodos:
// É uma propriedade que possui uma fun'~ao no local do seu valor. 

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    },
}
console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(10));

// Versão mais atualizada:
// pode tirar o dois pontos funtion ou o lado escrito dentro dos parênteses: olha o exemplo abaixo : function 
var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
    cinco() {
        return 5;
    }
}
console.log(quadrado.lados);
console.log(quadrado.area(15));
console.log(quadrado.perimetro(100));

// typeof diz que tipo que é, se é string ou número

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function () {
    console.log('Escondi');
}

var bg = menu.backgroundColor;

// this: 

var height = 100;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}
console.log(menu.metadeHeight())
