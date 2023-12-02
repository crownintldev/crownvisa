// components/CustomModal.tsx
import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Confirmation</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">Are you sure you want to delete this item?</p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-red-700"
              onClick={onConfirm}
            >
              Yes, Delete
            </button>
            <button
              id="cancel-btn"
              className="ml-3 px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-blue-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
