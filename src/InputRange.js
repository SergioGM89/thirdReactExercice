function InputRange(props) {
    const {name, min, max, showChange} = props;

    return (
        <div className="flex-row wh-default">
            <label htmlFor={name}>{name}:</label>
            <input type="range" id={'i-'+name} name={name} min={min} max={max} onChange={
                (e) => showChange(e.target.value)
            }></input>
        </div>
    )
}

export default InputRange;