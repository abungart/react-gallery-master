import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryItems: [],
  };

  componentDidMount() {
    console.log("Component Mounted");
    this.getGallery();
  }

  // API CALLS

  getGallery() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("galleryList:", response);

        this.setState({ galleryItems: [...response.data] });
      })
      .catch((err) => {
        alert("There was an error getting gallery");
      });
  } // end getGallery Function

  // RENDER

  updateLike = (id) => (event) => {
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => console.warn(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />

        <GalleryList
          galleryList={this.state.galleryItems}
          updateLike={this.updateLike}
        />
      </div>
    );
  } // end render Function
}

export default App;
