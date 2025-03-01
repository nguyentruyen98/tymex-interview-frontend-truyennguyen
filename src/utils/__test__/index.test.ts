import { buildUrlApiFormObject } from "..";

test("buildUrlApiFormObject with empty filter", () => {
  const filter = {};
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("");
});

test("buildUrlApiFormObject with category filter", () => {
  const filter = { category: ["Electronics", "Books"] };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("&category_like=Electronics&category_like=Books");
});

test("buildUrlApiFormObject with theme filter", () => {
  const filter = { theme: "Dark" };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("&theme_like=Dark");
});

test("buildUrlApiFormObject with tier filter", () => {
  const filter = { tier: "Premium" };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("&tier_like=Premium");
});

test("buildUrlApiFormObject with price filter", () => {
  const filter = { price: "asc" };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("&_sort=price&_order=asc");
});

test("buildUrlApiFormObject with time filter", () => {
  const filter = { time: "desc" };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("&_sort=createdAt&_order=desc");
});

test("buildUrlApiFormObject with priceRange filter", () => {
  const filter = { priceRange: [100, 500] };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe("&&price_gte=100&price_lte=500");
});

test("buildUrlApiFormObject with multiple filters", () => {
  const filter = {
    category: ["Electronics"],
    theme: "Dark",
    tier: "Premium",
    price: "asc",
    time: "desc",
    priceRange: [100, 500],
  };
  const result = buildUrlApiFormObject(filter);
  expect(result).toBe(
    "&category_like=Electronics&theme_like=Dark&tier_like=Premium&_sort=price&_order=asc&_sort=createdAt&_order=desc&&price_gte=100&price_lte=500",
  );
});
