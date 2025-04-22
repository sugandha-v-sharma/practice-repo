import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Remove the unnecessary UseDispatch import
import { increment, decrement, incrementByAmount } from "../../redux/counter/counterSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Button } from "../../components/ui/button";

function Counter() {
    // const dispatch = useDispatch(); // Correct hook usage
    // const count = useSelector((state: { counter: { value: number } }) => state.counter.value); // Access the counter value from the state

    const dispatch = useDispatch<AppDispatch>()
    
    const count = useSelector((state: RootState) => state.counter.value);
    return(
        <div className="text-center">
            <h1>Counter: {count}</h1>
            <Button  shape="rounded"
        variant="hover" onClick={() => dispatch(increment())}>Increment</Button> {/* Increment Button */}
            <Button  shape="rounded"
        variant="hover" onClick={() => dispatch(decrement())}>Decrement</Button> {/* Decrement Button */}
            <Button  shape="rounded"
        variant="hover" onClick={() => dispatch(incrementByAmount(5000))}>Increment by 5000</Button> {/* Increment by 5000 Button */}
        </div>
    );
}

export default Counter;
