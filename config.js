const argv = require('minimist');

console.dir(argv(process.argv.slice(2)))
let argvs = {
    arg: argv(process.argv.slice(2)).type
};

module.exports = argvs.arg;