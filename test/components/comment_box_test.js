import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the right class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has a test area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering text', () => {
    let textarea;

    beforeEach(() => {
      textarea = component.find('textarea');
      textarea.simulate('change','new comment');
    });

    it('shows text entered in the textrea',() => {
      expect(textarea).to.have.value('new comment');
    });

    it('clears the textarea when comment is submitted', () => {

    });

  });

});
