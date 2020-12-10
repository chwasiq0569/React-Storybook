import fetchMock from "fetch-mock";
import { fetchUser } from "./util";

describe("Tesing Util Module", () => {
  it("fetchUrl function Tests Passing", async () => {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const dummyUser = {
      id: 1,
      name: "James Franklin",
      website: "www.jamesfranklin.com",
    };
    //wehn we are not tesitn for error cases we cannot specity in the fetchMock it run test for success it own
    fetchMock.getOnce(url, dummyUser);
    const response = await fetchUser(1);
    expect(response).toEqual(dummyUser);
  });
});
