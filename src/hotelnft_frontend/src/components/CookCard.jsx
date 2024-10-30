import { useState } from "react";
import * as React from "react";
import { Star, Clock, ChefHat, Phone } from "lucide-react";
import { PhoneDialog } from "./PhoneDialog";

export const CookCard = ({ cook }) => {
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={cook.image}
            alt={cook.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{cook.name}</h3>
            <div className="flex items-center space-x-2 text-white">
              <div className="flex items-center">
                {[...Array(cook.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm">({cook.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-gray-600">
              <ChefHat className="w-5 h-5" />
              <span>{cook.experience} Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{cook.availability}</span>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-1">
                Specialities:
              </h4>
              <div className="flex flex-wrap gap-2">
                {cook.specialities.map((speciality, index) => (
                  <span
                    key={index}
                    className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-sm"
                  >
                    {speciality}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-emerald-600">
                {cook.pricePerDay}
              </span>
              <span className="text-gray-500 text-sm">/day</span>
            </div>
            <button
              onClick={() => setShowPhoneDialog(true)}
              className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>

      {showPhoneDialog && (
        <PhoneDialog
          outlet={{
            ...cook,
            logo: cook.image,
            orders: "",
            isNew: false,
            foodImage: "",
            additionalImages: 0,
          }}
          onClose={() => setShowPhoneDialog(false)}
        />
      )}
    </>
  );
};
