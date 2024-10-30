import { Hero } from "../components/Hero";
import { CookCard } from "../components/CookCard";
import homecook from "../assets/homecook.png";

const cooks = [
  {
    id: 1,
    name: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    experience: "8+ Years",
    specialities: ["North Indian", "South Indian", "Chinese"],
    pricePerDay: "₹1200",
    availability: "Mon-Sat, 8 AM - 6 PM",
    reviews: 48,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800",
    rating: 4,
    experience: "5+ Years",
    specialities: ["Gujarati", "Punjabi", "Street Food"],
    pricePerDay: "₹1000",
    availability: "Mon-Sun, 7 AM - 7 PM",
    reviews: 36,
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    image:
      "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80&w=800",
    rating: 5,
    experience: "10+ Years",
    specialities: ["South Indian", "Bengali", "Continental"],
    pricePerDay: "₹1500",
    availability: "Tue-Sun, 9 AM - 5 PM",
    reviews: 62,
  },
];

export const HomeCooks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Home Cook Services"
        subtitle="Hire professional cooks to prepare meals at your home"
        backgroundImage={homecook}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available Cooks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our verified home cooks are experienced in various cuisines and can
            prepare delicious meals right in your kitchen. Book a cook today and
            enjoy homemade food without the hassle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cooks.map((cook) => (
            <CookCard key={cook.id} cook={cook} />
          ))}
        </div>
      </div>
    </div>
  );
};
