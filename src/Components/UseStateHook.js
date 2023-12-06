import React, {useState} from 'react';
export default function UseStateHook()
{
   const [name,setName] = useState('PAKISTAN')
    function onChange()
    {
     return  setName('ISLAMABAD')
    }
    return(
        <div>
            <h3>{name}</h3>
            <button onClick={onChange}>Click Me</button>
        </div>
    )
}