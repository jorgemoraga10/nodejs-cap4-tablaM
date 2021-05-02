

const argv = require('yargs')
    .option('b',{              //estas son algunas opciones que podemos definirle
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la Base de la Tabla de Multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 12,
        describe: 'Muestra hasta que miltiplicacion llegar'
    })
    .check( (argv,options) => {
        if ( isNaN ( argv.b ) ){
            throw 'La Base tiene que ser un numero'
        } return true
    })    
    .argv;


module.exports = argv;     //exportando el yargs