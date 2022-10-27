const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.status(201).json({
    slackUsername: 'PolyMath-Coder',
    backend: true,
    age: 20,
    bio: 'A bug is a feature waiting to be discovered... All I do is fix them!',
  });
});

app.listen(PORT, () => {
  console.log(`Server now live at port ${PORT}`);
});
