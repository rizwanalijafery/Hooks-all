import React, {useRef} from "react";
export default function UseRef()
{
    const countRef = useRef(0);
    const inputRef = useRef(null)

    function clickHandle(){
        countRef.current = countRef.current+1;
        alert('You clicked ' + countRef.current + ' times!');

    }
    function onChange(){
      inputRef.current.focus();
    }
    return(
        <>
            <button onClick={clickHandle}>Click Me</button>
            <input ref={inputRef} />
            <button onClick={onChange}>Focus Input</button></>

    )

}