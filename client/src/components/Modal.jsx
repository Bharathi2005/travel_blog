import React from "react";

const Modal = ({ isOpen, onClose, title, image, place, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
        <div className="relative w-full h-48">
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-contain" 
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{place}</p>
        <p className="text-gray-700 whitespace-normal break-words">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;