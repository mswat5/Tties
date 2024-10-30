import { OutletCard } from "../components/OutletCard";

const outlets = [
  {
    id: 1,
    name: "Pure Deshi Adda",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=100",
    orders: "40+ Orders",
    isNew: true,
    rating: 5,
    foodImage:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=100",
    additionalImages: 9,
  },
  {
    id: 2,
    name: "Good Greens Comfort Food",
    logo: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&q=80&w=100",
    orders: "100+ Orders",
    isNew: false,
    rating: 5,
    foodImage:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=100",
    additionalImages: 13,
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">Tiffin Service Near You</h1>
            <p className="text-xl text-gray-200">
              Choose from the best outlets at one place
            </p>
          </div>
        </div>
      </div>

      {/* Outlets Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet) => (
            <OutletCard key={outlet.id} outlet={outlet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
