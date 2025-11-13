import React, { useState } from 'react';
import { RESUME_SUMMARY, SKILLS, EXPERIENCE, PROJECTS, CONTACT_INFO, EDUCATION, PROFILE_IMAGE_URL, RESUME_LINK } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { AIChat } from './components/AIChat';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowRight, Smartphone, Layout, Database, Award, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Improved scrolling function to handle navigation reliably
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !message) {
      alert("Please fill in the Name, Email, and Message fields.");
      return;
    }

    const mailSubject = subject || "Portfolio Inquiry";
    const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Construct mailto link
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Create a temporary anchor element and click it to ensure reliable mail client opening
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.click();
  };

  return (
    <div className="min-h-screen bg-darker text-gray-100 selection:bg-primary/30 selection:text-primary-100 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full glass-panel border-b border-white/5 supports-[backdrop-filter]:bg-darker/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="text-2xl font-bold tracking-tight cursor-pointer flex items-center gap-1" 
            onClick={() => scrollToSection('about')}
          >
            <span className="text-white">Kashif</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-extrabold">.dev</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">Contact Me</button>
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

      <main className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Hero Section */}
        <section id="about" className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-12 scroll-mt-20">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase border border-secondary/20 shadow-lg shadow-secondary/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              Available for work
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Kashif Rasheed</span>
              <br />
              <span className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Android Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              {RESUME_SUMMARY}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5">
                Get in Touch
              </button>
              <a 
                href={RESUME_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-card border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 hover:border-gray-600"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-5 text-gray-400 pt-6 border-t border-gray-800/50 mt-8 max-w-md">
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white hover:scale-110 transition-all"><Mail size={24} /></a>
            </div>
          </div>

          <div className="relative flex-1 flex justify-center md:justify-end">
             {/* Profile Visual */}
             <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
                {/* Glowing blobs behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                
                <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/10 glass-panel p-2 flex items-center justify-center group shadow-2xl shadow-black/50 transform rotate-3 hover:rotate-0 transition-all duration-500">
                   <img 
                      src={PROFILE_IMAGE_URL} 
                      alt="Kashif Rasheed" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-[1.5rem] shadow-inner filter contrast-110"
                   />
                   
                   {/* Floating stats card */}
                   <div className="absolute -bottom-6 -left-6 p-4 glass-panel rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-bounce-slow hidden md:block">
                      <div className="flex items-center gap-4">
                         <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg">
                            <Smartphone size={24} />
                         </div>
                         <div>
                            <p className="text-[10px] text-gray-300 uppercase tracking-wider font-bold">Users Reached</p>
                            <p className="text-xl text-white font-bold">5 Million+</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-gray-800/50 scroll-mt-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              A comprehensive toolkit focused on modern Android development, reliable backend integration, and cutting-edge AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((category, idx) => (
              <div key={idx} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                <div className="mb-5 p-3 rounded-xl bg-darker inline-block group-hover:bg-primary/20 group-hover:text-primary transition-colors border border-gray-800 group-hover:border-primary/20">
                  {idx === 0 && <Smartphone size={24} />}
                  {idx === 1 && <Layout size={24} />}
                  {idx === 2 && <Database size={24} />}
                  {idx === 3 && <Award size={24} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary transition-colors">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-medium text-gray-300 bg-darker px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-primary/30 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-gray-800/50 scroll-mt-20">
           <div className="flex flex-col md:flex-row gap-16">
             <div className="md:w-1/3 sticky top-24 h-fit">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  My professional journey building robust applications and leading technical initiatives in the mobile space.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-darker border border-gray-800 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                      <Award size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg">Education</h4>
                       <p className="text-sm text-gray-400 mt-1 font-medium">{EDUCATION.degree}</p>
                       <p className="text-xs text-primary mt-1.5 font-semibold bg-primary/10 inline-block px-2 py-0.5 rounded">{EDUCATION.institution}, {EDUCATION.year}</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="md:w-2/3 space-y-12">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="relative pl-8 border-l-2 border-gray-800 hover:border-primary transition-colors group">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-darker border-4 border-gray-700 group-hover:border-primary transition-colors"></div>
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-300 font-medium">@ {exp.company}</span>
                        <span className="text-gray-600 text-sm">•</span>
                        <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mt-6">
                      {exp.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                           <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-primary/50"></span>
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
        <section id="projects" className="py-24 border-t border-gray-800/50 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400 text-lg">A selection of high-performance mobile applications.</p>
            </div>
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white bg-card hover:bg-gray-800 px-5 py-2.5 rounded-full border border-gray-700 transition-all font-medium">
              View Full Github 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-gray-800/50 mb-20 scroll-mt-20">
          <div className="bg-gradient-to-br from-card to-darker rounded-3xl p-8 md:p-12 border border-gray-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
                <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                  I'm currently looking for new opportunities to build accessible, high-performance Android applications. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-8">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 text-gray-300 group hover:text-white transition-colors p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10">
                    <div className="p-3.5 rounded-xl bg-dark border border-gray-700 text-primary group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Email</p>
                      <span className="text-lg font-medium">{CONTACT_INFO.email}</span>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-5 text-gray-300 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">
                     <div className="p-3.5 rounded-xl bg-dark border border-gray-700 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Phone</p>
                      <span className="text-lg font-medium">{CONTACT_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 text-gray-300 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">
                     <div className="p-3.5 rounded-xl bg-dark border border-gray-700 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Location</p>
                      <span className="text-lg font-medium">{CONTACT_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5 bg-darker/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm" onSubmit={handleSendMessage}>
                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-card border border-gray-700 rounded-xl p-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-card border border-gray-700 rounded-xl p-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-card border border-gray-700 rounded-xl p-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all" 
                    placeholder="Project Inquiry" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5} 
                    className="w-full bg-card border border-gray-700 rounded-xl p-3.5 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all resize-none" 
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        
        <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kashif Rasheed. All rights reserved.</p>
          <p className="mt-2 opacity-60">Built with React, Tailwind & Gemini AI</p>
        </footer>
      </main>

      <AIChat />
    </div>
  );
};

export default App;