import React from 'react';
import BookedService from '../../BookedService/BookedService';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="row" style={{backgroundColor:'#F3F5FF',overflow:'hidden'}}>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
               <BookedService></BookedService>
            </div>
        </div>
    );
};

export default Dashboard;