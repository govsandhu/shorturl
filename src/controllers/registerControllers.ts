import { Application } from 'express';
import urlController from './url/urlController';

export function registerControllers(app: Application): void {
  new urlController(app).init();
}
