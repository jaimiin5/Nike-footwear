import React from "react";

function MainSection() {
  return (
    <div className="container">
      <main className="content-layout">
        <div className="nike-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="shop-btn">
            <button>shop now</button>
            <button>category</button>
          </div>
          <div className="shops">
            <img src="/images/flipkart.png" />
            <img src="/images/amazon.png" />
            <p>Available on</p>
          </div>
        </div>

        <div className="nike-image">
          <img src="/images/shoe_image.png" alt="nike" />
        </div>
      </main>
    </div>
  );
}

export default MainSection;
