import React from 'react'
import { Link } from 'react-router-dom'

function SideBar(params) {
    return (<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon">
                <img className="w-100" src="/images/logo-DH.png" alt="Digital House" />
            </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - DH movies</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        {/* <!-- Nav Item - Movies --> */}
        <li className="nav-item">
            <Link className="nav-link collapsed" to="/movies">
                <i className="fas fa-fw fa-folder"></i>
                <span>Movies</span>
            </Link>
        </li>

        {/* <!-- Nav Item - genres --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/genres">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>genres</span></Link>
        </li>

        {/* <!-- Nav Item - Last movie --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/lastmovie">
                <i className="fas fa-fw fa-table"></i>
                <span>Last movie</span></Link>
        </li>

        {/* <!-- Nav Item - search movie --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/search">
                <i class="fas fa-search"></i>
                <span>Buscar</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
    </ul>)
}

export default React.memo(SideBar)