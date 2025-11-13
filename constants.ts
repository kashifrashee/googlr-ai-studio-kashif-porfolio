import { ContactInfo, Experience, Project, SkillCategory } from './types';

// Direct link to the uploaded profile picture on Google Drive
// Using the export=view format which is more reliable for embedding
export const PROFILE_IMAGE_URL = "https://drive.google.com/uc?export=view&id=1vxbx3_gguih5G_xRIyRXnsIlvf0mhN96"; 

export const RESUME_LINK = "https://drive.google.com/file/d/1obncMOY2mugaA5QD9cqHMMLONfrO8edH/view?usp=sharing";

export const RESUME_SUMMARY = `
Results-driven Android Developer with hands-on experience in building and scaling applications for over 5+ million users. 
Proficient in modern Android technologies including Kotlin, Jetpack Compose, and MVVM. 
Passionate about creating high-performance, accessible, and user-centric mobile solutions.
`;

export const CONTACT_INFO: ContactInfo = {
  email: "rasheedkashif849@gmail.com",
  phone: "+92 343-2148024",
  linkedin: "https://linkedin.com/in/kashif-rasheed", 
  github: "https://github.com/kashifrashee", 
  location: "Pakistan" 
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Core Android",
    skills: ["Kotlin", "Java", "Jetpack Compose", "MVVM", "Coroutines", "Dagger Hilt", "Room Database", "Retrofit"]
  },
  {
    category: "Android Framework",
    skills: ["CameraX", "Navigation", "WorkManager", "Accessibility Services", "Overlay Services", "Material Design 3"]
  },
  {
    category: "Backend & AI Integration",
    skills: ["Firebase (Firestore, Auth, Storage)", "OpenAI GPT", "Claude API", "Gemini API", "DeepSeek API", "DALL-E 3"]
  },
  {
    category: "Tools & Monetization",
    skills: ["Android Studio", "Git", "GitHub", "Google AdMob", "Play Billing API", "In-App Purchases"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Junior Android Developer",
    company: "Innovative Network Private Limited",
    period: "April 2025 – Present",
    highlights: [
      "Led the end-to-end development of 'Smartly AI', a multi-model assistant app, from concept to deployment.",
      "Engineered a dynamic multi-model framework to integrate OpenAI, Gemini, Claude, and DeepSeek.",
      "Implemented advanced features such as real-time web access, DALL-E 3 image generation, and context-aware AI personalities.",
      "Built a reactive UI using Kotlin and Jetpack Compose, ensuring a smooth user experience."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Smartly AI - Multi-Model Assistant",
    role: "Lead Developer",
    description: "Led development of a multi-model AI assistant allowing users to switch seamlessly between OpenAI, Gemini, Claude, and DeepSeek. Features real-time web access and DALL-E 3 integration.",
    technologies: ["Kotlin", "Jetpack Compose", "OpenAI", "Gemini", "Claude", "DeepSeek"],
    metrics: ["Multi-Model Framework", "Real-time Web Access", "DALL-E 3 Generation"],
    imageUrl: "https://play-lh.googleusercontent.com/RnjsOecoFi0dlQTgB8qyUimqJ4Td9HonvaolXXum7iEZJa9qxh8nyoAgolVHDZgJ3QyECZyink6qw1EYqHAJ0g=w480-h960-rw",
    link: "https://play.google.com/store/apps/details?id=com.naftech.multiai2&pcampaignid=web_share"
  },
  {
    id: "proj-2",
    title: "Photo & Video Recovery App",
    role: "Android Engineer",
    description: "Engineered robust file recovery algorithms achieving an 85% success rate without root access. Improved app stability by 40% and reduced crash reports by 60%.",
    technologies: ["Java", "Kotlin", "File Systems", "Threading"],
    metrics: ["5M+ Installs", "4.8★ Rating", "85% Recovery Rate", "60% Crash Reduction"],
    imageUrl: "https://play-lh.googleusercontent.com/nF5hTtpARKEyPChZWy3FpWS919lMZg2IhTGtAVU2RZEySGH2z8y3wrH_rqbqumVotXk=w480-h960-rw",
    link: "https://play.google.com/store/apps/details?id=com.fitechno.photorecovery&pcampaignid=web_share"
  },
  {
    id: "proj-3",
    title: "EzGuide - AI Assistant App",
    role: "Architect",
    description: "Architected an AI-powered accessibility application providing on-screen guidance using Android Accessibility Services. Processed over 200 applications with 99% accuracy.",
    technologies: ["Accessibility Services", "Room Database", "Overlay Services"],
    metrics: ["200+ Apps Processed", "99% Scanner Accuracy", "60% Reduced Learning Curve"],
    imageUrl: "https://play-lh.googleusercontent.com/ZWdQJhNLTmoXE8yaPLeM2hS5L00tuBgSbhT2GKIeiyiWSHsqWWu1QS6kotYHwHjC8h6Fmffd8LE2xwS_bxyXkHU=w480-h960-rw",
    link: "https://play.google.com/store/apps/details?id=com.cjc.ezguide&pcampaignid=web_share"
  }
];

export const EDUCATION = {
  degree: "BS Software Engineering",
  institution: "Sir Syed University",
  year: "2025"
};