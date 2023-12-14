import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

export default function MemoHook(){
    const [count, setCount] = useState(0);

    const [timer,setTimer] = useState(0);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
   function timerIncrement(){
        setTimer((c)=> c+1);
    }
    const increment = () => {
        setCount(count+1);
    };

    return (
        <div>

            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
            <button onClick={timerIncrement}>{timer}Timer Increment</button>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};