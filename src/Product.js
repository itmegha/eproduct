import React from "react";
import { Link } from "react-router-dom";


function Product(props){
    return(
        <div id="mydiv1">
            <ul>
                <li><img src={props.img1} alt="image"  id="i1"/></li>
                {/* <li>{props.pr.id}</li> */}
                <li>{props.id}</li>
                <li>{props.name}</li>
                {/* <li>{props.category}</li>
                <li>{props.description}</li>
                <li>{props.price}</li> */}
            </ul>
            <p>
               <Link to={`/product/${props.id}`}>ReadMore</Link>
            </p>
        </div>
    );
}
export default Product;