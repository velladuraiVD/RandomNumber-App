import { useState } from "react"
import "./style.css"

function Random()
{
    const [count, setcount] = useState(0)
   const random=()=>
   {
     setcount(Math.floor(Math.random()*10))
   }

    return(
        <div id="div1">
            <h1 id="result">{count}</h1>
            <button id="btn" onClick={random}>RANDOM NUMBER</button>
        </div>
    )
}

export default Random