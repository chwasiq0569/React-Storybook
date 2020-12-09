import React from "react";
import { shallow, mount } from "enzyme";
import CounterList from "./CounterList";

describe("Render counterlist Component Successfully", () => {
  it("renders the Component", () => {
    const wrapper = shallow(<CounterList />);
    // const mountWrapper = mount(<CounterList />);
    const btn = wrapper.find(`[data-test='numCountersIncrement']`);
    btn.simulate("click");
    const numOfCounterState = wrapper.state().numCounters;
    expect(numOfCounterState).toBe(3);
  });
});
