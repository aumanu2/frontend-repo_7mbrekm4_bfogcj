import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeaderHero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#0B1220] text-white shadow-lg ring-1 ring-white/10">
          <div className="grid md:grid-cols-2 min-h-[360px]">
            <div className="p-8 md:p-12 flex flex-col items-start justify-center gap-4">
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Credit Card Statement Parser
              </h1>
              <p className="text-slate-300 text-sm md:text-base max-w-prose">
                Premium-grade parsing for statements: last 4 digits, cycle dates, due date, and total due — presented with confidence metrics.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 px-3 py-1 text-xs font-medium ring-1 ring-emerald-400/20">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Local & secure — nothing is uploaded
              </div>
            </div>
            <div className="relative">
              <Spline
                scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-[#0B1220]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
