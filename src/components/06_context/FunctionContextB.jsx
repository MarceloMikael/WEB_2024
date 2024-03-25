
import ColorTheme from "./MyColorContext"
import { useContext } from "react"

const FunctionContextB = () => {

    const contexto = useContext(ColorTheme)
    return (
        <ColorTheme.Consumer>
            {
                () => {
                    return (
                        <div>
                            <h1 style={{ color: contexto.bkgB }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB