const app = require('express')();

app.listen(3007, () => {
    console.log('Conectado')
});

const usuario = require('./controller/Usuario');
const site = require('./controller/SiteCadastrado');
app.use(usuario);
app.use(site);
