import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
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
          <h3>Photo By: {author}</h3>
          <h4>Taken At: {dateTaken}</h4> 
          <h4>Tags: {tags}</h4>
          <h4>Photo Link: <a href={photoLink}>{photoLink}</a></h4>
          <Link to="/">
            <button className="back-button" style={{ width: 300, marginBottom: 30 }} alt="">Back to main page</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tag: state.app.tag,
  };
};

export default connect(mapStateToProps)(PhotoDetails);