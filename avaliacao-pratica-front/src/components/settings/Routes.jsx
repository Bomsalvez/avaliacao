import {Redirect, Route, Switch} from "react-router";
import SitesCadastrado from "../pages/sites/SitesCadastrados";
import SiteDetalhado from "../pages/sites/SiteDetalhado";

export default props =>
    <Switch>
        <Route exact path={'/'} component={SitesCadastrado}/>
        <Route exact path={'/site/:id'} component={SiteDetalhado}/>
        <Route exact path={'/site/:id'} component={SiteDetalhado}/>

        <Redirect from={'*'} to={'/'}/>
    </Switch>