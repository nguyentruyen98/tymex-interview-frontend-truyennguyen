export const FILTER_TIER_OPTIONS = [
  { value: "All", label: "All" },
  { value: "Basic", label: "Basic" },
  { value: "Premium", label: "Premium" },
  { value: "Deluxe", label: "Deluxe" },
];

export const FILTER_THEME_OPTIONS = [
  { value: "All", label: "All" },
  { value: "Dark", label: "Dark" },
  { value: "Light", label: "Light" },
  { value: "Colorful", label: "Colorful" },
  { value: "Halloween", label: "Halloween" },
];

export const FILTER_TIME_OPTIONS = [
  { value: "All", label: "All" },
  { value: "desc", label: "Latest" },
  { value: "asc", label: "Oldest" },
];

export const FILTER_PRICE_OPTIONS = [
  { value: "All", label: "All" },
  { value: "asc", label: "Low to high" },
  { value: "desc", label: "High to low" },
];

export const BUTTON_GROUP_OPTIONS = [
  { label: "All", isActive: true, value: "All" },
  { label: "Upper Body", isActive: false, value: "Upper Body" },
  { label: "Lower Body", isActive: false, value: "Lower Body" },
  { label: "Hat", isActive: false, value: "Hat" },
  { label: "Shoes", isActive: false, value: "Shoes" },
  { label: "Accessory", isActive: false, value: "Accessory" },
  { label: "Legendary", isActive: false, value: "Legendary" },
  { label: "Mythic", isActive: false, value: "Mythic" },
  { label: "Epic", isActive: false, value: "Epic" },
  { label: "Rare", isActive: false, value: "Rare" },
];

export const APP_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  OUR_TEAM: "/our-team",
  MARKETPLACE: "/marketplace",
  ROADMAP: "/roadmap",
  WHITEPAPER: "/whitepaper",
};

export const HEADER_MENU = [
  { label: "Home", path: APP_ROUTES.HOME },
  { label: "About us", path: APP_ROUTES.ABOUT },
  { label: "Out Team", path: APP_ROUTES.OUR_TEAM },
  { label: "Marketplace", path: APP_ROUTES.MARKETPLACE },
  { label: "Roadmap", path: APP_ROUTES.ROADMAP },
  { label: "Whitepaper", path: APP_ROUTES.WHITEPAPER },
];
