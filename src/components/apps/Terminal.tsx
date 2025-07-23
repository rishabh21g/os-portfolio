import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Command {
  input: string;
  output: string | JSX.Element;
  timestamp: Date;
}

const commands = {
  help: () => (
    <div className="space-y-1">
      <div className="text-cyan-400 font-bold">Available Commands:</div>
      <div className="ml-4 space-y-1">
        <div><span className="text-green-400">about</span> - Learn about Rishabh</div>
        <div><span className="text-green-400">skills</span> - View technical skills</div>
        <div><span className="text-green-400">experience</span> - Work experience</div>
        <div><span className="text-green-400">projects</span> - View all projects</div>
        <div><span className="text-green-400">education</span> - Educational background</div>
        <div><span className="text-green-400">achievements</span> - Awards and recognition</div>
        <div><span className="text-green-400">open github</span> - Open GitHub profile</div>
        <div><span className="text-green-400">open linkedin</span> - Open LinkedIn profile</div>
        <div><span className="text-green-400">contact</span> - Get contact information</div>
        <div><span className="text-green-400">clear</span> - Clear terminal</div>
        <div><span className="text-green-400">whoami</span> - Display current user</div>
        <div><span className="text-green-400">date</span> - Show current date</div>
        <div><span className="text-green-400">neofetch</span> - System information</div>
      </div>
    </div>
  ),

  about: () => (
    <div className="space-y-2">
      <div className="text-cyan-400 font-bold">About Rishabh Gupta</div>
      <div className="text-gray-300">
        Full Stack Developer passionate about building innovative web applications.
        Currently pursuing Bachelor in Data Science with AI and ML from IIT Madras
        and B.Tech in Computer Science from Dr. A.P.J. Abdul Kalam Technical University.
      </div>
      <div className="text-yellow-400">
        🌟 Finalist at CompassionateThon, IIT Madras
      </div>
      <div className="text-yellow-400">
        🏆 3rd Place in Chess Tournament, IIT Madras Paradox'25
      </div>
    </div>
  ),

  skills: () => (
    <div className="space-y-2">
      <div className="text-cyan-400 font-bold">Technical Skills</div>
      <div className="space-y-1">
        <div><span className="text-green-400">Languages:</span> JavaScript, TypeScript, Java, Python, Golang, HTML</div>
        <div><span className="text-green-400">Frontend:</span> React.js, Next.js, React Native, Tailwind CSS, Shadcn</div>
        <div><span className="text-green-400">Backend:</span> Node.js, Express.js, Redux-toolkit</div>
        <div><span className="text-green-400">Database:</span> MongoDB, Supabase, Firebase</div>
        <div><span className="text-green-400">Tools:</span> Git, GitHub, NPM, VSCode, Vercel</div>
        <div><span className="text-green-400">Theory:</span> Operating Systems, Computer Networks, OOP, DBMS, Computational Thinking</div>
      </div>
    </div>
  ),

  experience: () => (
    <div className="space-y-3">
      <div className="text-cyan-400 font-bold">Work Experience</div>
      <div className="border-l-2 border-green-400 pl-4">
        <div className="text-yellow-400 font-semibold">Software Developer Intern @ Logicknots</div>
        <div className="text-gray-400 text-sm">Jul 2025 – Present | Remote</div>
        <div className="text-gray-300 mt-1 space-y-1">
          <div>• Collaborating on a bug annotation and canvas interaction tool</div>
          <div>• Implementing HTML Canvas API logic with React.js and custom CanvasEngine</div>
          <div>• Developed drag/drop tools, dynamic UI updates, and annotation state management</div>
          <div>• Working closely with designers using Figma for component workflows</div>
        </div>
      </div>
      <div className="border-l-2 border-blue-400 pl-4">
        <div className="text-yellow-400 font-semibold">Freelance Developer @ SocialZone</div>
        <div className="text-gray-400 text-sm">Feb 2025 – Present | Remote</div>
        <div className="text-gray-300 mt-1 space-y-1">
          <div>• Worked as freelance developer for SocialZone, a marketing agency</div>
          <div>• Designed and built their official website using React.js, Framer Motion, and Tailwind CSS</div>
          <div>• Collaborated with the team to enhance their digital presence through high-performance web solutions</div>
        </div>
      </div>
    </div>
  ),

  projects: () => (
    <div className="space-y-3">
      <div className="text-cyan-400 font-bold">Featured Projects</div>
      <div className="space-y-3">
        <div className="border border-gray-600 rounded p-3">
          <div className="text-yellow-400 font-semibold">Trip-X (AI powered travel assistant)</div>
          <div className="text-gray-400 text-sm">Live Project</div>
          <div className="text-gray-300 text-sm mt-1">
            • Intelligent travel recommendation platform for personalized adventures<br/>
            • Built with React.js, Tailwind CSS, Firebase, Google Places API, Unsplash API<br/>
            • Features real-time hotel suggestions, curated itineraries, and dynamic destination overviews
          </div>
        </div>
        
        <div className="border border-gray-600 rounded p-3">
          <div className="text-yellow-400 font-semibold">Hiresense (AI powered voice chat recruiter)</div>
          <div className="text-gray-400 text-sm">GitHub</div>
          <div className="text-gray-300 text-sm mt-1">
            • AI-driven interview platform with Next.js, Tailwind CSS, Shadcn UI, Vapi AI, Gemini AI<br/>
            • Enables admins to generate job-specific interview questions and conduct real-time interviews<br/>
            • Automated transcription and summarization
          </div>
        </div>
        
        <div className="border border-gray-600 rounded p-3">
          <div className="text-yellow-400 font-semibold">Market.in (Ecommerce website for electronics)</div>
          <div className="text-gray-400 text-sm">GitHub</div>
          <div className="text-gray-300 text-sm mt-1">
            • High-performance e-commerce platform using MERN stack with TypeScript<br/>
            • Advanced admin dashboard for efficient data management and visualization<br/>
            • Optimized UX with debounced search, dynamic sorting, caching, lazy loading
          </div>
        </div>
      </div>
    </div>
  ),

  education: () => (
    <div className="space-y-2">
      <div className="text-cyan-400 font-bold">Education</div>
      <div className="space-y-2">
        <div className="border-l-2 border-green-400 pl-4">
          <div className="text-yellow-400 font-semibold">Bachelor in Data Science with AI and ML</div>
          <div className="text-gray-400">Indian Institute of Technology Madras, Chennai</div>
          <div className="text-gray-400 text-sm">2025 – Present</div>
        </div>
        <div className="border-l-2 border-blue-400 pl-4">
          <div className="text-yellow-400 font-semibold">Bachelor of Technology in Computer Science (B.Tech)</div>
          <div className="text-gray-400">Dr. A.P.J. Abdul Kalam Technical University, Greater Noida</div>
          <div className="text-gray-400 text-sm">2022 – Present</div>
        </div>
      </div>
    </div>
  ),

  achievements: () => (
    <div className="space-y-2">
      <div className="text-cyan-400 font-bold">Achievements</div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">🏆</span>
          <div>
            <div className="text-yellow-400 font-semibold">Finalist, CompassionateThon, IIT Madras (June 2025)</div>
            <div className="text-gray-300 text-sm">Top 15 out of 7,000+ applicants (250 teams) for ideathon, demonstrating strong product development and pitching skills.</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">🥉</span>
          <div>
            <div className="text-yellow-400 font-semibold">3rd Place, Chess Tournament, IIT Madras Paradox'25 (June 2025)</div>
            <div className="text-gray-300 text-sm">Secured third position in an inter-college chess competition, showcasing analytical and strategic skills.</div>
          </div>
        </div>
      </div>
    </div>
  ),

  contact: () => (
    <div className="space-y-2">
      <div className="text-cyan-400 font-bold">Contact Information</div>
      <div className="space-y-1">
        <div><span className="text-green-400">📧 Email:</span> 25f1002822@ds.study.iitm.ac.in</div>
        <div><span className="text-green-400">📱 Phone:</span> +91 8840952165</div>
        <div><span className="text-green-400">📍 Location:</span> Saket, New Delhi</div>
        <div><span className="text-green-400">🔗 LinkedIn:</span> /in/rishabh-gupta</div>
        <div><span className="text-green-400">🐙 GitHub:</span> /rishabh-os</div>
        <div><span className="text-green-400">🌐 Portfolio:</span> rishabh-os-portfolio.vercel.app</div>
      </div>
    </div>
  ),

  whoami: () => 'rishabh@RishabhOS',

  date: () => new Date().toString(),

  neofetch: () => (
    <div className="space-y-1 font-mono">
      <div className="text-cyan-400">
        {`                   -\`                    `}<span className="text-green-400">rishabh@RishabhOS</span>
      </div>
      <div className="text-cyan-400">
        {`                  .o+\`                   `}<span className="text-gray-400">-----------------</span>
      </div>
      <div className="text-cyan-400">
        {`                 \`ooo/                    `}<span className="text-green-400">OS:</span> RishabhOS 1.0
      </div>
      <div className="text-cyan-400">
        {`                \`+oooo:                   `}<span className="text-green-400">Host:</span> Virtual Portfolio
      </div>
      <div className="text-cyan-400">
        {`               \`+oooooo:                  `}<span className="text-green-400">Kernel:</span> React 18.3.1
      </div>
      <div className="text-cyan-400">
        {`               -+oooooo+:                 `}<span className="text-green-400">Shell:</span> Terminal.tsx
      </div>
      <div className="text-cyan-400">
        {`             \`/:-:++oooo+:               `}<span className="text-green-400">Resolution:</span> {window.innerWidth}x{window.innerHeight}
      </div>
      <div className="text-cyan-400">
        {`            \`/++++/+++++++:              `}<span className="text-green-400">Theme:</span> macOS Monterey
      </div>
      <div className="text-cyan-400">
        {`           \`/++++++++++++++:             `}<span className="text-green-400">Icons:</span> Lucide React
      </div>
      <div className="text-cyan-400">
        {`          \`/+++ooooooooooooo/\`           `}<span className="text-green-400">Terminal:</span> RishabhTerminal
      </div>
    </div>
  ),
};

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<Command[]>([
    {
      input: 'Welcome to RishabhOS Terminal',
      output: (
        <div className="space-y-1">
          <div className="text-cyan-400">Welcome to Rishabh's Virtual Operating System!</div>
          <div className="text-gray-300">Type <span className="text-green-400">'help'</span> to see available commands.</div>
          <div className="text-gray-300">Type <span className="text-green-400">'about'</span> to learn about me.</div>
        </div>
      ),
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | JSX.Element = '';

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd.startsWith('open ')) {
      const target = trimmedCmd.slice(5);
      if (target === 'github') {
        window.open('https://github.com/rishabh-os', '_blank');
        output = 'Opening GitHub profile...';
      } else if (target === 'linkedin') {
        window.open('https://linkedin.com/in/rishabh-gupta', '_blank');
        output = 'Opening LinkedIn profile...';
      } else {
        output = `Unknown target: ${target}`;
      }
    } else if (commands[trimmedCmd as keyof typeof commands]) {
      output = commands[trimmedCmd as keyof typeof commands]();
    } else if (trimmedCmd === '') {
      output = '';
    } else {
      output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }

    const newCommand: Command = {
      input: cmd,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newCommand]);
    setCommandHistory(prev => [...prev, cmd]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div 
      className="h-full bg-gray-900 text-green-400 p-4 font-mono text-sm overflow-auto"
      ref={terminalRef}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-2">
        {history.map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {cmd.input && (
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">rishabh@RishabhOS</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">$</span>
                <span className="text-white">{cmd.input}</span>
              </div>
            )}
            {cmd.output && (
              <div className="ml-4 text-gray-300">
                {cmd.output}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex items-center space-x-2">
          <span className="text-cyan-400">rishabh@RishabhOS</span>
          <span className="text-gray-400">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white ml-1"
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};