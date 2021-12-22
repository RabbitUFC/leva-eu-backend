import cors from 'cors';
import express, {json, urlencoded} from 'express';
import helmet from 'helmet';
import serverless from 'serverless-http';

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));
app.use(helmet());
app.use(cors({origin: '*'}));

app.use((_, res) => {
  return res
    .status(404)
    .json({
      message: 'rota não encontrada',
    });
});

export default serverless(app);
