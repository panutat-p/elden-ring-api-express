import dotenv from 'dotenv';
import Router from './router.js';

dotenv.config();
const name = process.env.NAME;
if (name == undefined) {
  console.log('🟥 Failed to load ENV');
  process.exit(1);
}
console.log('🟩 ENV loaded, name:', process.env.NAME);

const router = new Router(process.env.PORT!);
router.runServer();
