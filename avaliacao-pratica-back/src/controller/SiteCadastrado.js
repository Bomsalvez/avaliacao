const persist = require('../persistencia/SiteCadastradoPersist');
const app = require('express')();
const parser = require('body-parser');
const {request} = require("express");

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
    resp.send(site)
})

app.get('/site/:email', (req, resp, next) => {
    const [site] = persist.select(req.params.email);
    // request(site.url, (err, resp, html) => {
    //     console.log(html)
    // })
    resp.send(site)
})
module.exports = controller;