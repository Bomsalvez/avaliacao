const app =require('express')();

app.listen(3007,()=>{
console.log('Conectado')
});

const usuario=require('./controller/Usuario');
app.use(usuario);
