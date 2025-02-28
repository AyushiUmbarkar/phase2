import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
   
    return(
        <div>
            Count is : <b>{count}</b> <br/>
            <input type="button" value="Increment" onClick={() => setCount(count+1)} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Decrement" onClick={() => setCount(count-1) }  />
        </div>
    )
}
export default Counter;