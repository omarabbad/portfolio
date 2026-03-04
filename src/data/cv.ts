// ─── CV Data — Single Source of Truth ────────────────────────────────────────
// All content is extracted strictly from Omar Salah Abubaker Abbad's CV.
// Do NOT add, invent, or modify any information.

export const cv = {
  // ── Personal ──────────────────────────────────────────────────────────────
  fullName:  'Omar Salah Abubaker Abbad',
  shortName: 'Omar Abbad',
  initials:  'OA',
  title:     'Computer Science Student – Artificial Intelligence',

  summary:
    'I am a Computer Science undergraduate specializing in Artificial Intelligence, equipped with programming skills and hands-on experience. I am eager to contribute to real-world projects while expanding my knowledge in the field.',

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    email:   'omarsalahabubakerabbad@gmail.com',
    phone:   '+60 11 6170 6122',
    address: 'Bukit OUG, 58200 Kuala Lumpur, Federal Territory of Kuala Lumpur',
  },

  // ── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      degree:      'Bachelor of Computer Science (Artificial Intelligence)',
      institution: 'Asia Pacific University',
      duration:    '2023 – 2027',
      note:        'Expected graduation 2027',
    },
  ],

  // ── Skills ────────────────────────────────────────────────────────────────
  skills: {
    programmingLanguages: ['Python', 'Java', 'C', 'C++', 'R', 'SQL', 'NASM'],
    technicalSkills: [
      'Object-Oriented Programming (OOP)',
      'Data Structures',
      'File Handling',
      'CRUD Operations',
      'Linux Command Line',
      'Virtual Machine Configuration and Management',
    ],
    tools: ['NetBeans', 'VS Code', 'MySQL', 'RStudio'],
    softSkills: [
      'Strong communication skills',
      'Leadership abilities',
      'Effective teamwork and collaboration',
      'Problem-solving in academic projects',
      'Adaptable and eager to learn new technologies',
    ],
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      name:        'Hotel Management System',
      language:    'Python',
      description: 'Built a hotel booking and payment system using file handling and modular design.',
      tags:        ['Python', 'File Handling', 'Modular Design'],
    },
    {
      name:        'Patient Management System',
      language:    'Java',
      description: 'Created a hospital record system with CRUD operations and secure user authentication using Object-Oriented Programming.',
      tags:        ['Java', 'OOP', 'CRUD Operations'],
    },
    {
      name:        'Food Management System',
      language:    'C#',
      description: 'Developed a GUI desktop application for inventory management and report generation.',
      tags:        ['C#', 'GUI', 'Inventory Management'],
    },
    {
      name:        'Flight Delay Prediction System',
      language:    'R',
      description: 'Performed flight data analysis using data cleaning, visualization, and descriptive statistics.',
      tags:        ['R', 'Data Analysis', 'Visualization', 'Statistics'],
    },
    {
      name:        'Hotel Booking Management System',
      language:    'SQL',
      description: 'Designed a normalized database for multi-branch hotel bookings with enforced constraints.',
      tags:        ['SQL', 'Database Design', 'Normalization'],
    },
    {
      name:        'Network Administration',
      language:    'Linux',
      description: 'Configured DNS, email, and FTP servers in virtualized Linux environments (Ubuntu & Rocky).',
      tags:        ['Linux', 'Ubuntu', 'Rocky Linux', 'DNS', 'FTP'],
    },
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    {
      name:     'Red Hat System Administration II',
      issuer:   'Red Hat',
      expected: 'November 2025',
      status:   'In Progress',
    },
  ],

  // ── Stats (derived from CV — no fabrication) ──────────────────────────────
  stats: [
    { value: '6',    label: 'Academic Projects',    sub: 'End-to-end solutions'     },
    { value: '7',    label: 'Programming Languages', sub: 'Python, Java, C, C++, R, SQL, NASM' },
    { value: '4',    label: 'Skill Categories',      sub: 'Languages, Technical, Tools, Soft' },
    { value: '2027', label: 'Expected Graduation',   sub: 'Asia Pacific University'  },
  ],
} as const;

export type CV = typeof cv;
