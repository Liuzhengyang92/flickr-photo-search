import React, { Component } from 'react';
import { Link } from '@reach/router';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state={
      plainStyle: {
        position: "absolute", bottom: 8, left: 16, zIndex: 101, fontSize: 5, fontWeight: 100, opacity: 0
      },
      showStyle: {
        position: "absolute", bottom: 8, left: 16, zIndex: 101, fontSize: 5, fontWeight: 100, opacity: 1
      },
      boxPlainStyle: { 
        position: "relative", width: "14%", padding: 10, paddingBottom: 30, marginRight: "2%", marginBottom: "3%", height: 120, backgroundColor: "white", borderRadius: 5 
      },
      boxShowStyle: { 
        position: "relative", width: "14%", padding: 10, paddingBottom: 30, marginRight: "2%", marginBottom: "3%", height: 120, backgroundColor: "white", borderRadius: 5, boxShadow: "0px 3px 3px 3px rgba(128,128,128,0.6) "
      },
      noOpacity: {
        opacity: 0,
        textAlign: "left",
        position: "absolute",
        bottom: 5,
      },
      hasOpacity: {
        opacity: 1,
        textAlign: "left",
        position: "absolute",
        bottom: 5,
      },
      show: false
    };
  }
  changeFontStyle = (e) => {
    this.setState({
      show: !this.state.show
    });
  };

  render () {
    const { index, author, dateTaken, tags, photoLink, thumbnailPhotoLink } = this.props;
    const replacedLink = thumbnailPhotoLink.replace("m.jpg", "t.jpg");
    return (
      <div className="photo-container" onMouseEnter={this.changeFontStyle} onMouseLeave={this.changeFontStyle} style={this.state.show ? this.state.boxShowStyle : this.state.boxPlainStyle}>
      {/* <a href={photoLink}> */}
      <Link to={`details/${index}`} state={{ photo: thumbnailPhotoLink, author, tags, photoLink, dateTaken }}>
        <div style={{ textAlign: 'center', alignItems: "center", height: "80%" }}>
          <img style={{ zIndex: 100, verticalAlign: 'middle' }} src={replacedLink} alt="" />
        </div>
        <div id="photo-description" style={this.state.show ? this.state.hasOpacity : this.state.noOpacity }>
          {/* <div className="photo-bottom-right" style={{ position: "absolute", bottom: 25, left: 6, zIndex: 101, fontSize: 6, fontWeight: 200, color: "black" }}>Author: {author}</div>
          <div className="photo-tags" style={{ position: "absolute", bottom: 15, left: 6, zIndex: 101, fontSize: 6, fontWeight: 200, color: "black" }}>Tags:{tags}</div>
          <div className="photo-bottom-left" style={{ position: "absolute", bottom: 5, left: 6, zIndex: 101, fontSize: 6, fontWeight: 200, color: "black" }}>{dateTaken}</div> */}
            <div className="photo-author" style={{ zIndex: 101, fontSize: 8, fontWeight: 200, color: "black", marginBottom: 3 }}>Author: {author}</div>
            {/* <div className="photo-tags" style={{ zIndex: 101, fontSize: 8, fontWeight: 200, color: "black", marginBottom: 3 }}>Tags: {tags}</div> */}
            {/* <a className="photo-link" style={{ zIndex: 101, fontSize: 8, fontWeight: 200, color: "black", marginBottom: 3 }} href={photoLink}>{photoLink}</a> */}
            <div className="photo-date-taken" style={{ zIndex: 101, fontSize: 8, fontWeight: 200, color: "black" }}>Date Taken: {dateTaken}</div>
        </div>
        {/* </a> */}
      </Link>
      </div>
    );
  }
  
};

export default Photo;

// style = {{ position: "relative", width: 100, padding: 10, paddingBottom: 30, margin: 10, backgroundColor: "#E2E1DC" }}