const Temperatura = ({c, f, k}) =>{
    // funcoes internas
    const celsiusParaFahrenheit = (c) => {
        return (c*9/5)+32
    }

    const fahrenheitParaCelsius = (f) => {
        return (f-32)*(5/9).toFixed(2)
    }

    const kelvin = (k) => {
        return (
            <div>
                <h4>Celsius: {(k-273)} </h4>
                <h4>Fahrenheit: {celsiusParaFahrenheit(k-273)}</h4>
            </div>
        )
    }

    // return
    return (
        <div>
            <h1> Transformando Temperaturas </h1>
            <h2> {c}º C = {celsiusParaFahrenheit(c)}º F </h2>
            <h2> {f}º F = {fahrenheitParaCelsius(f)}º C </h2>
            <h2> {k} Kelvin: </h2>
                {kelvin(k)}
        </div>
    )
}

export default Temperatura