import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeaderHero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="relative w-full overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5">
          <div className="grid md:grid-cols-2 min-h-[300px]">
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                Credit Card Statement Parser
              </h1>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Extracts card number (last 4), statement dates, payment due date, and total amount due.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium ring-1 ring-emerald-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Secure local parsing — data never leaves your device
              </div>
            </div>
            <div className="relative">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
