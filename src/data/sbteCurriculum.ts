import { Branch, Subject } from '../types';

export const BRANCHES: Branch[] = [
  {
    id: 'ee',
    name: 'Electrical Engineering',
    hindiName: 'विद्युत अभियंत्रण',
    code: 'EE',
    icon: 'Zap',
    description: 'Power systems, circuits, machines, renewable energy & automation systems.',
    color: 'amber',
    totalStudentsEst: '12,000+',
  },
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    hindiName: 'कंप्यूटर साइंस अभियंत्रण',
    code: 'CSE',
    icon: 'Laptop',
    description: 'Algorithms, data structures, web development, networking & AI fundamentals.',
    color: 'blue',
    totalStudentsEst: '15,000+',
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    hindiName: 'असैनिक अभियंत्रण',
    code: 'CE',
    icon: 'Building2',
    description: 'Structural engineering, surveying, highway, irrigation & concrete technology.',
    color: 'emerald',
    totalStudentsEst: '14,000+',
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    hindiName: 'यांत्रिक अभियंत्रण',
    code: 'ME',
    icon: 'Wrench',
    description: 'Thermodynamics, fluid mechanics, manufacturing, CAD/CAM & machine design.',
    color: 'orange',
    totalStudentsEst: '13,500+',
  },
  {
    id: 'ece',
    name: 'Electronics Engineering',
    hindiName: 'इलेक्ट्रॉनिक्स अभियंत्रण',
    code: 'ECE',
    icon: 'Cpu',
    description: 'Digital electronics, microprocessors, communication systems & VLSI.',
    color: 'indigo',
    totalStudentsEst: '8,000+',
  },
  {
    id: 'ae',
    name: 'Automobile Engineering',
    hindiName: 'ऑटोमोबाइल अभियंत्रण',
    code: 'AE',
    icon: 'Car',
    description: 'Automotive systems, IC engines, chassis design & electric vehicles (EV).',
    color: 'rose',
    totalStudentsEst: '4,500+',
  },
];

