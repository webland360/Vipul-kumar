import React, { useState } from 'react';
import { 
  Zap, 
  Laptop, 
  Building2, 
  Wrench, 
  Cpu, 
  Car, 
  Download, 
  BookOpen, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Award, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  ExternalLink,
  Table as TableIcon
} from 'lucide-react';
import { BRANCHES, SBTE_SUBJECTS } from '../data/sbteCurriculum';
import { BranchId, Subject } from '../types';

interface SyllabusSectionProps {
  onSelectSubjectForMaterials: (subjectCode: string) => void;
  onOpenPdfViewer: (title: string, subjectCode: string, content: string) => void;
}

export const SyllabusSection: React.FC<SyllabusSectionProps> = ({
  onSelectSubjectForMaterials,
  onOpenPdfViewer,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<BranchId>('ee');
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [expandedSubjectCode, setExpandedSubjectCode] = useState<string | null>('2420104'); // BEE expanded by default
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const semesters = [1, 2, 3, 4, 5, 6];

  // Filter subjects based on branch & semester
  const currentSubjects = SBTE_SUBJECTS.filter(
    (s) => s.branchId === selectedBranch && s.semester === selectedSemester
  );

  // Calculate semester metrics
  const totalCredits = currentSubjects.reduce((acc, curr) => acc + curr.credits, 0);
  const totalMarks = currentSubjects.reduce((acc, curr) => acc + curr.marks.totalMarks, 0);
  const totalCiHours = currentSubjects.reduce((acc, curr) => acc + curr.ciHours.totalHours, 0);

  const getBranchIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return Zap;
      case 'Laptop': return Laptop;
      case 'Building2': return Building2;
      case 'Wrench': return Wrench;
      case 'Cpu': return Cpu;
      case 'Car': return Car;
      default: return Zap;
    }
  };

  const handleDownloadSyllabus = (subject: Subject) => {
    setDownloadSuccessToast(`Downloading official SBTE syllabus for ${subject.name} (${subject.code})...`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 3500);

    // Also trigger file download in browser
    const element = document.createElement('a');
    const fileContent = `=====================================================
STATE BOARD OF TECHNICAL EDUCATION, BIHAR (SBTE)
OFFICIAL CURRICULUM SYLLABUS DOCUMENT
=====================================================
Branch: ${BRANCHES.find(b => b.id === subject.branchId)?.name}
Semester: ${subject.semester}st/nd/rd/th Semester
Subject Name: ${subject.name}
Course Code: ${subject.code}
Credits: ${subject.credits}
Total CI Hours: ${subject.ciHours.totalHours} hrs (L: ${subject.ciHours.lecture}, T: ${subject.ciHours.tutorial}, P: ${subject.ciHours.practical})

MARKS EVALUATION SCHEME:
- End Semester Theory Exam: ${subject.marks.endSemTheory} Marks
- Progressive Assessment (Internal): ${subject.marks.progressiveAssessment} Marks
${subject.marks.termWorkOrPracticalEndSem ? `- Practical / Term Work End Sem: ${subject.marks.termWorkOrPracticalEndSem} Marks\n` : ''}
${subject.marks.termWorkOrPracticalInternal ? `- Practical / Term Work Internal: ${subject.marks.termWorkOrPracticalInternal} Marks\n` : ''}
Total Marks: ${subject.marks.totalMarks}

DETAILED COURSE MODULES:
${subject.modules.map((m, idx) => `\n[${m.title}]\n${m.topics.map(t => `  - ${t}`).join('\n')}`).join('\n')}

RECOMMENDED TEXTBOOKS:
${subject.recommendedBooks.map(b => `  * ${b}`).join('\n')}

Downloaded via Polytechnic Semester (Bihar SBTE Student Portal)
sbte.bihar.gov.in compliant
=====================================================`;
    const file = new Blob([fileContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = subject.pdfDownloadName.replace('.pdf', '.txt');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="syllabus" className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
              Curriculum & Scheme
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Branch-Wise Syllabus Selection
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Select your engineering branch and semester to view courses, credit distribution, CI hours, and progressive assessment marks breakdown.
            </p>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg self-start md:self-auto shrink-0 shadow-sm">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'cards'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Detailed Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'table'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>SBTE Table View</span>
            </button>
          </div>
        </div>

        {/* Branch Selection Pills / Tabs (Functional Interactive Controls) */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Step 1: Choose Your Diploma Branch
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {BRANCHES.map((branch) => {
              const Icon = getBranchIcon(branch.icon);
              const isSelected = selectedBranch === branch.id;
              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.id)}
                  className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-amber-500 dark:border-amber-500 shadow-sm ring-2 ring-amber-500/20'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase">
                      {branch.code}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white line-clamp-1">
                    {branch.name}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {branch.hindiName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Semester Selection Tabs (Functional Interactive Controls) */}
        <div className="mb-8">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
            Step 2: Choose Semester
          </label>
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-900/90 rounded-xl overflow-x-auto border border-slate-200 dark:border-slate-800">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`flex-1 min-w-[100px] py-2 px-3 text-xs font-semibold rounded-lg transition-all whitespace-nowrap text-center ${
                  selectedSemester === sem
                    ? 'bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Semester {sem}
                {sem === 1 && selectedBranch === 'ee' && (
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-normal">
                    New SBTE Scheme
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Download Feedback Notification */}
        {downloadSuccessToast && (
          <div className="mb-6 p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300 animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{downloadSuccessToast}</span>
            </div>
            <button 
              onClick={() => setDownloadSuccessToast(null)}
              className="text-emerald-700 hover:underline font-semibold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Semester Overview KPI Bar */}
        <div className="mb-8 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span>{BRANCHES.find(b => b.id === selectedBranch)?.name}</span>
                <span className="mx-1.5">·</span>
                <span className="font-semibold text-slate-900 dark:text-white">Semester {selectedSemester} Curriculum</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {currentSubjects.length} Courses Prescribed by SBTE Bihar
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs divide-x divide-slate-200 dark:divide-slate-800">
              <div className="pr-4">
                <span className="text-slate-400 block">Total Credits</span>
                <span className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                  {totalCredits}
                </span>
              </div>
              <div className="px-4">
                <span className="text-slate-400 block">Total Marks</span>
                <span className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                  {totalMarks}
                </span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400 block">CI Hours</span>
                <span className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                  {totalCiHours} hrs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content View: Cards Mode */}
        {viewMode === 'cards' && (
          <div className="space-y-4">
            {currentSubjects.map((subject, idx) => {
              const isExpanded = expandedSubjectCode === subject.code;
              return (
                <div
                  key={subject.code}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  {/* Card Header & Primary Stats */}
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Course Title and Code */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-mono font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                            Code: {subject.code}
                          </span>
                          <span>·</span>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {subject.category}
                          </span>
                          <span>·</span>
                          <span className="tabular-nums font-semibold text-slate-900 dark:text-white">
                            {subject.credits} Credits
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {idx + 1}. {subject.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                          {subject.description}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 shrink-0 pt-2 lg:pt-0">
                        <button
                          onClick={() => onSelectSubjectForMaterials(subject.code)}
                          className="px-3.5 py-2 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/40 border border-amber-200 dark:border-amber-800 rounded-lg transition-colors whitespace-nowrap"
                          title="View chapter notes & PYQs"
                        >
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Notes & PYQs ({subject.notesCount + subject.pyqsCount})</span>
                          </span>
                        </button>

                        <button
                          onClick={() => handleDownloadSyllabus(subject)}
                          className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5"
                          title="Download Syllabus PDF"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Syllabus PDF</span>
                        </button>

                        <button
                          onClick={() => setExpandedSubjectCode(isExpanded ? null : subject.code)}
                          className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          aria-label={isExpanded ? 'Collapse course details' : 'Expand course details'}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Instruction Hours & Marks Breakdown Grid */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
                      {/* CI Hours */}
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Class Instruction</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono tabular-nums">
                          {subject.ciHours.totalHours} Hours
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          L:{subject.ciHours.lecture} T:{subject.ciHours.tutorial} P:{subject.ciHours.practical}
                        </span>
                      </div>

                      {/* End Sem Theory Exam */}
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-400 text-[11px] block">End Sem Theory</span>
                        <span className="font-semibold text-slate-900 dark:text-white font-mono tabular-nums">
                          {subject.marks.endSemTheory > 0 ? `${subject.marks.endSemTheory} Marks` : 'N/A'}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          {subject.marks.endSemTheory > 0 ? 'SBTE Board Exam' : 'Continuous Work'}
                        </span>
                      </div>

                      {/* Progressive Assessment (Internal) */}
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Progressive Assmt. (PA)</span>
                        <span className="font-semibold text-slate-900 dark:text-white font-mono tabular-nums">
                          {subject.marks.progressiveAssessment > 0 ? `${subject.marks.progressiveAssessment} Marks` : 'N/A'}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          Class Test + TA
                        </span>
                      </div>

                      {/* Practical / Term Work */}
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Practical / Term Work</span>
                        <span className="font-semibold text-slate-900 dark:text-white font-mono tabular-nums">
                          {subject.marks.termWorkOrPracticalEndSem 
                            ? `${subject.marks.termWorkOrPracticalEndSem + (subject.marks.termWorkOrPracticalInternal || 0)} Marks` 
                            : 'N/A'}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          Lab & Workshop
                        </span>
                      </div>

                      {/* Passing Criteria */}
                      <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Minimum Passing</span>
                        <span className="font-semibold text-slate-900 dark:text-white font-mono tabular-nums">
                          {subject.marks.endSemTheory >= 70 ? '28/70 (40%)' : '40% Overall'}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          SBTE Regulation
                        </span>
                      </div>

                      {/* Total Marks */}
                      <div className="bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200/50 dark:border-amber-900/50">
                        <span className="text-amber-800 dark:text-amber-400 text-[11px] block font-medium">Grand Total</span>
                        <span className="font-bold text-amber-900 dark:text-amber-200 font-mono tabular-nums text-sm">
                          {subject.marks.totalMarks} Marks
                        </span>
                        <span className="text-[10px] text-amber-700/80 dark:text-amber-400/80 block">
                          {subject.credits} Credits Weight
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Module Syllabus Detail */}
                  {isExpanded && (
                    <div className="px-5 pb-6 pt-2 bg-slate-50/70 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 space-y-5 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Units & Topics */}
                        <div className="space-y-3">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-amber-500" />
                            <span>Course Units & Prescribed Topics</span>
                          </h5>
                          <div className="space-y-3">
                            {subject.modules.map((mod, mIdx) => (
                              <div key={mIdx} className="bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs">
                                <div className="font-semibold text-slate-900 dark:text-white mb-1.5">
                                  {mod.title}
                                </div>
                                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                                  {mod.topics.map((topic, tIdx) => (
                                    <li key={tIdx} className="flex items-start gap-1.5">
                                      <span className="text-amber-500 shrink-0 font-bold">›</span>
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Reference Books & Assessment Details */}
                        <div className="space-y-4">
                          <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs space-y-2.5">
                            <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                              <span>Prescribed Reference Books (SBTE)</span>
                            </h5>
                            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                              {subject.recommendedBooks.map((book, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2">
                                  <span className="text-slate-400 font-mono">{bIdx + 1}.</span>
                                  <span>{book}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/70 dark:border-slate-700 text-xs space-y-2">
                            <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                              <span>SBTE Examination Pattern Breakdown</span>
                            </h5>
                            <div className="space-y-1 text-slate-600 dark:text-slate-300">
                              <p>• <strong>Group A (20 Marks)</strong>: 20 Objective Type MCQs (1 mark each, compulsory).</p>
                              <p>• <strong>Group B (20 Marks)</strong>: 5 Short Answer Questions to attempt out of 7 (4 marks each).</p>
                              <p>• <strong>Group C (30 Marks)</strong>: 5 Descriptive / Numerical Questions to attempt out of 7 (6 marks each).</p>
                              <p className="text-[11px] text-amber-600 dark:text-amber-400 pt-1">
                                Passing: Minimum 28 marks in End Sem Theory + 40 marks combined with Progressive Assessment.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pt-1">
                            <button
                              onClick={() => onSelectSubjectForMaterials(subject.code)}
                              className="flex-1 py-2 px-3 text-center text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm transition-colors"
                            >
                              Explore Study Material for this Subject
                            </button>
                            <button
                              onClick={() => handleDownloadSyllabus(subject)}
                              className="py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors flex items-center gap-1.5"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download PDF</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Content View: SBTE Tabular View */}
        {viewMode === 'table' && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Subject Code</th>
                    <th className="py-3 px-4">Subject Title</th>
                    <th className="py-3 px-3 text-center">Credits</th>
                    <th className="py-3 px-3 text-center">CI Hours (L-T-P)</th>
                    <th className="py-3 px-3 text-center">End Sem Theory</th>
                    <th className="py-3 px-3 text-center">Progressive Assmt.</th>
                    <th className="py-3 px-3 text-center">Practical / Term</th>
                    <th className="py-3 px-3 text-center">Total Marks</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {currentSubjects.map((s) => (
                    <tr key={s.code} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-amber-600 dark:text-amber-400">
                        {s.code}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 dark:text-white">{s.name}</div>
                        <div className="text-[11px] text-slate-500">{s.category}</div>
                      </td>
                      <td className="py-3 px-3 text-center font-bold font-mono text-slate-900 dark:text-white">
                        {s.credits}
                      </td>
                      <td className="py-3 px-3 text-center font-mono text-slate-600 dark:text-slate-400">
                        {s.ciHours.lecture}-{s.ciHours.tutorial}-{s.ciHours.practical} ({s.ciHours.totalHours}h)
                      </td>
                      <td className="py-3 px-3 text-center font-mono">
                        {s.marks.endSemTheory > 0 ? (
                          <span className="font-medium text-slate-900 dark:text-white">{s.marks.endSemTheory}</span>
                        ) : (
                          <span className="text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center font-mono">
                        {s.marks.progressiveAssessment > 0 ? (
                          <span className="font-medium text-slate-900 dark:text-white">{s.marks.progressiveAssessment}</span>
                        ) : (
                          <span className="text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center font-mono">
                        {s.marks.termWorkOrPracticalEndSem || s.marks.termWorkOrPracticalInternal ? (
                          <span className="font-medium text-slate-900 dark:text-white">
                            {(s.marks.termWorkOrPracticalEndSem || 0) + (s.marks.termWorkOrPracticalInternal || 0)}
                          </span>
                        ) : (
                          <span className="text-slate-400">-</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center font-bold font-mono text-amber-600 dark:text-amber-400">
                        {s.marks.totalMarks}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onSelectSubjectForMaterials(s.code)}
                            className="p-1.5 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-md transition-colors"
                            title="Notes & PYQs"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDownloadSyllabus(s)}
                            className="p-1.5 text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                            title="Download Syllabus PDF"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty state safeguard */}
        {currentSubjects.length === 0 && (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Syllabus under compilation for this semester
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We are actively uploading syllabus for this combination. Please check 1st Semester Electrical Engineering for the complete live curriculum.
            </p>
            <button
              onClick={() => {
                setSelectedBranch('ee');
                setSelectedSemester(1);
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-amber-600 rounded-lg hover:bg-amber-700"
            >
              Go to 1st Sem Electrical Engineering
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
