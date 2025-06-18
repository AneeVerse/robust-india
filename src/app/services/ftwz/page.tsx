import React from 'react';

export default function FTWZPage() {
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
            {/* Heart Icon */}
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">FTWZ</h3>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Duty-free warehousing, value-added operations, and hassle-free import/export with no local entity needed.
        </p>
        <p className="text-base text-gray-700">
          <b>More details:</b> FTWZ (Free Trade and Warehousing Zone) services allow businesses to store, process, and re-export goods with significant tax and operational benefits. Enjoy seamless logistics, compliance support, and value-added services tailored to your global supply chain needs.
        </p>
      </div>
    </div>
  );
} 