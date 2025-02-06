import React, { useState,useEffect } from "react";
import Product from "./Product";
import useApi from "./useApi";

function MyShop(){

    const[url,setUrl] = useState(`http://localhost:3000/product`);
    const {product:data,loading} = useApi(url);

   console.log(data);
    return(
        <>
            <h3>Welcome to MyShop</h3>
            <button onClick={()=>setUrl(`http://localhost:3000/product`)}>All</button>
            <button onClick={()=>setUrl(`http://localhost:3000/product?category=Watch`)}>Watch</button>
            <button onClick={()=>setUrl(`http://localhost:3000/product?category=Laptop`)}>Laptop</button>
            <button onClick={()=>setUrl(`http://localhost:3000/product?category=SmartPhone`)}>SmartPhone</button>       
            
            {loading && `loading...`}
            {

            data && data.map((p,ind)=>{
               
                    return <Product {...p} key={ind}/>
                })
            }
               
        </>
    );
}
export default MyShop;