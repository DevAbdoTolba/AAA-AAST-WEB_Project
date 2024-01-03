"use client";

import React from "react";
import { useParams } from "next/navigation";

import { Button } from "@mui/material";

import "./style.css";
import { TokenContext } from "../ThemeComponent";

export default function Main() {
  const [item, setItem] = React.useState({
    product_id: "",
    product_name: "",
    product_image: "",
    product_state: "",
    product_description: "",
    product_price: 0,
    inCart: false,
    favorite: false,
  });

  const params = useParams<{ item: string }>();
  const [loading, setLoading] = React.useState(true);
  const [isInCart, setIsInCart] = React.useState(item.inCart);
  const token = React.useContext(TokenContext);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (params?.item) {
      fetch(
        `/api/products/item?id=${params.item}` +
          (token?.length > 0 ? "&token=" + token : "")
      )
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          setItem(res.data);
          setIsInCart(res.data.inCart);
          console.log(res.data);
        });
      setLoading(false);
    }
  }, [params?.item]);

  const handelAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token?.length > 0) {
      fetch("/api/shop/cart?token=" + token + "&id=" + item.product_id)
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          console.log(res);
          setIsInCart((prev) => {
            return !prev;
          });
        });
    } else {
      alert("Please login to add to cart");
    }
  };

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="container__1">
          <div className="product-image">
            <div className="main-image">
              <img
                src={"/images/" + item.product_image}
                alt="White Wooden Chair"
                id="main-image"
              />
            </div>
            <div className="thumbnail-images">
              <div className="thum1">
                <img
                  src={"/images/" + item.product_image}
                  alt="Blue big coach"
                  className="thumbnail"
                />
              </div>
              <div className="thum1">
                <img
                  src={"/images/" + item.product_image}
                  alt="two roof Lambs"
                  className="thumbnail"
                />
              </div>
              <div className="thum1">
                <img
                  src={"/images/" + item.product_image}
                  alt="small wooden table"
                  className="thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="product-features">
            <h1 className="product-text">{item.product_name}</h1>
            <div className="stock-text">
              <h2>{item.product_state}</h2>
              <h2>SKU: {item.product_id}</h2>
            </div>
            {/* <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
            </div> */}
            <p className="product-description">{item.product_description}</p>
            <div className="special-features">
              <dl>
                <dt className="special-features-text">
                  <strong>Special Features</strong>
                </dt>
                <dd>- Free Shipping</dd>
                <dd>- Try Before Buying</dd>
                <dd>- Up to 30% Off</dd>
              </dl>
            </div>

            <div className="selections">
              {/* <div className="selection">
                <label htmlFor="color">Color</label>
                <select id="color" name="color">
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Black">Black</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div> */}

              {/* <div className="selection">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min={1}
                  defaultValue={1}
                />
              </div> */}
            </div>
            <div className="price-submit">
              <div className="price">
                <h2 className="price-text">£{item.product_price}ᵏ</h2>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                className={isInCart ? "outlined" : "filled"}
                sx={{
                  width: "50ch",
                }}
                onClick={handelAddToCart}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
