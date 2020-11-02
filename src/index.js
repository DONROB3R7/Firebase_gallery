import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Title from "./componets/Title";

class Layout extends React.Component {
  render() {
    return (
      <div className="Gallery_App">
        <Title />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
