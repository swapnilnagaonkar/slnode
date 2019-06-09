//const fs = require('fs');
//fs.writeFileSync("notes.txt","My name is madhav das");
//fs.appendFileSync("notes.txt",". I am das of krishna");

// const add = require('./utils')
//const name = "Swapnil";
// console.log(add(4,2))

//const prt = require('./notes.js')
//console.log(prt())

// const validator = require('validator')
// console.log(validator.isEmail('www@inc.com'));
// console.log(validator.isURL('www'));

const chalk = require('chalk');
const yargs = require('yargs');
console.log(chalk.red.inverse.bold('HareKrishna!'));

yargs.version('1.1.1')

yargs.command({
    command : 'add',
    describe : 'add a new note',
    handler : function(){
        console.log('fkjhfkjahsdkf')
    }
})
//console.log(process.argv);
console.log(yargs.argv);
