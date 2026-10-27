import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { StudyMaterial } from '../types';

interface PdfViewerModalProps {
  material: StudyMaterial | null;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  material,
  onClose,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!material) return null;

  const totalPages = material.pages || 4;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);

    const element = document.createElement('a');
    const content = `=====================================================
STATE BOARD OF TECHNICAL EDUCATION, BIHAR
DOCUMENT: ${material.title}
Subject: ${material.subjectName} (${material.subjectCode})
Semester: ${material.semester} | Year: ${material.year || '2024'}
Contributor / Board: ${material.authorOrProvider}
=====================================================

${material.pdfPreviewText}

TABLE OF CONTENTS / MODULE BREAKDOWN:
${material.previewSummary.map(s => `\n--- ${s.sectionTitle} ---\n${s.items.map((it, idx) => `${idx + 1}. ${it}`).join('\n')}`).join('\n')}

=====================================================
Verified & Formatted for SBTE Bihar Diploma Exams
Polytechnic Semester (Free Study Hub)
=====================================================`;

    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${material.subjectCode}_${material.type}_${material.year || '2024'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-4xl h-[90vh] bg-slate-900 text-white rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* PDF Viewer Header Toolbar */}
        <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Document Title */}
          <div className="flex items-center gap-2.5 truncate max-w-md">
            <div className="w-8 h-8 rounded-lg bg-amber-600/30 text-amber-400 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="text-xs font-bold truncate text-white">
                {material.title}
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                {material.subjectCode} · {material.subjectName} · {material.type}
              </div>
            </div>
          </div>

          {/* Page Controls & Zoom */}
          <div className="flex items-center gap-2 text-xs">
            {/* Page navigation */}
            <div className="flex items-center bg-slate-700 rounded-lg px-2 py-1 gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="p-1 hover:text-amber-400 disabled:opacity-40 disabled:hover:text-white"
                title="Previous page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="tabular-nums font-mono">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="p-1 hover:text-amber-400 disabled:opacity-40 disabled:hover:text-white"
                title="Next page"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Zoom controls */}
            <div className="hidden sm:flex items-center bg-slate-700 rounded-lg px-2 py-1 gap-1">
              <button
                onClick={() => setZoomLevel((z) => Math.max(75, z - 15))}
                className="p-1 hover:text-amber-400"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="tabular-nums font-mono text-[11px] px-1">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(150, z + 15))}
                className="p-1 hover:text-amber-400"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white transition-colors"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
              title="Close Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download notification */}
        {downloadSuccess && (
          <div className="bg-emerald-600 px-4 py-2 text-xs flex items-center justify-between text-white shrink-0 animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Document downloaded successfully for offline preparation!</span>
            </div>
          </div>
        )}

        {/* Document Render Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950 flex justify-center items-start">
          <div
            className="w-full max-w-3xl bg-white text-slate-900 rounded-lg shadow-xl p-6 sm:p-10 transition-transform origin-top space-y-6"
            style={{ transform: `scale(${zoomLevel / 100})` }}
          >
            {/* Authentic SBTE Question Paper / Document Header */}
            <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
              <div className="text-[11px] tracking-widest uppercase font-bold text-slate-500">
                STATE BOARD OF TECHNICAL EDUCATION, BIHAR
              </div>
              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-slate-900">
                {material.type === 'PYQ' ? 'Diploma End Semester Examination' : 'Academic Study Material & Notes'}
              </h2>
              <div className="text-xs font-semibold text-slate-700">
                Subject: <span className="underline">{material.subjectName}</span> (Course Code: {material.subjectCode})
              </div>
              <div className="flex justify-between items-center text-xs font-mono font-medium pt-2 text-slate-600">
                <span>Branch: Electrical Engineering / Core</span>
                <span>Semester: {material.semester}st</span>
                <span>Time: 3 Hours</span>
                <span>Max Marks: 70</span>
              </div>
            </div>

            {/* Notice / Rules */}
            <div className="bg-slate-50 p-3 rounded text-[11px] text-slate-600 space-y-1 border border-slate-200">
              <p><strong>General Instructions:</strong></p>
              <p>1. The marks are indicated against the right side of questions.</p>
              <p>2. Group A consists of 20 Multiple Choice Questions of 1 mark each (Compulsory).</p>
              <p>3. Group B consists of 7 Short Answer Questions. Attempt any 5 (4 marks each = 20 Marks).</p>
              <p>4. Group C consists of 7 Long Analytical Questions. Attempt any 5 (6 marks each = 30 Marks).</p>
            </div>

            {/* Detailed Content / Questions from Material */}
            <div className="space-y-6 pt-2">
              {material.previewSummary.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 p-2 rounded border-l-4 border-slate-900">
                    {section.sectionTitle}
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-800 font-sans leading-relaxed">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-2.5 bg-slate-50/80 rounded border border-slate-200/60">
                        <div className="font-medium">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Raw Text Extract Preview */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Document Transcript Summary
              </div>
              <pre className="text-xs font-mono bg-slate-100 p-4 rounded text-slate-800 whitespace-pre-wrap leading-relaxed overflow-x-auto border border-slate-200">
                {material.pdfPreviewText}
              </pre>
            </div>

            {/* End of Page Watermark */}
            <div className="pt-8 text-center text-[11px] text-slate-400 border-t border-slate-200 flex items-center justify-between font-mono">
              <span>SBTE Bihar Official Syllabus Compliant</span>
              <span>Page {currentPage} of {totalPages}</span>
              <span>Polytechnic Semester Hub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
