const persist = require('../persistencia/UsuarioPersit');
const app = require('express')();
const parser = require('body-parser');
const md5 = require('md5');


const controller = app.use(parser.json());

app.post('/usuario', (req, resp, next) => {
    const senha = (s) => {
        let aprovado = true;
        if (!s.match(new RegExp('[0-9]'))) aprovado = false;
        if (!s.match(new RegExp('[a-z]'))) aprovado = false;
        if (!s.match(new RegExp('(?=.*[@#$%^&+=])'))) aprovado = false;
        if (s.length < 8) aprovado = false;

        if (aprovado) {
            persist.insert({
                nome: req.body.nome,
                email: req.body.email,
                senha: md5(s)
            });
            resp.send('Usuario Cadastrado')
        } else {
            resp.send('Senha nao atende aos requisitos')
        }
    }
    senha(req.body.senha)
});

app.post('/usuario/login', (req, resp, next) => {
    const [usuario] = persist.login({
        email: req.body.email,
        senha: md5(req.body.senha)
    });
    resp.send(usuario)
});

module.exports = controller;