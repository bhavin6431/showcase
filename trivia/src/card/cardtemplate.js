import Question from "../question/question";
import Options from "../options/options";
import "./card.css"
import { Link } from "react-router-dom";
export default function CardTemplate(props) {
    console.log(props)
    return (
        <div>
            <div className="loggedInUser"></div>
            <div className="questionNumber">{props.props.loginState.email} <br></br><Link to="/">Logout</Link><br></br>{props.props.item.id} / {props.props.totalQuestions}</div>
            <Question key={`'q' {props.props.item.id}`} item={props.props.item} id={props.props.item.id} />
            <Options key={`'a' {props.props.item.id}`} item={props.props.item} setAnswer={props.props.setAnswer} checkedAnswer={props.props.checkedAnswer} id={props.props.item.id} />
        </div>
    )
}