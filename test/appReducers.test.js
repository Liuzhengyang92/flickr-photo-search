import reducer from '../src/redux/appReducers';
import * as types from '../src/redux/actionTypes';
describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        tag: ""
      }
    );
  });
  it('should handle UPDATE_SEARCHED_TAG', () => {
    expect(
      reducer([], {
        type: types.UPDATE_SEARCHED_TAG,
        payload: {tag: 'Cat'}
      })
    ).toEqual(
      {
        tag: 'Cat'
      }
    );
    expect(
      reducer(
        {
          tag: 'dog'
        },
        {
          type: types.UPDATE_SEARCHED_TAG,
          payload: {tag: 'dog'}
        }
      )
    ).toEqual(
      {
        tag: 'dog'
      },
      {
        tag: 'dog'
      }
    );
  });
});