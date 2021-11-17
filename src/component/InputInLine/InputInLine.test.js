import React from "react";
import renderer from "react-test-renderer";

import InputInLine from "./InputInLine";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<InputInLine />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<InputInLine />).toJSON();
  expect(tree).toMatchSnapshot();
});
