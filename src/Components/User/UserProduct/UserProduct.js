import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProduct.css'
import { Button } from 'react-bootstrap';
import GetProducts from './../../../Hooks/GetProducts';

const UserProduct = ({addItem}) => {
    
    const [addedItems , setAddedItems] = useState()

    const { _id, taskName , description } = addItem;

    const handleDelete = id =>{
        id.preventDefault();
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/addedItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = addedItems.filter(addedItem => addedItem._id !== id);
                setAddedItems(remaining);
            })
        }
    }

    return (
        <article>
        <div data-aos="fade-up" className="col ">
            <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                <div className="card-body">
                    <h2 className="card-title">{taskName}</h2>
                    <p>{description}</p>
                    <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(addItem._id)}>Delete Item</Button>
                </div>
            </div>
        </div>

    </article>
    );
};

export default UserProduct;