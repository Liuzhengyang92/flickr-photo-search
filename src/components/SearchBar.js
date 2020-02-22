import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { apiBaseUrl, fetchPhotosFromFlickr } from '../api/index';
import Photos from '../components/Photos';
import $ from 'jquery';

const { Search } = Input;
const SearchBar = () => {
  const [tag, setTag] = useState([""]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // function jsonp(url, callback) {
    //   let callbackName = 'jsonFlickrFeed';
    //   window[callbackName] = function (data) {
    //     delete window[callbackName];
    //     document.body.removeChild(script);
    //     callback(data);
    //   };
    //   let script = document.createElement('script');
    //   script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    //   script.src = url;
    //   document.body.appendChild(script);
    // }

    // console.log("link is: ", apiBaseUrl+`&tags=${type}`);
    // jsonp(apiBaseUrl+`&tags=${type}`, callback);

    // function callback(data) {
    //   console.log(data.items);
    //   setPhotos(data.items);
    // }
    const flickrApiPoint = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tag}&jsoncallback=?`;

    try {
      $.ajax({
        url: flickrApiPoint,
        dataType: 'jsonp',
        data: { format: "json" },
        success: function (data) {
          console.log(data); //formatted JSON data
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
            {/* <input style={{ position: "fixed", borderWidth: "thin", width: "70%", height: 30, borderRadius: 10, marginLeft: "15%", backgroundColor: "white", zIndex: 199 }} */}

      <input style={{ borderBottom: "lightgrey solid 1px", bordeWidth: "thin", width: "70%", height: 30, borderRadius: 5, marginTop: 30, marginLeft: 5, marginBottom: 50 }}
        placeholder="people, animail, view, anything you are interested in..."
        onChange={e => setTag(e.target.value)}
      >
      </input>
      </div>
        <Photos photos={photos} />
    </div>
  );
};

export default SearchBar;