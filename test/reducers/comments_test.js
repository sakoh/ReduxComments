import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('CommentsReducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const payload = {
      "author": "John",
      "body": "new comment"
    };

    const action = {
      type: SAVE_COMMENT,
      payload: payload
    };

    expect(commentReducer([], action)).to.eql([payload]);
  });
});
