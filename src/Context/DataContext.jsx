import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = (({ children }) => {
    // 사용할 값을 useState로 가져옴

    // 유저정보 
    const [user, setUser] = useState({ name: "", profile: null, likelist: [] })

    // 동물 사진정보 
    const [animal, setAnimal] = useState([
        {
            animalNum: 1,
            animalName: "동물들",
            animalDetail: "동물들",
            animalPic: ["a1.jpg"]
        },
        {
            animalNum: 2,
            animalName: "개",
            animalDetail: "코기",
            animalPic: ["d1.jpg"]
        },
        {
            animalNum: 3,
            animalName: "고양이",
            animalDetail: "믹스",
            animalPic: ["c1.jpg"]
        }
    ])
    const [productList, setProduct] = useState([
        {
            productId: 1,
            productName: "머그컵",
            productPrice: 12000,
            productDetail: "머그컵 자세한 설명",
            productPic: ["m1.png"]
        },
        {
            productId: 2,
            productName: "티셔츠",
            productPrice: 15000,
            productDetail: "티셔츠 자세한 설명",
            productPic: ["t1.png"]

        },
        {
            productId: 3,
            productName: "사진집",
            productPrice: 20000,
            productDetail: "사진집 자세한 설명",
            productPic: ["p1.jpg"]
        },
    ])
    const [question, setQuestion] = useState([
        {
            questionId: 1,
            title: '당신은 평소에 어떤 생활을 하고 있나요 ?',
            answerA: '매일매일 바쁘게 날아다니는 꿀벌같은 직장인',
            answerB: '집고양이처럼 여유로운 집에서 노는 백수',
            type: "JOB"
        },
        {
            questionId: 2,
            title: '당신은 반려동물을 키우게 됐습니다, 가장 먼저 하고 싶은 일은 ?',
            answerA: '남는건 사진뿐이야! 사진찍어서 인스타에 올려야지',
            answerB: '집에 처음왔는데 적응할시간은 줘야지. 그냥 눈으로 보고 있는다',
            type: 'EI'
        },
        {
            questionId: 3,
            title: '오늘은 주말입니다. 당신은 하루동안 무엇을 하나요 ?',
            answerA: '주말인데 당연히 밖에 나가야지 !',
            answerB: '평일에도 나가서 힘든데 주말엔 집에서 쉬어야지',
            type: "EI"
        },
        {
            questionId: 4,
            title: '주인과 상책중인 엉덩이가 빵실한 웰시코기와 눈이 마주쳤습니다. 당신의 행동은 ?',
            answerA: '주인분에게 허락을 받고 마구 귀여워해준다',
            answerB: '엄청 만져보고싶지만 참고 속으로만 귀여워한다',
            type: 'EI'
        },
        {
            questionId: 5,
            title: '반려동물의 이름을 지어줘야할 떄 , 어떤 이름을 지어주나요 ?',
            answerA: '비슷한 이름이 괜히 있는게 아니다 "보리,아리,두부"같이 찰떡같은 이름을 지어준다',
            answerB: '내 이름도 흔한이름인데 반려동물마저 흔할수는 없다 창의적인 이름을 지어준다',
            type: 'SN'
        },
        {
            questionId: 6,
            title: '반려동물의 건강을 생각하게 됐을 때,어떻게 준비할까요 ?',
            answerA: '반려동물이 언제 아플지는 아무도 모르니 아플때마다 그때그때 검색해본다',
            answerB: '어릴때부터 미리미리 준비하고 공부해서 언제 아프더라도 대처할 수 있게한다',
            type: 'SN'
        },
        {
            questionId: 7,
            title: '친구가 동물을 키우고싶어 한다면 당신이 친구에게 해줄 말은 ?',
            answerA: '무엇이든 직접 키우게 되면 현실적으로 어렵다. 생명을 책임질 자신이 있으면 키워라',
            answerB: '직접 보고 마음이 끌리는 친구로 키워라',
            type: 'TF'
        },
        {
            questionId: 8,
            title: '길에서 다친 길고양이를 봤다. 어떻게 할까 ?',
            answerA: '치료해도 다시 길로 돌아오면 같은 상황이 생길것이다. 그냥 가던 길을 간다',
            answerB: '길고양이도 생명인데 돈이 문제가 아니다. 고양이를 데리고 동물병원으로 간다',
            type: 'TF'
        },
        {
            questionId: 9,
            title: '반려동물을 산책할 때 당신이 산책하는 방식은 ?',
            answerA: '산책루트,횟수를 생각해서 미리 생각해서 산책간다!',
            answerB: '산책에 계획이 왜 필요하냐! 그냥 내 발 , 반려동물이 가고싶어 하는데로 간다 ',
            type: 'JP'
        },
        {
            questionId: 10,
            title: '입양센터에서 나랑 너무 잘맞는 아이를 만나서 입양준비를 하려할 때 나는 ?',
            answerA: '같이 살아가면서 필요한것들을 계산해서 체계적으로 미리미리 다 사놓고 준비 한다',
            answerB: '지금 필요한것들만 사고 커가면서 필요한게 있다면 그때 그때 산다',
            type: 'JP'
        },
    ])
    const [result,setResule] = useState([
        {
            id: 1 ,
            name: '',
            best :'',
            desc:'',// 한줄로 작성 
        }
    ])
    const [allComments, setAllComments] = useState([
        {
            commentId: 1,
            productId: 1,
            name: '이재용',
            text: "좋네요"
        },
        {
            commentId: 2,
            productId: 1,
            name: '존도',
            text: "괜찮네요"
        }
    ])
    const [commentCount, setCommentCount] = useState(3)
    // 사용할 value값을 state 와 action으로 분리
    const value = {
        state: { user, animal, productList, allComments, commentCount, question },
        action: { setUser, setAnimal, setProduct, setAllComments, setCommentCount, setQuestion },
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
})

const { Consumer: DataConsumer } = DataContext;

export { DataConsumer, DataProvider };
export default DataContext;