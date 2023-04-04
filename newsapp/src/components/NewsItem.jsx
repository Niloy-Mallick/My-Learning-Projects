import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt } =
      this.props;
    return (
      <div
        className="card mx-md-auto my-md-2 mx-sm-auto my-sm-2"
        style={{ width: "16rem", height: "26.5rem" }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt="News"
          style={{ height: "10rem", width: "inherit" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontSize: "1rem", fontWeight: "bolder" }}
          >
            {title}
          </h5>
          <p className="card-text">
            <span className="text-muted" style={{ fontSize: "0.8rem" }}>
              By <strong>{author ? author : "Anonymous"}</strong> on{" "}
              {new Date(publishedAt).toGMTString()}
            </span>
          </p>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>
            {description}
          </p>
          <a
            href={newsUrl}
            className="btn btn-sm btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
