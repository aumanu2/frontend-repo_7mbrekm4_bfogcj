import React from 'react';

function ConfidenceChip({ value }) {
  const pct = Math.round((value ?? 0) * 100);
  let color = 'bg-emerald-100 text-emerald-700 ring-emerald-200';
  if (pct < 80) color = 'bg-amber-100 text-amber-700 ring-amber-200';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full ring-1 ${color}`}>
      {pct}%
    </span>
  );
}

export default function ResultPreview({ data }) {
  const mono = 'font-mono';
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4 md:p-6 hover:shadow-md transition will-change-transform">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Parsed Output</h3>
        <div className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-xs ring-1 ring-emerald-200">JSON</div>
      </div>
      {!data ? (
        <div className="text-center text-gray-500 text-sm">
          No data yet. Upload a PDF to see results.
        </div>
      ) : (
        <div className={`rounded-xl bg-gray-900/95 text-gray-100 p-4 ${mono} text-xs overflow-auto`}> 
          <pre className="whitespace-pre-wrap">
{`{
  "card_last4": "${data.card_last4}",
  "statement_start_date": "${data.statement_start_date}",
  "statement_end_date": "${data.statement_end_date}",
  "payment_due_date": "${data.payment_due_date}",
  "total_amount_due": ${data.total_amount_due}
}`}
          </pre>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1">
              <span className="text-gray-300 text-[11px]">Card Last4</span>
              <ConfidenceChip value={data.confidence?.card_last4} />
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1">
              <span className="text-gray-300 text-[11px]">Start Date</span>
              <ConfidenceChip value={data.confidence?.statement_start_date} />
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1">
              <span className="text-gray-300 text-[11px]">End Date</span>
              <ConfidenceChip value={data.confidence?.statement_end_date} />
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1">
              <span className="text-gray-300 text-[11px]">Due Date</span>
              <ConfidenceChip value={data.confidence?.payment_due_date} />
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1">
              <span className="text-gray-300 text-[11px]">Total Due</span>
              <ConfidenceChip value={data.confidence?.total_amount_due} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
