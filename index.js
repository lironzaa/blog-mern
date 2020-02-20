const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json({ extended: false }));
app.use('/api/postMessages', require('./routes/api/postMessages'));

app.get('/', (req, res) => {
  res.send('api running');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server run on post ${PORT}`));