// A simple Express server
import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

app.use('/', router);

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
