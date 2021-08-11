import React from 'react';
import { useForm } from "react-hook-form";
// import PaymentProcess from './PaymentProcess';


const BookedService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch("http://localhost:5000/bookService", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Service Booked")
            })
    };

    return (
        <div className="row p-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" type="text"{...register("name", { required: true })} placeholder="Ypur Name" />

                <br />

                <input name="email" type="email"{...register("email", { required: true })} placeholder="Your Email" />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input name="service" type="text" {...register("service", { required: true })} placeholder="Service name" />
                <br />
                <input type="submit" />
            </form>
{/* 
          <PaymentProcess></PaymentProcess> */}
        </div>
    );
};

export default BookedService;