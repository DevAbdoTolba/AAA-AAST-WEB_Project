import React from "react";
import "./style.css";

export default function main() {
  return (
    <>
      <title>Confirmation Page</title>
      <div className="main">
        <div className="star-div">
          <span className="star">★</span>
        </div>
        <div className="submission-div">
          <h3 className="submission-text">payment Succsessful!</h3>
        </div>
        {/* <div className="thumbnail-div">
          <img
            src="./images/ui-image-placeholder-wireframes-apps-260nw-1037719204.webp    "
            className="thumbnail-image"
            alt="thumbnail"
          />
          <img
            src="./images/ui-image-placeholder-wireframes-apps-260nw-1037719204.webp    "
            className="thumbnail-image"
            alt="thumbnail"
          />
        </div> */}
        <div className="text-term-div">
          <h5 className="txt-term">we hope we served you nicely</h5>
        </div>
      </div>
    </>
  );
}
