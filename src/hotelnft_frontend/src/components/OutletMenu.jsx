import * as React from "react";

export const OutletMenu = ({ outlet }) => {
  const menus = {
    breakfast: [
      {
        name: "Classic Indian Breakfast",
        price: "₹150",
        description: "Poha, Upma, or Paratha with curd",
      },
      {
        name: "South Indian Platter",
        price: "₹180",
        description: "Idli, Dosa, or Uttapam with sambar",
      },
      {
        name: "Healthy Start",
        price: "₹200",
        description: "Oats, fruits, and dry fruits",
      },
    ],
    lunch: [
      {
        name: "Executive Lunch",
        price: "₹250",
        description: "Dal, rice, 2 rotis, sabzi, salad",
      },
      {
        name: "Premium Thali",
        price: "₹350",
        description: "Dal, rice, 3 rotis, 2 sabzi, raita, sweet",
      },
      {
        name: "Light Lunch",
        price: "₹200",
        description: "Rice bowl with curry of choice",
      },
    ],
    dinner: [
      {
        name: "Home Style Dinner",
        price: "₹250",
        description: "Dal, rice, rotis, sabzi",
      },
      {
        name: "Special Dinner",
        price: "₹400",
        description: "Paneer/Chicken, dal, rice, rotis, dessert",
      },
      {
        name: "Diet Dinner",
        price: "₹300",
        description: "Soup, salad, multigrain rotis, sabzi",
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="space-y-8">
        {Object.entries(menus).map(([mealType, items]) => (
          <div key={mealType} className="space-y-4">
            <h3 className="text-xl font-semibold capitalize border-b pb-2">
              {mealType}
            </h3>
            <div className="grid gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <span className="font-medium text-emerald-600">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
