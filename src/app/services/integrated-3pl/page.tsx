import React from 'react';

export default function Integrated3PLPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className="bg-white rounded-3xl p-8 border w-96 md:w-[420px] h-auto shadow-xl flex flex-col items-start"
        style={{
          borderColor: "#6164F6",
          boxShadow: "0 0 48px 8px #bfcaff, 0 4px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#6164F6] rounded-xl flex items-center justify-center flex-shrink-0">
            {/* Globe Icon */}
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Integrated 3PL</h3>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          End-to-end logistics including storage, handling, inventory management, and efficient global distribution.
        </p>
        <p className="text-base text-gray-700">
          <b>More details:</b> Our integrated 3PL (Third Party Logistics) service provides comprehensive solutions for warehousing, inventory management, and global delivery. We streamline your logistics for efficiency and growth.
        </p>
      </div>
    </div>
  );
} 