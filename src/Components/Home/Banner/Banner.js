import React from 'react';
import './Banner.css';
import banner from '../../../img/banner.png'

const Banner = () => {
    return (
        <div className="container-fluid banner">
            <div className="row">
                <div className="col-md-7">
                    <h1 className="text-brand">Build your digital ideas <br />
                         with trusted agency</h1>
                         <p >Temporibus autem quibusdam et aut officiis debitis aut <br /> rerum necessitatibus saepe eveniet voluptates.</p>
                         <button className="btn-brand">Hire Us</button>
                         <button className="btn-learn">Learn More</button>
                </div>
                <div className="col-md-5">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;