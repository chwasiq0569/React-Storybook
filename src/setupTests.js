// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
// import EnzymeAdapter from "enzyme-adapter-react-16";
// import fetchMock from "fetch-mock";
// //clear all mocks before each test
// afterEach(fetchMock.restore);

// Enzyme.configure({
//   adapter: new EnzymeAdapter(),
//   disableLifecycleMethods: true,
// });
// import "@testing-library/jest-dom";
