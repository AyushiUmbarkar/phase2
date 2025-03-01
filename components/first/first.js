import { useState } from "react";
const First = () =>
{
    const [name,setName]=useState("");
    const ayushi = () =>{
        setName("hi i m ayushi")
    };
    const swamini = () =>{
        setName("hi i m swamini")
    };
    return (
        <div>
         <p>Student Name is : {name}</p> 
                   <br/>
                   <input type="button" value="Ayushi" onClick={ayushi} />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="button" value="Swamini" onClick={swamini} /> 
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
        </div>
       )
}
export default First;
 