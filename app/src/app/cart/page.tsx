"use client";
import React from "react";
import { lazy, Suspense } from "react";
import "./style.css";

// import Succsessful from "./paymentSuccsessful/main";
import Button from "@mui/material/Button";
import CartCard from "./cartCard";
import { Box, Typography } from "@mui/material";

const Succsessful = lazy(() => import("./paymentSuccsessful/main"));

export default function Page() {
  const [succsessful, setSuccsessful] = React.useState(false);
  const token = localStorage.getItem("token");
  const [cart, setCart] = React.useState([
    {
      product_id: "",
      product_name: "",
      product_image: "",
      product_state: "",
      product_description: "",
      product_price: 0,
      inCart: true,
      favorite: false,
    },
  ]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [noData, setNoData] = React.useState(true);
  if (!token) {
    window.location.href = "/SignIn";
  }
  React.useEffect(() => {
    fetch("http://localhost:3000/api/client/cart?token=" + token)
      .then((data) => data.json())
      .then((res) => {
        console.log("🚀 ~ file: page.tsx:37 ~ .then ~ status:", res.status);
        if (res.status === "404") {
          setNoData(false);
        }

        setCart(res.data);

        setTotalPrice(
          res.data.reduce((acc, item) => acc + parseInt(item.product_price), 0)
        );

        setLoading(false);
      });
  }, [token]);

  // const handelAddToCart = (id: string, index: number) => {
  //   const token = localStorage.getItem("token");
  //   if (token?.length > 0) {
  //     fetch("/api/shop/cart?token=" + token + "&id=" + id)
  //       .then((data) => {
  //         return data.json();
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setIsInCart(
  //           res.data.map((item) => {
  //             return true;
  //           })
  //         );
  //       });
  //   } else {
  //     alert("Please login to add to cart");
  //   }
  // };

  return (
    <>
      {noData ? (
        <>
          {!loading && (
            <>
              <h1>Your Cart</h1>
              <div className="Box">
                {cart.map((item, index) => (
                  <CartCard
                    key={index}
                    name={item.product_name}
                    id={item.product_id}
                    favorite={item.favorite}
                    image={item.product_image}
                    state={item.product_state}
                    description={item.product_description}
                    price={item.product_price}
                    inCart={item.inCart}
                  />
                ))}

                <h2
                  style={{
                    marginLeft: "4ch",
                  }}
                >
                  Total Price: £{totalPrice} ᵏ
                </h2>

                <Button
                  sx={{
                    width: "25ch",
                    margin: " 2ch auto",
                  }}
                  className="filled"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    // import Succsessful from "./paymentSuccsessful/main"; lazy import

                    setSuccsessful(true);
                  }}
                >
                  <p>Checkout</p>
                </Button>
              </div>
              {succsessful && (
                <Suspense fallback={<></>}>
                  <Succsessful />
                </Suspense>
              )}
            </>
          )}
        </>
      ) : (
        <Box
          sx={{
            marginTop: "10vh",
            height: "50vh",
          }}
        >
          <Typography variant="h2" align="center">
            No items in cart
          </Typography>
          <Typography variant="h4" align="center">
            Please go to the <a href="/products">products</a> page to add items
            to your cart
          </Typography>
        </Box>
      )}
    </>
  );
}
