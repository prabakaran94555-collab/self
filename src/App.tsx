import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Code2, 
  Cpu, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Moon, 
  Sun, 
  CheckCircle2, 
  Upload, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  BookOpen, 
  Layers, 
  Check, 
  X,
  Menu,
  ChevronRight,
  ShieldCheck,
  Star,
  Activity,
  CpuIcon,
  Rocket
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  featured: boolean;
}

interface InternshipItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  image?: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image?: string;
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('profile');
  const [splashEmoji, setSplashEmoji] = useState<{ emoji: string; title: string } | null>(null);
  const [isAnimatingNav, setIsAnimatingNav] = useState<boolean>(false);

  // User details
  const personalInfo = {
    name: "Prabakaran",
    location: "Tiruvannamalai Dt., Tamil Nadu",
    email: "prabakaran94555@gmail.com",
    phone: "+91-9360478864",
    degree: "B.Tech. in Agriculture Engineering",
    university: "Dhanalakshmi Srinivasan University, Tiruchirappalli (2023 – 2027)",
    objective: "Seeking an entry-level Agriculture Engineering position where I can apply my knowledge of smart farming technologies, embedded systems, and full stack development to build practical, technology-driven solutions for the agriculture sector, while continuing to learn and grow professionally."
  };

  // Editable states for user photo uploads
  const [profileImage, setProfileImage] = useState<string>("https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80");
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Projects state with photo upload support
  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      id: 'agri-sync',
      title: 'AGRI-SYNC – Smart Agricultural Management Platform',
      category: 'Full Stack & AgriTech',
      description: 'Developed a full-stack smart agricultural management platform to support farmers with monitoring and management tools, integrating crop health analytics, weather advisory, and automated irrigation triggers using Java, Spring Boot, and modern web tech.',
      tech: ['Java', 'Spring Boot', 'HTML/CSS', 'MySQL', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
      link: '#',
      featured: true
    },
    {
      id: 'footstep-power',
      title: 'Footstep Power Generator (IoT & Embedded)',
      category: 'Embedded Systems / IoT',
      description: 'Developed an embedded systems-based footstep power generator project to convert mechanical footstep energy into usable electrical power, applying basics of embedded systems, piezoelectric sensors, STM32/ESP32, and IoT monitoring dashboards.',
      tech: ['Embedded C', 'ESP32', 'STM32', 'IoT Sensors', 'Arduino'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      link: '#',
      featured: true
    }
  ]);

  // Internships state
  const [internships, setInternships] = useState<InternshipItem[]>([
    {
      role: 'Industrial Intern',
      company: 'Aavin Industries',
      period: 'Recent',
      description: 'Learned dairy processing operations, automated quality control systems, and studied state-level agriculture machinery information and usage.',
      skills: ['Dairy Processing', 'Agri Machinery', 'Quality Operations'],
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
    },
    {
      role: 'Data Science Intern — Entrepreneurship in Agriculture',
      company: 'AgriTech Innovation Cell',
      period: 'Recent',
      description: 'Learned data science fundamentals with a focus on entrepreneurship and innovation in the agriculture sector, predictive crop yield modeling, and market analysis.',
      skills: ['Data Analytics', 'Agripreneurship', 'Python / SQL'],
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80'
    },
    {
      role: 'Embedded Systems Intern',
      company: 'IPCS Global',
      period: 'Recent',
      description: 'Learned embedded systems concepts and hands-on implementation using microcontroller platforms (Arduino, ESP32, STM32) and sensor interfacing.',
      skills: ['Microcontrollers', 'Embedded C', 'Circuit Design', 'IoT Protocols'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // Certifications state with photo upload support
  const [certifications, setCertifications] = useState<CertificationItem[]>([
    {
      title: 'Embedded Systems Certification',
      issuer: 'IPCS Global',
      date: '2024',
      credentialId: 'IPCS-ES-7892',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Java Full Stack Development Certification',
      issuer: 'IPCS Global',
      date: '2024',
      credentialId: 'IPCS-JFS-4512',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hackathon Certificate – Blockchain Technology',
      issuer: 'Tech Innovation Meet',
      date: '2023',
      credentialId: 'TECH-BC-9901',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'NCC ‘B’ Certificate & District Level Gold Medal',
      issuer: 'National Cadet Corps (NCC)',
      date: '2022',
      credentialId: 'NCC-TN-GOLD-55',
      image: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // AI Chatbot state
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', text: string}>>([
    { role: 'assistant', text: "Hello! I'm Prabakaran's virtual AI assistant. Feel free to ask me anything about his B.Tech. Agriculture Engineering background, Java Full Stack skills, embedded systems projects, or certifications!" }
  ]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  // Handle tab change with splash screen animation
  const handleNavClick = (tabId: string, title: string, emoji: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setSplashEmoji({ emoji, title });
    setIsAnimatingNav(true);
    setTimeout(() => {
      setIsAnimatingNav(false);
      setSplashEmoji(null);
    }, 1100);
  };

  // Image upload handler helper
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          callback(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Send message to backend Gemini AI proxy
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isAiLoading) return;

    const userText = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsAiLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();
      if (data.reply) {
        setChatMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setChatMessages(prev => [...prev, { role: 'assistant', text: "I'm currently unable to process that request, but Prabakaran's portfolio highlights strong expertise in Agriculture Engineering, Java Full Stack, and Embedded Systems!" }]);
      }
    } catch {
      setChatMessages(prev => [...prev, { role: 'assistant', text: "Error connecting to assistant. Please reach out via email at prabakaran94555@gmail.com or phone at +91-9360478864!" }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 relative overflow-x-hidden ${darkMode ? 'bg-[#0a0f1d] text-zinc-100' : 'bg-[#f0f4ff] text-zinc-900'}`}>
      
      {/* Colorful Background Glow Ambient Orbs & Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <div className={`absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[140px] transition-colors duration-700 ${darkMode ? 'bg-gradient-to-tr from-indigo-900/50 via-purple-900/50 to-pink-900/40' : 'bg-gradient-to-tr from-indigo-300/70 via-purple-300/60 to-pink-300/50'}`}></div>
        <div className={`absolute top-[25%] right-[-15%] w-[60vw] h-[60vw] rounded-full blur-[160px] transition-colors duration-700 ${darkMode ? 'bg-gradient-to-br from-emerald-900/40 via-teal-900/50 to-cyan-900/50' : 'bg-gradient-to-br from-emerald-200/70 via-teal-200/60 to-cyan-300/60'}`}></div>
        <div className={`absolute bottom-[-10%] left-[15%] w-[65vw] h-[65vw] rounded-full blur-[180px] transition-colors duration-700 ${darkMode ? 'bg-gradient-to-r from-blue-900/40 via-violet-900/45 to-fuchsia-900/40' : 'bg-gradient-to-r from-blue-200/70 via-violet-200/60 to-rose-200/50'}`}></div>
      </div>

      {/* Splash Screen Animation Overlay */}
      {isAnimatingNav && splashEmoji && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white animate-fadeIn">
          <div className="text-8xl mb-6 animate-bounce animate-pulse drop-shadow-2xl">
            {splashEmoji.emoji}
          </div>
          <h2 className="text-4xl font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-white to-emerald-200 bg-clip-text text-transparent uppercase animate-pulse">
            {splashEmoji.title}
          </h2>
          <div className="mt-4 w-48 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 animate-[shimmer_1s_infinite]"></div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode ? 'bg-[#0a0f1d]/85 border-indigo-900/40 shadow-lg shadow-indigo-950/20' : 'bg-white/85 border-indigo-100 shadow-lg shadow-indigo-100/30'}`}>
        <div className="container-xxl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('profile', 'Profile & Overview', '🌱')}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 text-white font-bold text-2xl transform hover:rotate-6 transition-transform">
                P
              </div>
              <div>
                <span className="text-xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Prabakaran
                </span>
                <span className={`block text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  Agriculture Engineer & Tech
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { id: 'profile', label: 'Profile', emoji: '🌱' },
                { id: 'skills', label: 'Skills', emoji: '💻' },
                { id: 'projects', label: 'Projects', emoji: '🚀' },
                { id: 'experience', label: 'Experience', emoji: '💼' },
                { id: 'education', label: 'Education', emoji: '🎓' },
                { id: 'certifications', label: 'Certifications', emoji: '🏆' },
                { id: 'contact', label: 'Contact', emoji: '✉️' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavClick(tab.id, tab.label, tab.emoji)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? darkMode 
                        ? 'bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white shadow-lg shadow-indigo-600/30 scale-105' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                      : darkMode
                        ? 'text-zinc-300 hover:text-white hover:bg-white/5'
                        : 'text-zinc-700 hover:text-zinc-900 hover:bg-black/5'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Right Actions: Dark Mode & Resume Modal & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all duration-300 border ${
                  darkMode 
                    ? 'bg-zinc-900 border-indigo-800/60 text-amber-400 hover:bg-zinc-800 shadow-inner' 
                    : 'bg-white border-indigo-200 text-indigo-600 hover:bg-indigo-50 shadow-sm'
                }`}
                title="Toggle Dark/Light Mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="hidden sm:flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-3 rounded-xl border ${darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-4 py-4 space-y-2 backdrop-blur-2xl ${darkMode ? 'bg-zinc-950/95 border-zinc-800 text-white' : 'bg-white/95 border-zinc-200 text-zinc-900'}`}>
            {[
              { id: 'profile', label: 'Profile', emoji: '🌱' },
              { id: 'skills', label: 'Skills', emoji: '💻' },
              { id: 'projects', label: 'Projects', emoji: '🚀' },
              { id: 'experience', label: 'Experience', emoji: '💼' },
              { id: 'education', label: 'Education', emoji: '🎓' },
              { id: 'certifications', label: 'Certifications', emoji: '🏆' },
              { id: 'contact', label: 'Contact', emoji: '✉️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.id, tab.label, tab.emoji)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold'
                    : darkMode ? 'hover:bg-zinc-900' : 'hover:bg-zinc-100'
                }`}
              >
                <span>{tab.label}</span>
                <ChevronRight className="w-4 h-4 opacity-75" />
              </button>
            ))}
            <button
              onClick={() => { setResumeModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full mt-3 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 text-white font-semibold"
            >
              <FileText className="w-5 h-5" />
              <span>View Full Resume</span>
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Container (Single Frame View Switching) */}
      <main className="container-xxl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">

        {/* ================= 1. PROFILE SECTION ================= */}
        {activeTab === 'profile' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Hero Banner Card */}
            <div className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border backdrop-blur-xl transition-all duration-300 shadow-2xl ${
              darkMode 
                ? 'bg-zinc-900/80 border-indigo-900/60 shadow-indigo-950/50' 
                : 'bg-white/90 border-indigo-200 shadow-xl shadow-indigo-100/50'
            }`}>
              {/* Colorful gradient abstract accent inside card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-6">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-indigo-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <Sprout className="w-4 h-4 text-emerald-400" />
                    <span>Agriculture Engineering & Full Stack Developer</span>
                  </div>

                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                      {personalInfo.name}
                    </span>
                  </h1>

                  <p className={`text-lg sm:text-xl font-medium leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {personalInfo.objective}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium border ${darkMode ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-indigo-50/80 border-indigo-200 text-indigo-900'}`}>
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium border ${darkMode ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-indigo-50/80 border-indigo-200 text-indigo-900'}`}>
                      <Mail className="w-4 h-4 text-teal-400" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium border ${darkMode ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-indigo-50/80 border-indigo-200 text-indigo-900'}`}>
                      <Phone className="w-4 h-4 text-indigo-400" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => handleNavClick('projects', 'Explore Projects', '🚀')}
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-teal-500/30 hover:opacity-95 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
                    >
                      <span>View Projects</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleNavClick('contact', 'Get In Touch', '✉️')}
                      className={`px-6 py-3.5 rounded-xl font-bold text-base border transition-all ${
                        darkMode 
                          ? 'bg-zinc-800/80 border-zinc-700 text-white hover:bg-zinc-700' 
                          : 'bg-white border-indigo-200 text-indigo-900 hover:bg-indigo-50 shadow-sm'
                      }`}
                    >
                      Contact Me
                    </button>
                  </div>
                </div>

                {/* Profile Photo Card with Upload Feature */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div className={`relative group w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden p-2 border-2 shadow-2xl ${
                    darkMode ? 'bg-zinc-950 border-indigo-500/40 shadow-indigo-900/50' : 'bg-white border-indigo-300 shadow-indigo-200'
                  }`}>
                    <img 
                      src={profileImage} 
                      alt="Prabakaran" 
                      className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 rounded-3xl">
                      <label className="cursor-pointer bg-gradient-to-r from-emerald-500 to-indigo-600 text-white py-2.5 px-4 rounded-xl font-semibold text-sm text-center shadow-lg hover:opacity-95 flex items-center justify-center space-x-2">
                        <Upload className="w-4 h-4" />
                        <span>Upload Photo</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleImageUpload(e, setProfileImage)} 
                        />
                      </label>
                    </div>
                  </div>
                  <span className="mt-3 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    Hover to update profile photo
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Smart Agriculture', desc: 'Expertise in smart farming technologies, IoT sensors, and precision agriculture solutions.', icon: <Sprout className="w-8 h-8 text-emerald-400" />, gradient: 'from-emerald-500/20 to-teal-500/10' },
                { title: 'Full Stack Dev', desc: 'Proficient in Java, Spring Boot, MySQL, and responsive front-end web development.', icon: <Code2 className="w-8 h-8 text-teal-400" />, gradient: 'from-teal-500/20 to-cyan-500/10' },
                { title: 'Embedded Systems', desc: 'Hands-on experience with ESP32, STM32, Arduino, and IoT power generation systems.', icon: <Cpu className="w-8 h-8 text-indigo-400" />, gradient: 'from-indigo-500/20 to-purple-500/10' },
              ].map((item, idx) => (
                <div key={idx} className={`p-8 rounded-3xl border backdrop-blur-xl transition-all hover:-translate-y-1 shadow-xl relative overflow-hidden ${
                  darkMode ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white/90 border-indigo-100 shadow-indigo-100/50'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} pointer-events-none`}></div>
                  <div className="relative z-10 space-y-4">
                    <div className="p-4 rounded-2xl w-fit bg-zinc-900/50 border border-white/10 shadow-inner">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 2. SKILLS SECTION (Interactive Grid Display) ================= */}
        {activeTab === 'skills' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-bold uppercase">
                <Code2 className="w-4 h-4" />
                <span>Core Competencies & Stack</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Interactive Skills Grid
              </h2>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Explore Prabakaran's technical proficiency spanning Agriculture Tech, Java Full Stack, and Embedded Systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: 'Programming Languages',
                  icon: <Code2 className="w-7 h-7 text-emerald-400" />,
                  skills: ['Java', 'C', 'JavaScript', 'SQL', 'Embedded C'],
                  color: 'from-emerald-500/20 to-teal-500/10'
                },
                {
                  category: 'Frameworks & Web',
                  icon: <Layers className="w-7 h-7 text-teal-400" />,
                  skills: ['Spring Boot', 'HTML5', 'CSS3', 'Bootstrap', 'React (Basics)'],
                  color: 'from-teal-500/25 to-cyan-500/10'
                },
                {
                  category: 'Embedded & IoT',
                  icon: <Cpu className="w-7 h-7 text-indigo-400" />,
                  skills: ['STM32', 'ESP32', 'Arduino UNO', 'IoT Simulations', 'Piezoelectric Systems'],
                  color: 'from-indigo-500/20 to-purple-500/10'
                },
                {
                  category: 'Databases & Tools',
                  icon: <Activity className="w-7 h-7 text-cyan-400" />,
                  skills: ['MySQL', 'Git & GitHub', 'VS Code', 'Eclipse / Spring Tool Suite', 'Proteus Simulation'],
                  color: 'from-cyan-500/20 to-blue-500/10'
                },
                {
                  category: 'Soft Skills',
                  icon: <Award className="w-7 h-7 text-amber-400" />,
                  skills: ['Active Listening', 'Public Speaking', 'Agricultural Entrepreneurship', 'Team Leadership'],
                  color: 'from-amber-500/20 to-orange-500/10'
                },
                {
                  category: 'Certifications & Honors',
                  icon: <ShieldCheck className="w-7 h-7 text-purple-400" />,
                  skills: ['IPCS Embedded Systems', 'Java Full Stack Cert', 'NCC ‘B’ Certificate', 'District Gold Medal (Dance/Parade)'],
                  color: 'from-purple-500/20 to-pink-500/10'
                },
              ].map((group, idx) => (
                <div key={idx} className={`group relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode ? 'bg-zinc-900/80 border-zinc-800 hover:border-indigo-500/50' : 'bg-white/95 border-indigo-100 shadow-xl hover:border-indigo-300'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${group.color} rounded-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/10 shadow-inner">
                        {group.icon}
                      </div>
                      <h3 className="text-xl font-bold">{group.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all transform hover:scale-105 ${
                            darkMode 
                              ? 'bg-zinc-950/75 border-zinc-700/80 text-zinc-200 hover:border-emerald-400/60' 
                              : 'bg-indigo-50/90 border-indigo-200 text-indigo-900 hover:border-indigo-400'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 3. PROJECTS SECTION (Masonry Card Layout with Photo Upload) ================= */}
        {activeTab === 'projects' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase">
                <Rocket className="w-4 h-4" />
                <span>Featured Works</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Masonry Project Portfolio
              </h2>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Practical, technology-driven solutions developed for agriculture and embedded energy generation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                <div key={proj.id} className={`group rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                  darkMode ? 'bg-zinc-900/85 border-zinc-800' : 'bg-white/95 border-indigo-100 shadow-xl'
                }`}>
                  <div>
                    {/* Project Image Header with Upload Support */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-lg">
                          {proj.category}
                        </span>
                      </div>

                      {/* Upload Photo Button for Project Card */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <label className="cursor-pointer bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center space-x-1.5 border border-white/20 backdrop-blur-md">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Change Photo</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(e, (url) => {
                              const updated = [...projects];
                              updated[idx].image = url;
                              setProjects(updated);
                            })} 
                          />
                        </label>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description & Tech Stack */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <p className={`text-base leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className={`px-3 py-1 rounded-xl text-xs font-semibold border ${
                              darkMode ? 'bg-zinc-800/90 border-zinc-700 text-teal-300' : 'bg-indigo-50 border-indigo-200 text-indigo-800'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-zinc-800/40">
                    <span className="text-xs text-zinc-400 font-medium">Hover card to upload custom project image</span>
                    <a 
                      href={proj.link} 
                      onClick={(e) => { e.preventDefault(); alert("Project repository & details link available on request via email!"); }}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all"
                    >
                      <span>Live Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 4. EXPERIENCE SECTION (Internships) ================= */}
        {activeTab === 'experience' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs sm:text-sm font-bold uppercase">
                <Briefcase className="w-4 h-4" />
                <span>Professional Exposure</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Internships & Training
              </h2>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Hands-on industrial experience in dairy processing, agriculture entrepreneurship, and embedded systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {internships.map((intern, idx) => (
                <div key={idx} className={`group rounded-3xl p-6 sm:p-8 border backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                  darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/95 border-indigo-100 shadow-xl'
                }`}>
                  <div className="space-y-6">
                    <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                      <img src={intern.image} alt={intern.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow">
                        {intern.period}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{intern.role}</h3>
                      <h4 className="text-sm font-semibold text-emerald-400">{intern.company}</h4>
                    </div>

                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      {intern.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {intern.skills.map((s, sIdx) => (
                        <span key={sIdx} className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                          darkMode ? 'bg-zinc-950 border-zinc-800 text-teal-300' : 'bg-indigo-50 border-indigo-200 text-indigo-900'
                        }`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-800/45 flex items-center justify-between text-xs text-zinc-400">
                    <span>Verified Internship</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 5. EDUCATION SECTION ================= */}
        {activeTab === 'education' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-bold uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Background</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Education & Qualifications
              </h2>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Strong academic foundation in Agriculture Engineering and higher secondary sciences.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  degree: personalInfo.degree,
                  institution: 'Dhanalakshmi Srinivasan University, Tiruchirappalli',
                  period: '2023 – 2027 (Pursuing)',
                  details: 'Focusing on smart farming technologies, agricultural machinery, and sustainable crop management.',
                  badge: 'Undergraduate Degree',
                  icon: <GraduationCap className="w-6 h-6 text-emerald-400" />
                },
                {
                  degree: 'Higher Secondary Course (HSC)',
                  institution: 'Bharathidasan Matriculation Higher Secondary School',
                  period: '2023',
                  details: 'Percentage: 74% — Specialized in science and mathematics.',
                  badge: 'HSC Education',
                  icon: <BookOpen className="w-6 h-6 text-teal-400" />
                },
                {
                  degree: 'Secondary School Leaving Certificate (SSLC)',
                  institution: 'Bharathidasan Matriculation Higher Secondary School',
                  period: '2020',
                  details: 'Built strong core fundamentals in science, mathematics, and communication.',
                  badge: 'SSLC Education',
                  icon: <Award className="w-6 h-6 text-indigo-400" />
                },
              ].map((edu, idx) => (
                <div key={idx} className={`p-8 rounded-3xl border backdrop-blur-xl transition-all hover:scale-[1.01] shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
                  darkMode ? 'bg-zinc-900/85 border-zinc-800' : 'bg-white/95 border-indigo-100 shadow-indigo-100/50'
                }`}>
                  <div className="flex items-start space-x-5">
                    <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/10 shrink-0">
                      {edu.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400 text-xs font-bold">
                        {edu.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold">{edu.degree}</h3>
                      <h4 className="text-base font-semibold text-emerald-400">{edu.institution}</h4>
                      <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {edu.details}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 6. CERTIFICATIONS SECTION (With Photo Upload) ================= */}
        {activeTab === 'certifications' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase">
                <Award className="w-4 h-4" />
                <span>Credentials & Badges</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Certifications & Achievements
              </h2>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Verified certifications in Java Full Stack, Embedded Systems, Blockchain, and NCC achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`group rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
                  darkMode ? 'bg-zinc-900/85 border-zinc-800' : 'bg-white/95 border-indigo-100 shadow-xl'
                }`}>
                  <div>
                    {/* Certification Image Banner with Upload Photo Feature */}
                    <div className="relative h-52 overflow-hidden">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-zinc-950 font-bold text-xs shadow-lg">
                          {cert.date}
                        </span>
                      </div>

                      {/* Upload Photo Button for Certification Card */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <label className="cursor-pointer bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-xl text-xs font-medium flex items-center space-x-1.5 border border-white/20 backdrop-blur-md">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Photo</span>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(e, (url) => {
                              const updated = [...certifications];
                              updated[idx].image = url;
                              setCertifications(updated);
                            })} 
                          />
                        </label>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-md">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-emerald-400">{cert.issuer}</span>
                        <span className={`text-xs font-mono px-3 py-1 rounded-lg border ${darkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-indigo-50 border-indigo-200 text-indigo-900'}`}>
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-zinc-800/40 text-xs text-zinc-400">
                    <span>Hover card to customize credential image</span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 7. CONTACT SECTION & GEMINI AI ASSISTANT ================= */}
        {activeTab === 'contact' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold uppercase">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Contact & AI AgTech Assistant
              </h2>
              <p className={`text-base sm:text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Reach out for professional opportunities or chat instantly with Prabakaran's virtual AI assistant powered by Gemini.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contact Info & Form */}
              <div className={`lg:col-span-6 p-8 sm:p-10 rounded-3xl border backdrop-blur-xl shadow-2xl space-y-8 ${
                darkMode ? 'bg-zinc-900/85 border-zinc-800' : 'bg-white/95 border-indigo-100 shadow-indigo-100/50'
              }`}>
                <h3 className="text-2xl font-bold">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Email Address</span>
                      <p className="text-base font-bold">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3.5 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Phone Number</span>
                      <p className="text-base font-bold">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Location</span>
                      <p className="text-base font-bold">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800/50">
                  <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your message has been sent successfully. Prabakaran will respond shortly."); }} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-zinc-400">Your Name</label>
                      <input type="text" required placeholder="Recruiter / Collaborator Name" className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-indigo-50/50 border-indigo-200 text-zinc-900'}`} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-zinc-400">Your Email</label>
                      <input type="email" required placeholder="your.email@company.com" className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-indigo-50/50 border-indigo-200 text-zinc-900'}`} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-zinc-400">Message</label>
                      <textarea rows={3} required placeholder="Discuss an Agriculture Engineering or Java Full Stack opportunity..." className={`w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-indigo-50/50 border-indigo-200 text-zinc-900'}`}></textarea>
                    </div>
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-teal-500/30 hover:opacity-95 transition-all flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Gemini AI AgTech Chatbot */}
              <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl border backdrop-blur-xl shadow-2xl flex flex-col h-[640px] ${
                darkMode ? 'bg-zinc-900/85 border-zinc-800' : 'bg-white/95 border-indigo-100 shadow-indigo-100/50'
              }`}>
                <div className="flex items-center space-x-3 pb-6 border-b border-zinc-800/50">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 to-indigo-600 text-white shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center space-x-2">
                      <span>Ask Prabakaran's AI Assistant</span>
                      <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">Powered by Gemini AI (Live Q&A)</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-md ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none'
                          : darkMode ? 'bg-zinc-950 border border-zinc-800 text-zinc-200 rounded-bl-none' : 'bg-indigo-50 border border-indigo-200 text-indigo-950 rounded-bl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isAiLoading && (
                    <div className="flex justify-start">
                      <div className={`p-4 rounded-2xl text-sm ${darkMode ? 'bg-zinc-950 text-zinc-400' : 'bg-indigo-50 text-indigo-800'}`}>
                        <span className="animate-pulse">Thinking & compiling response...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="pt-4 border-t border-zinc-800/50 flex space-x-2">
                  <input 
                    type="text" 
                    value={chatInput} 
                    onChange={(e) => setChatInput(e.target.value)} 
                    placeholder="Ask about skills, projects, or agriculture tech..." 
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-indigo-50/50 border-indigo-200 text-zinc-900'}`} 
                  />
                  <button type="submit" disabled={isAiLoading} className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 text-white font-bold shadow-md hover:opacity-95 transition-all disabled:opacity-50">
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className={`mt-20 border-t py-12 transition-colors duration-300 relative z-10 ${darkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-white border-indigo-100 text-zinc-600'}`}>
        <div className="container-xxl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <span className="font-bold text-base bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                Prabakaran
              </span>
              <p className="text-xs">B.Tech. Agriculture Engineering & Full Stack Portfolio</p>
            </div>
          </div>

          <div className="text-xs">
            © {new Date().getFullYear()} Prabakaran. All rights reserved. Built with passion for Agriculture & Tech.
          </div>
        </div>
      </footer>

      {/* Full Resume Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border p-8 sm:p-12 shadow-2xl ${
            darkMode ? 'bg-zinc-950 border-indigo-900/60 text-zinc-100' : 'bg-white border-indigo-200 text-zinc-900'
          }`}>
            <button 
              onClick={() => setResumeModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-8">
              <div className="text-center border-b pb-6 border-zinc-800/50 space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Prabakaran
                </h2>
                <p className="text-sm font-medium text-emerald-400">{personalInfo.location}  |  {personalInfo.email}  |  {personalInfo.phone}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-emerald-400 pl-3">Career Objective</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {personalInfo.objective}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-teal-400 pl-3">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-base">{personalInfo.degree}</h4>
                    <p className="text-sm text-emerald-400">{personalInfo.university}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Higher Secondary Course (HSC) & SSLC</h4>
                    <p className="text-sm text-zinc-400">Bharathidasan Matriculation Higher Secondary School (HSC: 74%, SSLC: 2020)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-indigo-400 pl-3">Internships & Experience</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong className="text-emerald-400">Industrial Intern, Aavin Industries:</strong> Dairy processing operations & agriculture machinery analysis.</li>
                  <li><strong className="text-emerald-400">Data Science Intern — Entrepreneurship in Agriculture:</strong> Data science fundamentals & agripreneurship innovation.</li>
                  <li><strong className="text-emerald-400">Embedded Systems Intern, IPCS Global:</strong> Microcontroller platforms & IoT hands-on implementation.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-purple-400 pl-3">Projects</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong className="text-emerald-400">AGRI-SYNC:</strong> Smart agricultural management platform using Java, Spring Boot, MySQL.</li>
                  <li><strong className="text-emerald-400">Footstep Power Generator:</strong> Embedded systems & IoT project converting footstep mechanical energy to electrical power.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-amber-400 pl-3">Certifications & Honors</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Embedded Systems Certification – IPCS Global</li>
                  <li>Java Full Stack Development Certification – IPCS Global</li>
                  <li>Hackathon Certificate – Blockchain Technology</li>
                  <li>NCC ‘B’ Certificate & District Level Gold Medal (Dance & Parade)</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-800/50 flex justify-end space-x-4">
                <button 
                  onClick={() => { alert("Resume download started!"); setResumeModalOpen(false); }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 text-white font-bold text-sm shadow-lg hover:opacity-95"
                >
                  Download PDF Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
