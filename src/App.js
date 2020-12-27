import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import RefTest from "./components/RefTest";
import News, { newsCategory } from "./news";
// import Lifecycle from "./lifecycle";

const news = new News(newsCategory.technology);

export class App extends Component {
  state = {
    data: {},
    isLoading: true,
  };
  aboutResult = React.createRef();
  jumbotronRef = React.createRef();
  searchRef = React.createRef();
  cbRef = null;
  itemRefList = [];
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
    //Using Ref
    // console.dir(this.aboutResult.current);
    // console.log(this.searchRef);
    this.searchRef.current.focus();
    // console.log(this.cbRef);
    console.log(this.itemRefList);
  }
  // componentDidUpdate(){
  //   console.dir(this.jumbotronRef);
  // }
  gotToTop = () => {
    window.scroll(0, this.aboutResult.current.scrollTop);
  };
  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
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
  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
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

  changeCategory = (category) => {
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
  search = (searchTerm) => {
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
            <Header
              ref={this.searchRef}
              category={category}
              changeCategory={this.changeCategory}
              search={this.search}
            />
            <div ref={this.aboutResult} className="d-flex">
              <p ref={(el) => (this.cbRef = el)} className="text-black-50">
                About {totalResults} Result Found
              </p>
              <p className="text-black-50 ms-auto">
                {currentPage} page of {totalPage}
              </p>
            </div>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                <NewsList ref={this.itemRefList} news={articles} />
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
                <button
                  className="btn btn-secondary my-5"
                  onClick={this.gotToTop}
                >
                  Go To Top
                </button>
              </Fragment>
            )}
            <RefTest ref={this.jumbotronRef} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
