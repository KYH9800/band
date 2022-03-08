const express = require('express');
const app = express();

// routes
const bandRouter = require('./routes/band');

app.get('/', (req, res) => {
  console.log(req.url, req.method);
  res.send('hello express');
});

app.use('/band', bandRouter);

app.listen(3065, () => {
  console.log('서버 실행 중입니다.');
});
