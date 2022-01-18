import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { API } from "../utils/constant";
import { mockData } from "../utils/mockData";
import useFetch from "./useFetch";

const pageNumber = 1;
const path = API.PAGE;

let mockAxios;
beforeEach(() => {
  mockAxios = new MockAdapter(axios);
});

afterEach(() => {
  mockAxios.reset();
});

describe("fetch movie list", () => {
  test("when API call is successful", async () => {
    mockAxios.onGet(path[1]).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(API.PAGE, pageNumber)
    );
    expect(result.current.data).toEqual({});
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData.page);
    expect(result.current.loading).toBeFalsy();
  });
  test("when API call throws error", async () => {
    mockAxios.onGet(path[2]).networkError();

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(API.PAGE, pageNumber)
    );
    expect(result.current.data).toEqual({});
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual({});
    expect(result.current.loading).toBeFalsy();
  });
});
