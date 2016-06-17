import { renderComponent , expect } from '../test_helper';
import CommentsList from '../../src/components/comments_list';

describe('CommentsList' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentsList);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('comments-list');
  });

});
