import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Title from "./componets/Title";
import UploadForm from "./componets/UploadForm";
import ImageGrid from "./componets/ImageGrid";
import Modal from "./componets/Modal";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalImg: null
    };
  }

  setStatedImg = (link) => {
    this.setState({ ModalImg: link });
    console.log(link);
  };

  render() {
    return (
      // title and uploadForm component
      <div className="Gallery_App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={this.setStatedImg} />
        {this.state.ModalImg && (
          <Modal
            selectedImg={this.state.ModalImg}
            setSelectedImg={this.setStatedImg}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
