import * as React from "react";
import { useState } from "react";
import { Phone, Star, X } from "lucide-react";
import { OutletMenu } from "./OutletMenu";
import { PhoneDialog } from "./PhoneDialog";

export const OutletCard = ({ outlet }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={outlet.foodImage}
            alt={outlet.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white rounded-full p-2">
            <span className="text-sm font-medium">
              +{outlet.additionalImages}
            </span>
          </div>
          {outlet.isNew && (
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-2 py-1 rounded text-sm">
              NEW
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-4">
            <img
              src={outlet.logo}
              alt={`${outlet.name} logo`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{outlet.name}</h3>
              <div className="flex items-center space-x-1">
                {[...Array(outlet.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
              {outlet.orders}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowMenu(true)}
                className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors"
              >
                View More
              </button>
              <button
                onClick={() => setShowPhoneDialog(true)}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">{outlet.name}</h2>
              <button
                onClick={() => setShowMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <OutletMenu outlet={outlet} />
          </div>
        </div>
      )}

      {showPhoneDialog && (
        <PhoneDialog
          outlet={outlet}
          onClose={() => setShowPhoneDialog(false)}
        />
      )}
    </>
  );
};
