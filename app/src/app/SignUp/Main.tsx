"use client";

import React, { useEffect } from "react";
import "./style.css";
import Link from "next/link";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
export default function Main() {
  const [data, setData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    country: "",
    city: "",
    date: "",
    gender: 0,
  });
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const emailTag = document.getElementById("email") as HTMLInputElement;
  const passwordTag = document.getElementById("password") as HTMLInputElement;
  const confirmPasswordTag = document.getElementById(
    "confirm Password"
  ) as HTMLInputElement;
  const fnameTag = document.getElementById("fname") as HTMLInputElement;
  const lnameTag = document.getElementById("lname") as HTMLInputElement;
  const countryTag = document.getElementById("Country") as HTMLInputElement;
  const cityTag = document.getElementById("City") as HTMLInputElement;
  const dateTag = document.getElementById("Date") as HTMLInputElement;
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fname, lname, email, password, country, city, date, gender } = data;

    if (
      emailTag.value == "" ||
      passwordTag.value == "" ||
      confirmPasswordTag.value == "" ||
      fnameTag.value == "" ||
      lnameTag.value == "" ||
      countryTag.value == "" ||
      cityTag.value == "" ||
      dateTag.value == ""
    ) {
      setMessage("Please fill all fields");
      setOpen(true);
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Password and confirm password are not the same");
      setOpen(true);
      return;
    }

    fetch(
      `http://localhost:3000/api/client/addAccount?firstname=${fname}&lastname=${lname}&email=${email}&password=${password}&country=${country}&city=${city}&date=${date}&gender=${gender}`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) window.location.href = "/SignIn";
        else {
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

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const emailTag = document.getElementById("email") as HTMLInputElement;
    const fnameTag = document.getElementById("fname") as HTMLInputElement;
    const lnameTag = document.getElementById("lname") as HTMLInputElement;
    const countryTag = document.getElementById("Country") as HTMLInputElement;
    const cityTag = document.getElementById("City") as HTMLInputElement;

    fnameTag.addEventListener("input", (e) => {
      // console.log(e.target.value);
      // detect if he clicked space
      if (e.target.value[e.target.value.length - 1] === " ") {
        e.target.value = e.target.value.slice(0, -1);
        setMessage("Spaces are not allowed");
        setOpen(true);
      }
      // e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
    });
    lnameTag.addEventListener("input", (e) => {
      // console.log(e.target.value);
      // detect if he clicked space
      if (e.target.value[e.target.value.length - 1] === " ") {
        e.target.value = e.target.value.slice(0, -1);
        setMessage("Spaces are not allowed");
        setOpen(true);
      }
      // e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
    });
    emailTag.addEventListener("input", (e) => {
      // console.log(e.target.value);
      // detect if he clicked space
      if (e.target.value[e.target.value.length - 1] === " ") {
        e.target.value = e.target.value.slice(0, -1);
        setMessage("Spaces are not allowed");
        setOpen(true);
      }
      // e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
    });
    countryTag.addEventListener("input", (e) => {
      // console.log(e.target.value);
      // detect if he clicked space
      if (e.target.value[e.target.value.length - 1] === " ") {
        e.target.value = e.target.value.slice(0, -1);
        setMessage("Spaces are not allowed");
        setOpen(true);
      }
      // e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
    });
    cityTag.addEventListener("input", (e) => {
      // console.log(e.target.value);
      // detect if he clicked space
      if (e.target.value[e.target.value.length - 1] === " ") {
        e.target.value = e.target.value.slice(0, -1);
        setMessage("Spaces are not allowed");
        setOpen(true);
      }
      // e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
    });

    return () => {
      fnameTag.removeEventListener("input", (e) => {
        e.preventDefault();
      });
    };
  }, []);
  return (
    <>
      <main>
        <div className="box1">
          <form onSubmit={handelSubmit}>
            <div>
              <h2 style={{ color: "#7c70a4" }}>Sign Up</h2>
              <p>Get in touch with cool customers!</p>
            </div>
            <div className="form">
              <div className="twoInRow">
                <div className="in">
                  <label htmlFor="fname">First Name</label>
                  <input
                    required
                    id="fname"
                    type="text"
                    name="fname"
                    placeholder="first name"
                    onChange={handelInputChange}
                  />
                </div>
                <div className="in">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    required
                    id="lname"
                    type="text"
                    name="lname"
                    placeholder="last name"
                    onChange={handelInputChange}
                  />
                </div>
              </div>
              <div className="in">
                <label htmlFor="email">Email</label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handelInputChange}
                />
              </div>
              <div className="twoInRow">
                <div className="in">
                  <label htmlFor="password">Password</label>
                  <input
                    required
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handelInputChange}
                  />
                </div>
                <div className="in">
                  <label htmlFor="confirm Password">Confirm Password</label>
                  <input
                    required
                    id="confirm Password"
                    type="password"
                    name="confirm Password"
                    placeholder="confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="twoInRow">
                <div className="in">
                  <label htmlFor="Country">Country</label>
                  <input
                    required
                    id="Country"
                    type="text"
                    name="country"
                    placeholder="Country"
                    onChange={handelInputChange}
                  />
                </div>
                <div className="in">
                  <label htmlFor="City">City</label>
                  <input
                    required
                    id="City"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handelInputChange}
                  />
                </div>
              </div>
              <div className="twoInRow">
                <div className="in">
                  <label htmlFor="Date">Date of birth</label>
                  <input
                    required
                    id="Date"
                    type="date"
                    name="date"
                    onChange={handelInputChange}
                  />
                </div>
                <div className="in"></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="gender">
                  <input
                    required
                    className="radio"
                    type="radio"
                    id="male"
                    name="gender"
                    value="1"
                    onChange={handelInputChange}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    required
                    className="radio"
                    type="radio"
                    id="female"
                    name="gender"
                    value="0"
                    onChange={handelInputChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>

                <input
                  required
                  type="submit"
                  style={{
                    backgroundColor: "#281667",
                    color: "white",
                    padding: "10px 30px",
                  }}
                />
              </div>
              <div className="SignIn">
                <p>
                  Already registered? <Link href="./SignIn">Sign In</Link>
                </p>
              </div>
            </div>
          </form>
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
