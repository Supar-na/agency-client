import React from 'react';
import FooterCol from './FooterCol';
import './Footer.css';
import logo from '../../../img/logo.png';

const Footer = () => {
    const itService = [
        {name: "product Design" , link: "/product"},
        {name: "Security" , link: "/security"},
        {name: "PoC Dev" , link: "/poc"},
        {name: "Assurance" , link: "/assure"},
        {name: "App Dev" , link: "/app"},
        {name: "Cloud Migration" , link: "/cloud"},
    ]
    const industries = [
        {name: "product Design" , link: "/product"},
        {name: "Security" , link: "/security"},
        {name: "PoC Dev" , link: "/poc"},
        {name: "Assurance" , link: "/assure"},
        {name: "App Dev" , link: "/app"},
        {name: "Cloud Migration" , link: "/cloud"},
    ]
    const company = [
        {name: "product Design" , link: "/product"},
        {name: "Security" , link: "/security"},
        {name: "PoC Dev" , link: "/poc"},
        {name: "Assurance" , link: "/assure"},
        {name: "App Dev" , link: "/app"},
        {name: "Cloud Migration" , link: "/cloud"},
    ]
    const support = [
        {name: "product Design" , link: "/product"},
        {name: "Security" , link: "/security"},
        {name: "PoC Dev" , link: "/poc"},
        {name: "Assurance" , link: "/assure"},
        {name: "App Dev" , link: "/app"},
        {name: "Cloud Migration" , link: "/cloud"},
    ]
    return (
       <footer>
           <div className="container">
               <div className="row">
                   <div className="col-md-4">
                        <img src={logo} alt="" />
                        <p>231-231 Strand, Temple, London, England.</p>
                        <p><a href="#">(102) 6366 7589</a> | M: <a href="#">info@outsourceo.com</a></p>
                        <div className="subscribe"><p>Subscribe to Our Newsletter</p></div>
                   </div>
                   <FooterCol key={1} menuTitle={"IT Services"} menuItems={itService}/>
                   <FooterCol key={2} menuTitle={"Industries"} menuItems={industries}/>
                   <FooterCol key={3} menuTitle={"Company"} menuItems={company}/>
                   <FooterCol key={4} menuTitle={"Support"} menuItems={support}/>
               </div>
           </div>
       </footer>
    );
};

export default Footer;