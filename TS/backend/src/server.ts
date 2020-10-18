import express, { request } from 'express';
import './database/connection';

const app = express();
app.use(express.json());

// rota = Conjunto
// Recursos = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros 
// Query Params: http://localhost:3000/users?search=diego
// Route Params: http://localhost:3000/users/1 (identificar um recurso)
// Body: http://localhost:3000/users/1 (identificar um recurso)

app.get('/user',(request, response)=>{
  console.log(request.query)
  return response.json({mensage: 'It is OK'})
});

app.listen(3000);

