import React from 'react';
import './ServiceItem.css'

const ServiceItem = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="service-item">
            <img src={service.img} alt="" />
            <h5>{service.title}</h5>
            <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceItem;