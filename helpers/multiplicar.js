const fs = require('fs');                                   //importando la libreria de file save?
const colors = require('colors');                           //importando colors



const  crearFile =  async (base,listar,hasta) =>{

    try{
            let salida = '';
            let consola = '';

            for(var i=1 ; i <= hasta; i ++ ){
                salida += (`${base} x ${i} = ${base*i}\n`);
                consola += (`${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`);
            };
            if(listar){
                console.log('=============================='.red);
                console.log('      TABLA DEL: '.green, colors.blue(base) );
                console.log('=============================='.red);
                console.log(consola);   
            }   
        
            
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);    //cargando el archivo si tira error hacerlo dentro de un try catch
        return `tabla-${base}.txt`;         
    }
    catch (error){
        throw (error);
    }

};


module.exports = {          //exportando la funcion
    crearFile
};