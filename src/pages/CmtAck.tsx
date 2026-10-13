import React from 'react';

const CmtAck: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 pt-8 sm:pt-14">
      {/* Page Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          Acknowledgment
        </h1>

        {/* Subtle accent line */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-5 rounded-full" />
      </div>

      {/* Acknowledgment Content */}
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-xl shadow-sm px-6 py-8 sm:px-12 sm:py-12">
        <p
          style={{
            fontFamily: 'Calibri, sans-serif',
            fontSize: '20px',
            textAlign: 'justify',

          }}
        >
          "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
        </p>
      </div>
    </div>
  );
};

export default CmtAck;
