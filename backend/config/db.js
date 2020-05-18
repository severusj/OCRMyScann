const mongoose=require('mongoose');
const dbUrl= require('./properties').DB;

module.exports=()=>{
    mongoose.connect(dbUrl,{userNewUrlParser:true})
    .then(()=>console.log('Mongo Connected on ${dbUrl}'))
    .catch(err=>console.log('Connection error'))

    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log('Mongo se desconecto');
            process.exit(0)
        });
    });
}