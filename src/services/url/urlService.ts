import { UrlStore, IUrl } from '../../db/store/url/urlStore';
import { generateRandomString } from '../../helpers/randomString';

export default class UrlService {
  private urlStore: UrlStore;

  constructor() {
    this.urlStore = new UrlStore();
  }

  async getById(id: number): Promise<IUrl> {
    const url = await this.urlStore.getById(id);

    return url;
  }

  async getUrlByShortUrl(shortUrl: string): Promise<IUrl> {
    const url = await this.urlStore.where({ short_url: shortUrl });

    return url;
  }

  async getUrls(): Promise<IUrl[]> {
    const urls = await this.urlStore.all();

    return urls;
  }

  async saveUrl(longUrl: string): Promise<IUrl> {
    const shortUrl = generateRandomString(6);

    const model = await this.urlStore.insert({ short_url: shortUrl, long_url: longUrl });

    return model;
  }
}
