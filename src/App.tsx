/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SyllabusSection } from './components/SyllabusSection';
import { StudyMaterialsSection } from './components/StudyMaterialsSection';
import { CollegesSection } from './components/CollegesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PdfViewerModal } from './components/PdfViewerModal';
import { SgpaCalculatorModal } from './components/SgpaCalculatorModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { StudyMaterial } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('polytechnic_dark_mode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string | null>(null);
  const [heroSearchQuery, setHeroSearchQuery] = useState<string>('');
  
  // Modals state
  const [activePdfMaterial, setActivePdfMaterial] = useState<StudyMaterial | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState<boolean>(false);

  // Apply dark mode class to html element
  useEffect(() => {
    try {
      localStorage.setItem('polytechnic_dark_mode', JSON.stringify(darkMode));
    } catch (e) {
      console.error(e);
    }

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle section scrolling
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a user clicks "Notes & PYQs" from a course in the Syllabus section
  const handleSelectSubjectForMaterials = (subjectCode: string) => {
    setSelectedSubjectFilter(subjectCode);
    scrollToSection('pyqs-notes');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onQuickSearchOpen={() => setIsQuickSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreSyllabus={() => scrollToSection('syllabus')}
          onExploreColleges={() => scrollToSection('colleges')}
          onExploreMaterials={() => scrollToSection('pyqs-notes')}
          onSearchFocus={() => setIsQuickSearchOpen(true)}
          searchQuery={heroSearchQuery}
          setSearchQuery={setHeroSearchQuery}
        />

        {/* 2. Branch-Wise Syllabus Section (with 1st Sem EE real SBTE data) */}
        <SyllabusSection
          onSelectSubjectForMaterials={handleSelectSubjectForMaterials}
          onOpenPdfViewer={(title, subjectCode, content) => {
            const fallbackMat: StudyMaterial = {
              id: 'temp-syllabus',
              title: `${title} - Official SBTE Syllabus`,
              subjectCode,
              subjectName: title,
              branchId: 'ee',
              semester: 1,
              type: 'Notes',
              fileSize: '1.8 MB',
              pages: 6,
              rating: 4.9,
              downloads: 2400,
              authorOrProvider: 'State Board of Technical Education, Bihar',
              description: `Complete syllabus units, marking scheme and reference text for ${title} (${subjectCode}).`,
              previewSummary: [
                {
                  sectionTitle: 'Course Overview',
                  items: ['Official SBTE Bihar syllabus', 'Theory & Practical guidelines', 'Standard references'],
                },
              ],
              pdfPreviewText: content,
            };
            setActivePdfMaterial(fallbackMat);
          }}
        />

        {/* 3. Study Materials (Notes, PYQs, Important Questions) */}
        <StudyMaterialsSection
          selectedSubjectCodeFilter={selectedSubjectFilter}
          onClearSubjectFilter={() => setSelectedSubjectFilter(null)}
          onOpenPdfModal={(mat) => setActivePdfMaterial(mat)}
        />

        {/* 4. Bihar Polytechnic Colleges Directory */}
        <CollegesSection />

        {/* 5. Contact Section & Helpdesk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* PDF Document Previewer Modal */}
      {activePdfMaterial && (
        <PdfViewerModal
          material={activePdfMaterial}
          onClose={() => setActivePdfMaterial(null)}
        />
      )}

      {/* SGPA & Percentage Calculator Modal */}
      <SgpaCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Quick Search Spotlight Modal */}
      <QuickSearchModal
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        onSelectSubject={(code) => {
          setSelectedSubjectFilter(code);
          scrollToSection('syllabus');
        }}
        onSelectCollege={() => {
          scrollToSection('colleges');
        }}
        onSelectMaterial={(mat) => {
          setActivePdfMaterial(mat);
        }}
      />
    </div>
  );
}
