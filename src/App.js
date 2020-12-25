import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Loading from "./components/Loading";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import { newsCategory } from "./news";
// import Lifecycle from "./lifecycle";

export class App extends Component {
  state = {
    news: [],
    category: newsCategory.technology,
    length: 0
  };
  changeCategory = (category) => {
    this.setState({
      category,
    });
  };
  componentDidMount() {
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          news: res.data.articles,
          length:res.data.articles.length
        });
        console.log(this.state.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`;
      axios
        .get(url)
        .then((res) => {
          this.setState({
            news: res.data.articles,
            length:res.data.articles.length
          });
          console.log(this.state.length);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  render() {
    return (
      <div className="container-md">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            {/* <Lifecycle count={100}/> */}
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
              
            />
            <div className="d-flex">
              <p className="text-black-50">About {this.state.length} Result Found</p>
              <p className="text-black-50 ms-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
