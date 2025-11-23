import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import myPhoto from "./WhatsApp Image 2025-11-22 at 22.27.31_76c62a93.jpg";


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    setTimeout(() => setShowContent(true), 800);
  }, []);

  const skills = {
    main: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    secondary: ['C++', 'HTML', 'CSS', 'JavaScript']
  };

  const projects = [
    {
      title: 'Real-Time Chat App with AI',
      description: 'A modern chat application with AI integration built using the MERN stack',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'AI Integration'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Spotify Clone',
      description: 'A pixel-perfect clone of Spotify using vanilla web technologies',
      tech: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-700 to-cyan-500'
    },
    {
      title: 'Netflix Clone',
      description: 'A responsive Netflix clone showcasing front-end development skills',
      tech: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      {/* Loading Animation */}
      {!showContent && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}>
            <div className="relative">
              <div className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-500">AK</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`relative z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 border-b border-blue-500 border-opacity-20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">AK</h1>
            <div className="flex gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-500'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-block mb-6 animate-float">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-1 shadow-2xl shadow-blue-500/50">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">AK</span>
                  </div>
                </div>
              </div>
              <h1 className="text-6xl font-bold text-white mb-4 animate-slideUp">
                Aditya Kewat
              </h1>
              <p className="text-2xl text-blue-400 mb-8 animate-slideUp animation-delay-200">MERN Stack Developer</p>
              <div className="flex gap-4 justify-center animate-slideUp animation-delay-400">
                <a
                  href="https://github.com/Adityacodes07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 border border-blue-500 border-opacity-30"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aditya-kewat-bb2b38228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 border border-blue-500 border-opacity-30"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="mailto:kewataditya31@gmail.com"
                  className="p-3 bg-gray-900 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 border border-blue-500 border-opacity-30"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <div className="flex justify-center">
  <div className="relative group">
    {/* Outer glow border */}
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 opacity-60 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />

    {/* Main card */}
    <div className="relative w-72 h-80 rounded-3xl overflow-hidden bg-gray-950 border border-blue-500/40
                    shadow-[0_0_40px_rgba(59,130,246,0.4)]
                    group-hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]
                    transform group-hover:-translate-y-2 group-hover:rotate-1
                    transition-all duration-500">
      
      {/* Photo */}
      <img
        src={myPhoto}
        alt="Aditya Kewat"
        className="w-full h-full object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Bottom info badge */}
      <div className="absolute bottom-4 left-4">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300/80 mb-1">
          Web Developer
        </p>
        <div className="px-3 py-1 rounded-full bg-black/60 border border-blue-400/50 backdrop-blur-md inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm text-gray-100 font-medium">Aditya Kewat</span>
        </div>
      </div>
    </div>

    {/* Extra blur circles for depth */}
    <div className="absolute -bottom-8 -right-6 w-24 h-24 bg-blue-500/40 rounded-full blur-2xl"></div>
    <div className="absolute -top-6 -left-4 w-20 h-20 bg-cyan-400/40 rounded-full blur-2xl"></div>
  </div>
</div>


        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Code className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-4xl font-bold text-white">Skills</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Skills */}
              <div className="bg-gray-900 backdrop-blur-lg rounded-2xl p-8 border border-blue-500 border-opacity-30 hover:border-opacity-60 transition-all transform hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-500 mb-6">Main Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.main.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 rounded-lg text-center font-semibold text-white transform hover:scale-105 transition-transform shadow-lg shadow-blue-500/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Skills */}
              <div className="bg-gray-900 backdrop-blur-lg rounded-2xl p-8 border border-blue-500 border-opacity-30 hover:border-opacity-60 transition-all transform hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Additional Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.secondary.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-gray-800 to-gray-700 border border-blue-500 border-opacity-30 p-3 rounded-lg text-center font-semibold text-white transform hover:scale-105 transition-transform hover:border-opacity-60"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Briefcase className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-4xl font-bold text-white">Projects</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 backdrop-blur-lg rounded-2xl p-6 border border-blue-500 border-opacity-30 hover:border-opacity-60 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`w-full h-40 rounded-xl bg-gradient-to-r ${project.color} mb-4 flex items-center justify-center shadow-lg`}>
                    <ExternalLink className="w-12 h-12 text-white opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 border border-blue-500 border-opacity-30 rounded-full text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>

            <div className="max-w-2xl mx-auto bg-gray-900 backdrop-blur-lg rounded-2xl p-8 border border-blue-500 border-opacity-30 hover:border-opacity-60 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology</h3>
              <p className="text-xl text-blue-400">Computer Science and Engineering</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Mail className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:kewataditya31@gmail.com"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
              >
                kewataditya31@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-blue-500 border-opacity-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500">© 2024 Aditya Kewat. Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}