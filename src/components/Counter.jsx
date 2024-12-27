import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const InputChangeHandleInc = () => {
        setCount(count + 1);
    }
    const InputChangeHandledec = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <p>Counter Component: {count}</p>
            <button onClick={InputChangeHandleInc}>Increment</button>
            <button onClick={InputChangeHandledec}>Decrement</button>
        </div>

    )

}
export default Counter;