import React from 'react';
import Photo from './Photo';
import renderer from 'react-test-renderer';

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//   <Photo key={1} index={1} author="number 24 at flickr@flickr.com" dateTaken="2020 12.23 08:00" tags="this is my first photo on flickr" photoLink="https://www.flickr.com/photos/184996925@N04/49576463881/" thumbnailPhotoLink="https://live.staticflickr.com/65535/49576463881_2b829c4d26_t.jpg" />
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.changeFontStyle();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('renders correctly', () => {
  const tree = renderer
    .create(<Photo key={1} index={1} author="number 24 at flickr@flickr.com" dateTaken="2020 12.23 08:00" tags="this is my first photo on flickr" photoLink="https://www.flickr.com/photos/184996925@N04/49576463881/" thumbnailPhotoLink="https://live.staticflickr.com/65535/49576463881_2b829c4d26_t.jpg"></Photo>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});