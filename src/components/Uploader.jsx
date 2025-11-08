import React, { useCallback, useRef, useState } from 'react';
import { Upload, Lock, FileWarning, Loader2 } from 'lucide-react';

export default function Uploader({ onExtract }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [passwordNeeded, setPasswordNeeded] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    handleFile(f);
  }, []);

  const handleFile = (f) => {
    setError('');
    setFile(null);
    setPasswordNeeded(false);
    if (f && f.type === 'application/pdf') {
      setFile(f);
      // Heuristic: if filename hints password-protected
      if (/lock|pwd|protected/i.test(f.name)) setPasswordNeeded(true);
    } else {
      setError('Please upload a PDF file (.pdf)');
    }
  };

  const onChange = (e) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const triggerBrowse = () => inputRef.current?.click();

  const handleExtract = async () => {
    if (!file) return;
    setLoading(true);
    setError('');
    try {
      // Simulated local parsing delay and mock results
      await new Promise((r) => setTimeout(r, 1400));
      const mock = {
        card_last4: '4242',
        statement_start_date: '2025-09-01',
        statement_end_date: '2025-09-30',
        payment_due_date: '2025-10-15',
        total_amount_due: 1324.77,
        confidence: {
          card_last4: 0.98,
          statement_start_date: 0.92,
          statement_end_date: 0.95,
          payment_due_date: 0.84,
          total_amount_due: 0.97,
        },
        password_used: passwordNeeded ? Boolean(password) : false,
        file_name: file.name,
      };
      onExtract(mock);
    } catch (e) {
      setError('Unable to open PDF. Wrong password?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="rounded-lg bg-red-50 text-red-700 px-3 py-2 text-sm ring-1 ring-red-200 flex items-center gap-2">
          <FileWarning className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      <div
        onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
        onDrop={onDrop}
        className={`group relative rounded-2xl border border-dashed ${dragOver ? 'border-blue-400 bg-blue-50/40' : 'border-gray-200 bg-white'} p-6 transition duration-200 ease-out shadow-sm hover:shadow-md hover:scale-[1.01]`}
      >
        <input ref={inputRef} type="file" accept="application/pdf" className="hidden" onChange={onChange} />
        <div className="flex flex-col items-center text-center gap-3">
          <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center ring-1 ring-blue-100">
            <Upload className="h-6 w-6" />
          </div>
          <div>
            <p className="text-gray-900 font-medium">Drag & Drop your PDF here</p>
            <p className="text-gray-500 text-sm">or <button onClick={triggerBrowse} className="text-blue-600 hover:underline">browse</button> to upload</p>
          </div>
          <p className="text-xs text-gray-400">Accepts .pdf only</p>
          {file && (
            <div className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full ring-1 ring-gray-200">{file.name}</div>
          )}
          {passwordNeeded && (
            <div className="w-full max-w-sm flex items-center gap-2">
              <div className="flex-1 relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="PDF password"
                  className="w-full rounded-lg border-gray-200 focus:border-blue-400 focus:ring-blue-400 pr-9"
                />
                <Lock className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}
          <button
            onClick={handleExtract}
            disabled={!file || loading}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A73E8] px-4 py-2 text-white font-medium shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Parsing…
              </>
            ) : (
              'Extract Details'
            )}
          </button>
        </div>
      </div>

      <div className="text-xs text-gray-500">Data never leaves your device.</div>
    </div>
  );
}
