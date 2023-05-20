import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { PORT } from './constants';
import { getAlias, getTopic } from './controller';

(() => {
  const app = express();
  const port: number = PORT;

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
  );

  const router = express.Router();

  router
    .get('/topic', getTopic)
    .get('/alias', getAlias)

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/api', router);
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });

  app.listen(port, () => {
    console.log('App', `🚀  Server ready at http://localhost:${port}`);
  });
})();
