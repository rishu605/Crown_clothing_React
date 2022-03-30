import './form-input.styles.scss'

const FormInput = ({handleChange, ...otherProps}) => {

    const displayLabel = otherProps.label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {otherProps.label}
        </label>
    ) : null

    return (
        <>
            <div className="group">
                <input className="form-input" onChange={handleChange} {...otherProps}/>   
                {displayLabel} 
            </div>
        </>
    )
}

export default FormInput