const media = 6;

const mediaAlunos = [
    {
        nome: 'Braulênio',
        nota: 9
    },
    {
        nome: 'Astolfo',
        nota: 5
    },
    {
        nome: 'Astrirdes',
        nota: 10
    },
    {
        nome: 'Albanens',
        nota: 4
    },
    {
        nome: 'Domênico',
        nota: 10
    }
];

const aprovados = mediaAlunos.filter((item)=>{
    return item.nota >= media
});

console.log(aprovados);