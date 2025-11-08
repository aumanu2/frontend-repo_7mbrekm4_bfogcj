import React, { useState } from 'react';
import HeaderHero from './components/HeaderHero';
import Uploader from './components/Uploader';
import ResultPreview from './components/ResultPreview';
import FooterNote from './components/FooterNote';
import { AuroraBackground } from './components/ui/aurora-background';

export default function App() {
  const [result, setResult] = useState(null);
  const [toast, setToast] = useState('');

  const handleExtract = (data) => {
    setResult(data);
    setToast('Extraction complete');
    setTimeout(() => setToast(''), 2200);
  };

  return (
    <AuroraBackground className="text-white" showRadialGradient>
      <div className="w-full">
        <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-12 space-y-8">
          <HeaderHero />

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl bg-[#0E1A33] text-slate-100 shadow-lg ring-1 ring-white/10 p-4 md:p-6 transition hover:shadow-xl">
              <h2 className="text-sm font-semibold text-slate-200 mb-3">Upload & Settings</h2>
              <Uploader onExtract={(d) => { handleExtract(d); }} />
            </div>

            <div className="rounded-2xl bg-[#0E1A33] shadow-lg ring-1 ring-white/10">
              <ResultPreview data={result} />
            </div>
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
    </AuroraBackground>
  );
}
