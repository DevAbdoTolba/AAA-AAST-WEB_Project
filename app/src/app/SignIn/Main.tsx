"use client";

import React from "react";
import "./style.css";
import Link from "next/link";
export default function Main() {

  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(data);
  
    fetch(`http://localhost:3000/api/client/login?email=${data.email}&password=${data.password}`).then(data => data.json()).then(res=> {
      console.log(res);
      if(res.status === 200) {
        localStorage.setItem("token", res.data.user_token)
        localStorage.setItem("firstname", JSON.stringify(res.data.user_firstname))
        localStorage.setItem("balance", res.data.user_balance)
        window.location.href = "/"
      }
    })
  }
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
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap: "2ch" }}>
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
      </main>
    </>
  );
}
