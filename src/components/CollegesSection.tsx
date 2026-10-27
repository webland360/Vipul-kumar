import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  Search, 
  Filter, 
  ShieldCheck, 
  Copy,
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { BIHAR_POLYTECHNIC_COLLEGES } from '../data/collegesData';
import { PolytechnicCollege } from '../types';

export const CollegesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('ALL');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'ALL' | 'Government' | "Government Women's">('ALL');
  const [copiedContactId, setCopiedContactId] = useState<string | null>(null);

  const availableBranchOptions = [
    'ALL',
    'Electrical Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Computer Science & Engineering',
    'Electronics Engineering',
  ];

  const filteredColleges = useMemo(() => {
    return BIHAR_POLYTECHNIC_COLLEGES.filter((col) => {
      // Type filter
      if (selectedTypeFilter !== 'ALL' && col.type !== selectedTypeFilter) return false;

      // Branch filter
      if (selectedBranchFilter !== 'ALL' && !col.branches.includes(selectedBranchFilter)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = col.name.toLowerCase().includes(query);
        const matchesDistrict = col.district.toLowerCase().includes(query);
        const matchesCity = col.city.toLowerCase().includes(query);
        const matchesShort = col.shortCode.toLowerCase().includes(query);
        const matchesPrincipal = col.principalName.toLowerCase().includes(query);
        if (!matchesName && !matchesDistrict && !matchesCity && !matchesShort && !matchesPrincipal) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedBranchFilter, selectedTypeFilter]);

  const handleCopyContact = (col: PolytechnicCollege) => {
    const text = `${col.name}\nPhone: ${col.contact.phone}\nEmail: ${col.contact.email}\nAddress: ${col.contact.address}`;
    navigator.clipboard.writeText(text);
    setCopiedContactId(col.id);
    setTimeout(() => {
      setCopiedContactId(null);
    }, 2500);
  };

  return (
    <section id="colleges" className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
              Government Institutes of Bihar
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Bihar Polytechnic College Details Directory
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Directory of state government polytechnic institutes affiliated with SBTE Bihar & AICTE. Check total intake capacity, branch availability, establishment years, and principal contact details.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 text-xs bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs self-start lg:self-auto shrink-0">
            <div>
              <span className="text-slate-400 block">Listed Institutes</span>
              <span className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                {BIHAR_POLYTECHNIC_COLLEGES.length} Campuses
              </span>
            </div>
            <div className="h-7 w-[1px] bg-slate-200 dark:bg-slate-800" />
            <div>
              <span className="text-slate-400 block">Total Diploma Seats</span>
              <span className="text-base font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                12,000+ State Seats
              </span>
            </div>
          </div>
        </div>

        {/* Directory Visual Spotlight Card */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 grid grid-cols-1 lg:grid-cols-12 shadow-xs">
          <div className="lg:col-span-5 relative h-56 sm:h-64 lg:h-auto overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img
              src="/src/assets/images/polytechnic_campus_building_1793108891308.jpg"
              alt="Bihar Government Polytechnic College Academic Campus"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <span className="text-[11px] font-semibold text-amber-300 block uppercase">
                Premier Technical Heritage
              </span>
              <span className="text-sm font-bold">
                Serving Bihar Technical Education Since 1949
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Department of Science & Technology (DST), Govt. of Bihar</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Centrally Regulated Admission through BCECE (DCECE)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              All seats in Government Polytechnic colleges across Bihar are allocated through the Diploma Certificate Entrance Competitive Examination (DCECE) conducted annually by BCECE Board. All institutions are affiliated with SBTE Bihar.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% AICTE Approved</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Subsidized Government Fee Structure</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Campus Placement Drives</span>
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls Toolbar */}
        <div className="mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search college by name or district (e.g., Patna, Muzaffarpur, Darbhanga, Gaya)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>

            {/* Branch Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedBranchFilter}
                onChange={(e) => setSelectedBranchFilter(e.target.value)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="ALL">All Branch Offerings</option>
                {availableBranchOptions.filter(b => b !== 'ALL').map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedTypeFilter}
                onChange={(e) => setSelectedTypeFilter(e.target.value as any)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="ALL">All College Types</option>
                <option value="Government">Co-Ed Government Polytechnics</option>
                <option value="Government Women's">Women's Polytechnics (GWPC)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Copy Notification Toast */}
        {copiedContactId && (
          <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>College contact information copied to clipboard!</span>
          </div>
        )}

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredColleges.map((col) => (
            <div
              key={col.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              {/* Card Body */}
              <div className="p-5 space-y-3.5">
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      Est. {col.establishedYear}
                    </span>
                    <span>·</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {col.district} District
                    </span>
                  </div>

                  <span className="tabular-nums font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                    {col.totalSeats} Seats
                  </span>
                </div>

                {/* College Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {col.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {col.hindiName}
                  </p>
                </div>

                {/* Branches Available List */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Branches Offered ({col.branches.length}):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {col.branches.map((b, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Campus & Facilities */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Campus Area:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{col.campusArea}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Hostel Facility:</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {col.hostelAvailable ? 'Available on Campus' : 'Day Scholar'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Principal:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{col.principalName}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Contact Info & Action Buttons */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 space-y-3">
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-slate-700 dark:text-slate-300">{col.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate text-slate-700 dark:text-slate-300">{col.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="truncate text-[11px] text-slate-500">{col.contact.address}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => handleCopyContact(col)}
                    className="py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Info</span>
                  </button>

                  <a
                    href={`mailto:${col.contact.email}`}
                    className="py-2 px-3 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact College</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredColleges.length === 0 && (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              No polytechnic colleges match your criteria
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Please try searching another district name or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBranchFilter('ALL');
                setSelectedTypeFilter('ALL');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-amber-600 rounded-lg hover:bg-amber-700"
            >
              Reset College Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
