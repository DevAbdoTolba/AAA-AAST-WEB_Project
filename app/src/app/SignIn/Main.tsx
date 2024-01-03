"use client";

import React from "react";
import "./style.css";
import Link from "next/link";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
export default function Main() {
  const [open, setOpen] = React.useState(false);

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    // check if any field is empty using get elemnt by id
    const emailTag = document.getElementById("email") as HTMLInputElement;
    const passwordTag = document.getElementById("password") as HTMLInputElement;
    if (emailTag.value == "" || passwordTag.value == "") {
      setMessage("Please fill all fields");
      setOpen(true);
      return;
    }

    fetch(
      `http://localhost:3000/api/client/login?email=${data.email}&password=${data.password}`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.user_token);
          localStorage.setItem(
            "firstname",
            JSON.stringify(res.data.user_firstname)
          );
          localStorage.setItem("balance", res.data.user_balance);
          window.location.href = "/";
        } else {
          setMessage(res.message);
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.message);
        setOpen(true);
      });
  };
  return (
    <>
      <main>
        <div className="box1">
          <form onSubmit={handleSubmit}>
            <div>
              <h2 style={{ color: "#7c70a4" }}>Sign In</h2>
              <p>&nbsp;</p>
            </div>
            <div className="form">
              <div className="in">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div >
                <div className="in">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: "2ch",
                }}
              >
                <input
                  type="submit"
                  value={"Sign In"}
                  style={{
                    backgroundColor: "#281667",
                    color: "white",
                    padding: "10px 30px",
                  }}
                />
                <div className="signUp">
                  <p>
                    Don&#39;t have an account?{" "}
                    <Link href="./SignUp">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
          {/* don't have an account ? sign up */}
        </div>
        <div className="box2">
          <img
            src="/images/signin.png"
            alt="modern looking lamp, chair, and a table"
          />
        </div>
        <Snackbar open={open} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}
