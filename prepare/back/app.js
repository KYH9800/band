const express = require('express');
const app = express();

// routes
const bandRouter = require('./routes/band');

const db = require('./models');

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

db.sequelize.sync({
  alter: true,
}); // sequelize model sync() 수정하기

app.get('/', (req, res) => {
  console.log(req.url, req.method);
  res.send('hello express');
});

app.use('/band', bandRouter);

app.listen(3065, () => {
  console.log('서버 실행 중입니다.');
});
