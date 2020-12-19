import Navitem from './NavItem';

function Sidebar() {
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
        </a>
        <hr className="sidebar-divider my-0"></hr>
        <Navitem title="Dashboard" icon="tachometer-alt" active="true" />
        <hr className="sidebar-divider"></hr>
        <div className="sidebar-heading">Actions</div>
        <Navitem title="Pages" icon="folder" collapsed="true" />
        <Navitem title="Charts" icon="chart-area" />
        <Navitem title="Tables" icon="table" />
      </ul>
    );
  }
  
  export default Sidebar;