import styled from 'styled-components';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';



const Question = () => {
    const data = useContext(DataContext);
    const [questionNum, setquestionNum] = useState(0)
    const navigate = useNavigate();
    const [totalScore, setTotalScore] = useState([
        { id: 'JOB', score: 0 },
        { id: 'EI', score: 0 },
        { id: 'SN', score: 0 },
        { id: 'TF', score: 0 },
        { id: 'JP', score: 0 }
    ])
    let dastQu = data.state.question[questionNum];

    const ClickButton = (Num,type) => {
        // totalScore에 map함수로 각각의 요소를 a로 받음
        const newScore = totalScore.map((a)=>
            a.id === type ?
            { id:a.id , score:a.score + Num } 
            :
            //  type이 같지않은 경우 기존의 객체 유지
            a 
        );
        setTotalScore(newScore);    
        // 다음 문제로 문제수 증가 
        // 마지막문제에서 
        if(data.state.question.length !== questionNum +1){
            setquestionNum(questionNum +1);
        }else {
            // 결과 페이지로 이동 
            navigate('/Result')
        }
        console.log('newScore', newScore);


        // 기존 스코어에 더할 값을 계산 (기존의 값 + 배점)
        // if (dastQu.type === 'JOB') {
        //     const addScore = totalScore[0].score + Num;
        //     // 새로운 객체 생성 
        //     const newObject = {id: "JOB", score: addScore}
        //     // splice 로 새로운 객체를 해당객체에 넣어줌 
        //     // 첫번째 인자로 인덱스값 , n번째 요소 , 넣어줄 객체
        //     totalScore.splice(0, 1, newObject)
        // } else if ( type === "EI"){
        //     const addScore = totalScore[0].score + Num;
        //     const newObject = {id: "EI", score: addScore}
        //     totalScore.splice(1, 1, newObject)
        // } else if ( type === "SN"){
        //     const addScore = totalScore[0].score + Num;
        //     const newObject = {id: "SN", score: addScore}
        //     totalScore.splice(2, 1, newObject)
        // } else if ( type === "TF"){
        //     const addScore = totalScore[0].score + Num;
        //     const newObject = {id: "TF", score: addScore}
        //     totalScore.splice(3, 1, newObject)
        // } else {
        //     const addScore = totalScore[0].score + Num;
        //     const newObject = {id: "JP", score: addScore}
        //     totalScore.splice(4, 1, newObject)
        // }
    }

    // const ClickButtonB = (Num,type) => {
    //     setquestionNum(questionNum + 1);
    //     if (dastQu.type === 'JOB') {
    //         const addScore = totalScore[0].score + Num;
    //         // 새로운 객체 생성 
    //         const newObject = {id: "JOB", score: addScore}
    //         // splice 로 새로운 객체를 해당객체에 넣어줌 
    //         // 첫번째 인자로 인덱스값 , n번째 요소 , 넣어줄 객체
    //         totalScore.splice(0, 1, newObject)
    //     } else if ( type === "EI"){
    //         const addScore = totalScore[0].score + Num;
    //         const newObject = {id: "EI", score: addScore}
    //         totalScore.splice(1, 1, newObject)
    //     } else if ( type === "SN"){
    //         const addScore = totalScore[0].score + Num;
    //         const newObject = {id: "SN", score: addScore}
    //         totalScore.splice(2, 1, newObject)
    //     } else if ( type === "TF"){
    //         const addScore = totalScore[0].score + Num;
    //         const newObject = {id: "TF", score: addScore}
    //         totalScore.splice(3, 1, newObject)
    //     } else {
    //         const addScore = totalScore[0].score + Num;
    //         const newObject = {id: "JP", score: addScore}
    //         totalScore.splice(4, 1, newObject)
    //     }
    // }

   
    return (
        <Wrapper>
            {/* ProgressBar가 질문의 진행도 만큼 움직이게 */}
            <ProgressBar striped variant="warning" now={(questionNum) / data.state.question.length * 100} style={{ marginTop: '20px' }} />
            <Title> {dastQu.title} </Title>
            <ButtonGroup>
                <Button
                    onClick={() => ClickButton(1,dastQu.type)}
                    style={{ width: "40%", minHeight: '150px', fontSize: '15pt' }}>
                    {dastQu.answerA}
                </Button>
                <Button
                    onClick={() => ClickButton(0,dastQu.type)}
                    style={{ width: "40%", minHeight: '150px', fontSize: '15pt', marginLeft: '20px' }}>
                    {dastQu.answerB}
                </Button>
            </ButtonGroup>
        </Wrapper>
    );
}

export default Question;
const Wrapper = styled.div`
    height:100vh; 
    width: 100%;
    color: white;   
`
const Title = styled.div`
    font-size : 1.5em;
    text-align : center ; 
`
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content : center
`
