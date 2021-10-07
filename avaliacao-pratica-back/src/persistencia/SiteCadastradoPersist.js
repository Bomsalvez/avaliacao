const db = require('../database/NeDB').site;

function insert(site) {
    db.insert(site, (err, s) => {
        if (err) global.s = ('nao autorizado');
        global.site = s;
    });
    return global.site;

}

function selectAll() {
    db.find('', (err, sites) => {
        if (err) global.sites = ('Nao foi cadastrado nenhum site');
        global.sites = sites;
    })
    return global.sites;
}

function select(id) {
    db.find({_id: id}, (err, sites) => {
        if (err) global.sites = ('Nao foi cadastrado nenhum site');
        global.sites = sites;
    })
    return global.sites;
}

module.exports = {insert, selectAll, select}