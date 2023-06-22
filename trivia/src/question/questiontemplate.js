import decodeString from "../common/decodehtml";
const HtmlTemplate = (props) => (<div className="qContainer">
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">Question {props.props.item.id}</h2>
            <h5 className="card-title">{decodeString(props.props.item.question)}</h5>
        </div>
    </div>
</div>)

export default HtmlTemplate;