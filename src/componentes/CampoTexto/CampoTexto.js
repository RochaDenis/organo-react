import "./CampoTexto.css"
export const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    let aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado}/>
        </div>
    )
}