
import VisitorViewer from "./VisitorViewer"

function VisitorSection (props) {
    return (
        <div className="visitorSection container">
            <div className="label">{props.label}</div>
            <div className="counter">{props.counter}</div>
       
            <VisitorViewer />
        </div>
    )
}

export default VisitorSection