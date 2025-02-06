import {useState,useEffect} from "react";

function useApi(url){
     const[product,setProduct] = useState(null);
     const[loading,setloading] = useState(false);

     useEffect(()=>{
        setloading(true);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        .finally(()=>{
            setloading(false);
            return loading;
        })
    },[url]);

    return {product,loading};
}

export default useApi;