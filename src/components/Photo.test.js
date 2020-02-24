import React from 'react';
import Photo from './Photo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Photo key={1} index={1} author="number 24 at flickr@flickr.com" dateTaken="2020 12.23 08:00" tags="this is my first photo on flickr" photoLink="https://www.flickr.com/photos/184996925@N04/49576463881/" thumbnailPhotoLink="https://live.staticflickr.com/65535/49576463881_2b829c4d26_t.jpg"></Photo>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});