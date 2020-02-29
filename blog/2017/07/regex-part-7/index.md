---
title: 'Entendendo de uma vez por todas Expressões Regulares: Parte 7— Regex no mundo JavaScript'
date: '2017-07-18'
image: assets/featured-img.png
description: 'Chega de chutar expressões regulares.'
categories:
  - regex
  - desenvolvimento
---

Fala meu povo, tudo bem com vocês? Seguindo no penúltimo artigo da série regex, hoje falaremos (finalmente) sobre como utilizar as expressões regulares no mundo JavaScript.

Mas antes de tudo, se você chegou direto nesse tópico e ainda não tem tanta familiaridade, da uma olhada no [post](/pt-br/2017/05/regex-part-1) onde tudo começou.

Sem mais delongas, _let's do it_!

---

## Declaração

Como a maioria dos objetos JavaScript, temos duas maneiras de declarar uma expressão regular, invocando o construtor ou de maneira literal.

## Constructor

A primeira forma (e menos usada), é chamando o construtor do objeto **RegExp**:

```js
const regex = new RegExp();
console.log(regex); // /(?:)/
```

O primeiro argumento que o objeto recebe (nosso padrão), pode ser qualquer coisa (JavaScript feelings). Porém, para o bom uso, ele deve ser uma string ou uma outra regex (sim, outra regex).

No caso da String, é necessário entender que as vezes precisaremos escapar os caracteres que possam ter outro significado. Quem aqui nunca usou um `\n` pra dar aquela quebra de linha?

Então, se quisermos considerar que a barra seja de fato uma barra, e não um "efeito especial", precisamos escapa-la com outra barra (😥):

```js
const regex = new RegExp('\\w');
```

O segundo parâmetro é a _flag_ que adiciona um comportamento em nosso motor da Regex. A mais popular e já comentada bastante é a _flag_ `g` , que permite que o motor continue procurando por todo o alvo o seu padrão. Mas também existe outras bem importantes, como:

- `i` : Ignora o **case**, ou seja, não difere letras maiúsculas ou minúsculas;
- `m` : Permite que o padrão seja aplicado em múltiplas linhas. Bem útil no caso onde temos que aplicar âncoras e ainda assim queremos aplicar em várias linhas;
- `y` : Força a regex só trazer os matches consecutivos, ou seja, se você tem um alvo que tem 2 resultados consecutivos e em seguida um caractere (ou conjunto) que não bate com seu padrão, ele só traz os primeiros resultados.
- `u` : Habilita a capacidade da Regex engine de entender caracteres unicode e captura-los corretamente (exemplo: 𝌆).

Esses são as _flags_ que o JavaScript aceita, mas se você é de outra linguagem, talvez tenha mais tipos diferentes.

Passando então a nossa expressão e a _flag_, temos uma declaração semelhante a essa:

```js
const regex = new RegExp('\\w', 'g');
```

### Literal

A segunda forma de declarar uma expressão regular é fazendo da forma literal, ou seja, passando uma expressão entre duas barras `/` e em seguida, passando as _flags_:

```js
const regex = /\w/g;
```

> Mas Raul, quando eu uso uma ou outra?

Bom, lembra quando eu disse que podemos trabalhar as expressões por partes? Vamos pensar em uma expressão regular para capturar datas no formato `DD/MM/YYYY`:

**Alvo**:

```txt
07/07/1995
14/08/1996
27/01/1937
08/01/1999
08/01/2099
08/21/2099
08/01/2399
```

**Padrão**:

- Dia: `[0-3]\d\/`
- Mês: `[01]\d\/`
- Ano: `[12][0129]\d{2}`

Poderíamos juntar todas essas expressões e declara-la de forma literal:

```js
const dataPattern = /[0-3]\d\/[01]\d\/[12][0129]\d{2}/g;
```

Entretanto, perceba que se um dia você resolver que precisa alterar sua expressão, vai bater o olho e sentir uma leve dificuldade de saber o que é o que. Então, como poderíamos resolver isso?

Bom, podemos declarar algumas variáveis com o pattern em string e depois concatena-los, passando para o construtor:

```js
const dia = '[0-3]\\d\\/';
const mes = '[01]\\d\\/';
const ano = '[12][0129]\\d{2}';
const data = new RegExp(dia + mes + ano, 'g');

console.log(data); // /[0-3]\d\/[01]\d\/[12][0129]\d{2}/g
```

Sim, tivemos que escapar cada barra invertida que encontramos, mas agora o código (apesar de maior) ficou claro e caso precisamos alterar o pattern futuramente, não ficaremos confusos e com frio!

---

## Métodos

Finalmente vamos começar a ver os métodos dos objetos do tipo RegExp. Assim como a maioria dos tipos de dados em Javascript, RegExp também possui vários métodos, mas vamos nos focar nos dois principais, `exec` e `test`. E talvez o segundo seja ainda mais útil que o segundo do ponto de vista do dia-a-dia.

### Exec

Esse é o método que você irá utilizar quando você precisa recuperar o dado que está filtrando. Ele é aquele tipo de função em que precisamos iterar através de um `while`, pois, a cada vez que você executa o método, ele **pula** para o próximo resultado.

