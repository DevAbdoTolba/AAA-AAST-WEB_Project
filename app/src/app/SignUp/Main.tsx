"use client";

import React from "react";
import "./style.css";
import Link from "next/link";
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

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fname, lname, email, password, country, city, date, gender } = data;

    fetch(
      `http://localhost:3000/api/client/addAccount?firstname=${fname}&lastname=${lname}&email=${email}&password=${password}&country=${country}&city=${city}&date=${date}&gender=${gender}`
    )
      .then((data) => data.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.href = "/SignIn";

  };

  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

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
                  id="email"
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={handelInputChange}
                />
              </div>
              <div className="twoInRow">
                <div className="in">
                  <label htmlFor="Password">Password</label>
                  <input
                    id="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handelInputChange}
                  />
                </div>
                <div className="in">
                  <label htmlFor="confirm Password">Confirm Password</label>
                  <input
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
                    className="radio"
                    type="radio"
                    id="male"
                    name="gender"
                    defaultValue="1"
                    onChange={handelInputChange}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    className="radio"
                    type="radio"
                    id="female"
                    name="gender"
                    defaultValue="0"
                    onChange={handelInputChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>

                <input
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
      </main>
    </>
  );
}
