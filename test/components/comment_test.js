import { renderComponent , expect } from "../test_helper";
import Comment from "../../src/components/comment";

describe("Comment" , () => {
  let component, comment;

  beforeEach(() => {
    comment = "Very Nice article, you made some good points";
    const props ={"comment": comment};
    component = renderComponent(Comment, null, props);
  });

  it("should exist", () => {
    expect(component).to.exist;
  });

  it("has the right class", () => {
    expect(component).to.have.class("comment");
  });

  it("has the comment from the state", () => {
    expect(component).to.contain(comment);
  });

});
