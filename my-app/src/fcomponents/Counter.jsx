import { useState} from "react";

const Counter = ()=>{
    const [count , setCount] = useState(0)

    const plus =()=>{

        setCount(count+1)

    }
 const  minus =() =>{
        setCount(count-1)

 }

 const reset = ()=>{
 
    setCount(0)

 }
    return(
        <div>

            <h2>Counter {count}</h2>
            <button onClick={plus}>increment</button>
            <button onClick={minus}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>

    )

}

export default Counter;