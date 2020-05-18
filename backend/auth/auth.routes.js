const archive=require('./auth.controller');
module.exports=(router)=>{
    router.post('/registrar', archive.crearArchivo);
    
}