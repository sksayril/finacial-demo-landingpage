import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Award, Book, Users, ChevronDown, ChevronUp } from 'lucide-react';

export default function Team() {
  const [isVisible, setIsVisible] = useState({});
  const [expandedMember, setExpandedMember] = useState(null);
  
  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      image: "/api/placeholder/500/500",
      bio: "10+ years of experience in web development and education",
      expandedBio: "Sarah brings over a decade of expertise in modern web frameworks and educational leadership. She previously led development teams at several Fortune 500 companies before dedicating herself to training the next generation of developers.",
      achievements: ["Published author", "Conference speaker", "500+ students mentored"],
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Course Director",
      image: "/api/placeholder/500/500",
      bio: "Former tech lead at major tech companies",
      expandedBio: "With experience at Google and Amazon, Michael specializes in cloud architecture and distributed systems. He's passionate about creating practical, industry-relevant curriculum that prepares students for real-world challenges.",
      achievements: ["Patent holder", "Open source contributor", "Tech leadership awards"],
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Student Success Manager",
      image: "/api/placeholder/500/500",
      bio: "Passionate about helping students achieve their goals",
      expandedBio: "Emily has a background in educational psychology and career counseling. She works closely with students to develop personalized learning paths and ensure they have the support needed to succeed in their tech career journey.",
      achievements: ["Career placement specialist", "Learning strategy expert", "Student advocate"],
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  // Stats for team expertise
  const expertise = [
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: "25+", label: "Years Combined Experience" },
    { icon: <Book className="w-8 h-8 text-orange-500" />, value: "150+", label: "Courses Developed" },
    { icon: <Users className="w-8 h-8 text-orange-500" />, value: "12,000+", label: "Students Taught" }
  ];

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight - 100 && sectionBottom > 0) {
          setIsVisible(prev => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpandMember = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <div className="pt-16 overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeInUp">
              Meet Our Expert Team
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-100 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
              Learn from industry professionals with years of real-world experience
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Stats */}
      <div id="expertise-section" className="py-16 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            isVisible['expertise-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {expertise.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div id="team-section" className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Your <span className="text-orange-500">Learning</span> Mentors
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our instructors bring real-world expertise to help you master in-demand tech skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-700 transform hover:shadow-2xl ${
                  isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${expandedMember === index ? 'md:col-span-3 md:grid md:grid-cols-3 md:gap-6' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative group ${expandedMember === index ? 'md:col-span-1' : ''}`}>
                  <div className="overflow-hidden h-72">
                    <img
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        expandedMember !== index ? 'group-hover:scale-110' : ''
                      }`}
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-3 justify-center">
                      <a href={member.social.twitter} className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                      <a href={member.social.linkedin} className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href={member.social.github} className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 ${expandedMember === index ? 'md:col-span-2 md:flex md:flex-col md:justify-center' : ''}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">{member.name}</h3>
                      <p className="text-orange-500 font-medium">{member.role}</p>
                    </div>
                    <button 
                      onClick={() => toggleExpandMember(index)}
                      className="bg-gray-100 hover:bg-orange-100 p-2 rounded-full transition-colors duration-300"
                    >
                      {expandedMember === index ? 
                        <ChevronUp className="h-5 w-5 text-orange-500" /> : 
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      }
                    </button>
                  </div>
                  
                  <p className={`mt-4 text-gray-600 ${expandedMember === index ? 'hidden md:block' : ''}`}>
                    {member.bio}
                  </p>
                  
                  {expandedMember === index && (
                    <div className="mt-4 animate-fadeInUp">
                      <p className="text-gray-600 mb-4">{member.expandedBio}</p>
                      <h4 className="font-bold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 mb-4">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 flex space-x-4 md:hidden">
                        <a href={member.social.twitter} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href={member.social.linkedin} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={member.social.github} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {expandedMember !== index && (
                    <div className="mt-4 flex space-x-4">
                      <a href={member.social.twitter} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div id="join-section" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 transform ${
            isVisible['join-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="md:flex">
              <div className="md:w-1/2 p-12 md:p-16">
                <h2 className="text-3xl font-bold text-white mb-6">Join Our Expert Team</h2>
                <p className="text-white/90 mb-8">
                  We're always looking for passionate educators and industry experts to join our team. 
                  Share your knowledge and help shape the future of tech education.
                </p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Open Positions
                </button>
              </div>
              <div className="md:w-1/2 bg-white p-12 md:p-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Look For</h3>
                <ul className="space-y-4">
                  {[
                    "Industry experience in cutting-edge technologies",
                    "Passion for education and student success",
                    "Excellent communication and teaching skills",
                    "Commitment to continuous learning"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}