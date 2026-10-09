
import React from 'react';

const CmtAck: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 pt-8 sm:pt-12">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-xl shadow-sm px-6 py-8 sm:px-12 sm:py-12">
        <p className="text-slate-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-center">
          “The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.”
        </p>
      </div>
    </div>
  );
};

export default CmtAck;
