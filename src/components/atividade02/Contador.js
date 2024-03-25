import { Contexto } from "./Contexto"
import { useContext, useState } from "react"


const Contador = () => {
    
    const {setID} = useContext(Contexto)
    return(
        <div>
         <button onClick={()=>
            setID(
                (valor)=>valor+1
            )
        }>
            contador
         </button>
        </div>
    )
}

export default Contador