import React, { Component } from "react";

class GalleryItem extends Component {
  render() {
    console.log("GalleryItem", this.props.item.path);
    // let clicked = false;
    let galleryOut = (
      <div className="gallery-container">
        <img
          src={this.props.item.path}
          className="img-container"
          width="250px"
          height="300px"
        />
        <h3>Likes: {this.props.item.likes}</h3>
      </div>
    );

    // if (clicked === true) {
    //   galleryOut = (
    //     <div className="gallery-container">
    //       <p>{this.props.item.description}</p>
    //       <button onClick={this.props.updateLike(this.props.item.id)}>
    //         Like
    //       </button>
    //     </div>
    //   );
    // }

    return galleryOut;
  }
}

export default GalleryItem;
