import React from "react";
import { useSearchParams } from "react-router-dom";


function Contact(){

    const[data,setData] = useSearchParams();
     console.log(data.get('name'));
     console.log(data.get('price'));
    return(
        <>
        Contact page
 <button onClick={()=>{setData({name:'xyz',price:data.get('price')})}}>ChangeData</button>
        </>
    );
}
export default Contact;