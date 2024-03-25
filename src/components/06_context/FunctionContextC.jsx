import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"
import { useContext } from "react"


const FunctionContextC = () => {

    const contexto = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                () => {
                    return (
                        <div>
                            <h1 style={{ color: contexto.bkgC }}>
                                Contexto C
                            </h1>
                            <FunctionContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextC