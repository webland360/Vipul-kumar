import { StudyMaterial, ExamNotice } from '../types';

export const STUDY_MATERIALS: StudyMaterial[] = [
  // ==========================================
  // BASIC ELECTRICAL ENGINEERING (2420104)
  // ==========================================
  {
    id: 'mat-bee-pyq-2024',
    title: 'SBTE Bihar BEE End Sem Exam Question Paper 2024',
    subjectCode: '2420104',
    subjectName: 'Basic Electrical Engineering',
    branchId: 'ee',
    semester: 1,
    type: 'PYQ',
    year: '2024',
    fileSize: '2.4 MB',
    pages: 4,
    rating: 4.9,
    downloads: 1420,
    authorOrProvider: 'SBTE Official Examination Board Patna',
    description: 'Complete official question paper with Group A (20 Marks MCQs), Group B (4 marks x 5 short questions), and Group C (6 marks x 5 descriptive questions).',
    previewSummary: [
      {
        sectionTitle: 'Group A: 20 Objective Multiple Choice Questions',
        items: [
          'Q1: The unit of magnetic flux density is: (a) Weber (b) Tesla (c) Ampere-turn (d) Henry',
          'Q2: Superposition theorem is applicable only to: (a) Non-linear circuits (b) Linear & bilateral circuits (c) Passive elements only (d) AC circuits only',
          'Q3: In a pure inductive circuit, current lags voltage by: (a) 0° (b) 45° (c) 90° (d) 180°',
          'Q4: Form factor of a pure sinusoidal waveform is: (a) 1.414 (b) 1.11 (c) 0.707 (d) 0.637',
        ],
      },
      {
        sectionTitle: 'Group B: Short Answer Questions (Attempt any 5)',
        items: [
          'Q2: State and explain Thevenin\'s Theorem with a neat schematic circuit diagram.',
          'Q3: Derive the relationship between line voltage and phase voltage in a star connected 3-phase load.',
          'Q4: Explain hysteresis loop (B-H curve) and state the significance of coercive force and retentivity.',
          'Q5: A resistance of 10 Ω and an inductance of 0.1 H are connected in series across a 230V, 50Hz supply. Calculate impedance, current and power factor.',
        ],
      },
      {
        sectionTitle: 'Group C: Long Numerical & Descriptive Questions',
        items: [
          'Q7: Explain the construction and working principle of a 1-Phase Core type and Shell type transformer. Derive the EMF equation of transformer.',
          'Q8: Describe the two-wattmeter method for measurement of 3-phase power. Draw circuit connection and phasor diagram.',
        ],
      },
    ],
    pdfPreviewText: `STATE BOARD OF TECHNICAL EDUCATION, BIHAR
DIPLOMA SEMESTER I / II EXAMINATION 2024
Branch: Electrical Engineering
Subject: Basic Electrical Engineering (Code: 2420104)
Time: 3 Hours                                          Max Marks: 70

INSTRUCTIONS:
1. Candidate must write their Roll No. on question paper immediately.
2. Group A has 20 Multiple Choice Questions of 1 mark each (Compulsory).
3. Group B has short questions (Attempt any 5 out of 7, 4 marks each).
4. Group C has long descriptive questions (Attempt any 5 out of 7, 6 marks each).`,
  },
  {
    id: 'mat-bee-notes-ch1',
    title: 'Complete Handwritten Notes: DC Circuits & Network Theorems',
    subjectCode: '2420104',
    subjectName: 'Basic Electrical Engineering',
    branchId: 'ee',
    semester: 1,
    type: 'Notes',
    year: '2024',
    fileSize: '5.1 MB',
    pages: 28,
    rating: 4.8,
    downloads: 2890,
    authorOrProvider: 'Topper Handwritten Notes (GP Patna-7)',
    description: 'Clean handwritten notes with clear circuit schematics, solved nodal & mesh analysis examples, and step-by-step proofs of Thevenin, Norton & Maximum Power Transfer.',
    previewSummary: [
      {
        sectionTitle: 'Key Included Chapters',
        items: [
          'Ohm\'s Law, Kirchhoff\'s Current Law (KCL) & Voltage Law (KVL) with sign conventions',
          'Mesh analysis with independent and dependent voltage/current sources',
          'Nodal analysis step-by-step matrix formulation',
          'Step-by-step algorithm for finding Rth, Vth, and In in complex bridge circuits',
          'Proof of Maximum Power Transfer Theorem: dP/dRL = 0 when RL = Rth',
        ],
      },
      {
        sectionTitle: 'Solved Numerical Exercises',
        items: [
          '15 past year SBTE solved circuit problems with step-by-step explanations',
          'Star to Delta conversion shortcuts and symmetrical resistor cubes',
        ],
      },
    ],
    pdfPreviewText: `HANDWRITTEN TOPPER STUDY NOTES
Polytechnic Semester - SBTE Bihar Series
Subject: Basic Electrical Engineering | Unit 1: Network Theorems
Contributed by: R. Kumar (Electrical Dept., GP Patna-7)

Key Takeaway Formulae:
- KCL: Σ I_in = Σ I_out (Conservation of Charge)
- KVL: Σ V = 0 around any closed mesh (Conservation of Energy)
- Star to Delta: Ra = (R1·R2 + R2·R3 + R3·R1) / R3
- Thevenin: Replace active network with Vth in series with Rth
- Max Power: P_max = (Vth^2) / (4 * Rth)`,
  },
  {
    id: 'mat-bee-important-questions',
    title: 'BEE VVI Expected Questions with Answer Key (SBTE 2025/2026)',
    subjectCode: '2420104',
    subjectName: 'Basic Electrical Engineering',
    branchId: 'ee',
    semester: 1,
    type: 'Important Questions',
    year: '2025',
    fileSize: '1.8 MB',
    pages: 14,
    rating: 4.9,
    downloads: 3620,
    authorOrProvider: 'Senior SBTE Faculty Panel',
    description: 'Most frequently repeated questions in SBTE Bihar exams over the last 10 years, categorized by high probability score.',
    previewSummary: [
      {
        sectionTitle: 'Guaranteed 6-Mark Questions',
        items: [
          'Derivation: V_L = √3 * V_ph for balanced Star connected supply',
          'Two Wattmeter method total power and power factor tan(φ) = √3*(W1-W2)/(W1+W2)',
          'Transformer EMF equation: E = 4.44 * f * N * Φm derivation',
          'Comparison between Magnetic Circuit and Electric Circuit (Tabular column)',
        ],
      },
    ],
    pdfPreviewText: `SBTE BIHAR SEMESTER EXAMINATION SUCCESS BOOSTER
Subject: Basic Electrical Engineering (Code: 2420104)
Prepared by SBTE Subject Experts

Top 15 Most Repeated Questions Analysis:
1. Superposition theorem and condition for valid applications (Appeared in 2024, 2022, 2020)
2. Resonance in series R-L-C circuit: derive fr = 1 / (2π√LC) and Q-factor
3. Explain open circuit (OC) test and short circuit (SC) test on 1-phase transformer`,
  },
  {
    id: 'mat-bee-formula-sheet',
    title: 'Formula Cheat Sheet: Electrical Circuits & AC Machines',
    subjectCode: '2420104',
    subjectName: 'Basic Electrical Engineering',
    branchId: 'ee',
    semester: 1,
    type: 'Formula Sheet',
    year: '2024',
    fileSize: '850 KB',
    pages: 6,
    rating: 4.9,
    downloads: 4120,
    authorOrProvider: 'Polytechnic Semester Editorial',
    description: 'Compact 6-page printable revision sheet containing every formula, standard units, conversion factor, and phasor diagram.',
    previewSummary: [
      {
        sectionTitle: 'Quick Reference Sections',
        items: [
          'DC Circuits: Resistance laws, Temperature coefficients, Kirchhoff rules',
          'AC Single Phase: RMS, Average, Form Factor, Peak Factor, Impedance triangles',
          '3-Phase: Star vs Delta relationships, line vs phase power equations',
          'Magnetic: B-H curve parameters, Reluctance S = l / (μ0 * μr * A)',
        ],
      },
    ],
    pdfPreviewText: `POLYTECHNIC SEMESTER - QUICK REVISION FORMULA SHEET
Course: Basic Electrical Engineering (Code: 2420104)

- Power in AC: S = P + jQ (kVA = kW + jkVAR)
- Power Factor: cos(φ) = P / S = R / Z
- Impedance: Z = √(R² + (XL - XC)²)
- Star Connection: V_L = √3 * V_ph, I_L = I_ph
- Delta Connection: V_L = V_ph, I_L = √3 * I_ph`,
  },

  // ==========================================
  // BASIC ENGINEERING MATHEMATICS (2400101)
  // ==========================================
  {
    id: 'mat-math-pyq-2024',
    title: 'SBTE Bihar Basic Engg Mathematics Question Paper 2024',
    subjectCode: '2400101',
    subjectName: 'Basic Engineering Mathematics',
    branchId: 'ee',
    semester: 1,
    type: 'PYQ',
    year: '2024',
    fileSize: '2.1 MB',
    pages: 4,
    rating: 4.8,
    downloads: 1840,
    authorOrProvider: 'SBTE Examination Department',
    description: 'Previous year question paper containing full 70 marks paper with matrices, calculus, coordinate geometry and Cramer\'s rule solutions.',
    previewSummary: [
      {
        sectionTitle: 'Sample Questions from Exam',
        items: [
          'Find the inverse of matrix A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]] using adjoint method.',
          'Solve by Cramer\'s rule: 2x - y + 3z = 9, x + y + z = 6, x - y + z = 2.',
          'If y = sin(m * sin⁻¹ x), prove that (1 - x²)y₂ - xy₁ + m²y = 0.',
          'Evaluate the definite integral: ∫ from 0 to π/2 of (sin x / (sin x + cos x)) dx.',
        ],
      },
    ],
    pdfPreviewText: `STATE BOARD OF TECHNICAL EDUCATION, BIHAR
FIRST SEMESTER DIPLOMA IN ENGINEERING (COMMON TO ALL BRANCHES)
Subject: Basic Engineering Mathematics (Code: 2400101)
Full Marks: 70 | Time: 3 Hours`,
  },
  {
    id: 'mat-math-notes-calculus',
    title: 'Differential & Integral Calculus Master Handwritten Notes',
    subjectCode: '2400101',
    subjectName: 'Basic Engineering Mathematics',
    branchId: 'ee',
    semester: 1,
    type: 'Notes',
    year: '2024',
    fileSize: '6.4 MB',
    pages: 36,
    rating: 4.9,
    downloads: 3120,
    authorOrProvider: 'Er. R. Sharma (Math Faculty GP Muzaffarpur)',
    description: 'Step-by-step illustrated notes with Leibniz\'s theorem proofs, indeterminate forms (L\'Hospital\'s Rule), and partial fractions integration.',
    previewSummary: [
      {
        sectionTitle: 'Covered Modules',
        items: [
          'Successive differentiation and nth derivative of standard forms',
          'Leibniz\'s theorem statement and proof with 10 classic board exam problems',
          'Tangents and Normals to curves, subtangent and subnormal lengths',
          'Integration by substitution and definite integral properties (King\'s property)',
        ],
      },
    ],
    pdfPreviewText: `MATHEMATICS STUDY MASTER NOTES
SBTE Bihar Diploma New Curriculum | Basic Engineering Mathematics (2400101)
Prepared with solved examples from last 8 years board papers.`,
  },

  // ==========================================
  // APPLIED PHYSICS-B (2400102B)
  // ==========================================
  {
    id: 'mat-phys-pyq-2023',
    title: 'SBTE Applied Physics-B End Sem Exam Paper 2023',
    subjectCode: '2400102B',
    subjectName: 'Applied Physics-B',
    branchId: 'ee',
    semester: 1,
    type: 'PYQ',
    year: '2023',
    fileSize: '1.9 MB',
    pages: 4,
    rating: 4.7,
    downloads: 1250,
    authorOrProvider: 'SBTE Examination Department',
    description: 'Board paper covering electrostatics, Biot-Savart law, photoelectric equation, and semiconductor junction diodes.',
    previewSummary: [
      {
        sectionTitle: 'Featured Questions',
        items: [
          'State Gauss\'s law in electrostatics. Calculate electric field intensity due to infinite line charge.',
          'Define capacitance. Derive an expression for capacitance of parallel plate capacitor with dielectric slab.',
          'State Faraday\'s laws of electromagnetic induction and write Lenz\'s law.',
          'Explain Einstein\'s photoelectric equation and define threshold frequency and work function.',
        ],
      },
    ],
    pdfPreviewText: `STATE BOARD OF TECHNICAL EDUCATION, BIHAR
DIPLOMA SEMESTER I EXAMINATION
Subject: Applied Physics-B (Code: 2400102B)
Time: 3 Hours | Max Marks: 70`,
  },
  {
    id: 'mat-phys-notes-ch3',
    title: 'Electrostatics & Electromagnetism Handwritten Quick Revision',
    subjectCode: '2400102B',
    subjectName: 'Applied Physics-B',
    branchId: 'ee',
    semester: 1,
    type: 'Notes',
    year: '2024',
    fileSize: '4.2 MB',
    pages: 22,
    rating: 4.8,
    downloads: 1980,
    authorOrProvider: 'GP Darbhanga Academic Guild',
    description: 'Includes neat color diagrams for electric lines of force, magnetic field lines, Ampere\'s loop, and Biot-Savart calculations.',
    previewSummary: [
      {
        sectionTitle: 'Unit Breakdown',
        items: [
          'Coulomb\'s Law in vector form and dielectric permittivity',
          'Capacitor grouping in series and parallel, energy stored U = 1/2 C V²',
          'Magnetic force on a moving charge: F = q(v × B)',
          'Hysteresis loop curve with retentivity, coercivity, and energy loss discussion',
        ],
      },
    ],
    pdfPreviewText: `APPLIED PHYSICS-B HANDWRITTEN REVISION GUIDE
Polytechnic Semester | SBTE Bihar Module 2 & 3`,
  },

  // ==========================================
  // IT & C PROGRAMMING (2418105)
  // ==========================================
  {
    id: 'mat-cprog-notes',
    title: 'C Programming for Diploma Engineers (Notes & 50 Solved Programs)',
    subjectCode: '2418105',
    subjectName: 'Fundamentals of IT & C Programming',
    branchId: 'ee',
    semester: 1,
    type: 'Notes',
    year: '2024',
    fileSize: '3.8 MB',
    pages: 32,
    rating: 4.9,
    downloads: 2780,
    authorOrProvider: 'CSE & IT Faculty Board',
    description: 'From flowchart basics to pointers and file management. Includes 50 essential C programs with dry runs asked in SBTE lab exams.',
    previewSummary: [
      {
        sectionTitle: 'Key Programming Modules',
        items: [
          'C data types, format specifiers, operators precedence and associativity table',
          'Looping programs: Armstrong number, Fibonacci series, Prime check, Palindrome',
          'Matrix operations: 2D array addition, transpose and multiplication',
          'Pointers basics: Memory address dereferencing and swap by reference',
        ],
      },
    ],
    pdfPreviewText: `C PROGRAMMING STUDY NOTES & CODE LAB MANUAL
Course: Fundamentals of IT & C Programming (Code: 2418105)
SBTE Bihar Diploma New Curriculum`,
  },
  {
    id: 'mat-cprog-pyq-2024',
    title: 'SBTE Bihar IT & C Programming Question Paper 2024',
    subjectCode: '2418105',
    subjectName: 'Fundamentals of IT & C Programming',
    branchId: 'ee',
    semester: 1,
    type: 'PYQ',
    year: '2024',
    fileSize: '1.7 MB',
    pages: 4,
    rating: 4.8,
    downloads: 1650,
    authorOrProvider: 'SBTE Exam Department',
    description: 'Official 70-mark paper with debugging snippets, algorithm drawing questions, and array code implementations.',
    previewSummary: [
      {
        sectionTitle: 'Sample Questions',
        items: [
          'Differentiate between while loop and do-while loop with syntax and example.',
          'Write a C program to check whether a given string is a palindrome without using strrev().',
          'Explain the concept of recursion with a program to find factorial of a number.',
        ],
      },
    ],
    pdfPreviewText: `STATE BOARD OF TECHNICAL EDUCATION, BIHAR
Subject: Fundamentals of IT & C Programming (Code: 2418105)`,
  },

  // ==========================================
  // ENGINEERING DRAWING & GRAPHICS (2415105)
  // ==========================================
  {
    id: 'mat-edg-guide',
    title: 'Engineering Drawing Sheets Guide & Isometric Views Solved',
    subjectCode: '2415105',
    subjectName: 'Engineering Drawing & Graphics',
    branchId: 'ee',
    semester: 1,
    type: 'Notes',
    year: '2024',
    fileSize: '7.5 MB',
    pages: 26,
    rating: 4.7,
    downloads: 1890,
    authorOrProvider: 'Polytechnic Graphics Cell',
    description: 'Visual step-by-step projection guide for 1st angle projection, true length calculations, and isometric conversion diagrams.',
    previewSummary: [
      {
        sectionTitle: 'Drawing Sheet Guides',
        items: [
          'Sheet layout: Title block standard BIS dimensioning and border margins',
          'Orthographic projections of line inclined to both HP and VP',
          'Projection of hexagonal prism and pentagonal pyramid with cut sections',
        ],
      },
    ],
    pdfPreviewText: `ENGINEERING DRAWING & GRAPHICS (Code: 2415105)
Comprehensive Illustrated Board Practical Guide`,
  },
];

