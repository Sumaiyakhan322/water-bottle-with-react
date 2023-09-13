import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addCart, getStoreCart } from "../../Utilities/localStorage";
import Cart from "../../cart/cart";


const Bottles = () => {
    const [bottles,setBottles]=useState([])
    useEffect(()=>{
    fetch('bottle.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
    },[])
    //load cart to local
    useEffect(()=>{
      if(bottles.length>0){
         const storecart=getStoreCart()
      // console.log(storecart);
      const savedCart=[]
      for(const i of storecart){
         console.log(i);
         const bootle=bottles.find(bottle=>bottle.id===i)
         // console.log(bootle);
         
         if(bootle){
            savedCart.push(bootle)
         }
         
      }
      console.log(savedCart);
      setBottle(savedCart)

      
      }
    },[bottles])

 const [addBottle,setBottle]=useState([])
    const handleAddtoCArt=(bottle)=>{
       const cart=[...addBottle,bottle]
       setBottle(cart);
       addCart(bottle.id)
    }
    
    
    return (
        <div>
           <h2>Total Bottles:{bottles.length}</h2> 
          <Cart cart={addBottle}></Cart>
           <div className="bottle-con">
           {
            bottles.map((bottle=><Bottle bottle={bottle} key={bottle.id} handleAddtoCArt={handleAddtoCArt}></Bottle>))
           }
           </div>
        </div>
    );
};

export default Bottles;