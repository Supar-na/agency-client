import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import background from '../../../img/background.jpg'
import Banner from '../Banner/Banner';


const Header = () => {
    const headerStyle = {
       backgroundImage:`url(${background})`,
       backgroundSize: 'cover',
       backgroundRepeat:'no-repeat',
    }
    return (
        <div style={headerStyle}>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;