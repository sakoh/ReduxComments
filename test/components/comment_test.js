import { renderComponent , expect } from '../test_helper';
import Comment from '../../src/components/comment';

describe('Comment' , () => {
  let component;
  let body;

  beforeEach(() => {
    body = "Very Nice article, you've made some good points";
    component = renderComponent(Comment, {"body": body});
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('comment');
  });

  // it('has a span with the right comment', () => {
  //   expect(component.find('span')).to.contain(body);
  // });

});