Para provar isso, veja o exemplo abaixo:

```js
const target = '22a33b44c';
const pattern = /\d{2}\w/g;
let result = pattern.exec(target);

console.log(result); // [ '22a', index: 0, input: '22a33b44c' ]
console.log(pattern.exec(target)); // [ '33b', index: 3, input: '22a33b44c' ]
```

Perceba que no último console, chamamos o método novamente e ele foi para o próximo resultado da regex.

Aplicando o `while` para pegarmos todas as ocorrências, temos:

```js
const target = '22a33b44c';
const pattern = /\d{2}\w/g;
let result = '';

while ((result = pattern.exec(target))) {
  console.log(result);
}

/*
log
[ '22a', index: 0, input: '22a33b44c' ]
[ '33b', index: 3, input: '22a33b44c' ]
[ '44c', index: 6, input: '22a33b44c' ]
*/
```

Quando o resultado de `pattern.exec` for `undefined`, automaticamente o while receberá `false` e sairá do loop.

### Estrutura do resultado

Quando executamos o método `exec`, temos um um array e em seguida, esse array é atualizado e transformado em um object com algumas informações. São elas:

- O resultado encontrado. Você pode acessar através de: `resultado[0]`;
- O index, ou seja, em qual posição do alvo foi encontrado aquele resultado. Você pode acessar através de: `resultado.index`;
- O input, ou seja, qual alvo que estava sendo avaliado naquele momento. Você pode acessar através de `resultado.input`;

Assim, perceba que é dentro do laço `while` que você extrairá seus dados.

### Test

O método `test`, como disse anteriormente, talvez seja muito mais útil que o `exec` no dia-a-dia. Mas, porque?

Bem, o `test` apenas valida se aquele alvo contém o padrão que você definiu, retornando um `true` ou `false`.

Para entender melhor, vamos ver o exemplo abaixo:

```js
const alvo = '(16) 99999-9999';

const ddd = '\\(\\d{2}\\)';
const numero = '\\s+\\d{5}-\\d{4}';
const regexTelefone = new RegExp(ddd + numero, 'g');

console.log(regexTelefone); // /\(\d{2}\)\s+\d{5}-\d{4}/g
console.log(regexTelefone.test(alvo)); // true
```

Aqui, utilizamos o padrão de quebrar em partes a regex. Ficou um pouco confuso porque como visto no artigo sobre meta-caractere (LINK) e grupos (LINK), o () é avaliado como criação de um grupo, logo, precisamos escapa-lo com uma barra invertida (`\`). Porém como já visto, em strings precisamos escapar a barra invertida também.

O resultado do primeiro console é expressão criada. O do segundo é o teste de verdadeiro ou falso para saber se aquele alvo obedece a nossa expressão. Dessa maneira, podemos ter algo parecido com:

```js
if (regexTelefone.test(alvo)) {
  //Faça alguma lógica/ação
} else {
  throw new Error('Número de telefone fora da máscara');
}
```

---

## Mais e mais usos de Regex

Além dos métodos da própria regex, há outros tipos de dados que aceitam expressões regulares como parâmetro ou usamos regex manipular resultados. Abaixo alguns deles:

### String.replace

```js
const data = '12/07/2017';
const newData = data.replace(/\//g, '-');

console.log(newData); // 12-07-2017
```

### String.split

```js
//O objetivo desse é separar cada valor, independente do caracterer separador
const csvData = '100,200-150,200;20';
const regex = /[,\-;]/g;
const dataFixed = csvData.split(regex);

console.log(dataFixed); //[ '100', '200', '150', '200', '20' ]
```

### String.match

```js
const codigos = 'A121B12112C12212F12G01';
const exp = /[A-Za-z]\d+/g;
const result = codigos.match(exp);

console.log(result); //[ 'A121', 'B12112', 'C12212', 'F12', 'G01' ]
```

### Array.filter

```js
const pessoas = [
  { nome: 'Carlos Alberto Souza', idade: 33 },
  { nome: 'Bruna Souza', idade: 22 },
  { nome: 'Ulisses Rodrigues', idade: 19 },
  { nome: 'Rebeca Silva', idade: 40 },
  { nome: 'nayara matos souza', idade: 38 },
];
const newPessoas = pessoas.filter((pessoa) => /souza/i.test(pessoa.nome));

console.log(newPessoas);

/*Log
[ { nome: 'Carlos Alberto Souza', idade: 33 },
  { nome: 'Bruna Souza', idade: 22 },
  { nome: 'nayara matos souza', idade: 38 } ]
*/
```

---

## Conclusão

Com isso, fechamos a saga das expressões regulares (mentira, ainda tem um bônus). Espero ter consigo fazer você pelo menos sentir interesse de usar pequenas expressões no dia-a-dia, afinal, podemos usa-las em diversos lugares que não foram citados, como por exemplo, o próprio terminal.

Obrigado por ter acompanhado até aqui! E…

<gif src="https://media.giphy.com/media/TNOq5o37nNXX2/giphy.gif" caption="Até breve! ;)"></gif>

## Fontes

- [RegExp — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
