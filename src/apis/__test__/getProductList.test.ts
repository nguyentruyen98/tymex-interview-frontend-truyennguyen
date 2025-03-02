import axios from "axios";
import { describe, expect, it, vi } from "vitest";

import { FilterValue } from "@/types";

import { BASE_URL } from "../constant";
import { getProductList } from "../getProductList";

vi.mock("axios");

describe("getProductList", () => {
  it("should fetch product list with correct parameters", async () => {
    const mockData = [{ id: 1, name: "Product 1" }];
    const filter = { category: ["electronics"] } as FilterValue;
    const searchValue = "phone";
    const pageParam = 1;

    (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

    const result = await getProductList(filter, searchValue, pageParam);

    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/products?&category_like=electronics&_page=1&_limit=20&q=phone`,
    );
    expect(result).toEqual(mockData);
  });

  it("should handle empty response", async () => {
    const filter = { category: ["electronics"] } as FilterValue;
    const searchValue = "phone";
    const pageParam = 1;

    (axios.get as jest.Mock).mockResolvedValue({ data: [] });

    const result = await getProductList(filter, searchValue, pageParam);

    expect(result).toEqual([]);
  });

  it("should throw an error when the request fails", async () => {
    const filter = { category: ["electronics"] } as FilterValue;
    const searchValue = "phone";
    const pageParam = 1;

    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    await expect(
      getProductList(filter, searchValue, pageParam),
    ).rejects.toThrow("Network Error");
  });
});
