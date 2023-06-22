import React, { useEffect, useState } from "react"
import OptionsTemplate from "./optionstemplate"
import decodeString from "../common/decodehtml"
export default function Options(props) {    
    const answers = [props.item.correct_answer, ...props.item.incorrect_answers]
  
    const answersvalues = answers.map((item) => {
        return <div key={item} className={`form-check ${props.checkedAnswer && props.item.correct_answer ===  item ? 'green' : (props.checkedAnswer && props.item.input_answer ===  item ? 'red' : '')}`}> <input defaultChecked={props.item.input_answer ===  item} className="form-check-input" type="radio" name={props.item.id} id="flexRadioDefault2" disabled={props.checkedAnswer} onClick={() => props.setAnswer(props.id, item)} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
            {decodeString(item)}
            </label> </div>
    })

    return (
        <OptionsTemplate answersvalues={answersvalues} />
    )

    
}