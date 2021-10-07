import './Header.css';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt3">
            <i className={`fa fa-${props.icon}`}>{props.title}</i>
        </h1>
    </header>