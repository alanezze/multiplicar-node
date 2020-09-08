//requieres
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    //retornamos una promesa
    return new Promise((resolve, reject) => {
        //validacion de los numeros  ,con un return deja de ejecutar el codigo
        if ((!Number(base)) && (!Number(limite))) { reject(`El valor ${base}  ingresado  no es un numero`); return }


        let data = '';

        let a = limite
        for (let i = 1; i <= a; i++) {
            //ocupo esto para guardar un array 
            data += `${base} * ${i} = ${base*i} \n`;

        }
        resolve(console.log(data.rainbow));

    })
}




//crear archivo es una funcion que recibe la base
let crearArchivo = (base, limite) => {
    //retornamos una promesa
    return new Promise((resolve, reject) => {
        //validacion de los numeros  ,con un return deja de ejecutar el codigo
        if (!Number(base)) { reject(`El valor ${base}  ingresado  no es un numero`.red); return }


        let data = '';

        let a = limite;
        for (let i = 1; i <= a; i++) {
            //ocupo esto para guardar un array 
            data += `${base} * ${i} = ${base*i} \n`;

        }


        fs.writeFile(`tablas/tabla-del-${base} con un limite de ${limite}.txt`, data, (err) => {
            //en vez de mandar un error retorno el reject con el err
            if (err) reject(err)
            else resolve(`tabla-del-${base}.txt`.green)

        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}