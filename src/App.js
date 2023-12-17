import "./App.css";
import React, { Component } from "react";
import NavBar from "./componunt/NavBar";
import News from "./componunt/News";
import AboutUs from "./componunt/AboutUs";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./componunt/Footer";


export default class App extends Component {
  pagesize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    darkMode: false,
  };

  toggleDarkMode = () => {
    const { darkMode } = this.state;

    if (darkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      this.setState({ darkMode: false });
      // console.log("Light mode is successfully converted");
      document.title = "News Buss"; 
    } else {
      document.body.style.backgroundColor = "rgb(29 21 47)";
      document.body.style.color = "white";
      this.setState({ darkMode: true });
      // console.log("Dark mode is successfully converted");
      document.title = "News Buss - Dark Mode";
    }
  };

  render() {
    const { darkMode } = this.state;

    return (
      <>
        <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
              <Routes>
              <Route path="/componunt/AboutUs" element={<AboutUs />} />
                <Route exact path='/' element={<News key="genral" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="general" />} />
                <Route exact path='/business' element={<News key="business" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="business" />} />
                <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="entertainment" />} />
                <Route exact path='/general' element={<News key="general" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="general" />} />
                <Route exact path='/health' element={<News key="health" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="health" />} />
                <Route exact path='/science' element={<News key="science" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="science" />} />
                <Route exact path='/sports' element={<News key="sports" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="sports" />} />
                <Route exact path='/technology' element={<News key="technology" pageSize={this.pagesize} apiKey={this.apiKey} country='in' category="technology" />} />
            </Routes> 
            <Footer />
         </Router>
      </>
    );
  }
}
