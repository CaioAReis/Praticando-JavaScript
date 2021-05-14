let input = require("fs").readFileSync("stdin", "utf-8");

const [A, B, C] = input.split('\n')
    .map(item => item.toLowerCase().replace('\r', ''));

if (A === 'vertebrado') {
    if (B === 'ave') {
        if (C === 'carnivoro')
            console.log('aguia');
        if (C === 'onivoro')
            console.log('pomba');
    }
    if (B === 'mamifero') {
        if (C === 'onivoro')
            console.log('homem');
        if (C === 'herbivoro')
            console.log('vaca');
    }
}

if (A === 'invertebrado') {
    if (B === 'inseto') {
        if (C === 'hematofago')
            console.log('pulga');
        if (C === 'herbivoro')
            console.log('lagarta');
    }
    if (B === 'anelideo') {
        if (C === 'hematofago')
            console.log('sanguessuga');
        if (C === 'onivoro')
            console.log('minhoca');
    }
}
