import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-2">
        <h5 className="text-brand">{props.menuTitle}</h5>
        <ul className="list-unstyled mt-4">
             {
                 props.menuItems.map((item, index) => <li key={index}><Link to={item.link} >{item.name}</Link></li>)
             }
        </ul>
       
    </div>
    );
};

export default FooterCol;