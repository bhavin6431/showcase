import Question from "../question/question";
import Options from "../options/options";
import "./card.css"
export default function CardTemplate(props) {
    return (
        <div>
            <div className="questionNumber">{props.props.item.id} / 10</div>
            <Question key={`'q' {props.props.item.id}`} item={props.props.item} id={props.props.item.id} />
            <Options key={`'a' {props.props.item.id}`} item={props.props.item} setAnswer={props.props.setAnswer} checkedAnswer={props.props.checkedAnswer} id={props.props.item.id} />
        </div>
    )
}