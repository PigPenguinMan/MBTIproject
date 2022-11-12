import Slider from "react-slick";
import { useContext } from "react";
import DataContext from "../Context/DataContext"
import ImgCardComp from "./ImgCardComp";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
const Page1 = () => {
   
    const { state } = useContext(DataContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false ,
        autoplay:true ,
      };
    return ( 
        <div className="First_page Page_Container"  >
            {
             <Slider {...settings}>
               { state.animal.map((dog)=>(
                <div>
                    <ImgCardComp  key={dog.animalNum} dog={dog}/>
                </div>
               ))}
            </Slider>
            }
          
        </div>
    );
}
 
export default Page1;