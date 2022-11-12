import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import DataContext from '../Context/DataContext';

const ImgCardComp = (props) => {
  const { dog } = props;
  const data = useContext(DataContext);
  return (
    <div>
      <Card className="Card text-white ">
        <Card.Img className='Card_img' src={require(`../image/${dog.animalPic[0]}`)} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{dog.animalName}</Card.Title>
          <Card.Text>{dog.animalDetail}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImgCardComp;