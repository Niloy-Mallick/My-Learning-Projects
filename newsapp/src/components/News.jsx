import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import * as key from "../apiKey/apiKey.json";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    query: "",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    query: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: {},
      loading: true,
      page: 1,
      country: "in",
      apiKey: key,
      totalResults: 0,
      articlesLength: 0,
    };
  }

  componentDidMount = async () => {
    this.props.query.length === 0
      ? this.fetchTopHeadlines(this.state.page)
      : this.fetchTopHeadlinesQueried(this.state.page);
  };

  fetchTopHeadlinesQueried = async (pageNumber) => {
    let url, data, parsedData;
    console.log("fetchTopHeadlinesQueried called");
    if (typeof pageNumber === "number" && pageNumber > 0) {
      url = `https://newsapi.org/v2/everything?q=${this.props.query.replaceAll(
        " ",
        "+"
      )}&page=${pageNumber}&pageSize=${this.props.pageSize}&apiKey=${
        this.state.apiKey.apiKey
      }`;
      data = await fetch(url);
      parsedData = await data.json();
      // console.log(parsedData);
    }
    if (parsedData.status === "ok")
      this.setState({
        ...this.state,
        articles: parsedData,
        loading: false,
        totalResults: parsedData.totalResults,
      });
  };

  fetchTopHeadlines = async (pageNumber) => {
    let url, data, parsedData;
    console.log("fetchTopHeadlines called");
    if (typeof pageNumber === "number" && pageNumber > 0) {
      url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&page=${pageNumber}&pageSize=${this.props.pageSize}&apiKey=${this.state.apiKey.apiKey}`; //`asjhaksfjhafjk`
      data = await fetch(url);
      parsedData = await data.json();
      console.log(parsedData);
    }
    if (parsedData.status === "ok")
      this.setState({
        ...this.state,
        articles: parsedData.articles,
        loading: false,
        totalResults: parsedData.totalResults,
        articlesLength: parsedData.articles.length,
      });
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.props.query.length === 0
        ? this.fetchTopHeadlines(this.state.page - 1)
        : this.fetchTopHeadlinesQueried(this.state.page - 1);
      // this.fetchTopHeadlines(this.state.page - 1);
      this.setState({ ...this.state, page: this.state.page - 1 });
    }
  };

  handleNextClick = async () => {
    if (
      this.state.page !==
      Math.ceil(this.state.articles.totalResults / this.props.pageSize)
    ) {
      this.props.query.length === 0
        ? this.fetchTopHeadlines(this.state.page + 1)
        : this.fetchTopHeadlinesQueried(this.state.page + 1);
      // this.fetchTopHeadlines(this.state.page + 1);
      this.setState({ ...this.state, page: this.state.page + 1 });
    }
  };

  fetchMoreData = async () => {
    let url, data, parsedData;
    console.log("fetchMoreData called");
    this.setState({ ...this.state, page: this.state.page + 1 });
    url = `https://newsapi.org/v2/top-headlines?country=${
      this.state.country
    }&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }&apiKey=${this.state.apiKey.apiKey}`; //`asjhaksfjhafjk`
    data = await fetch(url);
    parsedData = await data.json();
    console.log(parsedData);

    if (parsedData.status === "ok")
      this.setState({
        ...this.state,
        articles: [...new Set(this.state.articles.concat(parsedData.articles))],
        totalResults: parsedData.totalResults,
        articlesLength: this.state.articles.length + parsedData.articles.length,
      });
    // console.log(this.state.articles.concat(parsedData.articles));
  };

  render() {
    return (
      <div className="container my-md-3 my-sm-1 my-xs-1">
        <h1 className="my-4 text-center">Top Headlines</h1>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.articlesLength}
          next={this.fetchMoreData}
          hasMore={
            this.state.articlesLength < this.state.totalResults ? true : false
          }
          loader={<Loader />}
          style={{ overflow: "none" }}
        >
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-3 my-md-2 col-sm-6 mx-auto"
                    key={element.title}
                  >
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 50) + "..." : ""
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 60) + "..."
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
/*
{
   {!this.state.loading && (
  <div
    className="container d-flex justify-content-between my-5"
    hidden={
      this.state.articles.totalResults / this.state.pageSize === 1
        ? true
        : false
    }
    id="pagination"
  >
    <button
      type="button"
      className="btn btn-secondary"
      disabled={this.state.page <= 1 ? true : false}
      onClick={this.handlePrevClick}
    >
      &larr; Previous
    </button>
    <label htmlFor="pagination">
      <strong>Page: {this.state.page}</strong>
    </label>
    <button
      type="button"
      className="btn btn-secondary"
      disabled={
        this.state.page ===
        Math.ceil(
          this.state.articles.totalResults / this.props.pageSize
        )
          ? true
          : false
      }
      onClick={this.handleNextClick}
    >
      Next &rarr;
    </button>
  </div>
)} 
}
*/
