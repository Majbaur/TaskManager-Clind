import React from 'react';
import { useForm } from "react-hook-form";
//majba
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    if(user){
        console.log(user)
    }
        const onSubmit = data => {
            
        console.log(data);
        const url = `http://localhost:5000/addedItem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };
    console.log('user',user.displayName);
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Service</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-100 mb-2' type="text"  value={user?.displayName} name="userName" placeholder='useName'{...register("displayName")}/>        
                <input className='mb-2' placeholder='email' value={user?.email} name="email" {...register("email", { required: true})} />
                <input className='w-100 mb-2' type="text"  name="taskName" placeholder='Task Name'{...register("taskName")}/>
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;