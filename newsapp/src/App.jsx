// import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "../src/App.css";

export default class App extends Component {
  constructor() {
    super();
    this.newsCategories = [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ];
    this.searchQuery = "";
  }
  // newsCategories = [
  //   "business",
  //   "entertainment",
  //   "general",
  //   "health",
  //   "science",
  //   "sports",
  //   "technology",
  // ];
  // searchQuery = "";

  setSearchQuery = (query) => {
    query.length() > 0 ? (this.searchQuery = query) : (this.searchQuery = "");
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path={`/`}
              element={<News category={`general`} query={""} />}
            />
            {this.newsCategories.map((category) => {
              return (
                <Route
                  exact
                  key={`${category}`}
                  path={`/${category}`}
                  element={
                    <News
                      key={`${category}`}
                      category={`${category}`}
                      query={""}
                    />
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    );
  }
}
