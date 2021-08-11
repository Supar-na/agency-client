import React, { useState } from 'react';
import count from '../../../img/count.png';
import { useSpring, animated, config } from 'react-spring'
import './Count.css';



const Count = () => {
    const [flip, set] = useState(false)
    const { number,number2 ,number3} = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 ,number2 :0, number3: 0},
      number: 152,
      number2: 124,
      number3: 138,
      delay:2000 ,
      config: config.molasses,
      onRest: () => set(!flip),
    })
 
  

    return (
        <div className="container">
            <div className="row counter">
                <div className="col-md-6">
                    <h2 className="text-brand">What make us better <br /> digital agency</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                    <div className="row number">
                        <div className="col-md-4">
                        <animated.div>{number.to(n => Math.round(n))}</animated.div>
                         <h5>Projects</h5>
                        </div>
                        <div className="col-md-4">
                        <animated.div>{number2.to(n2 => Math.round(n2))}</animated.div>
                        <h5>Clients</h5>
                        </div>
                        <div className="col-md-4">
                        <animated.div>{number3.to(n3 => Math.round(n3))}</animated.div>
                        <h5>Awards</h5>                  
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <img src={count} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Count;