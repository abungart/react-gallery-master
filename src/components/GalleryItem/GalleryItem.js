import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    clicked: false,
  };

  render() {
    console.log("GalleryItem", this.props.item.path);

    let galleryOut = (
      <div
        className="gallery-container"
        onClick={() => {
          this.setState({ clicked: true });
          console.log("in Clicked", this.state.clicked);
        }}
      >
        <img
          src={this.props.item.path}
          className="img-container"
          width="250px"
          height="300px"
        />
        <h3>Likes: {this.props.item.likes}</h3>
      </div>
    );

    if (this.state.clicked === true) {
      galleryOut = (
        <div
          className="gallery-container"
          onClick={() => {
            this.setState({ clicked: false });
          }}
        >
          <p>{this.props.item.description}</p>
          <button onClick={this.props.updateLike(this.props.item.id)}>
            Like
          </button>
        </div>
      );
    }

    return galleryOut;
  }
}

export default GalleryItem;
