const router = require('express').Router();

// POST /user/login, 로그인
router.post('/login', (req, res, next) => {
  // todo
});

// POST /user, 회원가입, POST: 생성
router.post('/', async (req, res, next) => {
  try {
    // todo
  } catch (err) {
    // todo
  }
});

// POST /user/logout, 로그아웃
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('logout ok');
});

module.exports = router;
