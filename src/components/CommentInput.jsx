import { useContext, useState } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CommentInput = () => {
    const { id } = useParams();
    const [textInput, setTextInput] = useState("");
    const { action, state } = useContext(DataContext);
    
    const addComment = () =>{
        const comment = {
            commentId : state.commentCount,
            productId : id,
            name : (state.user ? state.user.name : "ㅇㅇ"),
            text : textInput
        }
        action.setAllComments(state.allComments.concat(comment))
        action.setCommentCount(state.commentCount+1);
    }

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={10}>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" 
                            onChange={(e)=>{setTextInput(e.target.value)}}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={2} >
                    <Button variant="outline-light" onClick={addComment}>입력</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default CommentInput;