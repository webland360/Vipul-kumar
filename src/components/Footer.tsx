import React from 'react';
import { 
  GraduationCap, 
  Heart, 
  ExternalLink, 
  ShieldAlert, 
  FileText, 
  BookOpen, 
  Building2,
  Mail
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCalculator }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Polytechnic Semester
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Bihar Polytechnic (SBTE) All-in-One Study Hub. Providing organized syllabus breakdowns, credit weightings, topper handwritten notes, previous years questions, and government polytechnic directory for diploma engineers.
            </p>
            <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <span>Made with dedication for Bihar Technical Students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('syllabus')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Branch Syllabus
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pyqs-notes')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Notes & PYQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('colleges')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Bihar Colleges Directory
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCalculator}
                  className="hover:text-amber-400 transition-colors"
                >
                  SBTE SGPA Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Student Helpdesk
                </button>
              </li>
            </ul>
          </div>

          {/* Core Branches Covered */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              SBTE Branches
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Electrical Engineering (EE)</li>
              <li>Computer Science & Engg (CSE)</li>
              <li>Civil Engineering (CE)</li>
              <li>Mechanical Engineering (ME)</li>
              <li>Electronics Engineering (ECE)</li>
              <li>Automobile Engineering (AE)</li>
            </ul>
          </div>

          {/* Official Portals */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Official Bihar Links
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://sbteonline.bihar.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>SBTE Bihar Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://bceceboard.bihar.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>BCECE Board (DCECE Admissions)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://state.bihar.gov.in/dst"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>DST Bihar (Dept of Science & Tech)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://pmsonline.bih.nic.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>Post Matric Scholarship Bihar</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer mandated by user prompt */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> This website (&ldquo;Polytechnic Semester&rdquo;) is an independent, non-commercial open educational initiative created strictly for academic assistance, revision, and study purposes of diploma students in Bihar. It is not affiliated with, authorized, endorsed, or officially connected with the State Board of Technical Education (SBTE) Bihar or BCECE Board. For official results, exam forms, and gazettes, please visit <span className="text-amber-400 font-mono">sbteonline.bihar.gov.in</span>.
            </p>
          </div>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Polytechnic Semester. All study resources formatted under fair use for educational purposes.
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Feedback & Privacy
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigate('syllabus')}
              className="hover:text-slate-300 transition-colors"
            >
              SBTE Syllabus 2024-2025
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
