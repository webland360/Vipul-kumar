import React, { useState } from 'react';
import { Search, X, BookOpen, Building2, FileText, ArrowRight } from 'lucide-react';
import { SBTE_SUBJECTS } from '../data/sbteCurriculum';
import { BIHAR_POLYTECHNIC_COLLEGES } from '../data/collegesData';
import { STUDY_MATERIALS } from '../data/studyMaterials';
import { Subject, PolytechnicCollege, StudyMaterial } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubject: (code: string) => void;
  onSelectCollege: (collegeId: string) => void;
  onSelectMaterial: (material: StudyMaterial) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSubject,
  onSelectCollege,
  onSelectMaterial,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.toLowerCase().trim();

  const matchedSubjects = query
    ? SBTE_SUBJECTS.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.code.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      ).slice(0, 4)
    : [];

  const matchedColleges = query
    ? BIHAR_POLYTECHNIC_COLLEGES.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.district.toLowerCase().includes(query) ||
          c.city.toLowerCase().includes(query)
      ).slice(0, 3)
    : [];

  const matchedMaterials = query
    ? STUDY_MATERIALS.filter(
        (m) =>
          m.title.toLowerCase().includes(query) ||
          m.subjectCode.toLowerCase().includes(query) ||
          m.subjectName.toLowerCase().includes(query)
      ).slice(0, 3)
    : [];

  const hasResults =
    matchedSubjects.length > 0 || matchedColleges.length > 0 || matchedMaterials.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search subject code (2420104), subject name, college or PYQ..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4 text-xs">
          {!searchTerm && (
            <div className="py-8 text-center text-slate-500 dark:text-slate-400 space-y-2">
              <p>Type to search across all Bihar Polytechnic branches & colleges</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['2420104', 'Mathematics', 'Applied Physics-B', 'GP Patna-7', 'PYQ 2024'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-amber-950/60 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchTerm && !hasResults && (
            <div className="py-8 text-center text-slate-500 dark:text-slate-400">
              No matching courses, colleges, or study papers found for &ldquo;{searchTerm}&rdquo;.
            </div>
          )}

          {/* Subjects results */}
          {matchedSubjects.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-500" />
                <span>Curriculum Subjects ({matchedSubjects.length})</span>
              </div>
              <div className="space-y-1">
                {matchedSubjects.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => {
                      onSelectSubject(s.code);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{s.name}</span>
                        <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">
                          {s.code}
                        </span>
                      </div>
                      <div className="text-slate-500 mt-0.5 text-[11px]">
                        Sem {s.semester} · {s.credits} Credits · {s.marks.endSemTheory} Marks Theory
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colleges results */}
          {matchedColleges.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-500" />
                <span>Bihar Polytechnic Colleges ({matchedColleges.length})</span>
              </div>
              <div className="space-y-1">
                {matchedColleges.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectCollege(c.id);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {c.name}
                      </div>
                      <div className="text-slate-500 mt-0.5 text-[11px]">
                        {c.district} District · Est. {c.establishedYear} · {c.totalSeats} Seats
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Materials results */}
          {matchedMaterials.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                <span>Study Notes & PYQs ({matchedMaterials.length})</span>
              </div>
              <div className="space-y-1">
                {matchedMaterials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      onSelectMaterial(m);
                      onClose();
                    }}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between text-left transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {m.title}
                      </div>
                      <div className="text-slate-500 mt-0.5 text-[11px]">
                        {m.type} · Code {m.subjectCode} · {m.pages} Pages
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
