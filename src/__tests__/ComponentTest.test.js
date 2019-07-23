import React from "react";
import { shallow } from "enzyme";
import ComponentTest from "../components/ComponentTest";

describe("A test component", () => {
  it("Renders just fine", () => {
    let component = shallow(<ComponentTest />);
  });

  for (var i = 2; i <= 40; i++) {
    it("Renders just fine " + i, () => {
      let component = shallow(<ComponentTest val={i} />);
      expect(component.find("div").text()).toBe("" + i);
    });
  }
});
