import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [service,setService] =useState({})
    const[file,setFile] = useState(null)

    const handleBlur =(e) =>{
      const newService={...service}
      newService[e.target.name] = e.target.value
      setService(newService)
      console.log(newService)
    }

    const handleFileChange =(e) =>{
       const newFile = e.target.files[0]
       setFile(newFile)
       console.log(newFile)
    }
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', service.title)
        formData.append('description', service.description)

       fetch("http://localhost:5000/addService" ,{
            method:"POST",
            body:formData,
        })
        .then(res =>res.json())
        .then(result => {
            console.log(result)
             alert("Service Booked")
        })
        .catch(err =>{
            console.error(err)
        })
    };
    return (
        <div className="row p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor=""> Service title</label> <br />
                <input onBlur={handleBlur} name="title" type="text"{...register("title", { required: true })}/>

                 <br />
                 <label htmlFor=""> Service Description</label> <br />
                <input onBlur={handleBlur} name="description" {...register("description", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input onChange={handleFileChange} type="file" placeholder="Upload a picture" />
                  <br />
                <input type="submit" />
            </form>
            </div>
            
  
    );
};

export default AddService;