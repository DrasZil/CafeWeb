import GrabFoodIcon from "../assets/icons/grabFood";
import FoodPandaIcon from "../assets/icons/foodpanda";

import {
  Coffee,
  Snowflake,
  CupSoda,
  Leaf,
  Cookie,
  Crown,
  Gem,
} from "lucide-react";

export const categoryMeta = {
  Favorites: { icon: Crown },
  "Best Seller": { icon: Gem },
  "Hot Coffee": { icon: Coffee },
  "Iced Coffee": { icon: Snowflake },
  Frappes: { icon: CupSoda },
  Tea: { icon: Leaf },
  Pastries: { icon: Cookie },
};

export const menuItems = [
  /* ================= HOT COFFEE ================= */
  {
    name: "Espresso",
    description: "Rich, concentrated espresso shot with bold flavor.",
    image: "/espresso.jpg",
    category: "Hot Coffee",
    isFavorite: true,
    isBestSeller: true,
    sizes: [
      { label: "Single", price: "₱120", available: true },
      { label: "Double", price: "₱160", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Americano",
    description: "Smooth espresso diluted with hot water.",
    image: "/americano.jpg",
    category: "Hot Coffee",
    isFavorite: false,
    isBestSeller: false,
    sizes: [
      { label: "Small", price: "₱140", available: true },
      { label: "Medium", price: "₱160", available: true },
      { label: "Large", price: "₱180", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Caffè Latte",
    description: "Espresso blended with creamy steamed milk.",
    image: "/caffeLatte.jpg",
    category: "Hot Coffee",
    isFavorite: true,
    isBestSeller: false,
    sizes: [
      { label: "Small", price: "₱150", available: true },
      { label: "Medium", price: "₱170", available: true },
      { label: "Large", price: "₱190", available: false },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Cappuccino",
    description: "Balanced espresso, steamed milk, and airy foam.",
    image: "/cappuccino.jpg",
    category: "Hot Coffee",
    isFavorite: false,
    isBestSeller: false,
    sizes: [
      { label: "Small", price: "₱140", available: true },
      { label: "Medium", price: "₱160", available: true },
      { label: "Large", price: "₱180", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Flat White",
    description: "Velvety milk with a strong espresso base.",
    image: "/flatWhite.jpg",
    category: "Hot Coffee",
    isFavorite: false,
    isBestSeller: false,
    sizes: [
      { label: "Regular", price: "₱170", available: true },
      { label: "Large", price: "₱190", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },

  /* ================= ICED COFFEE ================= */
  {
    name: "Iced Americano",
    description: "Chilled espresso with crisp, refreshing taste.",
    image: "/icedAmericano.jpg",
    category: "Iced Coffee",
    isFavorite: false,
    isBestSeller: true,
    sizes: [
      { label: "Medium", price: "₱160", available: true },
      { label: "Large", price: "₱180", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Iced Latte",
    description: "Cold milk and espresso over ice.",
    image: "/iced_latte.jpg",
    category: "Iced Coffee",
    isFavorite: false,
    isBestSeller: true,
    sizes: [
      { label: "Medium", price: "₱180", available: true },
      { label: "Large", price: "₱200", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },

  /* ================= FRAPPES ================= */
  {
    name: "Coffee Frappe",
    description: "Blended iced coffee with creamy texture.",
    image: "/coffeeFrappe.jpg",
    category: "Frappes",
    isFavorite: false,
    isBestSeller: false,
    sizes: [
      { label: "Regular", price: "₱210", available: true },
      { label: "Large", price: "₱230", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Caramel Frappe",
    description: "Sweet caramel with smooth coffee base.",
    image: "/caramelFrappe.jpg",
    category: "Frappes",
    isFavorite: true,
    isBestSeller: false,
    sizes: [
      { label: "Regular", price: "₱220", available: true },
      { label: "Large", price: "₱240", available: true },
    ],
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },

  /* ================= PASTRIES ================= */
  {
    name: "Butter Croissant",
    description: "Flaky, buttery French-style pastry.",
    image: "/croissant.jpg",
    category: "Pastries",
    isFavorite: false,
    isBestSeller: true,
    price: "₱110",
    available: true,
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
  {
    name: "Chocolate Muffin",
    description: "Soft muffin with rich chocolate chunks.",
    image: "/chocolateMuffin.jpg",
    category: "Pastries",
    isFavorite: false,
    isBestSeller: false,
    price: "₱120",
    available: true,
    orderLinks: [
      { name: "Foodpanda", icon: FoodPandaIcon, url: "https://foodpanda.ph/restaurant/xxxxx" },
      { name: "GrabFood", icon: GrabFoodIcon, url: "https://food.grab.com/ph/en/restaurant/xxxxx" },
    ],
  },
];

export const MENU_TAGS = [
  {
    key: "favorite",
    label: "Favorite",
    check: (item) => item.isFavorite,
    icon: Crown,
    bg: "bg-yellow-400",
    text: "text-espresso",
  },
  {
    key: "bestSeller",
    label: "Best Seller",
    check: (item) => item.isBestSeller,
    icon: Gem,
    bg: "bg-emerald-400",
    text: "text-espresso",
  },
]

export function getActiveMenuTags(item, activeCategory = null){
  return MENU_TAGS.filter(tag => {
    //tag applies to item
    if (!tag.check(item)) return false;

    //if inside their respective category, only show matching tag
    if (activeCategory === "Favorites") return tag.key === "favorite";
    if (activeCategory === "Best Seller") return tag.key === "bestSeller";

    //else show all applicable tags
    return true;

  });
}