export const SBTE_SUBJECTS: Subject[] = [
  // ==========================================
  // ELECTRICAL ENGINEERING - SEMESTER 1 (Official SBTE Bihar New Curriculum)
  // ==========================================
  {
    code: '2400101',
    name: 'Basic Engineering Mathematics',
    branchId: 'ee',
    semester: 1,
    credits: 4,
    category: 'Theory',
    ciHours: {
      lecture: 3,
      tutorial: 1,
      practical: 0,
      totalHours: 60,
    },
    marks: {
      endSemTheory: 70,
      progressiveAssessment: 30, // 20 Class Test + 10 Teacher Assessment
      totalMarks: 100,
    },
    description: 'Foundational mathematics including determinants, matrices, differential calculus, and analytical geometry essential for engineering analysis.',
    modules: [
      {
        title: 'Unit 1: Algebra & Trigonometry',
        topics: [
          'Matrices: Types, operations, transpose, adjoint and inverse of matrices',
          'Determinants up to 3rd order, Cramer\'s Rule for simultaneous linear equations',
          'De Moivre\'s Theorem, hyperbolic functions and Euler\'s formulae',
        ],
      },
      {
        title: 'Unit 2: Differential Calculus',
        topics: [
          'Limits, continuity and differentiability of single variable functions',
          'Standard derivatives of algebraic, trigonometric, exponential and logarithmic functions',
          'Successive differentiation, Leibniz\'s theorem and application to maxima and minima',
        ],
      },
      {
        title: 'Unit 3: Integral Calculus',
        topics: [
          'Integration by substitution, by parts and partial fractions',
          'Definite integrals and their properties',
          'Area under simple curves and root mean square (RMS) value applications',
        ],
      },
      {
        title: 'Unit 4: Coordinate Geometry',
        topics: [
          'Straight lines: Slope, intercepts, angle between two lines',
          'Circle equations, tangent and normal equations',
          'Introduction to conic sections: Parabola, ellipse and hyperbola standard forms',
        ],
      },
    ],
    recommendedBooks: [
      'Higher Engineering Mathematics by B.S. Grewal (Khanna Publishers)',
      'Engineering Mathematics by H.K. Dass (S. Chand)',
      'SBTE Bihar Mathematics-I Text (Technical Publication Patna)',
    ],
    pdfDownloadName: 'SBTE_EE_Sem1_Math_2400101_Syllabus.pdf',
    notesCount: 8,
    pyqsCount: 4,
  },
  {
    code: '2400102B',
    name: 'Applied Physics-B',
    branchId: 'ee',
    semester: 1,
    credits: 3,
    category: 'Theory',
    ciHours: {
      lecture: 2,
      tutorial: 1,
      practical: 0,
      totalHours: 45,
    },
    marks: {
      endSemTheory: 70,
      progressiveAssessment: 30,
      totalMarks: 100,
    },
    description: 'Physical principles tailored for electrical and electronic systems: wave optics, electrostatics, electromagnetism, and semiconductor physics.',
    modules: [
      {
        title: 'Unit 1: Physical World, Units & Measurement',
        topics: [
          'SI Units, fundamental and derived quantities, dimensional analysis and errors',
          'Accuracy and precision, significant figures and error estimation in lab measurements',
        ],
      },
      {
        title: 'Unit 2: Electrostatics & Current Electricity',
        topics: [
          'Coulomb\'s Law, electric field intensity and potential due to point charge',
          'Gauss Theorem, capacitance of parallel plate capacitor with dielectric',
          'Ohm\'s Law, temperature coefficient of resistance, Kirchhoff\'s Laws and applications',
        ],
      },
      {
        title: 'Unit 3: Electromagnetism & Magnetic Materials',
        topics: [
          'Biot-Savart Law, Ampere\'s circuital law, magnetic force on current carrying conductor',
          'Electromagnetic induction: Faraday\'s laws and Lenz\'s law, self and mutual inductance',
          'Dia, Para and Ferromagnetic materials and hysteresis loop concept',
        ],
      },
      {
        title: 'Unit 4: Modern Physics & Semiconductor Basics',
        topics: [
          'Photoelectric effect, Einstein equation, laser emission basics (He-Ne Laser)',
          'Energy band theory, intrinsic and extrinsic semiconductors, P-N junction forward and reverse bias',
        ],
      },
    ],
    recommendedBooks: [
      'Applied Physics for Polytechnic by Arthur Beiser / Navneet Gupta',
      'Concepts of Physics by H.C. Verma (Vol 1 & 2)',
      'SBTE Applied Physics Question Bank (Kalyani Publishers)',
    ],
    pdfDownloadName: 'SBTE_EE_Sem1_PhysicsB_2400102B_Syllabus.pdf',
    notesCount: 6,
    pyqsCount: 4,
  },
  {
    code: '2420104',
    name: 'Basic Electrical Engineering',
    branchId: 'ee',
    semester: 1,
    credits: 4,
    category: 'Theory',
    ciHours: {
      lecture: 3,
      tutorial: 1,
      practical: 0,
      totalHours: 60,
    },
    marks: {
      endSemTheory: 70,
      progressiveAssessment: 30,
      totalMarks: 100,
    },
    description: 'Fundamental subject for electrical diploma engineers: DC networks, AC single-phase circuits, 3-phase star/delta, magnetic circuits, and transformer operation.',
    modules: [
      {
        title: 'Unit 1: DC Circuit Analysis & Theorems',
        topics: [
          'Active and passive elements, voltage and current sources, star-delta conversion',
          'Mesh analysis and nodal analysis for DC networks',
          'Thevenin\'s Theorem, Norton\'s Theorem, Maximum Power Transfer Theorem, Superposition Theorem',
        ],
      },
      {
        title: 'Unit 2: AC Fundamentals & Single-Phase Circuits',
        topics: [
          'Sinusoidal waveform: Frequency, period, amplitude, average value, RMS value, form factor and peak factor',
          'Phasor representation of AC quantities, impedance and admittance',
          'Series and parallel R-L, R-C and R-L-C circuits, resonance, power factor calculation',
        ],
      },
      {
        title: 'Unit 3: Three-Phase AC Circuits',
        topics: [
          'Advantages of 3-phase over 1-phase system, generation of 3-phase voltages',
          'Star and Delta connection: Phase and line relationships for voltage and current',
          'Measurement of 3-phase power by Two-Wattmeter Method',
        ],
      },
      {
        title: 'Unit 4: Magnetic Circuits & Single-Phase Transformer',
        topics: [
          'MMF, reluctance, permeance, comparison between magnetic and electric circuits',
          'Working principle of 1-phase transformer, EMF equation, transformation ratio, losses and efficiency',
        ],
      },
    ],
    recommendedBooks: [
      'Basic Electrical Engineering by V.K. Mehta and Rohit Mehta (S. Chand)',
      'Electrical Technology (Vol 1) by B.L. Theraja',
      'Basic Electrical Engineering by D.P. Kothari and I.J. Nagrath (TMH)',
    ],
    pdfDownloadName: 'SBTE_EE_Sem1_BEE_2420104_Syllabus.pdf',
    notesCount: 12,
    pyqsCount: 4,
  },
  {
    code: '2415105',
    name: 'Engineering Drawing & Graphics',
    branchId: 'ee',
    semester: 1,
    credits: 2,
    category: 'Practical / Lab',
    ciHours: {
      lecture: 1,
      tutorial: 0,
      practical: 2,
      totalHours: 45,
    },
    marks: {
      endSemTheory: 60, // Board practical / drawing exam
      progressiveAssessment: 40, // Sheet evaluation & internal viva
      totalMarks: 100,
    },
    description: 'The universal language of engineers: instrument handling, lettering, scales, orthographic projection of points/lines/planes, and CAD drafting tools.',
    modules: [
      {
        title: 'Unit 1: Drawing Instruments, Lines & Lettering',
        topics: [
          'Types of drawing sheets, pencils, T-square, set-squares and mini drafter',
          'BIS conventions, types of lines, dimensioning techniques and single-stroke lettering',
          'Construction of plain scales and diagonal scales',
        ],
      },
      {
        title: 'Unit 2: Orthographic Projections',
        topics: [
          'Principles of orthographic projection: 1st angle vs 3rd angle projection methods',
          'Projection of points located in four quadrants',
          'Projection of straight lines parallel, perpendicular or inclined to one or both planes',
        ],
      },
      {
        title: 'Unit 3: Projection of Solids & Sectional Views',
        topics: [
          'Projection of prisms, pyramids, cylinders and cones in simple positions',
          'Section planes and true shape of sections',
          'Isometric view and isometric projection of simple engineering objects',
        ],
      },
      {
        title: 'Unit 4: Introduction to Computer Aided Drafting (CAD)',
        topics: [
          'CAD interface, drawing commands (Line, Circle, Arc, Polyline, Rectangle)',
          'Modifying commands (Trim, Extend, Offset, Mirror, Array, Scale), Layer management',
        ],
      },
    ],
    recommendedBooks: [
      'Engineering Drawing by N.D. Bhatt (Charotar Publishing)',
      'A Text Book of Engineering Drawing by K. Venugopal',
      'AutoCAD for Engineers by George Omura',
    ],
    pdfDownloadName: 'SBTE_EE_Sem1_EDG_2415105_Syllabus.pdf',
    notesCount: 5,
    pyqsCount: 3,
  },
  {
    code: '2418105',
    name: 'Fundamentals of IT & C Programming',
    branchId: 'ee',
    semester: 1,
    credits: 3,
    category: 'Theory',
    ciHours: {
      lecture: 2,
      tutorial: 0,
      practical: 2,
      totalHours: 60,
    },
    marks: {
      endSemTheory: 70,
      progressiveAssessment: 30,
      totalMarks: 100,
    },
    description: 'Digital computer literacy, problem solving via flowcharts and structured C language programming for modern technical students.',
    modules: [
      {
        title: 'Unit 1: Computer Hardware, OS & Networking',
        topics: [
          'Block diagram of computer, CPU, ALU, cache, RAM, ROM and secondary storage',
          'Operating system roles: Linux and Windows command line utilities',
          'Networking basics: LAN, WAN, IP address, DNS, internet safety and cybersecurity essentials',
        ],
      },
      {
        title: 'Unit 2: Problem Solving & C Basics',
        topics: [
          'Algorithms, flowchart symbols, pseudo-code and dry running logic',
          'Structure of C program, data types, variables, constants, type casting',
          'Operators: Arithmetic, relational, logical, bitwise and ternary operator',
        ],
      },
      {
        title: 'Unit 3: Control Structures & Loops',
        topics: [
          'Decision making: if, if-else, nested if-else, switch-case statements',
          'Looping constructs: while, do-while, for loops, break and continue statements',
          'Pattern printing problems and series calculations',
        ],
      },
      {
        title: 'Unit 4: Arrays & Functions in C',
        topics: [
          '1D and 2D arrays: Declaration, initialization, matrix addition and multiplication',
          'User-defined functions, function prototype, call by value and call by reference',
          'Introduction to pointers and string manipulation functions (strlen, strcpy, strcat)',
        ],
      },
    ],
    recommendedBooks: [
      'Programming in ANSI C by E. Balagurusamy (McGraw Hill)',
      'Let Us C by Yashavant Kanetkar (BPB Publications)',
      'Computer Fundamentals by P.K. Sinha',
    ],
    pdfDownloadName: 'SBTE_EE_Sem1_ITC_2418105_Syllabus.pdf',
    notesCount: 9,
    pyqsCount: 4,
  },
  {
    code: '2420105',
    name: 'Electrical & Electronics Workshop',
    branchId: 'ee',
    semester: 1,
    credits: 2,
    category: 'Workshop',
    ciHours: {
      lecture: 0,
      tutorial: 0,
      practical: 4,
      totalHours: 60,
    },
    marks: {
      endSemTheory: 0,
      termWorkOrPracticalEndSem: 50,
      termWorkOrPracticalInternal: 50,
      progressiveAssessment: 0,
      totalMarks: 100,
    },
    description: 'Hands-on practical training in electrical wiring, safety rules, electronic component testing, soldering, and domestic appliance troubleshooting.',
    modules: [
      {
        title: 'Job 1: Electrical Safety, Tools & Wiring Accessories',
        topics: [
          'Electrical shock hazards, artificial respiration methods, earthing importance and types',
          'Identification and use of pliers, wire strippers, crimping tools, test lamps, multimeters',
          'Wiring accessories: Switches, fuses, MCB, RCCB, sockets, lamp holders and junction boxes',
        ],
      },
      {
        title: 'Job 2: Domestic House Wiring Circuits',
        topics: [
          'Staircase wiring circuit (two-way switch control)',
          'Godown wiring circuit and corridor light system wiring',
          'One lamp, one fan with regulator, and 3-pin socket connection on wooden switch board',
        ],
      },
      {
        title: 'Job 3: Electronic Component Soldering & PCB Assembly',
        topics: [
          'Color code reading of carbon film resistors and capacitor ratings',
          'Testing of diodes, LEDs and transistors using digital multimeter',
          'Soldering practice on Vero-board / PCB: Making a regulated 5V DC power supply circuit',
        ],
      },
    ],
    recommendedBooks: [
      'Workshop Technology by Hajra Choudhury (Vol 1 & 2)',
      'Electrical Workshop Practice by K.S. Jamwal',
      'SBTE Lab Manual for Electrical Workshop',
    ],
    pdfDownloadName: 'SBTE_EE_Sem1_Workshop_2420105_Syllabus.pdf',
    notesCount: 4,
    pyqsCount: 2,
  },
  {
    code: '2400008',
    name: 'Sports, Yoga and Meditation',
    branchId: 'ee',
    semester: 1,
    credits: 1,
    category: 'Audit / Co-curricular',
    ciHours: {
      lecture: 0,
      tutorial: 0,
      practical: 2,
      totalHours: 30,
    },
    marks: {
      endSemTheory: 0,
      termWorkOrPracticalInternal: 50,
      progressiveAssessment: 0,
      totalMarks: 50,
    },
    description: 'Promotes holistic physical fitness, stress reduction, mindful concentration, and team sportsmanship among engineering students.',
    modules: [
      {
        title: 'Module 1: Basic Asanas & Surya Namaskar',
        topics: [
          '12 steps of Surya Namaskar with breathing synchronization',
          'Standing, sitting and supine asanas for spinal flexibility and posture correction',
        ],
      },
      {
        title: 'Module 2: Pranayama & Mindfulness Meditation',
        topics: [
          'Anulom-Vilom, Kapalbhati, Bhramari pranayama techniques',
          'Breath awareness meditation for academic concentration and exam stress relief',
        ],
      },
      {
        title: 'Module 3: Outdoor & Indoor Sports',
        topics: [
          'Athletics, Volleyball, Badminton or Cricket rules, team strategy and physical agility drills',
        ],
      },
    ],
    recommendedBooks: [
      'Light on Yoga by B.K.S. Iyengar (HarperCollins)',
      'Yoga for Students by Swami Satyananda Saraswati (Bihar School of Yoga, Munger)',
    ],
    pdfDownloadName: 'SBTE_General_Sem1_Sports_Yoga_2400008.pdf',
    notesCount: 2,
    pyqsCount: 1,
  },
  {
    code: '2400009',
    name: 'Open Educational Resources',
    branchId: 'ee',
    semester: 1,
    credits: 1,
    category: 'Audit / Co-curricular',
    ciHours: {
      lecture: 0,
      tutorial: 0,
      practical: 2,
      totalHours: 30,
    },
    marks: {
      endSemTheory: 0,
      termWorkOrPracticalInternal: 50,
      progressiveAssessment: 0,
      totalMarks: 50,
    },
    description: 'Training in self-directed digital learning through national portals (NPTEL, SWAYAM, MIT OCW, Virtual Labs) and open creative commons knowledge.',
    modules: [
      {
        title: 'Module 1: National Academic Repositories',
        topics: [
          'SWAYAM and NPTEL course navigation, video lecture archiving and assignment submission',
          'National Digital Library of India (NDLI) access and technical paper search',
        ],
      },
      {
        title: 'Module 2: Virtual Labs & Interactive Toolkits',
        topics: [
          'Ministry of Education (MoE) Virtual Labs simulation for Physics and Basic Electrical experiments',
          'Creative Commons licensing, citation ethics and research note documentation',
        ],
      },
    ],
    recommendedBooks: [
      'Guidelines for Open Educational Resources in Higher Education (UNESCO)',
      'MoE Digital Learning Handbook for Engineering Colleges',
    ],
    pdfDownloadName: 'SBTE_General_Sem1_OER_2400009.pdf',
    notesCount: 2,
    pyqsCount: 1,
  },

  // ==========================================
  // ELECTRICAL ENGINEERING - SEMESTER 2
  // ==========================================
  {
    code: '2400201',
    name: 'Applied Mathematics-II',
    branchId: 'ee',
    semester: 2,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Differential equations of first & higher order, vector calculus, Laplace transforms, and numerical methods.',
    modules: [
      { title: 'Unit 1: Differential Equations', topics: ['Variable separable, Homogeneous and Linear differential equations of 1st order', 'Higher order linear differential equations with constant coefficients'] },
      { title: 'Unit 2: Laplace Transforms', topics: ['Definition and properties of Laplace transform', 'Inverse Laplace transform, applications to circuit transient analysis'] },
      { title: 'Unit 3: Vector Calculus', topics: ['Gradient, divergence and curl, directional derivatives, physical interpretations'] },
    ],
    recommendedBooks: ['Higher Engineering Mathematics by B.S. Grewal'],
    pdfDownloadName: 'SBTE_EE_Sem2_Math2_2400201.pdf',
    notesCount: 6,
    pyqsCount: 4,
  },
  {
    code: '2420202',
    name: 'Analog Electronics',
    branchId: 'ee',
    semester: 2,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Diodes, BJT, FET, operational amplifiers (Op-Amp 741), feedback amplifiers, and oscillators.',
    modules: [
      { title: 'Unit 1: Semiconductor Diodes & Power Supplies', topics: ['Half-wave, full-wave center tapped and bridge rectifiers', 'Zener diode voltage regulator'] },
      { title: 'Unit 2: Bipolar Junction Transistors (BJT)', topics: ['CE, CB, CC configurations, transistor biasing and thermal stability'] },
      { title: 'Unit 3: Operational Amplifiers', topics: ['Ideal Op-Amp characteristics, inverting, non-inverting, adder, subtractor and integrator circuits'] },
    ],
    recommendedBooks: ['Electronic Principles by Malvino and Bates', 'Analog Electronics by J.B. Gupta'],
    pdfDownloadName: 'SBTE_EE_Sem2_AnalogElectronics_2420202.pdf',
    notesCount: 7,
    pyqsCount: 4,
  },
  {
    code: '2420203',
    name: 'Electrical Circuit & Network Theory',
    branchId: 'ee',
    semester: 2,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Transient response of RL, RC, RLC circuits, two-port networks (Z, Y, ABCD, h parameters), graph theory and coupled circuits.',
    modules: [
      { title: 'Unit 1: Transient Circuit Analysis', topics: ['DC transients in R-L, R-C and R-L-C circuits using differential equation & Laplace approach'] },
      { title: 'Unit 2: Two-Port Networks', topics: ['Impedance (Z), Admittance (Y), Transmission (ABCD) and Hybrid (h) parameters, parameter interconversions'] },
    ],
    recommendedBooks: ['Circuits & Networks by A. Sudhakar and S.P. Shyammohan', 'Network Analysis by M.E. Van Valkenburg'],
    pdfDownloadName: 'SBTE_EE_Sem2_NetworkTheory_2420203.pdf',
    notesCount: 8,
    pyqsCount: 4,
  },

  // ==========================================
  // ELECTRICAL ENGINEERING - SEMESTER 3
  // ==========================================
  {
    code: '2420301',
    name: 'Electrical Machines-I (DC Machines & Transformers)',
    branchId: 'ee',
    semester: 3,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'DC Generators, DC Motors (starting, speed control, braking), single-phase & three-phase transformers, auto-transformers.',
    modules: [
      { title: 'Unit 1: DC Machines Construction & EMF', topics: ['Constructional parts, armature windings, EMF equation, armature reaction & commutation'] },
      { title: 'Unit 2: DC Motors & Speed Control', topics: ['Back EMF, torque equation, shunt/series/compound motors, 3-point & 4-point starters, Ward-Leonard speed control'] },
      { title: 'Unit 3: 3-Phase Transformers', topics: ['Star-Star, Delta-Delta, Star-Delta, Delta-Star, Open Delta (V-V) connection, parallel operation conditions'] },
    ],
    recommendedBooks: ['Electrical Machinery by P.S. Bimbhra', 'Electrical Technology Vol 2 by B.L. Theraja'],
    pdfDownloadName: 'SBTE_EE_Sem3_Machines1_2420301.pdf',
    notesCount: 11,
    pyqsCount: 5,
  },
  {
    code: '2420302',
    name: 'Electrical & Electronic Measurements',
    branchId: 'ee',
    semester: 3,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'PMMC, MI instruments, dynamometer wattmeters, energy meters, AC/DC bridges (Wheatstone, Maxwell, Schering), CRO and digital meters.',
    modules: [
      { title: 'Unit 1: Indicating Instruments', topics: ['PMMC and Moving Iron instruments: Working, torque equation, extension of range using shunts and multipliers'] },
      { title: 'Unit 2: Measurement of Power & Energy', topics: ['Electrodynamometer wattmeter, Induction type single-phase energy meter errors and compensation'] },
      { title: 'Unit 3: AC Bridges & Oscilloscope', topics: ['Maxwell, Hay, Anderson, Schering bridges, Cathode Ray Oscilloscope (CRO) controls and measurements'] },
    ],
    recommendedBooks: ['A Course in Electrical and Electronic Measurements by A.K. Sawhney'],
    pdfDownloadName: 'SBTE_EE_Sem3_Measurements_2420302.pdf',
    notesCount: 9,
    pyqsCount: 4,
  },

  // ==========================================
  // ELECTRICAL ENGINEERING - SEMESTERS 4, 5, 6
  // ==========================================
  {
    code: '2420401',
    name: 'Electrical Machines-II (Induction & Synchronous Machines)',
    branchId: 'ee',
    semester: 4,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: '3-phase induction motors, circle diagrams, synchronous alternators, synchronous motors, and fractional horse-power (FHP) motors.',
    modules: [
      { title: 'Unit 1: 3-Phase Induction Motors', topics: ['Rotating magnetic field, slip-torque characteristics, DOL, star-delta and auto-transformer starters'] },
      { title: 'Unit 2: Synchronous Generators (Alternators)', topics: ['EMF equation, pitch factor, distribution factor, synchronous impedance method for voltage regulation'] },
    ],
    recommendedBooks: ['Electrical Machinery by P.S. Bimbhra'],
    pdfDownloadName: 'SBTE_EE_Sem4_Machines2_2420401.pdf',
    notesCount: 10,
    pyqsCount: 4,
  },
  {
    code: '2420501',
    name: 'Power System-I (Transmission & Distribution)',
    branchId: 'ee',
    semester: 5,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Overhead transmission lines, skin effect, proximity effect, corona, insulators, sag calculation, and underground cable design.',
    modules: [
      { title: 'Unit 1: Line Parameters & Performance', topics: ['Resistance, inductance and capacitance of 1-phase and 3-phase overhead lines, Ferranti effect'] },
      { title: 'Unit 2: Insulators & Corona', topics: ['Pin, suspension and strain insulators, string efficiency, corona phenomenon, advantages and disadvantages'] },
    ],
    recommendedBooks: ['Principles of Power System by V.K. Mehta', 'Power System Engineering by Nagrath & Kothari'],
    pdfDownloadName: 'SBTE_EE_Sem5_PowerSystem1_2420501.pdf',
    notesCount: 12,
    pyqsCount: 5,
  },
  {
    code: '2420601',
    name: 'Switchgear & Protection',
    branchId: 'ee',
    semester: 6,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Circuit breakers (Air, Oil, SF6, Vacuum), protective relays, differential protection of transformers/generators, lightning arresters.',
    modules: [
      { title: 'Unit 1: Circuit Breakers & Arc Interruption', topics: ['Arc extinction theory, recovery voltage, restriking voltage, SF6 and vacuum circuit breakers'] },
      { title: 'Unit 2: Protective Relays', topics: ['Overcurrent, directional, distance and differential relays (Buchholz relay for transformer protection)'] },
    ],
    recommendedBooks: ['Switchgear and Protection by Sunil S. Rao', 'Power System Protection by Badri Ram'],
    pdfDownloadName: 'SBTE_EE_Sem6_Switchgear_2420601.pdf',
    notesCount: 8,
    pyqsCount: 5,
  },

  // ==========================================
  // COMPUTER SCIENCE & ENGINEERING (CSE) - SEMESTER 1 & 3
  // ==========================================
  {
    code: '2400101',
    name: 'Basic Engineering Mathematics',
    branchId: 'cse',
    semester: 1,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Fundamental linear algebra, matrices, calculus and analytical geometry required for computer algorithms and graphics.',
    modules: [
      { title: 'Unit 1: Matrices & Determinants', topics: ['Rank of matrix, Gauss elimination method, eigenvalues and eigenvectors'] },
      { title: 'Unit 2: Differential & Integral Calculus', topics: ['Derivatives, partial differentiation, integration methods for computational physics'] },
    ],
    recommendedBooks: ['Higher Engineering Mathematics by B.S. Grewal'],
    pdfDownloadName: 'SBTE_CSE_Sem1_Math_2400101.pdf',
    notesCount: 9,
    pyqsCount: 4,
  },
  {
    code: '2418101',
    name: 'Problem Solving & Programming in C',
    branchId: 'cse',
    semester: 1,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 2, totalHours: 75 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Core programming discipline: control flow, arrays, pointers, dynamic memory allocation, and file processing in C.',
    modules: [
      { title: 'Unit 1: Syntax & Control Structures', topics: ['Data types, bitwise operators, branching logic, loop constructs'] },
      { title: 'Unit 2: Pointers & Memory Management', topics: ['Pointer arithmetic, malloc/calloc/free, pointer to function, structs and unions'] },
    ],
    recommendedBooks: ['Let Us C by Yashavant Kanetkar', 'The C Programming Language by Kernighan & Ritchie'],
    pdfDownloadName: 'SBTE_CSE_Sem1_CProgramming.pdf',
    notesCount: 14,
    pyqsCount: 5,
  },
  {
    code: '2418301',
    name: 'Data Structures using C',
    branchId: 'cse',
    semester: 3,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 2, totalHours: 75 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Linear and non-linear data structures: stacks, queues, linked lists, binary search trees, AVL trees, and sorting algorithms.',
    modules: [
      { title: 'Unit 1: Stacks & Queues', topics: ['Infix to postfix conversion, circular queues, priority queues'] },
      { title: 'Unit 2: Trees & Graphs', topics: ['BST insertion/deletion, tree traversals (Inorder, Preorder, Postorder), BFS and DFS graph algorithms'] },
    ],
    recommendedBooks: ['Data Structures by Seymour Lipschutz (Schaum\'s Outline)', 'Data Structures Using C by Reema Thareja'],
    pdfDownloadName: 'SBTE_CSE_Sem3_DataStructures.pdf',
    notesCount: 11,
    pyqsCount: 4,
  },

  // ==========================================
  // CIVIL ENGINEERING (CE) - SEMESTER 1 & 3
  // ==========================================
  {
    code: '2400101',
    name: 'Basic Engineering Mathematics',
    branchId: 'ce',
    semester: 1,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Calculus and geometry applied to surveying, load distribution, and material mechanics.',
    modules: [
      { title: 'Unit 1: Matrix Algebra & Equations', topics: ['Systems of linear equations, determinant properties, coordinate geometry'] },
      { title: 'Unit 2: Differential Equations', topics: ['Application to beam deflection and rate of settlement'] },
    ],
    recommendedBooks: ['Engineering Mathematics by H.K. Dass'],
    pdfDownloadName: 'SBTE_CE_Sem1_Math.pdf',
    notesCount: 7,
    pyqsCount: 4,
  },
  {
    code: '2415301',
    name: 'Surveying & Geomatics',
    branchId: 'ce',
    semester: 3,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 0, practical: 2, totalHours: 75 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Chain surveying, compass surveying, plane table surveying, leveling, theodolite traverse, and Total Station introduction.',
    modules: [
      { title: 'Unit 1: Compass & Plane Table', topics: ['Prismatic compass, fore & back bearing, local attraction adjustment, plane table resection'] },
      { title: 'Unit 2: Leveling & Contouring', topics: ['Dumpy level, Height of Instrument vs Rise & Fall method, contour interval & profile leveling'] },
    ],
    recommendedBooks: ['Surveying Vol 1 & 2 by B.C. Punmia', 'Surveying by N.N. Basak'],
    pdfDownloadName: 'SBTE_CE_Sem3_Surveying.pdf',
    notesCount: 10,
    pyqsCount: 4,
  },

  // ==========================================
  // MECHANICAL ENGINEERING (ME) - SEMESTER 1 & 3
  // ==========================================
  {
    code: '2400101',
    name: 'Basic Engineering Mathematics',
    branchId: 'me',
    semester: 1,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Mathematical tools for mechanical design, stress-strain curves, and heat transfer computations.',
    modules: [
      { title: 'Unit 1: Algebra & Calculus', topics: ['Taylor\'s series, partial derivatives, double integrals'] },
    ],
    recommendedBooks: ['Higher Engineering Mathematics by B.S. Grewal'],
    pdfDownloadName: 'SBTE_ME_Sem1_Math.pdf',
    notesCount: 6,
    pyqsCount: 4,
  },
  {
    code: '2425301',
    name: 'Engineering Thermodynamics',
    branchId: 'me',
    semester: 3,
    credits: 4,
    category: 'Theory',
    ciHours: { lecture: 3, tutorial: 1, practical: 0, totalHours: 60 },
    marks: { endSemTheory: 70, progressiveAssessment: 30, totalMarks: 100 },
    description: 'Laws of thermodynamics, Carnot cycle, steam properties, Rankine cycle, Otto & Diesel cycles for internal combustion engines.',
    modules: [
      { title: 'Unit 1: First & Second Laws of Thermodynamics', topics: ['Work and heat interactions, SFEE equation, Clausius and Kelvin-Planck statements, entropy concept'] },
      { title: 'Unit 2: Air Standard Cycles', topics: ['Carnot, Otto, Diesel and Dual cycles: Air standard efficiency derivation and P-V / T-S diagrams'] },
    ],
    recommendedBooks: ['Engineering Thermodynamics by P.K. Nag', 'Thermal Engineering by R.S. Khurmi'],
    pdfDownloadName: 'SBTE_ME_Sem3_Thermodynamics.pdf',
    notesCount: 8,
    pyqsCount: 4,
  },
];
