import { getAnime } from './anime.js';

getAnime()
  .then((r) => console.log(r))
  .catch((e) => console.log(`🟥 ${JSON.stringify(e)}`));

const object1 = {
  prop: 'exists',
};

console.log(Object.hasOwn(object1, 'prop'));
// true

console.log(Object.hasOwn(object1, 'toString'));
// false

console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
// false
