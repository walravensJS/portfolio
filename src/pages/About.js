import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SKILLS, GET_EDUCATION, GET_PROJECTS } from "./../graphql/queries";
import { motion } from "framer-motion";
import ResumeModal from "../components/functional/About/Resume"; // adjust path as needed

export default function About() {
  const [isResumeOpen, setResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  if (skillsLoading || educationLoading || projectsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-200 opacity-25"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-purple-500 animate-spin"></div>
        </div>
      </div>
    );
  }

  if (skillsError || educationError || projectsError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-lg max-w-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">Something went wrong</h3>
              <p className="mt-2 text-red-600">
                {skillsError
                  ? skillsError.message
                  : educationError
                  ? educationError.message
                  : projectsError.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Group skills by category
  const groupedSkills = skillsData.skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <main className="container mx-auto px-6 pt-8 pb-16">
        {/* Intro Section - Always Visible */}
        <section className="mb-16">
          <motion.div 
            className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              <div className="absolute inset-0 bg-pattern opacity-20"></div>
              <div className="absolute -bottom-20 right-10 md:right-16">
                <div className="p-2 bg-white rounded-full shadow-xl">
                  <img
                    src="/img/mylogo.svg"
                    alt="Stijn Walravens"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-8 pt-24 md:p-10 md:pt-24">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Stijn Walravens</h1>
                <h2 className="text-xl md:text-2xl text-purple-600 font-medium mb-6">Full Stack Developer & Graphic Designer</h2>
                
                <p className="text-gray-700 leading-relaxed">
                  I'm a Belgian / Native American full stack developer and graphic
                  designer with a knack for creating digital art. By day, I'm deep
                  into the world of web development, using tools like Express,
                  Eleventy, and React.js to create seamless online experiences.
                  But when the workday's done, you'll find me freelancing as a
                  graphic designer, bringing local clients' dreams to life,
                  especially for weddings and events. Outside of work, I'm all
                  about gaming, movie marathons, and getting lost in a good book.
                  And when it comes to design tools, Adobe is my playground. Let's
                  team up and make some digital dreams a reality!
                </p>

                <div className="mt-8 flex items-center">

                  <div className="ml-4">
                    <p className="font-bold text-2xl text-gray-800">{projectsData.projects.length}</p>
                    <a href="/projects" className="text-gray-500 text-sm">Projects Completed</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

              {/* Header Section */}
      <motion.div 
        className={`z-30 backdrop-blur-lg rounded-xl`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 rounded-full">
          <div className="flex justify-between items-center">
            
            <div className="hidden md:flex space-x-2">
              <TabButton 
                active={activeTab === "about"} 
                onClick={() => setActiveTab("about")}
                label="About"
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
            </div>
            
            <button
              onClick={() => setResumeOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-full shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              View Resume
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Tabs */}
      <div className="md:hidden sticky top-20 z-20 px-6 pt-4">
        <div className="flex bg-white/90 backdrop-blur-md rounded-full shadow-md p-1">
          <TabButton 
            active={activeTab === "about"} 
            onClick={() => setActiveTab("about")}
            label="About"
            mobile
          />
          <TabButton 
            active={activeTab === "skills"} 
            onClick={() => setActiveTab("skills")}
            label="Skills"
            mobile
          />
          <TabButton 
            active={activeTab === "education"} 
            onClick={() => setActiveTab("education")}
            label="Education"
            mobile
          />
        </div>
      </div>


        {/* Content Sections */}
        <div className="space-y-12">
          {/* About Section */}
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Profile</h3>
                </div>
                
                <div className="space-y-4">
                  <InfoRow label="Full Name" value="Stijn Walravens" />
                  <InfoRow label="Role" value="Full Stack Developer & Graphic Designer" />
                  <InfoRow label="Location" value="Belgium" />
                  <InfoRow label="Experience" value="Professional Developer" />
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Contact</h3>
                </div>
                
                <div className="space-y-4">
                  <InfoRow label="Email" value="stijn.walravens@outlook.com" isLink={true} isEmail={true} />
                  <InfoRow label="Portfolio" value="stijnwalravens.com" isLink={true} />
                  <div className="flex space-x-3 mt-6">
                    <SocialButton icon="github" link="https://github.com/walravensJS" />
                    <SocialButton icon="linkedin" link="https://linkedin.com/in/stijn-walravens" />
                    <SocialButton icon="instagram" link="https://instagram.com/walravens.js" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Skills & Expertise</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(groupedSkills).map(([category, skills]) => (
                    <div key={category} className="bg-white/80 rounded-2xl p-6 shadow-md">
                      <h4 className="text-lg font-bold text-purple-600 mb-4">{category}</h4>
                      <div className="space-y-3">
                        {skills.map(skill => (
                          <div key={skill.id} className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{skill.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-2">Looking for specific skills?</h4>
                  <p className="mb-4">I'm always expanding my toolkit. If you need something specific for your project, let's discuss it.</p>
                  <a href="/contact" className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Education Section */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-800">Education & Diplomas</h3>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>
                  
                  <div className="space-y-12 relative">
                    {/* Reverse the education items order */}
                    {[...educationData.educations].reverse().map((education, index) => (
                      <div key={education.id} className="pl-12 relative">
                        <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="bg-white/80 rounded-2xl p-6 shadow-md">
                          <span className="text-sm font-medium text-purple-600 bg-purple-100 rounded-full px-3 py-1">{education.period}</span>
                          <h4 className="text-xl font-bold text-gray-800 mt-3">{education.title}</h4>
                          <p className="text-gray-600 mt-1">{education.course}</p>
                          <p className="mt-3 text-gray-700">{education.description || "Learned valuable skills and gained practical experience."}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

// Helper Components
const TabButton = ({ active, onClick, label, mobile = false }) => (
  <button
    onClick={onClick}
    className={`
      ${mobile ? 'flex-1' : ''} 
      px-4 py-2 rounded-full font-medium transition-all
      ${active 
        ? 'bg-purple-600 text-white shadow-md' 
        : 'text-gray-700 hover:bg-purple-100'
      }
    `}
  >
    {label}
  </button>
);

const InfoRow = ({ label, value, isLink = false, isEmail = false }) => (
  <div className="flex flex-col">
    <span className="text-sm text-gray-500">{label}</span>
    {isLink ? (
      isEmail ? (
        <a href={`mailto:${value}`} className="text-purple-600 hover:underline">{value}</a>
      ) : (
        <a href={`https://${value}`} className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">{value}</a>
      )
    ) : (
      <span className="font-medium text-gray-800">{value}</span>
    )}
  </div>
);

const SocialButton = ({ icon, link }) => (
  <a 
    href={link} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
      {icon === "github" && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>}
      {icon === "linkedin" && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
      {icon === "twitter" && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>}
      {icon === "instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>}
    </svg>
  </a>
);