import * as React from "react";

const categories = [
  { id: "all", label: "All", color: "bg-emerald-500" },
  { id: "breakfast", label: "Breakfast", color: "bg-emerald-500" },
  { id: "lunch", label: "Lunch", color: "bg-red-500" },
  { id: "dinner", label: "Dinner", color: "bg-emerald-500" },
  { id: "veg", label: "Veg Only", color: "bg-emerald-500" },
];

const mealTypes = [
  {
    id: "all-week",
    name: "All Week",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "beverages",
    name: "Beverages",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "healthy",
    name: "Healthy",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "homemade",
    name: "Homemade",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "north-indian",
    name: "North Indian",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "pocket-friendly",
    name: "Pocket Friendly",
    image:
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "premium",
    name: "Premium",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: "regional",
    name: "Regional",
    image:
      "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

const MealCategories = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const filteredMealTypes = mealTypes.filter((type) => {
    if (selectedCategory === "all") {
      return true;
    }
    return type.id === selectedCategory;
  });
  return (
    <div className="mb-12">
      <div className="flex gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-2 rounded-full text-white transition-all ${
              selectedCategory === category.id ? category.color : "bg-gray-400"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {mealTypes.map((type) => (
          <div key={type.id} className="text-center cursor-pointer">
            <div className="w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden">
              <img src={type.image} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-medium text-gray-700">{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCategories;
