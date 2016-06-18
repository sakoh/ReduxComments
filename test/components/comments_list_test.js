import { renderComponent , expect } from "../test_helper";
import CommentsList from "../../src/components/comments_list";

describe("CommentsList" , () => {
  let component;

  beforeEach(() => {
    const props = {"comments":["gsds","dsfgjraiujr"]};
    component = renderComponent(CommentsList, props);
  });

  it("should exist", () => {
    expect(component).to.exist;
  });

  it("has the right class", () => {
    expect(component).to.have.class("comments-list");
  });

  it("shows all the comments", () => {
    expect(component.find("li.comment").length).to.equal(2);
  });

});
