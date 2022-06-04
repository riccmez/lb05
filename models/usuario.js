const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema ({
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', Usuario)