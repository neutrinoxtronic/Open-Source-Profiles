import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="item1 col-12 col-md-6 col-lg-4 col-sl-4 my-5  ">
        <div className="row Item-inside">
          <div className="col-12 col-md-12 col-lg-4 img-div">
            <img src={props.image} className=" img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div className=" main-title pt-4 pb-3">
              <h1>{props.name}</h1>
              <h4>{props.description}</h4>
            </div>

            <div className="menu-price-book">
              <div className="price-book-divide d-flex justify-content-between">
              
                <a href={props.github}>
                  <button className="btn btn-dark">Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
