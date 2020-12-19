function NavItem(props) {
    return (
        <li className={props.active ? "nav-item active" : "nav-item"}>
            <a className={props.collapsed ? "nav-link collapsed" : "nav-link"} href="/">
                <i className={`fas fa-fw fa-${props.icon}`}></i>
                <span>  {props.title}</span>
            </a>
        </li>
    );
  }
  
  export default NavItem;