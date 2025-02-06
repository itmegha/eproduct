import React, {useState } from "react";

function About(){
   const[formdata,setformData] = useState({
    uname:'',
    pass:'',
    add:'',
    con:'',
    sub:false
   });

   const[error,setError] = useState({
       name:'',
       pass:''
   });

  const formHandler = (event)=>{
    event.preventDefault();

    if(formdata.uname === '' || formdata.uname === null){
        setError({
           name:"can not be blank"
        });
       return;
    }
    if(formdata.pass.length<=3 || formdata.pass.length>=9){
      setError({
        pass:"must be in range"
     });
    return;
    }
     console.log(formdata.uname);
  }

  const handleChange = (event)=>{
    setformData({
        ...formdata,
      [event.target.name]:event.target.type === 'checkbox'? event.target.checked: event.target.value
    });
  }

   
    return(
        <div id="form1">
          <h2>My Form</h2>
          <form onSubmit={formHandler} >
          <label htmlFor="uname" className="form-label">Username : </label>
            <input type="text"
            id="uname"
            name="uname"
            value={formdata.uname}
            onChange={handleChange}
             className="form-control"
             />
             {error && error.name}
             <br/>
            
              <label htmlFor="pass" className="form-label">Password : </label>
            <input type="text"
            id="pass"
            name="pass"
            value={formdata.pass}
            onChange={handleChange}
             
              className="form-control"
             />
               {error && error.pass}
             <br />
              <label htmlFor="add" className="form-label" >Address : </label>
            <textarea type="text"
            rows={5}
            cols={10}
            id="add"
            name="add"
            value={formdata.add}
            onChange={handleChange}
             className="form-control"
             /><br />
             <label htmlFor="con"className="form-label" >Contry : </label>
            <select
            id="con"
            name="con"
            value={formdata.con}
            onChange={handleChange}
              className="form-control"
            >
              <option>Contry</option>
              <option value='India'>India</option>
              <option value='USA'>USA</option>
              <option value='Japan'>Japan</option>
            </select>
            <br />
            <label htmlFor="sub"className="form-label" >Subscribe : </label>
            <input type="checkbox"
            id="sub"
            name="sub"
            checked={formdata.sub}
            onChange={handleChange}
             /><br />
            
             <button className=" btn btn-success" id="b1">Submit</button>
          </form>
          <p>FromData :{JSON.stringify(formdata)}</p>
          
        </div>
    );
}
export default About;