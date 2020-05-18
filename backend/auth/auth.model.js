const mongoose= require('mongoose');
const schema= mongoose.Schema;

const archivoSchema= new Schema({
    nombrearchivo:{
        type: String,
        required: true,
        trim: true,

    },
    tipoarchivo:{
        type: String,
        required: true,
        trim: true,
        
    },
    fechacreacion:{
        type: Date,
        required: true,
        trim: true,
        
    },
    palabraclave:{
        type: String,
        required: true,
        trim: true,
        
    },
    cantidadpalabras:{
        type: Int32Array,
        required: true,
        trim: true,
        
    }

},{
    timestapms: true
});

module.exports = archivoSchema;
