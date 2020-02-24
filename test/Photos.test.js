import React from 'react';
import Photos from '../src/components/Photos';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Photos photos={[]}></Photos>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});