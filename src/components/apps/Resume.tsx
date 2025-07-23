import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Award,
  Briefcase,
  GraduationCap,
  Code
} from 'lucide-react';

export const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real app, this would trigger a PDF download
    alert('Resume download would start here!');
  };

  const handleOpenExternal = () => {
    window.open('/lovable-uploads/426d9de1-5919-4cd8-ae2e-9feb01d4b6a6.png', '_blank');
  };

  return (
    <div className="h-full bg-background overflow-auto">
      {/* Header Actions */}
      <div className="p-4 border-b border-border bg-card flex justify-between items-center">
        <h1 className="text-xl font-bold">Resume</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleOpenExternal}
            className="flex items-center space-x-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Original</span>
          </button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">RISHABH GUPTA</h1>
          <p className="text-xl text-muted-foreground mb-4">Full Stack Developer</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 8840952165</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>25f1002822@ds.study.iitm.ac.in</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Saket, New Delhi</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <button className="flex items-center space-x-1 text-primary hover:underline">
              <span>Portfolio</span>
            </button>
            <button className="flex items-center space-x-1 text-primary hover:underline">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-1 text-primary hover:underline">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </button>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <hr className="border-primary mb-4" />
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Software Developer Intern, Logicknots</h3>
                  <p className="text-muted-foreground">Remote</p>
                </div>
                <span className="text-sm font-semibold">Jul 2025 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Collaborating on a bug annotation and canvas interaction tool</li>
                <li>Implementing HTML Canvas API logic with React.js and custom CanvasEngine</li>
                <li>Developed drag/drop tools, dynamic UI updates, and annotation state management</li>
                <li>Working closely with designers using Figma for component workflows</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">Freelance Developer, SocialZone</h3>
                  <p className="text-muted-foreground">Remote</p>
                </div>
                <span className="text-sm font-semibold">Feb 2025 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Worked as freelance developer for SocialZone, a marketing agency, handling various development projects</li>
                <li>Designed and built their official website using React.js, Framer Motion, and Tailwind CSS, ensuring seamless user experience with smooth animations and modern UI</li>
                <li>Collaborated with the team to enhance their digital presence through high-performance web solutions</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Code className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          <hr className="border-primary mb-4" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Languages:</h4>
              <p>JavaScript, TypeScript, Java, Python, Golang, HTML</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Libraries/Frameworks:</h4>
              <p>React.js, Next.js, React Native, Shadcn, Tailwind CSS, Redux-toolkit, Node.js, Express.js</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Database:</h4>
              <p>MongoDB, Supabase, Firebase</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools/OS:</h4>
              <p>Windows, Linux (Ubuntu), Github, Git, NPM, VSCode, Vercel</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold mb-2">Theoretical:</h4>
              <p>Operating System, Computer Networks, OOP with Java, DBMS, Computational Thinking, Theory of Computation</p>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <hr className="border-primary mb-4" />
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Trip-X (AI powered travel assistant)</h3>
                <span className="text-sm font-semibold text-green-600">Live</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Developed an intelligent travel recommendation platform for personalized adventures</li>
                <li>Built with React.js, Tailwind CSS, and Firebase; uses Google Places API, Unsplash API, Google Search Text API, and Gemini API</li>
                <li>Features real-time hotel suggestions, curated itineraries, and dynamic destination overviews</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Hiresense (AI powered voice chat recruiter)</h3>
                <span className="text-sm font-semibold text-blue-600">GitHub</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Built an AI-driven interview platform leveraging Next.js, Tailwind CSS, Shadcn UI, Vapi AI, Gemini AI, Supabase, and Google OAuth</li>
                <li>Enabled admins to generate job-specific interview questions, conduct real-time interviews, and automate transcription and summarization</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Market.in (Ecommerce website for electronics)</h3>
                <span className="text-sm font-semibold text-blue-600">GitHub</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Built a high-performance e-commerce platform for electronics using the MERN stack with TypeScript</li>
                <li>Developed an advanced admin dashboard for efficient data management and visualization</li>
                <li>Optimized user experience with debounced search, dynamic sorting, caching, lazy loading, custom hooks, code splitting, and Redux Toolkit</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <hr className="border-primary mb-4" />
          
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Bachelor in Data Science with AI and ML</h3>
                <p className="text-muted-foreground">Indian Institute of Technology Madras, Chennai</p>
              </div>
              <span className="text-sm font-semibold">2025 – Present</span>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Bachelor of Technology in Computer Science (B.Tech)</h3>
                <p className="text-muted-foreground">Dr. A.P.J. Abdul Kalam Technical University, Greater Noida</p>
              </div>
              <span className="text-sm font-semibold">2022 – Present</span>
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          <hr className="border-primary mb-4" />
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Finalist, CompassionateThon, IIT Madras (June 2025)</h3>
              <p className="text-sm">Top 15 out of 7,000+ applicants (250 teams) for ideathon, demonstrating strong product development and pitching skills.</p>
            </div>

            <div>
              <h3 className="font-bold">3rd Place, Chess Tournament, IIT Madras Paradox'25 (June 2025)</h3>
              <p className="text-sm">Secured third position in an inter-college chess competition, showcasing analytical and strategic skills.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};