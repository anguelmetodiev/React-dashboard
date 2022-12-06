function DataCard(props) {
    return (
        <div className="dataCard container">
            <div className="label">{props.label}</div>
            <div className="counter">{props.counter}</div>
        </div>
    )
}

export default DataCard