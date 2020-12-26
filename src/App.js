import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import News, { newsCategory } from "./news";
// import Lifecycle from "./lifecycle";

const news = new News(newsCategory.technology);

export class App extends Component {
  state = {
    data: {},
    isLoading: true,
  };

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Somthing Went Wrong");
        this.setState({ isLoading: false });
      });
  }
  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
      .then(data => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Somthing Wen Worng");
        this.setState({
          isLoading: false,
        });
      });
  };
  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
      .then(data => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Somthing Wen Worng");
        this.setState({
          isLoading: false,
        });
      });
  };
  hanglePageChange = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value),
      },
    });
  };

  goToPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Somthing Wen Worng");
        this.setState({
          isLoading: false,
        });
      });
  };

  changeCategory = category=> {
    this.setState({
      isLoading: true,
    });
    news
      .changeCategory(category)
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Somthing Went Worng");
        this.setState({
          isLoading: false,
        });
      });
  };
search = searchTerm => {
    this.setState({
      isLoading: true,
    });
    news
      .search(searchTerm)
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Somthing Went Worng");
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const {
      articles,
      isPrevious,
      isNext,
      category,
      totalResults,
      currentPage,
      totalPage,
    } = this.state.data;
    return (
      <div className="container-md">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            {/* <Lifecycle count={100}/> */}
            <Header category={category} changeCategory={this.changeCategory} search={this.search} />
            <div className="d-flex">
              <p className="text-black-50">About {totalResults} Result Found</p>
              <p className="text-black-50 ms-auto">
                {currentPage} page of {totalPage}
              </p>
            </div>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                <NewsList news={articles} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isPrevious={isPrevious}
                  isNext={isNext}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  hanglePageChange={this.hanglePageChange}
                  goToPage={this.goToPage}
                />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
