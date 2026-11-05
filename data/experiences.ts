export interface ExperienceCertificate {
  title: string;
  url: string;
}

export interface Experience {
  org: string;
  role: string;
  period: string;
  location?: string;
  badge?: string;
  desc: string;
  contributions: string[];
  certificates?: ExperienceCertificate[];
}

export const experiences: Experience[] = [
  {
    org: "Digistar Club by Telkom Indonesia",
    role: "Event Staff & Project Coordinator",
    period: "Feb 2026 — Present",
    location: "Malang, East Java",
    badge: "Tech Community",
    desc: "Active in multiple high-impact initiatives by Telkom Indonesia's premier talent community, connecting university students to future career pathways, bootcamp execution, and live broadcasting.",
    contributions: [
      "Project Coordinator for Digicourse x Mini Bootcamp Network 2026 ('Beyond Knowledge: Empowering Future Career Journeys') in collaboration with HMDM UB.",
      "Event Specialist at Digicamp vol.1: Crack The Business Code — Day 3 Person-in-Charge (PIC) and Virtual Stage & Spotlight Operator across 3 consecutive days.",
      "Bumper Manager for Digistar Connect Goes to Brawijaya University 2026 (collaborative event with Google Developer Groups on Campus / GDGoC).",
    ],
  },
  {
    org: "Tanoto Foundation",
    role: "TELADAN Leadership Scholarship Program Awardee 2026",
    period: "Jan 2026 — Present",
    location: "Indonesia",
    badge: "Prestigious Award",
    desc: "Selected as a Tanoto Scholar through the highly competitive TELADAN program designed to nurture purpose-driven and future-ready leaders across partner universities.",
    contributions: [
      "Participating in structured leadership development, executive coaching, mentorship, and project-based experiential learning.",
      "Contributing to social impact initiatives with the Pay It Forward spirit across the nationwide Tanoto Scholars network.",
      "Building inter-university collaborations and expanding professional horizons.",
    ],
  },
  {
    org: "Tanoto Scholars Association (TSA) Brawijaya",
    role: "Project Officer, Staff of Community Partners & MC",
    period: "Feb 2026 — Present",
    location: "Malang, East Java",
    badge: "Leadership & Community",
    desc: "Bridging institutional collaborations and leading public-facing engagement within the Universitas Brawijaya chapter of Tanoto Scholars Association.",
    contributions: [
      "Project Officer for Benchmarking 2026: Tanoto Scholars Association (TSA) Brawijaya x Society of Renewable Energy (SRE) Universitas Brawijaya.",
      "Staff of Community Partners: Managing end-to-end partnership workflows, consultation, and external stakeholder relationships.",
      "Master of Ceremony for Social Action Implementation of SDGs #3 (AKSIS #3): Emotion Adventure.",
    ],
  },
  {
    org: "BEM FILKOM Universitas Brawijaya",
    role: "Facilitator Staff, Pemateri & Master of Ceremony",
    period: "May 2026 — Present",
    location: "Malang & Sukabumi",
    badge: "Faculty Leadership",
    desc: "Serving in key student development, advocacy, and outreach programs organized by the Student Executive Board (BEM) of the Faculty of Computer Science.",
    contributions: [
      "Pemateri (Speaker) for Scholarship On The Go 2026 by Ministry of Student Advocacy & Welfare (Advokesma) BEM FILKOM UB.",
      "Master of Ceremony for Keynote Speaker & Focus Group Discussion at SCHOTIVAL 2026 ('Pathway To The Sky') by BEM FILKOM UB.",
      "Facilitator Division Staff for PKKMB & Startup Academy FILKOM 2026.",
      "Field Speaker & Volunteer for FILKOM Goes To School (FGTS) 2026 Sukabumi ('Transform with Technology'), conducting on-site roadshows across 3 high schools.",
    ],
    certificates: [
      {
        title: "Pemateri — Scholarship On The Go 2026",
        url: "/certificates/scholarship-on-the-go-2026-pemateri.pdf",
      },
      {
        title: "Master of Ceremony — SCHOTIVAL 2026",
        url: "/certificates/schotival-2026-mc.pdf",
      },
    ],
  },
  {
    org: "BCC FILKOM Universitas Brawijaya",
    role: "Data Science Intern",
    period: "Feb 2026 — Mar 2026",
    location: "Universitas Brawijaya",
    badge: "Technical",
    desc: "Gained focused technical exposure and hands-on data analytics experience in Basic Computing Community (BCC) FILKOM UB.",
    contributions: [
      "Conducted exploratory data analysis, data pre-processing, and foundational machine learning experiments.",
      "Honed practical data problem-solving and modern technical workflow execution.",
    ],
  },
  {
    org: "KBMDSI FILKOM Universitas Brawijaya",
    role: "Vice Head of Sponsorship & Junior PR Staff",
    period: "Oct 2025 — Aug 2026",
    location: "Malang, East Java",
    badge: "Departmental",
    desc: "Active contributor across public relations and commercial partnership arms of the Information Systems Student Department (KBMDSI).",
    contributions: [
      "Vice Head of Sponsorship and Fundraising Division — IT Fest KBMDSI 2026.",
      "Junior Public Relations Staff (Medkominfo) Navakara Cabinet: managed social media publications, public engagement, and organizational communication.",
    ],
  },
  {
    org: "BKKBN West Java Province",
    role: "West Java GenRe Youth Ambassador (Male Innovator 2024)",
    period: "Sep 2024 — Sep 2025",
    location: "West Java, Indonesia",
    badge: "Provincial Youth Ambassador",
    desc: "Elected provincial youth representative for BKKBN's Generasi Berencana (GenRe) program, promoting youth empowerment, reproductive health, and social innovation.",
    contributions: [
      "Awarded Winner of West Java Provincial GenRe Ambassador (Male Innovator Category).",
      "Conducted youth advocacy, stunting prevention campaigns, and life planning education across West Java.",
      "Collaborated with local governments and youth communities to design impactful social programs.",
    ],
  },
  {
    org: "Sukabumi Regency GenRe Forum",
    role: "Sukabumi Regency GenRe Ambassador",
    period: "Sep 2023 — Apr 2025",
    location: "Sukabumi, West Java",
    badge: "Regency Ambassador",
    desc: "Led district-level youth education, public speaking roadshows, and peer counseling on family planning and adolescent development.",
    contributions: [
      "Delivered public talks and mentoring sessions to hundreds of youth.",
      "Represented Sukabumi Regency in provincial-level forums and competitions.",
    ],
  },
  {
    org: "Filantroops",
    role: "Event Staff",
    period: "Jun 2025 — Aug 2025",
    location: "Indonesia",
    badge: "Social Impact",
    desc: "Contributed to event logistics, cross-functional team coordination, and project management for social impact initiatives.",
    contributions: [
      "Handled operational coordination and stakeholder communications.",
      "Earned E-Certificate of Appreciation for exemplary staff contributions.",
    ],
  },
  {
    org: "OSIS SMAN 1 Cicurug",
    role: "Secretary of Student Leadership & Civic Affairs",
    period: "Sep 2022 — Aug 2023",
    location: "Sukabumi, West Java",
    badge: "High School Leadership",
    desc: "Managed student council administrative workflows, school events, and civic leadership programs at SMAN 1 Cicurug.",
    contributions: [
      "Organized school-wide events and fostered student discipline & character building.",
    ],
  },
];
