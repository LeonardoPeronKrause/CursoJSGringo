const day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Estudar');
        console.log('Ir na academia');
        console.log('Ir a aula');
        break;
    case 'tuesday':
        console.log('Estudar');
        console.log('Correr');
        console.log('Ir a academia');
        break;
    case 'wednesday':
        console.log('Ir ao parque');
        console.log('Passear com o cachorro');
        break;
    case 'thrusday':
    case 'friday':
        console.log('Estudar');
        console.log('Programar');
        console.log('Entregar curriculo');
        break;
    case 'saturday':
        console.log('Trabalhar');
        console.log('Assistir jogos');
        console.log('Sair com a namorada');
        console.log('Descansar');
        break;
    case 'sunday':
        console.log('Fazer dinheiro');
        console.log('Descansar');
        break;
    default:
        console.log('Not a valid day!')
}
