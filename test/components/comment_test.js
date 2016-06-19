import { renderComponent , expect } from "../test_helper";
import Comment from "../../src/components/comment";

describe("Comment" , () => {
  let component, comment;

  beforeEach(() => {
    comment = "Very Nice article, you made some good points";
    const props = {
      "comment": {
        "author": "John",
        "body": comment
      }
    };
    component = renderComponent(Comment, props);
  });

  it("should exist", () => {
    expect(component).to.exist;
  });

  it("has the right class for author input", () => {
    expect(component.find('.comment-author')).to.exist;
  });

  it("has the right class for author input", () => {
    expect(component.find('.comment-body')).to.exist;
  });

  it("has the comment from the state", () => {
    expect(component).to.contain(comment);
  });

});
