import './Links.css';
import {Link} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Link to={props.link}
          onClick={() => props.click && props.click(props.id)}
    >
        <i className={`fa fa-${props.icon}`}>
        </i> <span className={` ${props.class ? 'oculto' : ''}`}>{props.label}</span>
    </Link>