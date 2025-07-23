import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, RotateCcw, Home, Star, MoreVertical, Plus, X } from 'lucide-react';

interface Tab {
  id: string;
  title: string;
  url: string;
  favicon?: string;
}

const defaultTabs: Tab[] = [
  {
    id: '1',
    title: 'Rishabh Gupta - GitHub',
    url: 'https://github.com/rishabh-os',
    favicon: '🐙'
  },
  {
    id: '2', 
    title: 'Rishabh Gupta - LinkedIn',
    url: 'https://linkedin.com/in/rishabh-gupta',
    favicon: '💼'
  },
  {
    id: '3',
    title: 'Portfolio - Home',
    url: 'https://rishabh-os-portfolio.vercel.app',
    favicon: '🌐'
  }
];

const pages = {
  'https://github.com/rishabh-os': {
    title: 'Rishabh Gupta - GitHub',
    content: (
      <div className="p-8 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              RG
            </div>
            <div>
              <h1 className="text-3xl font-bold">Rishabh Gupta</h1>
              <p className="text-gray-600 text-lg">@rishabh-os</p>
              <p className="text-gray-700 mt-2">Full Stack Developer | IIT Madras | Building innovative web solutions</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <span>📍 Saket, New Delhi</span>
                <span>🏢 Software Developer Intern @ Logicknots</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">🚀 Featured Repositories</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Trip-X</h4>
                  <p className="text-sm text-gray-600">AI-powered travel assistant with React.js & Firebase</p>
                  <div className="flex space-x-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">JavaScript</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">React</span>
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Hiresense</h4>
                  <p className="text-sm text-gray-600">AI voice chat recruiter with Next.js & Vapi AI</p>
                  <div className="flex space-x-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Next.js</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">📊 GitHub Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Public Repositories:</span>
                  <span className="font-semibold">25+</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Stars:</span>
                  <span className="font-semibold">150+</span>
                </div>
                <div className="flex justify-between">
                  <span>Followers:</span>
                  <span className="font-semibold">45+</span>
                </div>
                <div className="flex justify-between">
                  <span>Following:</span>
                  <span className="font-semibold">120</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">🏆 Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-semibold">CompassionateThon Finalist</h4>
                  <p className="text-sm text-gray-600">Top 15 out of 7,000+ participants at IIT Madras</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded">
                <span className="text-2xl">🥉</span>
                <div>
                  <h4 className="font-semibold">Chess Tournament 3rd Place</h4>
                  <p className="text-sm text-gray-600">IIT Madras Paradox'25 Competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  'https://linkedin.com/in/rishabh-gupta': {
    title: 'Rishabh Gupta - LinkedIn',
    content: (
      <div className="p-8 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-lg">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
                RG
              </div>
              <div>
                <h1 className="text-3xl font-bold">Rishabh Gupta</h1>
                <p className="text-blue-100 text-lg">Full Stack Developer</p>
                <p className="text-blue-200">Saket, New Delhi • 500+ connections</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-b-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">About</h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate Full Stack Developer currently pursuing Bachelor's in Data Science with AI and ML from IIT Madras. 
                Experienced in building innovative web applications using modern technologies like React.js, Next.js, and TypeScript. 
                Currently working as a Software Developer Intern at Logicknots, focusing on canvas interactions and bug annotation tools.
              </p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">Software Developer Intern</h3>
                  <p className="text-blue-600">Logicknots • Remote</p>
                  <p className="text-gray-600 text-sm">Jul 2025 - Present</p>
                  <p className="text-gray-700 mt-2">
                    Working on bug annotation and canvas interaction tools using React.js and HTML Canvas API. 
                    Collaborating with designers and implementing complex UI interactions.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold">Freelance Developer</h3>
                  <p className="text-green-600">SocialZone • Remote</p>
                  <p className="text-gray-600 text-sm">Feb 2025 - Present</p>
                  <p className="text-gray-700 mt-2">
                    Designed and developed the official website for SocialZone using React.js, Framer Motion, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Bachelor in Data Science with AI and ML</h3>
                  <p className="text-blue-600">Indian Institute of Technology Madras</p>
                  <p className="text-gray-600 text-sm">2025 - Present</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-blue-600">Dr. A.P.J. Abdul Kalam Technical University</p>
                  <p className="text-gray-600 text-sm">2022 - Present</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Git', 'Python', 'Java'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  'https://rishabh-os-portfolio.vercel.app': {
    title: 'Rishabh Gupta - Portfolio',
    content: (
      <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Rishabh Gupta
              </h1>
              <p className="text-2xl text-gray-700">Full Stack Developer</p>
              <p className="text-lg text-gray-600 mt-2">Building the future, one line of code at a time</p>
            </motion.div>
            
            <div className="flex justify-center space-x-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Projects
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Download Resume
              </button>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Projects Built</h3>
              <p className="text-3xl font-bold text-blue-600">25+</p>
              <p className="text-gray-600">Full-stack applications</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Competitions</h3>
              <p className="text-3xl font-bold text-green-600">2</p>
              <p className="text-gray-600">Awards & recognitions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Technologies</h3>
              <p className="text-3xl font-bold text-purple-600">15+</p>
              <p className="text-gray-600">Frameworks & tools</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Trip-X",
                  desc: "AI-powered travel assistant",
                  tech: ["React.js", "Firebase", "AI"],
                  status: "Live"
                },
                {
                  name: "Hiresense", 
                  desc: "Voice-based recruiting platform",
                  tech: ["Next.js", "Vapi AI", "Supabase"],
                  status: "Demo"
                },
                {
                  name: "Market.in",
                  desc: "E-commerce platform",
                  tech: ["MERN", "TypeScript"],
                  status: "GitHub"
                }
              ].map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export const Chrome: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>(defaultTabs);
  const [activeTab, setActiveTab] = useState<string>('1');
  const [url, setUrl] = useState<string>(defaultTabs[0].url);

  const addTab = () => {
    const newTab: Tab = {
      id: Date.now().toString(),
      title: 'New Tab',
      url: 'about:blank'
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const closeTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
      setUrl(newTabs[0].url);
    }
  };

  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
      setUrl(tab.url);
    }
  };

  const currentPage = pages[url as keyof typeof pages];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Tab Bar */}
      <div className="bg-gray-100 border-b border-gray-300 flex items-center">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center space-x-2 px-4 py-2 border-r border-gray-300 cursor-pointer min-w-0 max-w-60 ${
              activeTab === tab.id ? 'bg-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => switchTab(tab.id)}
          >
            <span className="text-sm">{tab.favicon || '🌐'}</span>
            <span className="text-sm truncate flex-1">{tab.title}</span>
            <button
              className="hover:bg-gray-300 rounded p-1"
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        <button
          className="p-2 hover:bg-gray-200 rounded"
          onClick={addTab}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Address Bar */}
      <div className="bg-white border-b border-gray-300 flex items-center p-2 space-x-2">
        <button className="p-2 hover:bg-gray-100 rounded">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <RotateCcw className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <Home className="w-4 h-4" />
        </button>
        
        <div className="flex-1 flex items-center bg-gray-50 rounded-full px-4 py-2 mx-2">
          <span className="text-green-600 mr-2">🔒</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            readOnly
          />
        </div>
        
        <button className="p-2 hover:bg-gray-100 rounded">
          <Star className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Page Content */}
      <div className="flex-1 overflow-auto">
        {currentPage ? (
          <motion.div
            key={url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage.content}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <div className="text-6xl mb-4">🌐</div>
              <p>Page not found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};