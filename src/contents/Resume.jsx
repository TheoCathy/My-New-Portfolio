import React, { useState } from "react";

function ResumeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="px-6 py-3 bg-purple-500 text-white text-center items-center rounded-full shadow-lg hover:bg-purple-600 transition"
      >
        Click to view resume
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-7xl h-[90vh] relative p-6">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">My Resume</h2>
            <iframe
              src="/Theodora.O_Resume_.pdf"
              className="w-full h-[80vh]"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeButton;
