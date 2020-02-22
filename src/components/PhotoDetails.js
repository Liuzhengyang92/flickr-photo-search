import React, { Component } from 'react';
import './PhotoDetails.css';

class PhotoDetails extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { photo, author, tags, dateTaken, photoLink } = this.props.location.state;
    const replacedPhotoLink = photo.replace("m.jpg", "c.jpg");
    console.log(replacedPhotoLink);
  }
  render() {
    const { photo, author, tags, dateTaken, photoLink } = this.props.location.state;
    console.log("author is: ", author);
    const replacedPhotoLink = photo.replace("m.jpg", "c.jpg");
    console.log(replacedPhotoLink);
    return (
      <div className="photo-details-container">
        <div className="photo-frame">
          <img src={replacedPhotoLink} alt="" />
        </div>
        <div className="photo-description">
          <h1>Photo By: {author}</h1>
          <h3>Taken At: {dateTaken}</h3> 
          <h3>Tags: {tags}</h3>
          <h3>Photo Link: <a href={photoLink}>{photoLink}</a></h3>
        </div>
      </div>
    );
  }
}

export default PhotoDetails;