import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

function App() {
  const skills = [
    { 
      category: 'Languages & Core', 
      items: ['CPP', 'JavaScript', 'TypeScript', 'HTML'] 
    },
    { 
      category: 'Frameworks & Libraries', 
      items: ['React', 'Express.js', 'Tailwindcss', 'Redux', 'Recoil', 'Nextjs'] 
    },
    { 
      category: 'Databases & APIs', 
      items: ['MongoDB', 'Redis', 'SQL', 'GraphQL', 'gRPC', 'PrismaORM', 'Swagger'] 
    },
    { 
      category: 'Tools & Technologies', 
      items: ['Docker', 'Kubernetes', 'Linux', 'WebRTC', 'WebSocket', 'Vitest', 'Computer Networks', 'Operating System'] 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] gap-[1px] opacity-25"
          style={{ 
            background: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            transform: 'perspective(500px) rotateX(0deg)',
            animation: 'gridFloat 20s infinite linear'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>

     
      <div className="relative z-10">
       
        <header className="fixed w-full top-0 bg-black/50 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-xl font-bold">Priyam Karn</div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="hover:text-blue-400 transition">Home</a>
                <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
                <a href="#education" className="hover:text-blue-400 transition">Education</a>
                <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
              </div>
              <button className="md:hidden">
                <Menu size={24} />
              </button>
            </nav>
          </div>
        </header>

        
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Priyam Karn
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Computer Science And Engineering student skilled in blending logical development with artistic creativity. Competent in programming and creative design with a focus on developing elegant and user-friendly applications. Passionate about literature, music, languages, and arts & culture. Committed to continuous learning.
              </p>
              <div className="flex gap-4">
                <a href="mailto:priyamkarn54@gmail.com" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full transition">
                  Contact Me
                </a>
                <div className="flex gap-4 items-center">
                  <a href="https://github.com/priyamkarn" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                  <a href="https://linkedin.com/in/priyamkarn" className="hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                  <a href="mailto:priyamkarn54@gmail.com" className="hover:text-blue-400 transition"><Mail size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition p-8">
                <h3 className="text-2xl font-semibold mb-4">Payment Application</h3>
                <p className="text-gray-400 mb-6">
                  Developed a full-stack MERN application with user authentication, signup/signin features, and a dynamic dashboard for user management.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['MongoDB', 'Express.js', 'React', 'Node.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </section>

        
        <section id="education" className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white/5 rounded-xl p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">KLE Technological University</h3>
                    <p className="text-lg text-gray-300">Bachelor of Engineering in Computer Science</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-gray-400">2021-2024</p>
                    <p className="text-blue-400">CGPA: 7.67</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">SBP Vidya Vihar</h3>
                    <p className="text-lg text-gray-300">Intermediate • CBSE Board</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-gray-400">Score: 71%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section id="achievements" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Hackerearth</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 38th rank out of 2094 candidates in March circuit 2023</li>
                  <li>• 52th rank out of 1932 candidates in April circuit 2023</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Hackerrank</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 5 star in CPP</li>
                  <li>• 5 star in Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;