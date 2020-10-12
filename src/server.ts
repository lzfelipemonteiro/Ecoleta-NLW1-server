import express from 'express';
import cors from 'cors'
import path from 'path';

import router from './routes'

const app = express();

app.use(cors()) // Segurança de acesso a rota

app.use(express.json()) // Configura para receber o body como JSON

app.use(router); // Usa as rotas de outro arquivo

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => {
  console.log('Server started on port 3333')
})