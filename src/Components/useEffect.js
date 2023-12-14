import React, {useEffect, useState} from 'react';
export default function UseEffectHook()
{


    const [count,setCount]= useState(0);
    useEffect(()=>{
        console.log('counter increment ')
    },[count])
    function increment()
    {
        setCount(count+1)
    }
    return(
        <button onClick={increment}>Increment to 1 : {count}</button>
    )

}