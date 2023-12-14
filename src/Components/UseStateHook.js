import React, {useState} from 'react';
export default function UseStateHook()
{
    const [name,setName] = useState('')
    const [count,setCount]= useState(0)
    const [flag,setFlag] = useState(false)
    const [list,setList]= useState([])
    function onChange()
    {
     return  setFlag(!flag)
    }
    function increment(){
        setCount(prevState => prevState+1)
        setCount(prevState => prevState+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function addNames(e)
    {
        e.preventDefault();
        setList([...list, {id:list.length, name}])
        setName('')
    }
    return(
        <div>
            <h3>{flag ? "Pakistan": "Islamabad"}</h3>
            <button onClick={onChange}>Click Me</button>
            <hr></hr>
            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <hr></hr>
            <form onSubmit={addNames}>
                <input value={name} placeholder={'add name'} onChange={(e)=>setName(e.target.value)}/>
                <button>Add name</button>
                <ul>
                    {list.map((item)=>(
                        <li key={item.id}>{item.name}</li>
                    ))}

                </ul>
            </form>
        </div>
    )

}