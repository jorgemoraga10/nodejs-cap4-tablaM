

const { crearFile } = require('./helpers/multiplicar');   //importando la funcion de multiplicar
const argv = require('./config/yargs');                   //importando la configuracion del yargs
const colors = require('colors');                         //importando colors


console.clear();
//console.log(process.argv);     // para identificar los procesos, capas algo asi
//console.log(argv);              // para saber como funciona, sus argumentos etc.
//console.log('base: yargs', argv.base);



crearFile(argv.b, argv.l, argv.h)
    .then ( (nombreFile) => console.log(nombreFile.rainbow,'creado'))
    .catch( (err) => console.log(err));








    



//DESARTICULANDO UN ARREGLO DE LA FUNCION PROCESS.ARGV OBTENIENDO EL TERCER ARGUMENTO
//const [ , , arg3 = 'base=5'] = process.argv;     
// const [ , base = 5 ] = arg3.split('=');
// console.log( base );


//FORMA ANTIGUA PARA GUARDAR UN ARCHIVO
// fs.writeFile( `tabla-${base}.txt`, salida, (err) =>{            //guardanado en un archivo en mi disco 
//     if( err ) throw err;
//     console.log(`tabla-${base}.txt creada correctamente`);
//     });
