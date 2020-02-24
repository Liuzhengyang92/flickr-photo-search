import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { apiBaseUrl, fetchPhotosFromFlickr } from '../api/index';
import Photos from '../components/Photos';
import $ from 'jquery';
import * as actionTypes from '../redux/actionTypes';

const SearchBar = () => {
  const [tag, setTag] = useState([""]);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const flickrApiPoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tag}&jsoncallback=?`;

    try {
      $.ajax({
        url: flickrApiPoint,
        dataType: 'jsonp',
        data: { format: "json" },
        success: function (data) {
          setPhotos(data.items);
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }, [tag]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: 80, backgroundColor: "#C1C1C1", position: "fixed", zIndex: 150, width: "100%", top: 0, marginBottom: 15 }}>

      Search your interest
      <input style={{ borderBottom: "lightgrey solid 1px", bordeWidth: "thin", width: "70%", height: 30, borderRadius: 5, marginTop: 30, marginLeft: 5, marginBottom: 50 }}
        placeholder="people, animail, view, anything you are interested in..."
        onChange={e => {
          setTag(e.target.value);
        }}
      >
      </input>
      </div>
        <Photos photos={photos} />
    </div>
  );
};

export default SearchBar;