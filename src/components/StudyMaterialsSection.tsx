import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Bookmark, 
  BookmarkCheck, 
  Filter, 
  Search, 
  Star, 
  CheckCircle2,
  Calendar,
  Layers,
  BookOpen,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { STUDY_MATERIALS } from '../data/studyMaterials';
import { BRANCHES } from '../data/sbteCurriculum';
import { StudyMaterial, MaterialType } from '../types';

interface StudyMaterialsSectionProps {
  selectedSubjectCodeFilter: string | null;
  onClearSubjectFilter: () => void;
  onOpenPdfModal: (material: StudyMaterial) => void;
}

export const StudyMaterialsSection: React.FC<StudyMaterialsSectionProps> = ({
  selectedSubjectCodeFilter,
  onClearSubjectFilter,
  onOpenPdfModal,
}) => {
  const [selectedType, setSelectedType] = useState<MaterialType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('polytechnic_bookmarked_materials');
      return saved ? JSON.parse(saved) : ['mat-bee-pyq-2024', 'mat-bee-notes-ch1'];
    } catch {
      return ['mat-bee-pyq-2024'];
    }
  });
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('polytechnic_bookmarked_materials', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleDownload = (material: StudyMaterial) => {
    setDownloadNotification(`Starting high-speed download: ${material.title}...`);
    setTimeout(() => {
      setDownloadNotification(null);
    }, 3500);

    const element = document.createElement('a');
    const content = `=====================================================
POLYTECHNIC SEMESTER - SBTE BIHAR STUDY RESOURCE
=====================================================
Title: ${material.title}
Subject: ${material.subjectName} (Code: ${material.subjectCode})
Semester: ${material.semester} | Type: ${material.type}
Published / Session: ${material.year || '2024-2025'}
Pages: ${material.pages} | Contributor: ${material.authorOrProvider}
Description: ${material.description}

TABLE OF CONTENTS & KEY HIGHLIGHTS:
${material.previewSummary.map(s => `\n[${s.sectionTitle}]\n${s.items.map(i => ` - ${i}`).join('\n')}`).join('\n')}

FULL EXTRACT:
${material.pdfPreviewText}

=====================================================
Downloaded from Polytechnic Semester
Free Academic Portal for Bihar Polytechnic (SBTE) Students
sbteonline.bihar.gov.in verified curriculum
=====================================================`;

    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${material.subjectCode}_${material.type.replace(/\s+/g, '_')}_${material.year || '2024'}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const filterTypes: (MaterialType | 'ALL')[] = [
    'ALL',
    'PYQ',
    'Notes',
    'Important Questions',
    'Formula Sheet',
  ];

  const filteredMaterials = useMemo(() => {
    return STUDY_MATERIALS.filter((mat) => {
      // Type filter
      if (selectedType !== 'ALL' && mat.type !== selectedType) return false;

      // Subject code filter (from props)
      if (selectedSubjectCodeFilter && mat.subjectCode !== selectedSubjectCodeFilter) return false;

      // Year filter
      if (selectedYear !== 'ALL' && mat.year !== selectedYear) return false;

      // Only bookmarked
      if (onlyBookmarked && !bookmarkedIds.includes(mat.id)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = mat.title.toLowerCase().includes(query);
        const matchesSubject = mat.subjectName.toLowerCase().includes(query);
        const matchesCode = mat.subjectCode.toLowerCase().includes(query);
        const matchesDesc = mat.description.toLowerCase().includes(query);
        const matchesTopics = mat.previewSummary.some(s => 
          s.items.some(item => item.toLowerCase().includes(query))
        );
        if (!matchesTitle && !matchesSubject && !matchesCode && !matchesDesc && !matchesTopics) {
          return false;
        }
      }

      return true;
    });
  }, [selectedType, selectedSubjectCodeFilter, selectedYear, onlyBookmarked, bookmarkedIds, searchQuery]);

  return (
    <section id="pyqs-notes" className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
              Handwritten Notes, PYQs & Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Study Material Repository
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Download and preview chapter-wise handwritten notes by Bihar Polytechnic toppers, official SBTE previous year question papers, and high-yield formula sheets.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                onlyBookmarked
                  ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {onlyBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              <span>Saved Items ({bookmarkedIds.length})</span>
            </button>
          </div>
        </div>

        {/* Active Subject Filter Banner if selected from Syllabus */}
        {selectedSubjectCodeFilter && (
          <div className="mb-6 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl flex items-center justify-between text-xs text-amber-900 dark:text-amber-200">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Filtered by Subject Code:</span>
              <span className="font-mono bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 rounded font-bold">
                {selectedSubjectCodeFilter}
              </span>
              <span>·</span>
              <span>Showing matching notes and exam papers</span>
            </div>
            <button
              onClick={onClearSubjectFilter}
              className="text-amber-700 dark:text-amber-400 hover:underline font-semibold"
            >
              Clear Subject Filter
            </button>
          </div>
        )}

        {/* Download notification alert */}
        {downloadNotification && (
          <div className="mb-6 p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadNotification}</span>
          </div>
        )}

        {/* Search & Filter Toolbar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes by topic (e.g., Thevenin, Matrices, 2024 PYQ, Physics)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>

            {/* Year selector */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400">Exam Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="ALL">All Sessions</option>
                <option value="2025">2025 Model</option>
                <option value="2024">2024 Exam</option>
                <option value="2023">2023 Exam</option>
              </select>
            </div>
          </div>

          {/* Material Type Tabs (Functional Interactive Controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {filterTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? 'bg-slate-900 dark:bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {type === 'ALL' ? 'All Resources' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>
            Found <strong className="text-slate-900 dark:text-white tabular-nums">{filteredMaterials.length}</strong> study materials
          </span>
          <span className="hidden sm:inline">All files are verified with SBTE Bihar syllabus</span>
        </div>

        {/* Study Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMaterials.map((mat) => {
            const isBookmarked = bookmarkedIds.includes(mat.id);

            return (
              <div
                key={mat.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                {/* Card Top */}
                <div className="p-5 space-y-3">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">
                        {mat.subjectCode}
                      </span>
                      <span>·</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {mat.type}
                      </span>
                      {mat.year && (
                        <>
                          <span>·</span>
                          <span>{mat.year}</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={() => toggleBookmark(mat.id)}
                      className="p-1.5 text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-colors"
                      title={isBookmarked ? 'Remove bookmark' : 'Save resource'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Subject */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                      {mat.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                      {mat.subjectName} · Semester {mat.semester}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {mat.description}
                  </p>

                  {/* Quick Topics Preview Box */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 text-xs space-y-1.5">
                    <div className="font-semibold text-slate-700 dark:text-slate-300 text-[11px] uppercase tracking-wider">
                      {mat.previewSummary[0]?.sectionTitle || 'Content Highlights'}
                    </div>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                      {mat.previewSummary[0]?.items.slice(0, 2).map((item, i) => (
                        <li key={i} className="line-clamp-1 flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold shrink-0">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Metadata and Action Buttons */}
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200 tabular-nums">
                        {mat.rating}
                      </span>
                      <span>·</span>
                      <span className="tabular-nums">{mat.pages} Pages</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] tabular-nums font-mono text-slate-400">
                      <span>{mat.fileSize}</span>
                      <span>·</span>
                      <span>{mat.downloads} DLs</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenPdfModal(mat)}
                      className="py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview PDF</span>
                    </button>

                    <button
                      onClick={() => handleDownload(mat)}
                      className="py-2 px-3 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMaterials.length === 0 && (
          <div className="p-12 text-center bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              No study materials found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query, clearing filters, or switching material types.
            </p>
            <button
              onClick={() => {
                setSelectedType('ALL');
                setSearchQuery('');
                setSelectedYear('ALL');
                setOnlyBookmarked(false);
                onClearSubjectFilter();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-amber-600 rounded-lg hover:bg-amber-700"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
