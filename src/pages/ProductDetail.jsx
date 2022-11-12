import { useContext, useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductDisplayComp from "../components/ProductDisplayComp";
import DataContext from "../Context/DataContext";
import { ListGroup } from "react-bootstrap";
import Comment from "../components/comment";
import CommentInput from "../components/CommentInput";
import { useEffect } from "react";
const ProductDetail = () => {
    const data = useContext(DataContext);
    const {id} = useParams();
    const [comments,setComments] = useState(
        data.state.allComments.filter(
            (comment)=>(comment.productId == id)
        )
    )
    useEffect(()=>{
        setComments(data.state.allComments.filter((comment)=>(comment.productId==id)))
    },[data.state.allComments])


    const getProduct = () => { return data.state.productList.find((product)=>(product.productId == id))}
    return ( 
        <Fragment>
            <ProductDisplayComp product={getProduct()}/>
            <br/>
            <hr/>
            <CommentInput id={id}/>
            <ListGroup style={{textAlign: "left"}}>
                {comments.map((comment)=>(<Comment key={comment.commentId} comment={comment}/>))}
            </ListGroup>
        </Fragment>
     );
}
 
export default ProductDetail;