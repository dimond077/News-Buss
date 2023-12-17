import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, source } =
      this.props;
    return (
      <>
        <div className="my-3" >
          <div className="card" >
            <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1", color : "White", backgroundColor : "black"}}>
              {source}
            </span>
            <img
              src={
                !imgurl
                  ? "https://www.livemint.com/lm-img/img/2023/08/31/600x338/gg_1668573752178_1693456961172.png"
                  : imgurl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {!title ? "Garena Free Fire Max redeem co.." : title}..
              </h5>
              <p className="card-text">
                {!description
                  ? "Garena Free Fire Max redeem codes offer in-game items like weapons, diamonds, and skins...."
                  : description}
                ...
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {" "}
                  By {!author ? "unknown" : author} on{" "}
                  {new Date(date).toUTCString()}
                </small>
              </p>
              <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
