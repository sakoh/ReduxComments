import { renderComponent , expect } from "../test_helper";
import CommentsList from "../../src/components/comments_list";

describe("CommentsList" , () => {
  let component;

 beforeEach(() => {
   const props = { comments: ['New Comment', 'Other New Comment'] };
   component = renderComponent(CommentsList, null, props);
 });

 it('shows an LI for each comment', () => {
   expect(component.find('li').length).to.equal(2);
 });

 it('shows each comment that is provided', () => {
   expect(component).to.contain('New Comment');
   expect(component).to.contain('Other New Comment');
 });
});
