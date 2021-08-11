import React from 'react';
import Contact from '../Contact/Contact';
import Count from '../Count/Count';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Service></Service>
           <Count></Count>
           <Testimonial></Testimonial>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;