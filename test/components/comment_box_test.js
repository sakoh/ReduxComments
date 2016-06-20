import { renderComponent , expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe("CommentBox" , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it("has the right class", () => {
    expect(component).to.have.class("comment-box");
  });

  it("should exist", () => {
    expect(component).to.exist;
  });

  it("has a test area", () => {
    expect(component.find("textarea")).to.exist;
  });

  it("has a button", () => {
    expect(component.find("button")).to.exist;
  });

  describe("author's name input", () => {
    let authorInput;

    beforeEach(() => {
      authorInput = component.find("input.comment-box--author-input");
      authorInput.simulate("change","John");
    });

    it("should have the right class", () => {
      expect(authorInput).to.exist;
    });

    it("shows text entered in the author's input", () => {
      expect(authorInput).to.have.value("John");
    });

    it("clears the textarea when comment is submitted", () => {
      component.simulate('submit');
      expect(authorInput).to.have.value("");
    });

  });

  describe("textarea", () => {
    let textarea;

    beforeEach(() => {
      textarea = component.find("textarea.comment-box--textarea");
      textarea.simulate("change","new comment");
    });

    it("should have the right class", () => {
      expect(textarea).to.exist;
    });

    it("shows text entered in the textrea", () => {
      expect(textarea).to.have.value("new comment");
    });

    it("clears the textarea when comment is submitted", () => {
      component.simulate('submit');
      expect(textarea).to.have.value("");
    });

  });

});
