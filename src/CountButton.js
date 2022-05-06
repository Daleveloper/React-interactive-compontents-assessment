import React, { useState } from "react";

function CountButton () {
  const[count, setCount] = useState(0);
  const[lastPressed, setLastPressed] = useState(false);
  
  const handleClick = (label)=> {
    setLastPressed(()=>label);
    
    setLastPressed(lastPressed => {
      if(lastPressed === true){
        setCount(count+1);
      }
      return lastPressed
    });
  };

  return(
  <div>
    <button onClick={() => handleClick(true)}>Click Count: {count}</button>
    </div>
  )
}

export default CountButton;