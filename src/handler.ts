import type { Request, Response } from 'express';
export function info(req: Request, res: Response) {
  return res.status(200).json({
    server: 'Express.js',
    language: 'TypeScript',
    module: 'ESM',
  });
}
