import { ToastContainer } from "react-toastify"
export default function TriviaTemplate(props) {
    console.log(props.questionOptions.length)
    return (
        <div className="mainContainer">
            {props.questionOptions}
            <div className="d-grid gap-2 d-md-flex">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={props.handlePrev} hidden={props.prevButtonHidden}>Prev</button>
                <button type="button" className="btn btn-outline-primary btn-sm" hidden={!props.questionOptions.length} onClick={props.handleSubmit}>{props.buttonValue}</button>                
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={props.handleRestart} hidden={!props.checkedAnswer}>Restart</button>                
            </div>
            <ToastContainer />
        </div>
    )
}