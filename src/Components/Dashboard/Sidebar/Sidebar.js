import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome ,faClipboardList,faPlus,faUserPlus,faGripHorizontal,faShoppingCart,faShoppingBag,faStickyNote} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logo} alt="" />
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-brand">
                      <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/orders" className="text-brand">
                      <FontAwesomeIcon icon={faClipboardList} /> <span>Order list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addService" className="text-brand">
                      <FontAwesomeIcon icon={faPlus} /> <span>Add service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addAdmin" className="text-brand">
                      <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/manage" className="text-brand">
                      <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/book" className="text-brand">
                      <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/booking" className="text-brand">
                      <FontAwesomeIcon icon={faShoppingBag} /> <span>Book List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/review" className="text-brand">
                      <FontAwesomeIcon icon={faStickyNote} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;