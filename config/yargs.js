const opts = {
    base: {
        demand: true, //hace que este flag --base sea obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opts)
    .command('crear', 'Crea un listado de tablas con base y limites', opts)
    .help()
    .argv;


module.exports = {
    argv
}