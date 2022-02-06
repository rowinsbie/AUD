import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../assets/scss/Sidebar.scss';

import {FaTachometerAlt,FaExclamationTriangle,FaBuilding,FaCarAlt,FaUsers} from 'react-icons/fa';
export default function SideBar()
{
    return (
            <Nav className="nav-menu">
                <ul className="nav-menu-items">
                    <li className="nav-item">
                       <Link className="sb-link" to='/Dashboard'><FaTachometerAlt /> <span className="sb-text">Dashboard</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="sb-link" to='/reports'><FaExclamationTriangle /> <span className="sb-text">Reports</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="sb-link" to='/associations'><FaBuilding /> <span className="sb-text">Associations</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="sb-link" to='/vehicle-registration'><FaCarAlt /> <span className="sb-text">Vehicle Reg.</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="sb-link" to='/users-list'><FaUsers /> <span className="sb-text">Users</span></Link>
                    </li>
                </ul>
            </Nav>
    )
}