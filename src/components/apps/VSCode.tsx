import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { File, Folder, FolderOpen, Search, Settings, GitBranch } from 'lucide-react';

const files = {
  'about.js': `// About Rishabh Gupta
const developer = {
  name: "Rishabh Gupta",
  role: "Full Stack Developer",
  location: "Saket, New Delhi",
  email: "25f1002822@ds.study.iitm.ac.in",
  phone: "+91 8840952165",
  
  passion: [
    "Building innovative web applications",
    "Learning cutting-edge technologies",
    "Solving complex problems with code"
  ],
  
  currentFocus: [
    "Advanced React patterns",
    "AI/ML integration in web apps",
    "Performance optimization",
    "System design"
  ]
};

export default developer;`,

  'skills.ts': `interface TechnicalSkills {
  languages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  theoretical: string[];
}

const skills: TechnicalSkills = {
  languages: [
    "JavaScript",
    "TypeScript", 
    "Java",
    "Python",
    "Golang",
    "HTML"
  ],
  
  frontend: [
    "React.js",
    "Next.js", 
    "React Native",
    "Tailwind CSS",
    "Shadcn/ui",
    "Framer Motion"
  ],
  
  backend: [
    "Node.js",
    "Express.js",
    "Redux Toolkit"
  ],
  
  database: [
    "MongoDB",
    "Supabase", 
    "Firebase"
  ],
  
  tools: [
    "Git & GitHub",
    "NPM",
    "VSCode",
    "Vercel",
    "Figma"
  ],
  
  theoretical: [
    "Operating Systems",
    "Computer Networks", 
    "OOP with Java",
    "DBMS",
    "Computational Thinking",
    "Theory of Computation"
  ]
};

export default skills;`,

  'projects.json': `{
  "featured": [
    {
      "name": "Trip-X",
      "description": "AI powered travel assistant",
      "tech": ["React.js", "Tailwind CSS", "Firebase", "Google Places API", "Unsplash API", "Google Search Text API", "Gemini API"],
      "features": [
        "Real-time hotel suggestions",
        "Curated itineraries", 
        "Dynamic destination overviews"
      ],
      "status": "Live",
      "link": "https://trip-x.vercel.app"
    },
    {
      "name": "Hiresense", 
      "description": "AI powered voice chat recruiter",
      "tech": ["Next.js", "Tailwind CSS", "Shadcn UI", "Vapi AI", "Gemini AI", "Supabase", "Google OAuth"],
      "features": [
        "Generate job-specific interview questions",
        "Conduct real-time interviews", 
        "Automated transcription and summarization"
      ],
      "status": "GitHub",
      "link": "https://github.com/rishabh-os/hiresense"
    },
    {
      "name": "Market.in",
      "description": "Ecommerce website for electronics", 
      "tech": ["MERN Stack", "TypeScript"],
      "features": [
        "Advanced admin dashboard",
        "Debounced search",
        "Dynamic sorting & caching",
        "Lazy loading optimization"
      ],
      "status": "GitHub", 
      "link": "https://github.com/rishabh-os/market.in"
    }
  ]
}`,

  'experience.md': `# Work Experience

## Software Developer Intern @ Logicknots
**Jul 2025 – Present | Remote**

- Collaborating on a bug annotation and canvas interaction tool
- Implementing HTML Canvas API logic with React.js and custom \`CanvasEngine\`
- Developed drag/drop tools, dynamic UI updates, and annotation state management  
- Working closely with designers using Figma for component workflows

## Freelance Developer @ SocialZone  
**Feb 2025 – Present | Remote**

- Worked as freelance developer for SocialZone, a marketing agency
- Designed and built their official website using React.js, Framer Motion, and Tailwind CSS
- Ensured seamless user experience with smooth animations and modern UI
- Collaborated with the team to enhance their digital presence through high-performance web solutions

---

## Key Contributions

### Technical Expertise
- Built responsive, interactive web applications
- Implemented complex state management and UI logic
- Optimized performance for production environments
- Collaborated effectively in remote team settings

### Problem Solving
- Debugging complex canvas interactions
- Creating reusable component architectures  
- Implementing efficient data flow patterns
- Delivering pixel-perfect designs from Figma mockups`,

  'README.md': `# Rishabh Gupta - Full Stack Developer

Welcome to my professional portfolio! I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Data Science with AI and ML from IIT Madras.

## 🚀 Quick Stats

- 🎓 **Education**: IIT Madras (Data Science with AI/ML) + B.Tech Computer Science
- 💼 **Current Role**: Software Developer Intern @ Logicknots
- 🏆 **Achievement**: Finalist at CompassionateThon, IIT Madras (Top 15/7000+)
- ♟️ **Fun Fact**: 3rd place in Chess Tournament at IIT Madras Paradox'25

## 🛠 Tech Stack

\`\`\`javascript
const techStack = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js'],
  database: ['MongoDB', 'Supabase', 'Firebase'],
  tools: ['Git', 'Vercel', 'Figma', 'VSCode']
};
\`\`\`

## 📊 GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=rishabh-os&show_icons=true&theme=tokyonight)

## 📞 Let's Connect!

- 📧 Email: 25f1002822@ds.study.iitm.ac.in
- 🔗 LinkedIn: [/in/rishabh-gupta](https://linkedin.com/in/rishabh-gupta)
- 🐙 GitHub: [/rishabh-os](https://github.com/rishabh-os)
- 📍 Location: Saket, New Delhi

---

*This portfolio is built with React.js, TypeScript, Tailwind CSS, and lots of ☕*`
};

