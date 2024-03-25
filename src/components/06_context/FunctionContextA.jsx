import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {

    const cores = {bkgA:"green",bkgB:"white",bkgC:"yellow", bkgD:"blue"}

    return (
        <div>
            <h1 style={{color:cores.bkgA}}>Contexto A</h1>
            <ColorTheme.Provider value={cores}>
                <FunctionContextB />
                <FunctionContextC />
            </ColorTheme.Provider>
         </div>
    )
}

export default FunctionContextA