import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Title from "./componets/Title";
import UploadForm from "./componets/UploadForm";

class Layout extends React.Component {
  render() {
    return (
      // title and uploadForm component
      <div className="Gallery_App">
        <Title />
        <UploadForm />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
