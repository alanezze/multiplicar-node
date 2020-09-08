/* //requieres
const fs = require('fs');
 */
//de esta manera solo selecciono el objeto especifico que quiero del path
const argv = require('./config/yargs').argv;

//ESTA CONFIGURACION DE YARGS SE LA OPTIMIZA EN LA CARPETA CONFIG
/* const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', {
        base: {
            demand: true, //hace que este flag --base sea obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un listado de tablas con base y limites', {
        base: {
            demand: true, //hace que este flag --base sea obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; */


//let/const => seguido de {} es una destructuracion
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then()
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            //para manejar los errores recibimos en error y mandamos un consol Log
            .catch(e => console.log(e))
        break;
    default:
        console.log(`El comando ${comando} ingresado no es reconocido`);
        break;
}


//let base = 'a';

//let argv2 = process.argv;
/* let parametro = argv[2];
let base = parametro.split('=')[1] */
//con split separo los argumentos y selecciono el segundoque es el numero
//base = ['--base' , '5'];
//console.log(argv.base, argv.limite);







/* 
let data = '';

let a = 10;
for (let i = 1; i <= a; i++) {
    //ocupo esto para guardar un array 
    data += `${base} * ${i} = ${base*i} \n`;

}


fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file has tabla-del-${base}.txt saved!`);
}); */



/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    //para manejar los errores recibimos en error y mandamos un consol Log
    .catch(e => console.log(e)) */