const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const usuario = require('../controllers/usuarios');

router.get('/',(req,res) => {
  res.render('pages/index');
});

router.get('/list',usuario.list);

router.post('/add',usuario.create)

module.exports = router;
