import {useEffect, useState} from "react";
import axios from "axios";
import Main from "../../template/Main";

const SiteDetalhado = (props) => {
    let baseUrl = `http://localhost:3007/site/${props.match.params.id}`;
    const [site, setSite] = useState([]);
    const [senha, setSenha] = useState(null);
    const header = {icon: 'world', title: 'Site Detalhado'}

    function getSite() {
        if (senha !== undefined) {
            baseUrl = `${baseUrl}?senha=true`
        }
        axios.get(baseUrl).then(resp => setSite(resp.data));
    }

    useEffect(() => getSite(), []);
    useEffect(() => getSite(), [senha]);

    function getInfo() {
        let botao = () => {

            return <button type="button" onClick={() => setSenha(!senha)}><i className={`fa fa-eye`}/></button>
        };
        return <div>
            <dl>
                <dt>Link</dt>
                <dd>{site.url}</dd>
                <dt>E-mail</dt>
                <dd>{site.email}</dd>
                <dt>Usuario</dt>
                <dd>{site.usuario}</dd>
                <dt>senha</dt>
                <dd>{site.senha}{botao()}</dd>
            </dl>
        </div>
    }

    return <Main {...header}>{<dd>{getInfo()}</dd>}</Main>;
}

export default SiteDetalhado;