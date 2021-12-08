import React from "react";
import classes from "./HeaderCartButton.module.css";
export default function HeaderCartButton(props) {
  return (
    <button className={classes.button}onClick={props.onClick}>
      <span className={classes.icon}></span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
