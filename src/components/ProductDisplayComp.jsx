import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const ProductDisplayComp = (props) => {
    const { product } = props;
    const [index, setIndex] = useState(0);
    
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <img style={{width:"400px",height:"400px"}} src={require(`../image/${product.productPic[index]}`)} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>{product.productName}</h1>
                        <p>{product.productDetail}</p>
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="outline-light" >구매하기</Button>
                        <Button variant="outline-light">찜하기</Button>
                        <Button variant="outline-light">선물하기</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDisplayComp;