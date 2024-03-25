import { useState } from "react"
import { Contexto } from "./Contexto"
import { useContext } from "react"
import ComponenteNeto from "./ComponenteNeto"
const ComponenteFilho = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let {id} = useContext(Contexto)
    return(
        <div>
            <img url={url+(id+1)+".png"} alt="pokemon"/>
            <ComponenteNeto/>
        </div>
    )
}

export default ComponenteFilho