import News from "./News";
import Sidenews from "./Sidenews";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "source=bbc-news",
      },
      news2: {
        type: "everything",
        query: "apple",
      },
      news3: {
        type: "everything",
        query: "tesla",
      },
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper red darken-2">
              <a href="/" className="brand-logo center">
                News App
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
