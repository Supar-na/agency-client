import React from 'react';
import servicebg from '../../../img/servicebg.png';
import './service.css';
import branding from '../../../img/branding.png';
import ux from '../../../img/ux.png';
import creative from '../../../img/creative.png';
import ServiceItem from './ServiceItem';

const Service = () => {
    const serviceStyle = {
        backgroundImage:`url(${servicebg})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
     }

     const serviceData =[
         {
             img:branding,
             title:'Branding',
             description:'Nam libero tempore, cum soluta nobis est eligendi optio cumque.',
         },
         {
            img:ux,
            title:'Ux/UI design',
            description:'Nam libero tempore, cum soluta nobis est eligendi optio cumque.',
        },
        {
            img:creative,
            title:'Creative Solutions',
            description:'Nam libero tempore, cum soluta nobis est eligendi optio cumque.',
        },
     ]
    return (
        <div className="container" style={serviceStyle} className="service">
            <h2 className="text-center text-brand">Services that we Provide</h2>
            <p className="text-center">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil <br />
             impedit quo minus id quod maxime placeat facere possimus.

            </p>
           <div className="d-flex justify-content-center">
           <div className="row w-75">
              {
                  serviceData.map(service => <ServiceItem service={service}></ServiceItem>)
              }
            </div>
           </div>
        </div>
    );
};

export default Service;