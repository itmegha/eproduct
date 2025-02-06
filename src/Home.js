import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { themeContext } from "./MyContext/ThemeProvider";
function Home(){

    const context = useContext(themeContext);
      console.log(context);
    const { register, handleSubmit,formState:{ errors } } = useForm();

    const onSubmit = (data)=>{
        console.log(data);
    }

            return(
                <div id="form1">
                  <h2>My Form</h2>
                  <form onSubmit={handleSubmit(onSubmit)} >
                  <label htmlFor="uname" className="form-label">Username : </label>
                    <input type="text"
                    id="uname"
                    {...register('uname', {required:true,minLength:{
                        value:3,
                        message:"must be in range"
                    }})}
                     className="form-control"
                     /> 
                     {errors.uname?.message}   
                     <br/>   
                      <label htmlFor="pass" className="form-label">Password : </label>
                    <input type="text"
                    id="pass"
                      className="form-control"
                      {...register('pass',{required: true, message:
                        "can not be blank"
                      })}
                     />
                      {errors.pass?.message}  
                     <br />
                     <button className=" btn btn-success" id="b1">Submit</button>
                  </form>
                </div>
            );
        }
export default Home;