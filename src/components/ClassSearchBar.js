import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Photos from '../components/Photos';
import $ from 'jquery';
import * as actionTypes from '../redux/actionTypes';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      tag: "",
    };
  }

  changeTag = (e) => {
    this.props.changeSearchTag(e.target.value);
  }

  updatePhotos = (e) => {
    this.setState({
      photos: e
    });
  }

  componentDidMount() {
    const flickrApiPoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${this.props.tag}&jsoncallback=?`;

    try {
      $.ajax({
        url: flickrApiPoint,
        dataType: 'jsonp',
        data: { format: "json" },
        success: (data) => {
          this.updatePhotos(data.items);
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tag !== this.props.tag) {
      const flickrApiPoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${newProps.tag}&jsoncallback=?`;
      try {
        $.ajax({
          url: flickrApiPoint,
          dataType: 'jsonp',
          data: { format: "json" },
          success: (data) => {
            this.updatePhotos(data.items);
          }
        });
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  render () {
    const {photos} = this.state;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: 80, backgroundColor: "#C1C1C1", position: "fixed", zIndex: 150, width: "100%", top: 0, marginBottom: 15 }}>
          Search your interest
          <input style={{ borderBottom: "lightgrey solid 1px", bordeWidth: "thin", width: "70%", height: 30, borderRadius: 5, marginTop: 30, marginLeft: 5, marginBottom: 50 }}
            placeholder="people, animail, view, anything you are interested in..."
            value={this.props.tag}
            onChange={this.changeTag}
          >
          </input>
        </div>
        <Photos photos={photos} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    tag: state.app.tag,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchTag: (tag) => dispatch({ type: actionTypes.UPDATE_SEARCHED_TAG, payload: {tag: tag} })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);