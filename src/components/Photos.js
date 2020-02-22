import React from 'react';
import Photo from './Photo';

const Photos = ({ photos }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%", marginLeft: "8%", marginTop: 100, overflowY: "scroll" }}>
      {!photos.length ? (
        <h1>No Photos to Show...</h1>
      ) : (
        photos.map((photo, index) => {
          return (
              <Photo
                key={index}
                index={index}
                author={photo.author}
                dateTaken={photo.date_taken}
                tags={photo.tags}
                photoLink={photo.link}
                thumbnailPhotoLink={photo.media.m}
              >
              </Photo>
          );
        })
      )}
    </div>
  );
};

export default Photos;