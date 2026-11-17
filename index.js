import * as fs from 'fs';
// import * as cowsay from 'cowsay';
import {say} from 'cowsay';
console.log('Hello!');

const output = say({text: 'Cole'});
console.log(output);

// const words = ['art', 'workout', 'music', 'gaming'];
// const output = words.join('\n');
// fs.writeFile('words.txt', output, fileWritten);

// function fileWritten() {
//     console.log('File written!');
// }