import {getRandom} from './utils.js';
import {chunk} from 'lodash-es';
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2))

let randomNumber = getRandom(0, 10)

Promise.resolve(3).then(a => console.log(a))

console.log(randomNumber)