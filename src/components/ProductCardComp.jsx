import { Fragment, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/DataContext";


const ProductCardComp = (props) => {    
    const {product} = props;
    const navigate = useNavigate();    
    
    return (
        <Fragment>
            <Card  style={{ width: '15rem' }}>
                <Card.Img variant="top" 
                onClick={()=>{navigate("/product/"+product.productId)}}
                src={require(`../image/${product.productPic[0]}`)} />
                <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="outline-dark">구매하기</Button>
                </Card.Body>
            </Card>
        </Fragment>
    );
}

export default ProductCardComp;