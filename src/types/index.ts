export type BranchId = 'ee' | 'cse' | 'ce' | 'me' | 'ece' | 'ae';

export interface Branch {
  id: BranchId;
  name: string;
  hindiName: string;
  code: string;
  icon: string;
  description: string;
  color: string;
  totalStudentsEst: string;
}

export interface MarksBreakdown {
  endSemTheory: number;
  progressiveAssessment: number; // Internal TA + CT
  termWorkOrPracticalEndSem?: number;
  termWorkOrPracticalInternal?: number;
  totalMarks: number;
}

export interface InstructionHours {
  lecture: number;
  tutorial: number;
  practical: number;
  totalHours: number;
}

export interface SyllabusModule {
  title: string;
  topics: string[];
}

export interface Subject {
  code: string;
  name: string;
  branchId: BranchId;
  semester: number;
  credits: number;
  category: 'Theory' | 'Practical / Lab' | 'Workshop' | 'Audit / Co-curricular';
  ciHours: InstructionHours;
  marks: MarksBreakdown;
  description: string;
  modules: SyllabusModule[];
  recommendedBooks: string[];
  pdfDownloadName: string;
  notesCount: number;
  pyqsCount: number;
}

export type MaterialType = 'PYQ' | 'Notes' | 'Important Questions' | 'Formula Sheet' | 'Lab Manual';

export interface StudyMaterial {
  id: string;
  title: string;
  subjectCode: string;
  subjectName: string;
  branchId: BranchId;
  semester: number;
  type: MaterialType;
  year?: string;
  fileSize: string;
  pages: number;
  rating: number;
  downloads: number;
  authorOrProvider: string;
  description: string;
  previewSummary: {
    sectionTitle: string;
    items: string[];
  }[];
  pdfPreviewText: string;
}

export interface PolytechnicCollege {
  id: string;
  name: string;
  hindiName: string;
  shortCode: string;
  district: string;
  city: string;
  pinCode: string;
  establishedYear: number;
  type: 'Government' | "Government Women's";
  totalSeats: number;
  affiliation: string;
  aicteApproved: boolean;
  branches: string[];
  campusArea: string;
  hostelAvailable: boolean;
  rating: number;
  principalName: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
    address: string;
  };
  keyFacilities: string[];
  imageUrl?: string;
}

export interface ExamNotice {
  id: string;
  date: string;
  title: string;
  category: 'Exam' | 'Syllabus' | 'Result' | 'Admissions' | 'Scholarship';
  isImportant?: boolean;
  linkText: string;
}
