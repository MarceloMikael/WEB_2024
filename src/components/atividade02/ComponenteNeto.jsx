import { useState } from "react"
import { Contexto } from "./Contexto"
import { useContext } from "react"

const ComponenteNeto = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let {id} = useContext(Contexto)
    console.log({id})
    return(
        <div>
            <img url={url+(id+2)+".png"} alt="pokemon"/>
        </div>
    )
}

export default ComponenteNeto