export const SBTE_NOTICES: ExamNotice[] = [
  {
    id: 'not-1',
    date: 'Oct 24, 2026',
    title: 'SBTE Bihar: Even & Odd Semester Practical Exam Marks Submission Schedule released for Polytechnics',
    category: 'Exam',
    isImportant: true,
    linkText: 'Download Schedule PDF',
  },
  {
    id: 'not-2',
    date: 'Oct 18, 2026',
    title: 'New AICTE-SBTE Curriculum 2024-2025 Revised Credit Scheme & Lab Hours Guidelines for 1st & 2nd Semester',
    category: 'Syllabus',
    isImportant: false,
    linkText: 'View Curriculum Notification',
  },
  {
    id: 'not-3',
    date: 'Oct 10, 2026',
    title: 'Post Matric Scholarship (PMS) Verification Portal Open for Bihar Polytechnic Students 2026-27',
    category: 'Scholarship',
    isImportant: true,
    linkText: 'Check Eligibility & Apply',
  },
  {
    id: 'not-4',
    date: 'Sep 28, 2026',
    title: 'Diploma 2nd, 4th & 6th Semester Scrutiny / Re-evaluation Results Declared by SBTE Patna',
    category: 'Result',
    isImportant: false,
    linkText: 'Check Result Roll Number Wise',
  },
];
