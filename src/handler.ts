import type { Request, Response } from 'express';

import type { ExtendedRequest, ItemCommand } from './types.js';

export function info(req: Request, res: Response) {
  return res.status(200).json({
    server: 'Express.js',
    language: 'TypeScript',
    module: 'ESM',
  });
}

export function reflect(req: ExtendedRequest<ItemCommand>, res: Response) {
  console.log(req.body.action);
  console.log(req.body.item);
  return res.status(200).json(req.body);
}
