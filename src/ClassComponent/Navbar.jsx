import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state={
      search:""
    }
  }
  getData(e){
      this.setState({search:e.target.value})
  }
  postData(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:""})
  }
  render() {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-magenta ">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" onClick={(e)=>{this.props.changeSearch("")}} to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light active" aria-current="page" onClick={(e)=>{this.props.changeSearch("")}} to="all">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" onClick={(e)=>{this.props.changeSearch("")}} to="Politics">Politics</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-light" onClick={(e)=>{this.props.changeSearch("")}} to="Education">Education</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-light" onClick={(e)=>{this.props.changeSearch("")}} to="Technology">Technology</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-light" onClick={(e)=>{this.props.changeSearch("")}} to="Science">Science</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link text-light dropdown-toggle" onClick={(e)=>{this.props.changeSearch("")}} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="Business">Business</Link></li>
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="World">World</Link></li>
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="Circket">Cricket</Link></li>
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="Sports">Sports</Link></li>
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="Covid-19">Covid-19</Link></li>
            <li><Link className="dropdown-item" onClick={(e)=>{this.props.changeSearch("")}} to="Jokes">Jokes</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link text-light dropdown-toggle" onClick={(e)=>{this.props.changeSearch("")}} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </Link>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={()=>this.props.changeLanguage("hi")}>Hindi</button></li>
             <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("en")}>English</button></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
        <input className="form-control me-2" value={this.state.search} type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.getData(e)}/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
  }
}
