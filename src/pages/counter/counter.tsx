import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Remove the unnecessary UseDispatch import
import { increment, decrement, incrementByAmount } from "../../redux/counter/counterSlice";
import { AppDispatch, RootState } from "../../redux/store";

function Counter() {
    // const dispatch = useDispatch(); // Correct hook usage
    // const count = useSelector((state: { counter: { value: number } }) => state.counter.value); // Access the counter value from the state

    const dispatch = useDispatch<AppDispatch>()
    
    const count = useSelector((state: RootState) => state.counter.value);
    return(
        <div className="text-center">
            <h1>Counter: {count}</h1>
            <button className="bg-blue-500 hover:bg-blue-900 p-1  rounded text-white mt-4" onClick={() => dispatch(increment())}>Increment</button> {/* Increment button */}
            <button className="bg-blue-500 hover:bg-blue-900 p-1  rounded text-white mt-4" onClick={() => dispatch(decrement())}>Decrement</button> {/* Decrement button */}
            <button className="bg-blue-500 hover:bg-blue-900 p-1  rounded text-white mt-4" onClick={() => dispatch(incrementByAmount(5000))}>Increment by 5000</button> {/* Increment by 5000 button */}
        </div>
    );
}

export default Counter;
