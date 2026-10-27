import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  RotateCcw, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { SBTE_SUBJECTS } from '../data/sbteCurriculum';
import { Subject } from '../types';

interface SgpaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GradeEntry {
  subjectCode: string;
  subjectName: string;
  credits: number;
  gradePoint: number;
}

export const SgpaCalculatorModal: React.FC<SgpaCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Pre-load EE 1st semester subjects
  const defaultSubjects = SBTE_SUBJECTS.filter((s) => s.branchId === 'ee' && s.semester === 1);

  const [grades, setGrades] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    defaultSubjects.forEach((s) => {
      initial[s.code] = 9; // Default A+ (Grade point 9)
    });
    return initial;
  });

  if (!isOpen) return null;

  const GRADE_OPTIONS = [
    { label: 'O (Outstanding)', point: 10, marksRange: '90 - 100%' },
    { label: 'A+ (Excellent)', point: 9, marksRange: '80 - 89%' },
    { label: 'A (Very Good)', point: 8, marksRange: '70 - 79%' },
    { label: 'B+ (Good)', point: 7, marksRange: '60 - 69%' },
    { label: 'B (Above Average)', point: 6, marksRange: '50 - 59%' },
    { label: 'C (Average)', point: 5, marksRange: '45 - 49%' },
    { label: 'P (Pass)', point: 4, marksRange: '40 - 44%' },
    { label: 'F (Fail)', point: 0, marksRange: '< 40%' },
  ];

  // Calculate SGPA
  const totalCredits = defaultSubjects.reduce((acc, curr) => acc + curr.credits, 0);
  const totalGradePointsEarned = defaultSubjects.reduce((acc, curr) => {
    const pt = grades[curr.code] ?? 8;
    return acc + curr.credits * pt;
  }, 0);

  const sgpa = totalCredits > 0 ? (totalGradePointsEarned / totalCredits) : 0;
  const percentageSbte = Math.max(0, (sgpa - 0.75) * 10);
  const directPercentage = sgpa * 10;

  const handleReset = () => {
    const reset: Record<string, number> = {};
    defaultSubjects.forEach((s) => {
      reset[s.code] = 8;
    });
    setGrades(reset);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shadow-xs">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                SBTE Bihar SGPA & Percentage Calculator
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official Credit-Weighted 10-Point Grading System (1st Sem Electrical Engg)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Result Score Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-xl">
            <div className="text-center sm:text-left">
              <span className="text-xs text-amber-800 dark:text-amber-400 font-medium block">
                Calculated SGPA
              </span>
              <span className="text-3xl font-extrabold text-amber-950 dark:text-amber-200 font-mono tabular-nums">
                {sgpa.toFixed(2)}
                <span className="text-xs font-normal text-slate-500"> / 10.0</span>
              </span>
            </div>

            <div className="text-center sm:text-left sm:border-l sm:border-amber-200 dark:sm:border-amber-900 sm:pl-4">
              <span className="text-xs text-amber-800 dark:text-amber-400 font-medium block">
                SBTE Formula Percentage
              </span>
              <span className="text-2xl font-bold text-amber-950 dark:text-amber-200 font-mono tabular-nums">
                {percentageSbte.toFixed(1)}%
              </span>
              <span className="text-[10px] text-amber-700/80 dark:text-amber-400/80 block">
                Formula: (SGPA - 0.75) × 10
              </span>
            </div>

            <div className="text-center sm:text-left sm:border-l sm:border-amber-200 dark:sm:border-amber-900 sm:pl-4">
              <span className="text-xs text-amber-800 dark:text-amber-400 font-medium block">
                Total Credits / Points
              </span>
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-200 font-mono tabular-nums">
                {totalCredits} <span className="text-xs font-normal text-slate-400">Credits</span>
              </span>
              <span className="text-[10px] text-slate-500 block">
                Earned Points: {totalGradePointsEarned.toFixed(0)}
              </span>
            </div>
          </div>

          {/* Subjects Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Enter Letter Grade for Each Course
              </h4>
              <button
                onClick={handleReset}
                className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All to A</span>
              </button>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
              {defaultSubjects.map((subject) => (
                <div
                  key={subject.code}
                  className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">
                        {subject.code}
                      </span>
                      <span>·</span>
                      <span className="font-medium text-slate-500">
                        {subject.credits} Credits
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {subject.name}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <select
                      value={grades[subject.code] ?? 8}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setGrades((prev) => ({ ...prev, [subject.code]: val }));
                      }}
                      className="px-3 py-1.5 text-xs font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      {GRADE_OPTIONS.map((g) => (
                        <option key={g.point} value={g.point}>
                          {g.label} ({g.point} Pts)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SBTE Guideline Callout */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs text-slate-500 dark:text-slate-400 space-y-1 border border-slate-100 dark:border-slate-800">
            <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-amber-500" />
              <span>SBTE Bihar Official Evaluation Norms</span>
            </div>
            <p>
              Under SBTE semester guidelines, SGPA is calculated as the sum of product of credits and grade points, divided by the total semester credits. For government technical job applications (like Junior Engineer exams), the board specifies equivalent percentage as (SGPA - 0.75) × 10.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-700 rounded-lg transition-colors"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
