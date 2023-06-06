import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""
    }
  }
  changeLanguage = (data)=>{
    this.setState({language:data})
  }
  changeSearch=(data)=>{
    this.setState({search:data})
  }
  render() {
    return (
        <>
          <BrowserRouter>
            <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
              <Routes>
                <Route path='/' element={<Home search={this.state.search} language={this.state.language} q='All'/>} />
                <Route path='/all' element={<Home search={this.state.search} language={this.state.language} q='All'/>} />
                <Route path='/Education' element={<Home search={this.state.search} language={this.state.language} q='Education'/>} />
                <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q='Technology'/>} />
                <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q='Science'/>} />
                <Route path='/Entertainment' element={<Home search={this.state.search} language={this.state.language} q='Entertainment'/>} />
                <Route path='/Business' element={<Home search={this.state.search} language={this.state.language} q='Business'/>} />
                <Route path='/World' element={<Home search={this.state.search} language={this.state.language} q='World'/>} />
                <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q='Cricket'/>} />
                <Route path='/Covid-19' element={<Home search={this.state.search} language={this.state.language} q='Covid-19'/>} />
                <Route path='/Jokes' element={<Home search={this.state.search} language={this.state.language} q='Jokes'/>} />
                <Route path='/Sports' element={<Home search={this.state.search} language={this.state.language} q='Sports'/>} />
                <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q='Politics'/>} />
              </Routes>
            <Footer/>  
          </BrowserRouter>
        </>
    )
  }
}
