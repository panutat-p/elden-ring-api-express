import express from 'express';
import type { Express } from 'express';

import { info } from './handler.js';

class Router {
  server: Express;
  port: string;

  constructor(port: string) {
    this.port = port;
    this.server = express();
  }

  runServer() {
    this.server.get('/', info);
    this.server.listen(this.port, () => {
      console.log(`[Router] Server is running at http://localhost:${this.port}`);
    });
  }
}

export default Router;
