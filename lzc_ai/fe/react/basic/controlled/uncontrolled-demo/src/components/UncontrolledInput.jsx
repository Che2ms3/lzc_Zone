// useRef 
import {
    useRef
} from 'react';

function UncontrolledInput(){
    const inputRef = useRef(null);
    const handleClick = () =>{
        console.log(inputRef.current.value);
    }
    return(
        <>
        UncontrolledInput
        <input 
          type="text"
          ref={inputRef}   
        />
        
        <button onClick={handleClick}>输入</button>
        </>
    )
}

export default UncontrolledInput
