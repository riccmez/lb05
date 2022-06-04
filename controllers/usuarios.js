const usuarios = require('../models/usuario');
const usuario = {}

usuario.list = function(req,res){
    usuarios.find({}).exec(function (err, usuarios) {
        if (err)
            return res.send(500, err);
        res.render('pages/list', {users: usuarios});
    });
}

usuario.create = function (req, res) {
    var newusuario = new usuarios(req.body);
    newusuario.save(function (err) {
        if(err)
            res.status(400).send('Unable to save deliverydb to database');
        else
            res.redirect('/list');
    });
};
module.exports = usuario;
