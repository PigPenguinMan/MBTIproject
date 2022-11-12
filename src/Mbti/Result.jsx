import styled from "styled-components";
import Logo from "../image/logo.png"
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Result = () => {
    return ( 
        <Wrapper>
            <Headers>어울리는 반려동물 찾기</Headers>
            <Contents>
                <Title>결과 보기</Title>
                <LogoImage>
                    <img src={Logo} width={350} height={350} className="rounded-cricle" />
                </LogoImage>
                <Desc>
                    당신과 잘 어울리는 반려동물은 ? XXX입니다
                </Desc>
                <Button >테스트 다시하기</Button>
            </Contents>
        </Wrapper>
     );
}
 
export default Result;


// styled-Compnents 사용 
const Wrapper = styled.div`
    height:100vh; 
    width: 100%;
    
`
const Headers = styled.div`
    font-size:2.5em;
    display:flex ; 
    justify-content:center;
    align-items:center
    
`
const Contents = styled.div`
    display:flex ; 
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

const Title = styled.div`
    font-size :2em;
    margin-top : 40px ;
`
const LogoImage = styled.div`
    margin-top : 10px;
`
const Desc = styled.div`
    font-size : 1.5em;
    margin-top : 20px;
    
`