function PValue(props) {
    const {name} = props;
    return (
        <div className="wh-default">
            <p>{name}: <span id={'p-'+name}></span></p>
        </div>
    )
}

export default PValue;