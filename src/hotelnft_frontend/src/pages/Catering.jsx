import { useState } from "react";
import { Calendar, Users, Clock, ChefHat } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    description: "Perfect for meetings, conferences, and office parties",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400",
    minGuests: 20,
  },
  {
    id: 2,
    title: "Weddings",
    description: "Make your special day memorable with our curated menus",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400",
    minGuests: 100,
  },
  {
    id: 3,
    title: "Birthday Parties",
    description: "Celebrate with delicious food and hassle-free service",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=400",
    minGuests: 15,
  },
  {
    id: 4,
    title: "Private Events",
    description: "Customized menus for your intimate gatherings",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=400",
    minGuests: 10,
  },
];

const CateringForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <select
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.eventType}
          onChange={(e) =>
            setFormData({ ...formData, eventType: e.target.value })
          }
          required
        >
          <option value="">Select Event Type</option>
          <option value="corporate">Corporate Event</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday Party</option>
          <option value="private">Private Event</option>
        </select>
        <input
          type="number"
          placeholder="Number of Guests"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          required
        />
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </div>
      <textarea
        placeholder="Additional Details"
        className="w-full px-4 py-2 border rounded-lg mt-6"
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-lg mt-6 hover:bg-red-600 transition-colors"
      >
        Submit Request
      </button>
    </form>
  );
};

const Catering = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tties Catering Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From intimate gatherings to grand celebrations, we provide exceptional
          catering services tailored to your needs. Our experienced team ensures
          every detail is perfect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                <span>Min. {service.minGuests} guests</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Why Choose Our Catering?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <ChefHat className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
                <p className="text-gray-600">
                  Our experienced culinary team creates exceptional dishes using
                  the finest ingredients.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Calendar className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Flexible Planning
                </h3>
                <p className="text-gray-600">
                  We work with your schedule and preferences to create the
                  perfect event.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
                <p className="text-gray-600">
                  Count on us for punctual delivery and setup, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CateringForm />
      </div>
    </main>
  );
};

export default Catering;
