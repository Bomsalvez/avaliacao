const persist = require('../persistencia/SiteCadastradoPersist');
const app = require('express')();
const parser = require('body-parser');

const controller = app.use(parser.json());

app.post('/site', (req, resp, next) => {
    const enconde = () => {
        return new Buffer(req.body.senha).toString('base64');
    }

    const site = persist.insert({
        url: req.body.url,
        email: req.body.email,
        usuario: req.body.usuario,
        senha: enconde()
    })
    resp.send(site);
})

app.get('/site', (req, resp, next) => {
    const site = persist.selectAll();
    site.map(s => {
        delete s.email;
        delete s.usuario;
        delete s.senha;
    })
    resp.send(site)
})

app.get('/site/:id', (req, resp, next) => {
    const [site] = persist.select(req.params.id);
    if (req.query.senha) {
        site.senha = new Buffer(site.senha, 'base64').toString('ascii');
    }
    resp.send(site)
})
module.exports = controller;