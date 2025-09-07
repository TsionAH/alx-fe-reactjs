import React, { use } from 'react';
import {useState} from 'react';
import {useEffect}  from 'react';
function Counter(){
    const [count , setCount] = useState(0);
    useEffect(() => {

    }, []);
    return(
        <div>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
         );
    
//     <button>decrement</button>
//     <button>reset</button>
// 
}
export default Counter;