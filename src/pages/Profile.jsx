import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { Col, Container, Row } from "react-bootstrap"


const Profile = () => {
    const { state } = useContext(DataContext)
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {state.user.profile ?
                            <div style={{
                                width : "150px",
                                height : "150px",
                                backgroundImage: `url(${state.user.profile})`,
                                backgroundSize : "cover"}
                                }>
                            </div>
                            :
                            <div style={{width:"150px",height:"150px",backgroundColor:"lightgray"}}>이미지가 없습니다</div>
                        }
                    </Col>
                    <Col>
                        <h2>{state.user.name}</h2>
                        <hr />
                        <h2>찜 목록</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;