import { Fragment, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import DataContext from "../Context/DataContext";
import ProductCardComp from "./ProductCardComp";

const Page3 = () => {

    const { state } = useContext(DataContext);
    const settings = {
        Infinity: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    }
    return (
        <div className="Third_page Page_Container">
            <Row>
                <Col className="px-5">
                    <Slider {...settings}>
                        {state.productList.map((product) => (
                            <ProductCardComp key={product.productId} product={product} />
                        ))}
                    </Slider>
                </Col>
            </Row>
        </div>
    );
}

export default Page3;