import { getAnime } from './anime.js';

getAnime()
  .then((r) => console.log(r))
  .catch((e) => console.log(`🟥 ${JSON.stringify(e)}`));
