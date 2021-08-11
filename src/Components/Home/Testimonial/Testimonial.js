import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonial.css';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import p1 from '../../../img/p1.jpg'
import p2 from '../../../img/p2.jpg'
import p3 from '../../../img/p3.jpg'
import p4 from '../../../img/p4.jpg'




const Testimonial = () => {

    const [value, setValue] = React.useState(2)

  


    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
       
       
    <div className="testimonial">
        <h2 className="text-brand text-center">Happy Clients Say</h2>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil <br />
            impedit quo minus id quod maxime placeat facere.</p>

        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={5000}
            arrows={false}
            itemClass="carousel-item-padding-40-px"
        >
            <div>



                <Box component="fieldset" mb={3} borderColor="transparent" >
                    <Rating name="read-only" value={value} readOnly />
                </Box>

                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.</p>
                 
                 <div className="row">
                     <div className="col-md-3"> <img src={p1} alt="" /></div>
                     <div className="col-md-9">
                     <h5>Kate Winston</h5>
                    <p>Web Developer</p>
                     </div>
                 </div>
                       
            </div>
            <div>
                <h3>1</h3>
            </div>
            <div>4</div>
            <div>6</div>
        </Carousel>;


    </div>
    );
};

export default Testimonial;