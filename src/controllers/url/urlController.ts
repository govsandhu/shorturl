import { Application } from 'express';
import UrlService from '../../services/url/urlService';

export default class UrlController {
  private app: Application;
  private urlService: UrlService;

  constructor(app: Application) {
    this.app = app;
    this.urlService = new UrlService();
  }

  public init(): void {
    this.app.get('/', (req, res) => {
      return res.render('home', {});
    });

    this.app.post('/urls', async (req, res) => {
      if (!req.body.long_url) return res.render('home', {});

      const url = await this.urlService.saveUrl(req.body.long_url);

      return res.redirect(`/urls/${url.id}`);
    });

    this.app.get('/urls/:id', async (req, res) => {
      const id = parseInt(req.params.id);

      const url = await this.urlService.getById(id);

      if (!url) return res.redirect('/');

      return res.render('createdUrl', url);
    });

    this.app.get('/all', async (req, res) => {
      const urls = await this.urlService.getUrls();

      return res.render('viewAll', { urls });
    });

    this.app.get('/redirect', (req, res) => {
      return res.render('redirect', {});
    });

    this.app.get('/invalidUrl', (req, res) => {
      return res.render('invalidUrl', {});
    });

    this.app.post('/redirect', async (req, res) => {
      const url = await this.urlService.getUrlByShortUrl(req.body.short_url);

      if (!url) return res.redirect('/invalidUrl');

      return res.redirect(url.long_url);
    });
  }
}
