const mongoose= require('mongoose');
const authSchema= require('./auth.model');

authSchema.statics={
    create: function(data, cb){
        const file= new this(data);
        file.save(cb);
    },
    buscararchivo: function(query, cb){
        this.find(query, cb);
    }
}

const authModel= mongoose.model('archivos', authSchema);
module.exports=authModel;