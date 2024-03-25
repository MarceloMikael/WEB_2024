
import ColorTheme from "./MyColorContext"
import { useContext } from "react"

const FunctionContextD = () => {

    const contexto = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                () => {
                    return (
                        <div>
                            <h1 style={{ color: contexto.bkgD }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD