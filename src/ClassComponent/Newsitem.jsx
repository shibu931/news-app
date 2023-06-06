import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    return (
    <>  
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">  
            <div className="card"  >
              <img src={this.props.pic} style={{height:"150px"}} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{height:"100px"}}>{this.props.title.slice(0,50)+"..."}</h5>
                <hr />
                <p className="card-text">
                  {this.props.description.slice(0,200)+"..."}
                </p>
                <a target="_blank" href={this.props.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
        </div>
    </>
    )
  }
}
