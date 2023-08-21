"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.logPerson = exports.user = void 0;
exports.user = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
exports.users = exports.user;
console.log('Users:');
exports.users.forEach(logPerson);
let stringArr = ['one', 'two', 'hey'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1994, true];
stringArr[0] = 'john';
stringArr.push('hi');
guitars.unshift();
let myTupple = ['dave', 42, true];
let mixed = ['john', false, 1];
mixed = myTupple;
//# sourceMappingURL=index2.js.map