export const VSCode: React.FC = () => {
  const [activeFile, setActiveFile] = useState<string>('about.js');
  const [openFiles, setOpenFiles] = useState<string[]>(['about.js']);

  const openFile = (filename: string) => {
    if (!openFiles.includes(filename)) {
      setOpenFiles([...openFiles, filename]);
    }
    setActiveFile(filename);
  };

  const closeFile = (filename: string) => {
    const newOpenFiles = openFiles.filter(f => f !== filename);
    setOpenFiles(newOpenFiles);
    if (activeFile === filename) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1] || '');
    }
  };

  return (
    <div className="h-full bg-gray-900 text-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Explorer Header */}
        <div className="p-3 border-b border-gray-700">
          <div className="flex items-center space-x-2 text-gray-300 text-sm font-semibold">
            <FolderOpen className="w-4 h-4" />
            <span>EXPLORER</span>
          </div>
        </div>

        {/* File Tree */}
        <div className="flex-1 p-2">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-gray-400 text-xs font-semibold mb-2">
              <FolderOpen className="w-4 h-4" />
              <span>RISHABH-PORTFOLIO</span>
            </div>
            
            {Object.keys(files).map((filename) => {
              const isActive = activeFile === filename;
              const isOpen = openFiles.includes(filename);
              
              return (
                <motion.div
                  key={filename}
                  className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer text-sm transition-colors ${
                    isActive ? 'bg-blue-600/30 text-blue-300' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => openFile(filename)}
                  whileHover={{ x: 4 }}
                >
                  <File className="w-4 h-4" />
                  <span>{filename}</span>
                  {isOpen && <div className="w-1 h-1 bg-blue-400 rounded-full ml-auto" />}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="p-3 border-t border-gray-700 flex justify-between">
          <Search className="w-5 h-5 text-gray-400 hover:text-gray-200 cursor-pointer" />
          <GitBranch className="w-5 h-5 text-gray-400 hover:text-gray-200 cursor-pointer" />
          <Settings className="w-5 h-5 text-gray-400 hover:text-gray-200 cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tab Bar */}
        <div className="bg-gray-800 border-b border-gray-700 flex">
          {openFiles.map((filename) => (
            <div
              key={filename}
              className={`flex items-center space-x-2 px-4 py-2 border-r border-gray-700 cursor-pointer text-sm ${
                activeFile === filename ? 'bg-gray-900 text-blue-300' : 'text-gray-400 hover:text-gray-200'
              }`}
              onClick={() => setActiveFile(filename)}
            >
              <File className="w-4 h-4" />
              <span>{filename}</span>
              <button
                className="ml-2 hover:bg-gray-600 rounded p-0.5"
                onClick={(e) => {
                  e.stopPropagation();
                  closeFile(filename);
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 bg-gray-900">
          {activeFile ? (
            <div className="h-full p-4 font-mono text-sm overflow-auto">
              <pre className="text-gray-100 whitespace-pre-wrap leading-relaxed">
                {files[activeFile as keyof typeof files]}
              </pre>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <File className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Select a file to view its contents</p>
              </div>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="bg-blue-600 text-white px-4 py-1 text-xs flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>✓ TypeScript React</span>
            <span>UTF-8</span>
            <span>LF</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ln 1, Col 1</span>
            <span>Spaces: 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};