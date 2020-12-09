import React, { Component } from "react";
import TestCounter from "./TestCounter";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
//toBe is strict comparison
describe("Counter Component is Rendering Seccessfully", () => {
  it("Matched the snapshot", () => {
    //takes snapshot of component if any changes occurs in UI this will yell
    const tree = renderer.create(<TestCounter />).toJSON();
    //if any positive change happens then press u to update snapshot
    expect(tree).toMatchSnapshot();
  });
  it("starts with a Counter of 0", () => {
    const wrapper = shallow(<TestCounter />);
    const countState = wrapper.state().count;
    expect(countState).toEqual(0);
  });
  it("Increment Btn should contain +++ Text", () => {
    const wrapper = shallow(<TestCounter />);
    const incrementBtn = wrapper.find(`[data-test='incrementBtn']`);
    expect(incrementBtn.text()).toEqual("+++");
  });
  it("p tag should contain count: 0 initially", () => {
    const wrapper = shallow(<TestCounter />);
    const paragraphTag = wrapper.find(".countValue");
    expect(paragraphTag.text()).toEqual("count: 0");
  });
  it("should render text inside p tag to count: 2 on click", () => {
    const wrapper = shallow(<TestCounter />);
    const incrementBtn = wrapper.find(`[data-test='incrementBtn']`);
    incrementBtn.simulate("click");
    const paragraphTag = wrapper.find(".countValue");
    expect(paragraphTag.text()).toBe("count: 2");
  });
  it("should decrement count by 2 on decrementBtn click", () => {
    const wrapper = shallow(<TestCounter />);
    const decrementBtn = wrapper.find(`[data-test='decrementBtn']`);
    decrementBtn.simulate("click");
    expect(wrapper.state().count).toEqual(-2);
  });
});
