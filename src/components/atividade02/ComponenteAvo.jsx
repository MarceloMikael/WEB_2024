import { Contexto } from "./Contexto"
import { useContext, useState } from "react"
import ComponenteFilho from "./ComponenteFilho"
import Contador from "./Contador"


const ComponenteAvo = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const [id, setID] = useState(1)

    return(
        <div>
            <Contexto.Provider value={{id,setID}}>
                <img url={url+id+".png"} alt="pokemon"/>
                <ComponenteFilho/>
                <Contador/>
            </Contexto.Provider>

        </div>
    )
}

export default ComponenteAvo