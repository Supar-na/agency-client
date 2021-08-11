import React from 'react';
import contact from '../../../img/contact.png';
import './Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container contact">
            <div className="row">
                <div className="col-md-7">
                    <img src={contact} alt="" className="img-fluid" />
                </div> 
                <div className="col-md-5 contact-form">
                    <h2>Contact us</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                  
                        <input  className="form-style"{...register("example" ,{ required: true }) } placeholder="Name*" />
                        <input className="form-style" {...register("exampleRequired", { required: true })}  placeholder="Email*"/>

                        <br />

                        <input className="form-style" {...register("example" ,{ required: true }) } placeholder="Phone*"/>
                        <input className="form-style" {...register("exampleRequired", { required: true })} placeholder="Service*" /> <br />

                        <input className="form-style message" {...register("exampleRequired", { required: true })} placeholder="Message"/>
                     
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />

                        <input type="submit" className="form-style submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;