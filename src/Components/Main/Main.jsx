import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {HiOutlineClipboardCheck} from "react-icons/hi";

import img from '../../assets/image(1).jpg'
import img2 from '../../assets/image(2).jpg'
import img3 from '../../assets/image(3).jpg'
import img4 from '../../assets/image(4).jpg'
import img5 from '../../assets/image(5).jpg'
import img6 from '../../assets/image(6).jpg'
import img7 from '../../assets/image(7).jpg'
import img8 from '../../assets/image(8).jpg'
import img9 from '../../assets/image(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location:'New Zealand',
    grade: 'CULTURAL RELAX',
    Fess: '$700',
    description:
      'The epitome of romance,Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventure activities',
  },
  
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    Fess: '$600',
    description:
    'Huayna Picchu is a mountain in Peru,rising over Machu Picchu,the so-called Lost City of Incas.This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular',
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    Fess: '$700',
    description:
      "One of the most remarkable Australian natural gifts is the best Barrier Reef. The hallmark of this place is lavish and beauty.Always intresting to be in this place",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    Fess: '$800',
    description:
      "Accordind to the World Tourism Ranking,45 Million people visit turkey each year,and from that about 2 Million come to visit Cappadocia.This place is known for its luxurious stays and adventurous activities ",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    Fess: '$1100',
    description:
      "A city in central Mexico,Guanajuato is known for its silver mining and colonial architecture.The houses in the city are attractively painted with the most bright colors available.Always welcome",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    Fess: '$840',
    description:
      "The vibrant hues of the houses are its benchmark and explain the beauty of this place.Also,if you are foodie and love seafood,you will be exhilarated with the choice you are about to get here.Happy exploring great food! ",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkot Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    Fess: '$790',
    description:
      "Angkot wat represents the entire range of khmer art from 9th to the 15th century.This temple is considered the heart and soul of cambodia.This place is known for its luxurious stays and adventure activities",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "PratapGad",
    location: "India",
    grade: "CULTURAL RELAX",
    Fess: '$900',
    description:
      "The fort is now a popular tourist destination. View of one of the bastions of Pratapgad,The fort has a Tulja Bhawani temple from Chhatrapati Shivaji's time.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    Fess: '$500',
    description:
      "Bali is an indonesian Island and one of the best holiday destinations in the Indonesian archipelago.Bali is known for its volcanic mountains,history,art & culture,food,temples and beautiful sandy beaches.",
  },
];

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  })

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,Fess,description})=>{
             return(
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">
             <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
             </div>
              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}</h4>
                  <span className="continent flex">
                     <HiOutlineLocationMarker className="icon"/>
                     <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{Fess}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
              </div>
            </div>
             )
          })
        }
      </div>
    </section>
  );
};

export default Main;
