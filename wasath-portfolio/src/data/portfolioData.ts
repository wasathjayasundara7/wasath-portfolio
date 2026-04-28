import type {
    NavLink, Skill, Experience, Project, Education, Reference
} from "../types";

export const personalInfo = {
    name: "Wasath Jayasundara",
    tagline: "Tech Enthusiast",
    bio: `I am a final-year B.Sc. (Hons) Information Technology undergraduate at SLIIT. My focus lies at the intersection of business analysis, product management, and UI/UX design.`,
    email: "wasathjayasundara@gmail.com",
    phone: "+94 76 447 9005",
    linkedin: "https://www.linkedin.com/in/wasath-jayasundara-4a7069286",
    github: "https://github.com/wasathjayasundara7",
    location: "Wadduwa, Sri Lanka",
    university: "Sri Lanka Institute of Information Technology (SLIIT)",
};

export const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "PPW", href: "#preparation-professional-world" },
    { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
    // Project Management
    { name: "Agile & Scrum", icon: "🔄", category: "pm", level: 90 },
    { name: "Kanban", icon: "📋", category: "pm", level: 85 },
    { name: "Risk Management", icon: "⚡", category: "pm", level: 80 },
    { name: "Stakeholder Mgmt", icon: "🤝", category: "pm", level: 88 },
    { name: "Backlog Management", icon: "📌", category: "pm", level: 85 },

    // Tools
    { name: "Jira", icon: "🔧", category: "tools", level: 88 },
    { name: "Figma", icon: "🎨", category: "tools", level: 85 },
    { name: "MS Project", icon: "📅", category: "tools", level: 75 },
    { name: "Lucidchart", icon: "🗺", category: "tools", level: 78 },
    { name: "Draw.io", icon: "📐", category: "tools", level: 80 },

    // Technical
    { name: "API Knowledge", icon: "🔌", category: "technical", level: 75 },
    { name: "MERN Stack", icon: "⚛️", category: "technical", level: 70 },
    { name: "Python / ML", icon: "🐍", category: "technical", level: 68 },
    { name: "Use Case Diagrams", icon: "📝", category: "technical", level: 85 },

    // Design
    { name: "UI/UX Design", icon: "✏️", category: "design", level: 85 },
    { name: "Wireframing", icon: "🖼", category: "design", level: 88 },
    { name: "Low/High Fidelity", icon: "🎭", category: "design", level: 82 },
];

export const experience: Experience[] = [
    {
        role: "Intern Technical Product Manager",
        company: "Dialog Axiata PLC",
        period: "Nov 2024 – July 2025",
        location: "Colombo, Sri Lanka",
        description: `Contributed to Ideamart and APPMAKER — Sri Lanka's leading digital
      innovation platforms. Ideamart is Dialog's flagship open innovation platform
      democratizing access to telco APIs. APPMAKER is a no-code platform enabling
      non-technical users to create mobile apps.`,
        bullets: [
            "Reviewed and moderated 200+ apps across Ideamart and AppMaker for technical and content compliance; supported Play Store publishing.",
            "Managed customer relations with 100% issue resolution rate for technical queries and complex service provider complaints.",
            "Independently proposed a product strategy to launch AppMaker as a standalone Android app; delivered plan to stakeholders.",
            "Designed culturally relevant UI themes in Figma, enhancing platform engagement while maintaining visual consistency.",
            "Led community engagement for Appmaker/Ideamart developer ecosystems through targeted meetups and workshops.",
            "Collaborated with GSMA, RAIGHT AI, and Long Street Advisors on GenAI feature R&D in APPMAKER.",
            "Coordinated with hSenid Mobile Solutions and Simato Solutions; took meeting minutes and aligned deliverables.",
            "Actively sought feedback from senior designers and tech leads, demonstrating commitment to continuous learning.",
        ],
        tech: ["Jira", "Figma", "Agile", "API", "Play Store", "Stakeholder Mgmt", "GenAI"],
    },
];

export const projects: Project[] = [
    {
        title: "Intelligent Emergency Response Ecosystem",
        description: "Final year research project — an AI-powered emergency response system leveraging Machine Learning and push notifications for real-time coordination.",
        tech: ["Machine Learning", "Python", "Flutter", "FCM", "Figma"],
        period: "Aug 2025 – Present",
        highlight: true,
    },
    {
        title: "Vintage Items Auction Management System",
        description: "Full-stack MERN auction platform with real-time bidding, form validation with Zod, and state management with Redux.",
        tech: ["MERN Stack", "Redux", "Zod", "Postman", "React Hook Forms"],
        github: "https://github.com/Movin21/RelicRoom.git",
        period: "Feb – Apr 2024",
        highlight: true,
    },
    {
        title: "Redesigning The Kathuwaraya Website",
        description: "Led a team redesign of Kathuwaraya's web presence; delivered high-fidelity Figma prototypes with modern UX patterns.",
        tech: ["Figma", "UI/UX Design", "Prototyping"],
        figma: "https://www.figma.com/proto/nTfZkE8Q1WtARaVdy9bnSz/WebWizards---Kathuwaraya?node-id=0-1&t=68aL8SXGjpthdhnU-1",
        period: "Aug – Oct 2025",
        highlight: false,
    },
    {
        title: "Online Travel Planning System",
        description: "MERN-based travel planning platform with Redux state management and RESTful API integration via Postman.",
        tech: ["MERN Stack", "Redux", "Postman"],
        period: "Mar – May 2025",
        highlight: false,
    },
    {
        title: "Skill Sharing and Learning Platform",
        description: "Full-stack learning platform built with Spring Boot backend, React frontend, and MySQL database.",
        tech: ["Spring Boot", "React", "MySQL"],
        period: "Mar – May 2025",
        highlight: false,
    },
    {
        title: "Online Customer Support System",
        description: "Led a team to build a PHP-based help desk system with HTML/CSS/JavaScript frontend.",
        tech: ["HTML", "CSS", "JavaScript", "PHP"],
        github: "https://github.com/YasasLakmina/HelpDesk---Online-Customer-Support-System.git",
        period: "Apr – Jun 2023",
        highlight: false,
    },
];

export const education: Education[] = [
    {
        degree: "B.Sc. (Hons) in Information Technology — Specializing in IT",
        institution: "Sri Lanka Institute of Information Technology (SLIIT)",
        period: "2021 – Present (Final Year, Final Semester)",
        note: "Focus: Agile, System Design, HCI/UI/UX, Database Management, ML",
    },
    {
        degree: "Secondary Education (G.C.E. Advanced Level)",
        institution: "Mahanama College, Colombo 03",
        period: "2012 – 2020",
    },
];

export const references: Reference[] = [
    {
        name: "Dushantha Ranwala",
        role: "Senior Tech Evangelist – IdeaMart, Group IT & Innovation Management",
        company: "Dialog Axiata PLC",
        phone: "+94 777 333 271",
        email: "dushantha.ranwala@dialog.lk",
    },
    {
        name: "Crishane Perera",
        role: "Senior Tech Lead",
        company: "Dialog Axiata PLC",
        phone: "+94 777 330 710",
        email: "crishane.perera@dialog.lk",
    },
];

export const languages = ["Sinhala (Native)", "English (Professional)"];

export const interests = [
    "Business Analysis",
    "Project Management",
    "Product Management",
    "UI/UX Design",
    "Software Quality Assurance",
];