import React from 'react';

export default function ChemicalProductsPage() {
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
            {/* Layers Icon */}
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16.54l-8.8-4.4L12 7.74l8.8 4.4L12 16.54zm0-12.54L1 9l11 5.5L23 9 12 4z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Chemical Products</h3>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          A wide portfolio of high-quality specialty and bulk chemicals sourced, packaged, and delivered to spec.
        </p>
        <p className="text-base text-gray-700">
          <b>More details:</b> Our chemical products service covers sourcing, quality assurance, packaging, and global delivery of specialty and bulk chemicals. We ensure compliance, safety, and reliability for your supply chain needs.
        </p>
      </div>
    </div>
  );
} 