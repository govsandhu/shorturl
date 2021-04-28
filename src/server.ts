import * as express from 'express';
import * as path from 'path';
import { registerControllers } from './controllers/registerControllers';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;
app.set('port', port);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

registerControllers(app);

app.get('*', (req, res) => {
  return res.render('invalidUrl', {});
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port} 🚀`);
});
