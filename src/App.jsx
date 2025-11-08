import React, { useState } from 'react';
import HeaderHero from './components/HeaderHero';
import Uploader from './components/Uploader';
import ResultPreview from './components/ResultPreview';
import FooterNote from './components/FooterNote';

export default function App() {
  const [result, setResult] = useState(null);
  const [toast, setToast] = useState('');

  const handleExtract = (data) => {
    setResult(data);
    setToast('Extraction complete');
    setTimeout(() => setToast(''), 2200);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-gray-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3CD3AD1a] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-12 space-y-8">
        <HeaderHero />

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4 md:p-6 transition hover:shadow-md hover:scale-[1.01]">
            <h2 className="text-sm font-semibold text-gray-800 mb-3">Upload & Settings</h2>
            <Uploader onExtract={(d) => { handleExtract(d); }} />
          </div>

          <ResultPreview data={result} />
        </div>

        <FooterNote />
      </div>

      {toast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
          <div className="rounded-full bg-emerald-600 text-white text-sm px-4 py-2 shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}
