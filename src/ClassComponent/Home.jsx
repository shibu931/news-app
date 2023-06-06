import React, { Component } from "react";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  async getApiData() {
    var request =""
    console.log(this.props.search)
    console.log(this.props.q)
    if(this.props.search==="")
      request = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=20&language=${this.props.language}&sortBy=publishedAt&apiKey=93b7a952ae0c462390338b7e15d3ce8e`);
    else
      request = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&pageSize=20&language=${this.props.language}&sortBy=publishedAt&apiKey=93b7a952ae0c462390338b7e15d3ce8e`);
    var result = await request.json();
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
    });
    console.log(result);
  }
  fetchMoreData = async () => {
    var request = ""
    this.setState({ page: this.state.page + 1 })
    if (this.props.search === "")
        request = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=20&language=${this.props.language}&sortBy=publishedAt&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
    else
        request = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=20&language=${this.props.language}&sortBy=publishedAt&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
    var result = await request.json()
    this.setState({articles:this.state.articles.concat(result.articles)})
}
  componentDidMount() {
    this.getApiData();
  }
  componentDidUpdate(old){
    if(this.props.q!==old.q || this.props.language!==old.language || this.props.search!==old.search){
      this.getApiData()
    }
  }
  render() {
    return (
      <>
        <div className="container-fluid mt-2">
          <h1 className="text-center">News Section</h1> 
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<h4>Loading..</h4>}
          >
          <div className="row">
          {this.state.articles.map((item,index) => {
            return <Newsitem key={index} title={item.title} description={item.description} source={item.source.name} pic={item.urlToImage} url={item.url} date={item.publishedAt}/>
          })}
          </div>
          </InfiniteScroll>
        </div> 
      </>
    );
  }
}
