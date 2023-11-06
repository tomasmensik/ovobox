import React from "react";
import { Element } from "react-scroll";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pro důchodce",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: PickMeals,
      title: "Pro sportovce",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: PickMeals,
      title: "Pro děti",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
  ];
  return (
    <Element name="work-section" className="work-section-wrapper">
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Předplatné</h1>
        <p className="primary-text">
        Získejte větší hodnotu za méně peněz! S naším výhodným předplatným ušetříte a získáte přístup k tomu nejlepšímu sušenému ovoci.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p className="">{data.text}</p>
            <div>
              <button className="secondary-button xdd">
              Objednat
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Element>
  );
};

export default Work;
