import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {

  describe('saveComment', () => {
    let payload, action;

    beforeEach(() => {
      payload = {
        "author": "John",
        "body": "new comment"
      };
      action = saveComment(payload);
    });

    it('has the correct type', () => {
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      expect(action.payload).to.equal(payload);
    });

  });

});
