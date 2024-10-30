import { Hero } from "../components/Hero";
import { LaundryCard } from "../components/LaundryCard";

const laundryServices = [
  {
    id: 1,
    name: "WashPro Express",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000",
    rating: 4.8,
    reviews: 234,
    services: [
      { name: "Wash & Fold", price: "₹80/kg", turnaround: "24 hours" },
      { name: "Dry Clean", price: "₹250/piece", turnaround: "48 hours" },
      { name: "Steam Iron", price: "₹20/piece", turnaround: "12 hours" },
    ],
    features: [
      "Free Pickup & Delivery",
      "Eco-friendly Detergents",
      "Live Tracking",
    ],
    isExpress: true,
  },
  {
    id: 2,
    name: "Clean & Fresh",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    reviews: 189,
    services: [
      { name: "Wash & Fold", price: "₹70/kg", turnaround: "48 hours" },
      { name: "Dry Clean", price: "₹200/piece", turnaround: "72 hours" },
      { name: "Steam Iron", price: "₹15/piece", turnaround: "24 hours" },
    ],
    features: ["Sanitized Cleaning", "Premium Detergents", "Stain Removal"],
    isExpress: false,
  },
  {
    id: 3,
    name: "Royal Laundry",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=1000",
    rating: 4.9,
    reviews: 312,
    services: [
      { name: "Wash & Fold", price: "₹90/kg", turnaround: "24 hours" },
      { name: "Dry Clean", price: "₹300/piece", turnaround: "48 hours" },
      { name: "Steam Iron", price: "₹25/piece", turnaround: "12 hours" },
    ],
    features: ["Premium Service", "Fabric Protection", "Door Step Service"],
    isExpress: true,
  },
];

export const LaundryServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Professional Laundry Services"
        subtitle="Quality cleaning for all your garments"
        backgroundImage="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=1200"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Choose Your Laundry Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From daily wear to delicate fabrics, our professional laundry
            partners ensure your clothes receive the best care with eco-friendly
            cleaning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laundryServices.map((service) => (
            <LaundryCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};
