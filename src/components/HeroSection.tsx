import React from 'react';
import { 
  ArrowRight, 
  Building2, 
  Download, 
  BookOpen, 
  FileCheck2, 
  Users, 
  School, 
  Sparkles,
  Search,
  Bell
} from 'lucide-react';
import { SBTE_NOTICES } from '../data/studyMaterials';

interface HeroSectionProps {
  onExploreSyllabus: () => void;
  onExploreColleges: () => void;
  onExploreMaterials: () => void;
  onSearchFocus: () => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSyllabus,
  onExploreColleges,
  onExploreMaterials,
  onSearchFocus,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      {/* Background subtle mesh grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Official Notice Ticker */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200/60 dark:border-amber-900/40 py-2.5 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs gap-3">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 shrink-0 font-medium">
            <Bell className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="font-semibold">SBTE Update:</span>
          </div>
          <div className="truncate text-slate-700 dark:text-slate-300">
            <span className="text-amber-700 dark:text-amber-400 font-medium mr-2">{SBTE_NOTICES[0].date}</span>
            <span>{SBTE_NOTICES[0].title}</span>
          </div>
          <button 
            onClick={onExploreMaterials}
            className="hidden sm:inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-semibold hover:underline shrink-0"
          >
            <span>{SBTE_NOTICES[0].linkText}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 tracking-wider uppercase">
                State Board of Technical Education, Bihar (SBTE)
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
                Bihar Polytechnic (SBTE) All-in-One Study Hub
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Syllabus, Notes & PYQs at your fingertips. Built exclusively for Bihar diploma engineering students with the latest curriculum, marks breakdown, previous year question papers, and government college directory.
              </p>
            </div>

            {/* Quick Search Bar */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={onSearchFocus}
                  placeholder="Search subject (e.g. 2420104, Basic Electrical, Math, GP Patna)..."
                  className="w-full pl-10 pr-24 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-sm"
                />
                <button
                  onClick={onSearchFocus}
                  className="absolute right-2 px-3 py-1.5 bg-slate-900 dark:bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-amber-700 transition-colors"
                >
                  Search
                </button>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Popular:</span>
                <button 
                  onClick={() => setSearchQuery('2420104')}
                  className="hover:text-amber-600 dark:hover:text-amber-400 underline decoration-slate-300"
                >
                  Code 2420104
                </button>
                <span>·</span>
                <button 
                  onClick={() => setSearchQuery('Mathematics')}
                  className="hover:text-amber-600 dark:hover:text-amber-400 underline decoration-slate-300"
                >
                  Math-I
                </button>
                <span>·</span>
                <button 
                  onClick={() => setSearchQuery('GP Patna-7')}
                  className="hover:text-amber-600 dark:hover:text-amber-400 underline decoration-slate-300"
                >
                  GP Patna-7
                </button>
              </div>
            </div>

            {/* Quick Action Buttons mandated by user prompt */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreSyllabus}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-sm shadow-amber-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] whitespace-nowrap shrink-0"
              >
                <span>Explore Branch Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreColleges}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all whitespace-nowrap shrink-0"
              >
                <Building2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>Check Bihar Polytechnic Colleges</span>
              </button>
            </div>

            {/* Clean unboxed proof metadata */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <School className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-slate-900 dark:text-white tabular-nums">44+</span> Govt Colleges
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-semibold text-slate-900 dark:text-white tabular-nums">1st to 6th</span> Semesters
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-semibold text-slate-900 dark:text-white">SBTE New Curriculum</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <Download className="w-3.5 h-3.5 text-purple-500" />
                <span className="font-semibold text-slate-900 dark:text-white tabular-nums">100% Free</span> PDFs
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Banner */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg group bg-slate-100 dark:bg-slate-800">
              <img
                src="/src/assets/images/hero_bihar_polytechnic_1793108891430.jpg"
                alt="Bihar Polytechnic Engineering Students in Laboratory"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <span>Electrical Engineering 1st Sem Focus</span>
                  <span>·</span>
                  <span>New SBTE Scheme</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-snug">
                  8 Courses Detailed with Theory & Practical Mark Breakdowns
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                  Code 2400101, 2400102B, 2420104, 2415105, 2418105, 2420105 and co-curriculars.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={onExploreSyllabus}
                    className="px-3 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    View Curriculum Now
                  </button>
                  <button
                    onClick={onExploreMaterials}
                    className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-lg hover:bg-white/30 transition-colors"
                  >
                    View 2024 PYQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
