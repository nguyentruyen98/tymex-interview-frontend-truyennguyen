// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildUrlApiFormObject = (filter: any) => {
  let queryString = "";
  Object.keys(filter).forEach(key => {
    const value = filter[key];

    if (!value || value === "All") return;
    if (key === "category") {
      value
        .filter((filter: string) => filter !== "All")
        .forEach((item: string) => {
          queryString += `&category_like=${encodeURIComponent(item)}`;
        });
    }
    if (key === "theme") {
      queryString += `&theme_like=${encodeURIComponent(value)}`;
    }
    if (key === "tier") {
      queryString += `&tier_like=${encodeURIComponent(value)}`;
    }
    if (key === "price") {
      queryString += `&_sort=price&_order=${encodeURIComponent(value)}`;
    }
    if (key === "time") {
      queryString += `&_sort=createdAt&_order=${encodeURIComponent(value)}`;
    }
  });
  return queryString;
};
