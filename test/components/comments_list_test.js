import { renderComponent , expect } from "../test_helper";
import CommentsList from "../../src/components/comments_list";

describe("CommentsList" , () => {
  let component;

 beforeEach(() => {
   const props = {
     comments: [
       {
         "author": "John",
         "body": "Nice Post!"
       },
       {
         "author": "Peter",
         "body": "You brought up some good points"
       }
     ]
   };
   component = renderComponent(CommentsList, null, props);
 });

 it('shows an LI for each comment', () => {
   expect(component.find('li').length).to.equal(2);
 });

 it('shows each comment that is provided', () => {
   expect(component).to.contain('Nice Post!');
   expect(component).to.contain('You brought up some good points');
 });
});
