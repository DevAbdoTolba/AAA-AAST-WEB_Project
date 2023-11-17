import React from "react";
import "./style.css";

export default function Main() {
  return (
    <>
      <div className="container__1">
        <div className="product-image">
          <div className="main-image">
            <img
              src="/images/chair.png"
              alt="White Wooden Chair"
              id="main-image"
            />
          </div>
          <div className="thumbnail-images">
            <div className="thum1">
              <img
                src="/images/coach.png"
                alt="Blue big coach"
                className="thumbnail"
              />
            </div>
            <div className="thum1">
              <img
                src="/images/lambs.png"
                alt="two roof Lambs"
                className="thumbnail"
              />
            </div>
            <div className="thum1">
              <img
                src="/images/table.png"
                alt="small wooden table"
                className="thumbnail"
              />
            </div>
          </div>
        </div>
        <div className="product-features">
          <h1 className="product-text">White Wooden Chair</h1>
          <div className="stock-text">
            <h2>In Stock</h2>
            <h2>SKU: 639511</h2>
          </div>
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">☆</span>
          </div>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            distinctio fugit. Animi dolor temporibus cum, quidem voluptas quos
            veritatis beatae mollitia, rerum eum sit nobis corporis impedit,
            quibusdam illo ipsa?
          </p>
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
            <div className="selection">
              <label htmlFor="color">Color</label>
              <select id="color" name="color">
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
              </select>
            </div>
            <div className="selection">
              <label htmlFor="size">Select Size:</label>
              <select id="size" name="size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra-Large">Extra Large</option>
              </select>
            </div>
            <div className="selection">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={1}
                defaultValue={1}
              />
            </div>
          </div>
          <div className="price-submit">
            <div className="price">
              <p className="price-text">$259</p>
            </div>
            <button type="submit" className="add-button">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
