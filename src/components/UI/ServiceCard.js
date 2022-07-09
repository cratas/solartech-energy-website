import React from "react";
import classes from "./UICommon.module.css";

export const ServiceCard = (props) => {
  const serviceCardStyle = props.leftAlligned
    ? `${classes.serviceCard}`
    : `${classes.serviceCard} ${classes.serviceCardReversed}`;

  const textWrapperStyle = props.leftAlligned
    ? `${classes.textWrapper}`
    : `${classes.textWrapper} ${classes.textWrapperReversed}`;

  return (
    <div className={serviceCardStyle} data-aos="zoom-in">
      <div className={classes.imageWrapper}><img src={props.image} alt="img" /></div>
      <div className={textWrapperStyle}>
        <h3>{props.title}</h3>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
};
