import React, { useState } from 'react';
import { RESUME_SUMMARY, SKILLS, EXPERIENCE, PROJECTS, CONTACT_INFO, EDUCATION, PROFILE_IMAGE_URL, RESUME_LINK } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AIChat } from './components/AIChat';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowRight, Smartphone, Layout, Database, Award, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Improved scrolling function to handle navigation reliably
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-darker text-gray-100 selection:bg-primary/30 selection:text-primary-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full glass-panel border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="text-xl font-bold tracking-tight cursor-pointer" 
            onClick={() => scrollToSection('about')}
          >
            <span className="text-white">Kashif</span>
            <span className="text-primary">.dev</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">Contact Me</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-b border-gray-800 p-4 flex flex-col gap-4 animate-fade-in">
            <button className="text-left text-gray-300 hover:text-primary py-2" onClick={() => scrollToSection('about')}>About</button>
            <button className="text-left text-gray-300 hover:text-primary py-2" onClick={() => scrollToSection('skills')}>Skills</button>
            <button className="text-left text-gray-300 hover:text-primary py-2" onClick={() => scrollToSection('experience')}>Experience</button>
            <button className="text-left text-gray-300 hover:text-primary py-2" onClick={() => scrollToSection('projects')}>Projects</button>
            <button className="text-left text-primary font-medium py-2" onClick={() => scrollToSection('contact')}>Contact Me</button>
          </div>
        )}
      </nav>

      <main className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <section id="about" className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 scroll-mt-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wide uppercase border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Kashif Rasheed <br />
              <span className="text-3xl md:text-5xl text-gray-300">Android Developer</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              {RESUME_SUMMARY}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40">
                Get in Touch
              </button>
              <a 
                href={RESUME_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg bg-card border border-gray-700 text-white font-semibold hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 text-gray-400 pt-8">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          <div className="relative flex-1 flex justify-center">
             {/* Profile Visual */}
             <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 glass-panel p-2 flex items-center justify-center group">
                   <img 
                      src={PROFILE_IMAGE_URL} 
                      alt="Kashif Rasheed" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute bottom-6 right-6 p-4 glass-panel rounded-xl border border-white/10 shadow-xl backdrop-blur-xl translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div className="flex items-center gap-4">
                         <div className="p-3 rounded-lg bg-primary/20 text-primary">
                            <Smartphone size={24} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Users Reached</p>
                            <p className="text-white font-bold">5 Million+</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-gray-800 scroll-mt-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-gray-400 max-w-2xl">
              A comprehensive toolkit focused on modern Android development, reliable backend integration, and cutting-edge AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((category, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors group">
                <div className="mb-4 p-3 rounded-lg bg-dark inline-block group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  {idx === 0 && <Smartphone size={24} />}
                  {idx === 1 && <Layout size={24} />}
                  {idx === 2 && <Database size={24} />}
                  {idx === 3 && <Award size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-sm text-gray-400 bg-darker px-2 py-1 rounded border border-gray-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-gray-800 scroll-mt-20">
           <div className="flex flex-col md:flex-row gap-12">
             <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-white mb-4">Professional Experience</h2>
                <p className="text-gray-400 mb-6">
                  My journey in the software industry, building robust applications and leading technical initiatives.
                </p>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary rounded-lg text-white">
                      <Award size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-semibold">Education</h4>
                       <p className="text-sm text-gray-400 mt-1">{EDUCATION.degree}</p>
                       <p className="text-xs text-primary mt-1">{EDUCATION.institution}, {EDUCATION.year}</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="md:w-2/3 space-y-8">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-gray-800 hover:border-primary transition-colors">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-dark border-2 border-primary"></div>
                    <div className="mb-2 flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-primary font-medium">@ {exp.company}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 font-mono">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                           <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gray-500"></span>
                           {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-gray-800 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400">A selection of high-performance mobile applications.</p>
            </div>
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-blue-400 transition-colors font-medium">
              View Full Github <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-gray-800 mb-20 scroll-mt-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm currently looking for new opportunities to build accessible, high-performance Android applications. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="p-3 rounded-lg bg-dark border border-gray-700 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-primary transition-colors">{CONTACT_INFO.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-300">
                     <div className="p-3 rounded-lg bg-dark border border-gray-700 text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                      <span className="text-white">{CONTACT_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-300">
                     <div className="p-3 rounded-lg bg-dark border border-gray-700 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                      <span className="text-white">{CONTACT_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 bg-dark/50 p-6 rounded-xl border border-gray-700/50" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Name</label>
                    <input type="text" className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input type="email" className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Subject</label>
                  <input type="text" className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea rows={4} className="w-full bg-darker border border-gray-700 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kashif Rasheed. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind & Gemini AI</p>
        </footer>
      </main>

      <AIChat />
    </div>
  );
};

export default App;