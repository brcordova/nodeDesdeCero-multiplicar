// Required
// const fs = require('fs');
// import fs from 'fs';
 

// let base = '1';
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv  = require('./config/yargs').argv;
const colors = require('colors');
// let data = '';
// for (let index = 1; index <= 10 ; index++) {
//     data += `${ base } * ${ index } = ${base*index} \n`;
// }

// fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
//   if (err) throw err;
//   console.log( ` El archivo tabla-${ base }.txt ha sido creado! ` );
// });

/*  
    Aqui se envía al archivo config/yargs.js para optimizar el código
*/
// const argv = require('yargs')
//     .command('listar','Imprime en consola la tabla de multiplicar.', {
//         base:{
//             demand: true,
//             alias: 'b'
//         },
//         limite:{
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear','Genera un archivo con la tabla de multiplicar.', {
//         base:{
//             demand: true,
//             alias: 'b'
//         },
//         limite:{
//             alias: 'l',
//             default: 10
//         }
//     }) 
//     .help()       
//     .argv;

    let comando = argv._[0];

    switch (comando) {
        case 'listar':
            console.log('listar');
            listarTabla(argv.base, argv.limite);
            break;
        case 'crear':
            crearArchivo(argv.base, argv.limite) 
                .then( archivo => console.log(colors.green( `Archivo creado:`) + colors.yellow(` ${ archivo } `) ))
                .catch( e=> console.log(e) )
            break;
        default:
            console.log('Comando no reconocido');
            break;
    }

// console.log(argv);


// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log( 'Limite ', argv.limite);
// console.log(argv2);
//console.log(base);
// crearArchivo(base) 
//      .then( archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch( e=> console.log(e) )

