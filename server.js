'use strict'
const authRoutes= require('./backend/auth/auth.routes');
const express=require('express');
const properties=require('./backend/config/properties');
const DB= require('./backend/config/db');
DB();
const app=express();
const router=express.Router();
app.use('/api', router);
authRoutes(router);
router.get('/',(req,res)=>{
    res.send('hello fromo home');

});
app.listen(properties.PORT,()=>console.log('server running on port 3000'));