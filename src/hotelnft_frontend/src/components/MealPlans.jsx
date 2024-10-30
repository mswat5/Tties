import { Star, ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";

const mealPlans = [
  {
    id: 1,
    name: "Desi Deluxe Thali",
    description: "1 Subji + 1 Gravy + 4 Roti + Rice + Salad + Sweet",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400",
    type: "Lunch",
    isVeg: true,
    rating: 4.5,
    orders: 40,
    restaurant: "Pure Deshi Adda",
    tag: "NEW",
    price: 199,
  },
  {
    id: 2,
    name: "Desi Standard Thali",
    description: "1 Subji + 1 Gravy + 4 Roti + Rice + Salad",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400",
    type: "Lunch",
    isVeg: true,
    rating: 4.3,
    orders: 40,
    restaurant: "Pure Deshi Adda",
    tag: "NEW",
    price: 149,
  },
  {
    id: 3,
    name: "Desi Rice Meal",
    description: "Rice with Dal of the Day",
    image:
      "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=400",
    type: "Lunch",
    isVeg: true,
    rating: 4.4,
    orders: 40,
    restaurant: "Pure Deshi Adda",
    tag: "NEW",
    price: 99,
  },
  {
    id: 4,
    name: "Desi Roti Meal",
    description: "4 Chapati with Vegetable of the day",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=400",
    type: "Lunch",
    isVeg: true,
    rating: 4.6,
    orders: 40,
    restaurant: "Pure Deshi Adda",
    tag: "NEW",
    price: 129,
  },
];

const MealPlans = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mealPlans.map((meal) => (
        <div
          key={meal.id}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <div className="relative">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-48 object-cover"
            />
            <span className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 text-xs rounded">
              {meal.tag}
            </span>
            {meal.isVeg && (
              <span className="absolute top-2 left-2">
                <div className="w-6 h-6 border-2 border-green-500 p-0.5 bg-white">
                  <div className="w-full h-full bg-green-500"></div>
                </div>
              </span>
            )}
            <span className="absolute bottom-2 right-2 bg-white text-gray-800 px-2 py-1 text-xs rounded">
              {meal.type}
            </span>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-2">
              <img className="w-5 h-5 rounded-full mr-2" />
              <span className="text-sm text-gray-600">{meal.restaurant}</span>
              <span className="ml-auto text-xs text-emerald-500 font-medium">
                {meal.orders}+ Orders
              </span>
            </div>

            <h3 className="font-semibold text-lg mb-1">{meal.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{meal.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{meal.rating}</span>
                <span className="ml-2 text-sm font-medium">₹{meal.price}</span>
              </div>
              <button
                onClick={() =>
                  addItem({
                    id: meal.id,
                    name: meal.name,
                    price: meal.price,
                    quantity: 1,
                  })
                }
                className="bg-emerald-500 text-white px-4 py-1 rounded text-sm hover:bg-emerald-600 transition-colors flex items-center"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealPlans;
