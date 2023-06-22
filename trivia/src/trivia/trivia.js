import React, { useEffect, useState } from "react"
import Card from "../card/card";
import TriviaTemplate from "./triviatemplate";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Trivia() {
    
    var { id } = useParams();    
    const [data, setData] = useState(null);
    const location = useLocation();
    const [loginState, setLoginState] = useState(location.state)        
    if(!id) {
        id = 1;
    }
    const [checkedAnswer, setCheckedAnswer] = useState(false)
    const [itemId, setItemId] = useState(id);        
    const [questionOptions, setQuestionOptions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if(checkedAnswer) {
            createTriviaCard(data, itemId)
        }        
      }, [checkedAnswer == true]);

    useEffect(() => {              
        if(checkedAnswer == false) {
        console.log("new")
        axios.get('https://opentdb.com/api.php?amount=10&category=21')
        .then((response) =>  response.data)
        .then(json => addIds(json.results))
        .then(json => createTriviaCard(json.results, 1))
        .catch(error => console.error(error));
        }
    }, [checkedAnswer]);

    function handlePrev(event) {    
        setItemId((prevItemId) => prevItemId - 1)            
        createTriviaCard(data, itemId - 1)
        navigate('/card/' + (itemId - 1));
    }
    function handleSubmit(event) {                
        if(itemId === 10) {
            setCheckedAnswer(() => true)                                                        
            
            var total = 0;
            data.map(item => {
                if (item.correct_answer === item.input_answer) {
                    total++
                }
            })
            toast("Well done " + loginState.email + " You have scored " + total + " points !", { position: toast.POSITION.TOP_CENTER });                    
            
        } else {
            setItemId((prevItemId) => prevItemId + 1)            
            createTriviaCard(data, itemId + 1)
            navigate('/card/' + (itemId + 1));            
        }
    }

    function handleAnswer(id, name) {
        setData(prevData => {
            const newData = prevData.map((item) => {
                if (item.id === id) {
                    item.input_answer = name
                }
                return item
            })
            return newData;
        }
        )
    }

    function addIds(items) {
        var id = 1
        const datanew = items.map(item => {
            item.id = id
            id++
            return item
        })
        setData(() => datanew)        
        return items
    }

    function handleRestart() {       
        setCheckedAnswer(() => false)
        setItemId(() => 1)
        navigate("/trivia", {state : loginState})
    }

    function createTriviaCard(items, itemId) {                
        setData((prevData) => {            
            const questionOptions = prevData.map(item => {

                if (itemId === item.id)
                    return <Card item={item} key={item.id} setAnswer={handleAnswer} checkedAnswer={checkedAnswer} loginState={loginState}/>
            })
            setQuestionOptions(() => questionOptions)
            return prevData
        })
        return items
    }

    return (
        <TriviaTemplate questionOptions={questionOptions} handleRestart={handleRestart} handleSubmit={handleSubmit} checkedAnswer={checkedAnswer} handlePrev = {handlePrev} buttonValue={itemId == 10 ? "Check Answers" : "Next"} prevButtonHidden={itemId == 1}/>
    )
}