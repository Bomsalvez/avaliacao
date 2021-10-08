import {useEffect, useState} from "react";
import axios from "axios";
import Main from "../../template/Main";
import Table from "../../template/Table";

const headerProps = {icon: 'world', title: 'Site Cadastrado', subtitle: ''};
const baseUrl = 'http://localhost:3007/site';

const SitesCadastrado = () => {
    const [site, setSite] = useState([]);
    useEffect(() => getSites(), [])

    function getSites() {
        axios.get(baseUrl).then(resp => setSite(resp.data));
    }

    return <Main {...headerProps}><Table title={['Sites Cadstrados','Ações']} data={site} path={'site'}/></Main>

}

export default SitesCadastrado;