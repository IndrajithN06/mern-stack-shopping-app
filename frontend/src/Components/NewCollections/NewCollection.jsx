import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import config from '../../config'


const NewCollection = () => {
  const [new_collection ,setNewCollection]=useState([]);

  useEffect(() => {
    fetch(`${config.backendUrl}/newcollections`)
      .then((resp) => resp.json())
      .then((data) => {
        setNewCollection(data);
      })
      .catch((error) => {
        console.error('Error fetching new collections:', error);
        // Handle the error (e.g., display an error message)
      });
  }, []);
  
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />

        <div className="collections">
        {new_collection.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
       
      </div>
    
  )
}

export default NewCollection
