import GrabFoodIcon from "../assets/icons/grabFood";
import FoodPandaIcon from "../assets/icons/foodpanda";

import {
  Coffee,
  Snowflake,
  CupSoda,
  Leaf,
  Cookie,
} from "lucide-react";

export const categoryMeta = {
  "Hot Coffee": { icon: Coffee },
  "Iced Coffee": { icon: Snowflake },
  "Frappes": { icon: CupSoda },
  "Tea": { icon: Leaf },
  "Pastries": { icon: Cookie },
};

export const menuItems = [
  /* ================= HOT COFFEE ================= */
  {
    name: "Espresso",
    description: "Rich, concentrated espresso shot with bold flavor.",
    image: "/espresso.jpg",
    category: "Hot Coffee",
    sizes: [
      { label: "Single", price: "₱120", available: true },
      { label: "Double", price: "₱160", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
    
  },
  {
    name: "Americano",
    description: "Smooth espresso diluted with hot water.",
    image: "/americano.jpg",
    category: "Hot Coffee",
    sizes: [
      { label: "Small", price: "₱140", available: true },
      { label: "Medium", price: "₱160", available: true },
      { label: "Large", price: "₱180", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Caffè Latte",
    description: "Espresso blended with creamy steamed milk.",
    image: "/caffeLatte.jpg",
    category: "Hot Coffee",
    sizes: [
      { label: "Small", price: "₱150", available: true },
      { label: "Medium", price: "₱170", available: true },
      { label: "Large", price: "₱190", available: false },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Cappuccino",
    description: "Balanced espresso, steamed milk, and airy foam.",
    image: "/cappuccino.jpg",
    category: "Hot Coffee",
    sizes: [
      { label: "Small", price: "₱140", available: true },
      { label: "Medium", price: "₱160", available: true },
      { label: "Large", price: "₱180", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Flat White",
    description: "Velvety milk with a strong espresso base.",
    image: "/flatWhite.jpg",
    category: "Hot Coffee",
    sizes: [
      { label: "Regular", price: "₱170", available: true },
      { label: "Large", price: "₱190", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },

  /* ================= ICED COFFEE ================= */
  {
    name: "Iced Americano",
    description: "Chilled espresso with crisp, refreshing taste.",
    image: "/icedAmericano.jpg",
    category: "Iced Coffee",
    sizes: [
      { label: "Medium", price: "₱160", available: true },
      { label: "Large", price: "₱180", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Iced Latte",
    description: "Cold milk and espresso over ice.",
    image: "/iced_latte.jpg",
    category: "Iced Coffee",
    sizes: [
      { label: "Medium", price: "₱180", available: true },
      { label: "Large", price: "₱200", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Iced Caffè Mocha",
    description: "Iced espresso with rich chocolate notes.",
    image: "/icedMocha.jpg",
    category: "Iced Coffee",
    sizes: [
      { label: "Medium", price: "₱190", available: true },
      { label: "Large", price: "₱210", available: false },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Iced Vanilla Latte",
    description: "Smooth espresso with vanilla sweetness.",
    image: "/icedVanillaLatte.jpg",
    category: "Iced Coffee",
    sizes: [
      { label: "Medium", price: "₱190", available: true },
      { label: "Large", price: "₱210", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },

  /* ================= FRAPPES ================= */
  {
    name: "Coffee Frappe",
    description: "Blended iced coffee with creamy texture.",
    image: "/coffeeFrappe.jpg",
    category: "Frappes",
    sizes: [
      { label: "Regular", price: "₱210", available: true },
      { label: "Large", price: "₱230", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Mocha Frappe",
    description: "Chocolate and coffee blended to perfection.",
    image: "/mochaFrappe.jpg",
    category: "Frappes",
    sizes: [
      { label: "Regular", price: "₱220", available: true },
      { label: "Large", price: "₱240", available: false },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Caramel Frappe",
    description: "Sweet caramel with smooth coffee base.",
    image: "/caramelFrappe.jpg",
    category: "Frappes",
    sizes: [
      { label: "Regular", price: "₱220", available: true },
      { label: "Large", price: "₱240", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },

  /* ================= TEA ================= */
  {
    name: "Classic Black Tea",
    description: "Bold and aromatic brewed black tea.",
    image: "/blackTea.jpg",
    category: "Tea",
    sizes: [
      { label: "Regular", price: "₱120", available: true },
      { label: "Large", price: "₱140", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Green Tea",
    description: "Light, refreshing, and soothing.",
    image: "/greenTea.jpg",
    category: "Tea",
    sizes: [
      { label: "Regular", price: "₱120", available: true },
      { label: "Large", price: "₱140", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Iced Lemon Tea",
    description: "Cold brewed tea with citrus notes.",
    image: "/lemonTea.jpg",
    category: "Tea",
    sizes: [
      { label: "Medium", price: "₱150", available: true },
      { label: "Large", price: "₱170", available: true },
    ],
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },

  /* ================= PASTRIES ================= */
  {
    name: "Butter Croissant",
    description: "Flaky, buttery French-style pastry.",
    image: "/croissant.jpg",
    category: "Pastries",
    price: "₱110",
    available: true,
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Chocolate Muffin",
    description: "Soft muffin with rich chocolate chunks.",
    image: "/chocolateMuffin.jpg",
    category: "Pastries",
    price: "₱120",
    available: true,
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
  {
    name: "Cinnamon Roll",
    description: "Warm cinnamon swirls with light glaze.",
    image: "/cinnamonRoll.jpg",
    category: "Pastries",
    price: "₱130",
    available: true,
    orderLinks: [
  {
    name: "Foodpanda",
    icon: FoodPandaIcon,
   url: "https://foodpanda.ph/restaurant/xxxxx"
  },
  {
    name: "GrabFood",
    icon: GrabFoodIcon,
    url: "https://food.grab.com/ph/en/restaurant/xxxxx"
  }
]
  },
];
