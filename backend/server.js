import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is your data from the server.' });
});

app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});
