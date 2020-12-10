import React from "react";
import fetchMock from "fetch-mock";
import FetchingTestApi from "./FetchingTestApi";
import { mount, shallow } from "enzyme";

const nextTick = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

const makeUrlWithUser = (user) =>
  fetchMock.getOnce(
    url,
    {
      status: 200,
      body: dummyUser,
    },
    { overwriteRoutes: false }
  );

const dummyUser = {
  id: 1,
  name: "James Franklin",
  website: "www.jamesFracnklin.com",
};
const url = "https://jsonplaceholder.typicode.com/users/1";

describe("User", () => {
  it("should render loading... text ", async () => {
    //getOnece will only make getRequest Once a test
    //after first test the rsult of fetchApi will be clear
    makeUrlWithUser(dummyUser);
    const wrapper = shallow(<FetchingTestApi id={1} />);
    expect(wrapper.find("h1").text()).toEqual("Loading...");
  });

  it("should render data after fetch ", async () => {
    makeUrlWithUser(dummyUser);
    const wrapper = shallow(<FetchingTestApi id={1} />);
    await nextTick(); //wait untill promise has been resolved in nextTick
    wrapper.update(); //will update our component after fetch is resolved
    expect(wrapper.find(`[data-test='name']`).text()).toEqual(
      "Name: " + dummyUser.name
    );
    expect(wrapper.find(`[data-test='url']`).text()).toContain(
      dummyUser.website
    );
  });
});
