import Store from '../store';

export interface IUrl {
  id?: number;
  short_url: string;
  long_url: string;
}

export class UrlStore extends Store<IUrl> {
  constructor() {
    super('urls');
  }
}
