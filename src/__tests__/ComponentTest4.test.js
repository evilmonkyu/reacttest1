import React from "react";
import { shallow, mount } from "enzyme";
import ComponentTest from "../components/ComponentTest";

describe("A test 3 component", () => {
  it("Renders just fine", () => {
    let component = mount(<ComponentTest />);
  });

  for (var i = 2; i <= 800; i++) {
    it("Renders just fine " + i, () => {
      let component = mount(<ComponentTest val={i} />);
      expect(component.find("div").text()).toBe("" + i);
    });
  }
});
