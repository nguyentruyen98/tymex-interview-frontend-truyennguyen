import axios, { AxiosResponse } from "axios";

import { FilterValue } from "@/types";
import { buildUrlApiFormObject } from "@/utils";

import { BASE_URL } from "./constant";
import { IProduct } from "./type";

export const getProductList = async (
  filter: FilterValue,
  searchValue: string,
  pageParam: number,
) => {
  const { data }: AxiosResponse<IProduct[]> = await axios.get(
    `${BASE_URL}/products?${buildUrlApiFormObject(filter)}&_page=${pageParam}&_limit=20&q=${searchValue}`,
  );

  return data;
};
