console.log("-----------------------------------app.js------------------------------------------");

import primaryItem1 from './hotel1.js';
import {item1 as i11,item2 as i12} from './hotel1.js';
import primaryItem02 from './hotel2.js'
import {item1 as i31} from './hotel3.js'
import 'bootstrap/dist/css/bootstrap.css'
import './css/my-theme.css';

console.log("package 1");
console.log(primaryItem1);
console.log(i11);
console.log(i12);

console.log("package 2");
console.log(primaryItem02);


console.log("package 1");
console.log(i31);