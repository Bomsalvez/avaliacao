import './Nav.css';
import Links from "./Links";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Links link={"/"} icon={"home"} label={"Inicío"} />
            <Links link={"/site"} icon={""} label={"Cadastro de Site"} />
        </nav>
    </aside>