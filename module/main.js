 /*
  * Module pattern:
  *  1 - Module has be in his own enclosing function that runs once.
  *  2 - Internal function that gets returned (in this example, `person()`) as a public API and therefore its closure.
  * 
  * Not working, as Node doesn't support `import` yet, so we can't use `node ./module/main.js`.
  * It does work with babel, see package.json for command `npm run module-test`.
  */

import { person } from './module';

let aPerson = person();

console.log(aPerson.getName()); // Guillaume
aPerson.setName('Will');
console.log(aPerson.getName()); // Will