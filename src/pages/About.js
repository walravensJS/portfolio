import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SKILLS, GET_EDUCATION, GET_PROJECTS } from "./../graphql/queries";
import InfoRow from "../components/design/About/InfoRow"
import SocialButton from "../components/design/About/SocialButton"
import AnimatedLogo from "../components/design/Loading/AnimatedLogo";

export default function About() {
  const [isResumeOpen, setResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    loading: skillsLoading,
    error: skillsError,
    data: skillsData,
  } = useQuery(GET_SKILLS);

  const {
    loading: educationLoading,
    error: educationError,
    data: educationData,
  } = useQuery(GET_EDUCATION);

  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(GET_PROJECTS);

  // Loading state
  if (skillsLoading || educationLoading || projectsLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
          <div className="w-40 h-40">
              <AnimatedLogo className="w-full" />
          </div>
      </div>
  );  }

  // Error state
  if (skillsError || educationError || projectsError) {
    return <ErrorState error={skillsError || educationError || projectsError} />;
  }

  // Group skills by category
  const groupedSkills = skillsData.skills.reduce((acc, skill) => {
    const category = skill.category || "My Skills";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Profile */}
      <div className="relative bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full p-2 shadow-lg transform hover:rotate-3 transition-transform duration-300">
              <img
                src="/img/mylogo.svg"
                alt="Stijn Walravens"
                className="w-full h-full rounded-full "
              />
            </div>
            
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Stijn Walravens</h1>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="h-1 w-12 bg-purple-400 rounded-full"></div>
                <h2 className="text-xl font-medium text-purple-300">Full Stack Developer & Graphic Designer</h2>
              </div>
              <p className="text-lg text-gray-100 leading-relaxed mb-6">
                Belgian / Native American full stack developer and graphic designer creating digital experiences that make an impact.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                <SocialButton icon="github" link="https://github.com/walravensJS" />
                <SocialButton icon="linkedin" link="https://linkedin.com/in/stijn-walravens" />
                <SocialButton icon="instagram" link="https://instagram.com/walravens.js" />
                <button
                  onClick={() => setResumeOpen(true)}
                  className="bg-white text-purple-800 font-medium px-6 py-2 rounded-full shadow transition-all hover:shadow-lg hover:bg-gray-100"
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <path 
              d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 54C1248 48 1344 48 1392 48L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </div>

      <div className={`top-0 z-50 transition-all duration-300 ${scrollY > 100 ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            
            <nav className="flex items-center gap-1 md:gap-2">
              <TabButton 
                active={activeTab === "about"}
                onClick={() => setActiveTab("about")}
                label="About"
              />
              <TabButton 
                active={activeTab === "experience"}
                onClick={() => setActiveTab("experience")}
                label="Experience"
              />
              <TabButton 
                active={activeTab === "skills"}
                onClick={() => setActiveTab("skills")}
                label="Skills"
              />
              <TabButton 
                active={activeTab === "education"}
                onClick={() => setActiveTab("education")}
                label="Education"
              />
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* About Section */}
        {activeTab === "about" && (
          <AboutSection projectsCount={projectsData.projects.length} />
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <SkillsSection groupedSkills={groupedSkills} />
        )}

        {/* Education Section */}
        {activeTab === "education" && (
          <EducationSection educations={educationData.educations} />
        )}

        {/* Experience Section */}
        {activeTab === "experience" && (
          <ExperienceSection />
        )}
      </main>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">Resume</h3>
              <button 
                onClick={() => setResumeOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {/* Resume content would go here */}
              <p>Resume content...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// About Section
const AboutSection = ({ projectsCount }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
          I'm Belgian and Native American, and I work as a full stack developer and graphic designer. I build websites and web apps using tools like Express, Eleventy, and React.js.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
          When I'm not working, I do freelance graphic design for local clients for example weddings and events. Outside of work, I enjoy creating side-projects, watching movies, and reading a good book.
          </p>
          <p className="text-gray-700 leading-relaxed">
          I’m comfortable using Adobe tools for design, and I’d love to collaborate and bring your ideas to life.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="bg-purple-50 rounded-lg p-4 flex items-center gap-3">
            <div className="bg-purple-100 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.168 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-800">{projectsCount}</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
        <div className="space-y-4">
          <a href="mailto:stijn.walravens@outlook.com" className="text-purple-600">
            stijn.walravens@outlook.com
          </a>
          <InfoRow label="Portfolio" value="stijnwalravens.com" isLink={true} />
          <InfoRow label="Location" value="Belgium" />
          <InfoRow label="Available for" value="Freelance & Full-time" />
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-md p-6 md:p-8 text-white">
        <h3 className="text-xl font-bold mb-3">Ready to collaborate?</h3>
        <p className="mb-6 text-purple-100">Let's discuss how we can bring your ideas to life with creative solutions.</p>
        <a 
          href="/contact" 
          className="block w-full text-center bg-white text-purple-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
);

// Skills Section
const SkillsSection = ({ groupedSkills }) => (
  <div>
    <div className="max-w-3xl mx-auto mb-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills & Expertise</h2>
      <p className="text-gray-600 text-lg">
        I've developed a diverse set of skills across various technologies and design tools
      </p>
    </div>
    
    <div className="w-[100%]">
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-4 px-6">
            <h3 className="text-white font-bold text-lg">{category}</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-3">
              {skills.map(skill => (
                <div key={skill.id} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-gray-700">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">Looking for specific skills?</h3>
          <p className="mb-0 text-indigo-100">
            I'm always expanding my toolkit. If you need something specific for your project, let's discuss it.
          </p>
        </div>
        <div className="shrink-0">
          <a 
            href="/contact" 
            className="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Education Section
const EducationSection = ({ educations }) => (
  <div>
    <div className="max-w-3xl mx-auto mb-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Education & Diplomas</h2>
      <p className="text-gray-600 text-lg">
        My academic journey that has shaped my professional expertise
      </p>
    </div>
    
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute left-8 top-6 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-600 rounded"></div>
        
        <div className="space-y-8">
          {[...educations].reverse().map((education, index) => (
            <div key={education.id} className="flex">
              <div className="relative shrink-0 w-16">
                <div className="absolute top-6 left-6 w-6 h-6 bg-white rounded-full border-4 border-purple-500 z-10"></div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex-1 ml-2 hover:shadow-lg transition-shadow">
                <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
                  {education.period}
                </span>
                <h3 className="text-xl font-bold text-gray-800">{education.title}</h3>
                <p className="text-purple-600 mb-3">{education.course}</p>
                <p className="text-gray-600">
                  {education.description || "Learned valuable skills and gained practical experience."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Experience Section
const ExperienceSection = () => (
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto mb-12 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 sm:text-4xl">Professional Experience</h2>
      <p className="text-gray-600 text-lg sm:text-xl">
        My professional journey and work experience
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Vertical line for the timeline */}
        <div className="absolute left-8 top-6 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></div>

        <div className="space-y-8">
          {/* Full-stack Developer Experience */}
          <div className="flex items-start">
            <div className="relative shrink-0 w-16">
              {/* Timeline dot */}
              <div className="absolute top-6 left-6 w-6 h-6 bg-white rounded-full border-4 border-purple-500 z-10 shadow-md"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex-1 ml-2 hover:shadow-xl transition-all duration-300 ease-in-out">
              <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-4 py-1 text-sm mb-3">
                April 2025 - Present
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Zoomers</h3>
              <p className="text-purple-600 mb-3 text-base">Full-stack Developer</p>
              <div className="text-gray-700 space-y-2">
                <ul className="list-disc list-inside pl-4">
                  <li className="mb-2">Upgrading the platform with new features and debugging existing functionalities using PHP.</li>
                  <li className="mb-2">Collaborating closely with web designers to ensure optimal UI/UX for new and existing features.</li>
                  <li className="mb-2">Solely responsible for the portfolio feature update, providing Zoomers with full management controls over their portfolio.</li>
                  <li className="mb-2">Successfully fixed and optimized the sales flow in the back office, improving operational efficiency.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-gray-100">
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">PHP</span>
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">UI/UX Collaboration</span>
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">Project Ownership</span>
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">Process Optimization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Freelance Graphic Designer Experience */}
          <div className="flex items-start">
            <div className="relative shrink-0 w-16">
              {/* Timeline dot */}
              <div className="absolute top-6 left-6 w-6 h-6 bg-white rounded-full border-4 border-purple-500 z-10 shadow-md"></div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex-1 ml-2 hover:shadow-xl transition-all duration-300 ease-in-out">
              <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-4 py-1 text-sm mb-3">
                2020 - Present
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Freelance Graphic Designer</h3>
              <p className="text-purple-600 mb-3 text-base">Self-employed</p>
              <div className="text-gray-700 space-y-2">
                <ul className="list-disc list-inside pl-4">
                  <li className="mb-2">Designed various graphic materials including logos, brochures, and social media content for diverse clients.</li>
                  <li className="mb-2">Managed multiple design projects from concept to completion, ensuring client satisfaction and meeting deadlines.</li>
                  <li className="mb-2">Utilized Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, InDesign) to produce high-quality visual assets.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-gray-100">
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">Graphic Design</span>
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">Client Management</span>
                  <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">Adobe Creative Suite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Loading Component
const LoadingState = () => (
  <div className="min-h-screen flex justify-center items-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-200 opacity-25"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-purple-600 animate-spin"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">Loading profile information...</p>
    </div>
  </div>
);

// Error Component
const ErrorState = ({ error }) => (
  <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-lg max-w-lg">
      <div className="flex items-center">
        <div className="shrink-0">
          <svg className="h-8 w-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-red-800">Something went wrong</h3>
          <p className="mt-2 text-red-600">{error.message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Helper Components
const TabButton = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-2 text-sm md:text-base md:px-4 md:py-2 rounded-lg font-medium transition-all
      ${active 
        ? 'bg-purple-100 text-purple-800' 
        : 'text-gray-600 hover:bg-gray-100'
      }
    `}
  >
    {label}
  </button>
);
