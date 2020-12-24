import React, { Component } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import { newsCategory } from "./news";

const fakeNews = [
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "published date and time",
    source: {
      name: "CNN",
    },
  },
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "published date and time",
    source: {
      name: "CNN",
    },
  },
];

export class App extends Component {
  render() {
    return (
      <div className="container-md">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <div className="d-flex">
              <p className="text-black-50">About {0} Result Found</p>
              <p className="text-black-50 ms-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={fakeNews} />
            <Pagination />
            <Loading/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
