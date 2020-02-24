import React, { Component } from 'react';
import { Link } from '@reach/router';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.changeFontStyle = this.changeFontStyle.bind(this);
    this.state={
      photoContainer: { 
        position: "relative", width: "14%", padding: 10, paddingBottom: 30, marginRight: "2%", marginBottom: "3%", height: 120, backgroundColor: "white", borderRadius: 5 
      },
      photoContainerFocused: { 
        position: "relative", width: "14%", padding: 10, paddingBottom: 30, marginRight: "2%", marginBottom: "3%", height: 120, backgroundColor: "white", borderRadius: 5, boxShadow: "0px 3px 3px 3px rgba(128,128,128,0.6) "
      },
      photoDescriptionHide: {
        opacity: 0,
        textAlign: "left",
        position: "absolute",
        bottom: 5,
      },
      photoDescriptionShow: {
        opacity: 1,
        textAlign: "left",
        position: "absolute",
        bottom: 5,
      },
      photoDetailsHide: {
        zIndex: 101, 
        fontSize: 11,
        position: "absolute",
        top: 10, 
        right: 10,
        opacity: 0,
      },
      photoDetailsShow: {
        zIndex: 101, 
        fontSize: 11,
        position: "absolute", 
        top: 10, 
        right: 10,
      },
      show: false
    };
  }
  changeFontStyle() {
    this.setState({
      show: !this.state.show
    });
  };

  render () {
    const { index, author, dateTaken, tags, photoLink, thumbnailPhotoLink } = this.props;
    const replacedLink = thumbnailPhotoLink.replace("m.jpg", "t.jpg");
    return (
      <div className="photo-container" onMouseEnter={this.changeFontStyle} onMouseLeave={this.changeFontStyle} style={this.state.show ? this.state.photoContainerFocused : this.state.photoContainer}>
      <Link to={`details/${index}`} state={{ photo: thumbnailPhotoLink, author, tags, photoLink, dateTaken }}>
        <div style={{ textAlign: 'center', alignItems: "center", height: "80%" }}>
          <img style={{ zIndex: 100, verticalAlign: 'middle' }} src={replacedLink} alt="" />
        </div>
        <div id="photo-description" style={this.state.show ? this.state.photoDescriptionShow : this.state.photoDescriptionHide }>
            <div className="photo-date-taken" style={{ zIndex: 101, fontSize: 9, fontWeight: 200, color: "black" }}>{dateTaken}</div>
            <div className="photo-author" style={{ zIndex: 101, fontSize: 9, fontWeight: 200, color: "black", marginBottom: 3 }}>By: {author}</div>
        </div>
        <div>
            <div className="photo-details" style={this.state.show ? this.state.photoDetailsShow : this.state.photoDetailsHide}>more</div>
        </div>
      </Link>
      </div>
    );
  }
  
};

export default Photo;