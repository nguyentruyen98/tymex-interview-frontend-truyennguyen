export type FilterValue = {
  tier: "All" | "Basic" | "Premium" | "Deluxe";
  theme: "All" | "Dark" | "Light" | "Colorful" | "Halloween";
  time: "All" | "desc" | "asc";
  price: "All" | "desc" | "asc";
  category: string[];
  page: number;
  priceRange: [number, number];
};
