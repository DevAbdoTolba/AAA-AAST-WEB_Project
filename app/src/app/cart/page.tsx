"use client";
import React from "react";
import "./style.css";

import Succsessful from "./paymentSuccsessful/main";
import Button from "@mui/material/Button";

export default function Page() {
  const [succsessful, setSuccsessful] = React.useState(false);

  return (
    <>
      <h1>Your Cart</h1>
      <div className="Box">
        <div className="product">
          <div className="image">
            <img
              src="./images/fabric-sofas-10661.avif"
              alt="White Wooden Chair"
              className="image"
            />
            <div className="text">
              <h4>Leather Sofa</h4>
              <h6>color : black</h6>
            </div>
            <div className="selection">
              <label htmlFor="Qty">Qty</label>
              <select id="Qty" name="Qty">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div>
              <h3>$213</h3>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="image">
            <img
              src="./images/fabric-sofas-10661.avif"
              alt="White Wooden Chair"
              className="image"
            />
            <div className="text">
              <h4>Modern chair</h4>
              <h6>color:yellow </h6>
            </div>
            <div className="selection">
              <label htmlFor="Qty">Qty</label>
              <select id="Qty" name="Qty">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div>
              <h3>$322</h3>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="image">
            <img
              src="./images/fabric-sofas-10661.avif"
              alt="White Wooden Chair"
              className="image"
            />
            <div className="text">
              <h4>Leather Sofa</h4>
              <h6>color</h6>
            </div>
            <div className="selection">
              <label htmlFor="Qty">Qty</label>
              <select id="Qty" name="Qty">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </div>
            <div>
              <h3>$112</h3>
            </div>
          </div>
        </div>
        <Button
          sx={{
            width: "25ch",
            margin: " 2ch auto",
          }}
          className="filled"
          onClick={() => {
            window.scrollTo(0, 0);
            setSuccsessful(true);
          }}
        >
          <p>Checkout</p>
        </Button>
      </div>
      {succsessful ? <Succsessful /> : null}
    </>
  );
}
