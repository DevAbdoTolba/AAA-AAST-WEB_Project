import React from "react";
import "./style.css";
export default function main() {
  return (
    <>
      <main>
        <div className="box1">
          <form>
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
                  />
                </div>
                <div className="in">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    id="lname"
                    type="text"
                    name="lname"
                    placeholder="last name"
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
                />
              </div>
              <div className="twoInRow">
                <div className="in">
                  <label htmlFor="Password">Password</label>
                  <input
                    id="Password"
                    type="text"
                    name="Password"
                    placeholder="Password"
                  />
                </div>
                <div className="in">
                  <label htmlFor="confirm Password">Confirm Password</label>
                  <input
                    id="confirm Password"
                    type="text"
                    name="confirm Password"
                    placeholder="confirm Password"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="gender">
                  <input
                    className="radio"
                    type="radio"
                    id="male"
                    name="gender"
                    defaultValue="Male"
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    className="radio"
                    type="radio"
                    id="female"
                    name="gender"
                    defaultValue="Female"
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
