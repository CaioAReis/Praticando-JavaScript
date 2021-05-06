let input = require("fs").readFileSync("stdin", "utf-8");

const [ notas, exame ] = input.split('\n');
const [ nota1, nota2, nota3, nota4 ] = notas.split(' ')
    .map(value => parseFloat(value));

const media = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10;

console.log('Media: ' + media.toFixed(1));

if ( media >= 7 ) 
    console.log('Aluno aprovado.');
else if ( media < 5 )
    console.log('Aluno reprovado.');
else if ( 5 <= media <= 6.9 ) {
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + exame);

    const mediaFinal = (parseFloat(exame) + media) / 2;

    mediaFinal >= 5 ? 
    console.log('Aluno aprovado.') : console.log('Aluno reprovado.');

    console.log('Media final: ' + mediaFinal.toFixed(1));
}
    