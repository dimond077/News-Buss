import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `News Buss - ${this.capitalize(this.props.category)}`;
  }

  async letestNews() {    
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let paresedData = await data.json();
    console.log(paresedData);
    this.setState({ loading: false });
    this.setState({
      articles: paresedData.articles,
      totalResults: paresedData.totalResults,
    });
  }

  async componentDidMount() {
    this.letestNews();
  }

  backPage = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.letestNews();
    });
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.letestNews();
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "35px" }}>
            News Buss- {this.capitalize(this.props.category)}
          </h1>
          {this.state.loading && <Loader />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.backPage}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 5)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextPage}
          >
            Next page &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
