export type Product = {
  id: string;
  name: string;
  desc: string;
  icon: string;
};

export const PRODUCTS: Product[] = [
  { id: "dairy", name: "Dairy Cattle Feed", desc: "High-nutrition blend for dairy cows to maximize milk production", icon: "🥛" },
  { id: "beef", name: "Beef Cattle Feed", desc: "Balanced pellets for healthy growth and weight gain", icon: "🐄" },
  { id: "layer", name: "Poultry Layer Feed", desc: "Formulated for egg-laying hens for optimal production", icon: "🥚" },
  { id: "broiler", name: "Broiler Poultry Feed", desc: "Fast-growth feed blend for meat chickens", icon: "🐔" },
];