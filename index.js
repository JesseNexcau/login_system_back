import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path'
const app = express();
 

const port = 1717;

app.use(express.json());

const whitelist = ['http://localhost:3000'];
const corsOptions = {
      origin: (origin, callback) =>{
            if(whitelist.indexOf(origin) !== -1){
                  callback(null, true);
            }else{
                  callback(new Error('Erro de Origem - Não permitido pelo CORS!'));
            }
      }
}

app.use(cors(corsOptions), (req,res,next)=>{
      // Middleware!
      next();
});

app.post('/makeregister', (req,res)=>{
      console.log(req.body);
})

app.listen(port, () => {
      console.log("Server Iniciado com Sucesso!");
});


