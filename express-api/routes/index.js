// routes

//это для отправки

const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    //пишем пока ответ 21:30
    res.send('register');
});

module.exports = router;
