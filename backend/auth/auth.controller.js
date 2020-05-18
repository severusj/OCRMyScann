const archivito=require('./auth.dao');
exports.crearArchivo=(req, res, next)=>{
    const newFile={
      nombrearchivo: req.body.nombrearchivo,
      tipoarchivo: req.body.tipoarchivo,
      fechacreacion:req.body.fechacreacion,
      palabraclave: req.body.palabraclave,
      cantidadpalabras: req.body.cantidadpalabras,
    }
    archivito.create(newFile, (err, archivo)=>{
        if(err) return res.status(500).send('server error');

        res.send({archivo});
    });
}

exports.CrearFile=(req, res, next)=>
{
    const fileData={
        nombrearchivo: req.body.nombrearchivo,
      tipoarchivo: req.body.tipoarchivo,
      fechacreacion:req.body.fechacreacion,
      palabraclave: req.body.palabraclave,
      cantidadpalabras: req.body.cantidadpalabras,
    }
    archivito.findOne({palabraclave: fileData.palabraclave},(err, archivo)=>{
        if(err) return res.status(500).send('server error');
        if(!archivo)
        {
            res.status(409).send({message: 'Something failed'});
        }else{
            const resultArchivo=fileData.palabraclave;
            res.send({fileData});
        }
    })
}