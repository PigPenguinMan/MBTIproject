import  Fullpage,{FullPageSections,FullpageSection,FullpageNavigation}  from "@ap.cx/react-fullpage";
import Page1 from "../components/page_1 ";
import Page2 from "./Page_2";
import Page3 from "../components/page_3";

const FullPageScroll = () => {


    return ( 
        <Fullpage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection >
                    <Page1/>
                </FullpageSection>
                <FullpageSection >
                    <Page2/>
                </FullpageSection>
                <FullpageSection >
                    <Page3/>
                </FullpageSection>

            </FullPageSections>
        </Fullpage>
    );
}
 
export default FullPageScroll;


// https://www.youtube.com/watch?v=a_f4vsNlKek 영상 참고