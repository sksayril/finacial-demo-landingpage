import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Database, Server, Shield, ChevronRight, Star, Users, Award } from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'web-development',
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: "Web Development",
      description: "Learn modern web development with React, Node.js, and more",
      image: "/api/placeholder/400/300",
      benefits: ["Frontend & Backend Skills", "Responsive Design", "Modern Frameworks"],
      students: 15280,
      rating: 4.8
    },
    {
      id: 'data-science',
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: "Data Science",
      description: "Master data analysis, machine learning, and AI",
      image: "/api/placeholder/400/300",
      benefits: ["Data Visualization", "Predictive Modeling", "Python & R"],
      students: 12345,
      rating: 4.9
    },
    {
      id: 'cloud-computing',
      icon: <Server className="w-12 h-12 text-orange-500" />,
      title: "Cloud Computing",
      description: "Learn AWS, Azure, and cloud architecture",
      image: "/api/placeholder/400/300",
      benefits: ["Scalable Infrastructure", "Serverless Computing", "DevOps"],
      students: 9876,
      rating: 4.7
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Cybersecurity",
      description: "Master security principles and ethical hacking",
      image: "/api/placeholder/400/300",
      benefits: ["Threat Detection", "Network Security", "Penetration Testing"],
      students: 8540,
      rating: 4.8
    }
  ];

  // Stats for services
  const stats = [
    { icon: <Users className="w-8 h-8 text-orange-500" />, value: "50,000+", label: "Students Enrolled" },
    { icon: <Star className="w-8 h-8 text-orange-500" />, value: "4.8", label: "Average Rating" },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: "200+", label: "Expert Instructors" },
    { icon: <Code className="w-8 h-8 text-orange-500" />, value: "500+", label: "Courses Available" }
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

  return (
    <div className="pt-16 overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeInUp">
              Tech Career Pathways
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-100 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
              Comprehensive learning paths designed to transform your tech career and open new opportunities
            </p>
            <div className="mt-10 animate-fadeInUp" style={{ animationDelay: "400ms" }}>
              <button 
                onClick={() => document.getElementById('services-cards').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="py-16 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div id="services-cards" className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['services-cards'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Choose from our specialized tech learning paths to advance your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden shadow-xl transition-all duration-700 transform hover:scale-105 cursor-pointer ${
                  isVisible['services-cards'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => navigate(`/services/${service.id}`)}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4 bg-orange-500 text-white p-2 rounded-full transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{service.rating}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-white rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-orange-300 transition-colors duration-300">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-200 mb-4 group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeService === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <ChevronRight className="w-4 h-4 text-orange-400 mr-1" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-300">
                        <span>{service.students.toLocaleString()} students enrolled</span>
                      </div>
                    </div>
                    
                    <button className={`mt-4 px-6 py-2 bg-orange-500 text-white rounded-full transform transition-all duration-300 hover:bg-orange-400 ${
                      activeService === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      Learn More <ChevronRight className="w-4 h-4 inline-block ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div id="why-us-section" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['why-us-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose Our Learning Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized tech education services are designed to provide you with in-demand skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Recognized Certification",
                description: "Earn certificates that employers value and recognize worldwide",
                icon: <Award className="w-12 h-12 text-orange-500" />,
                delay: 0
              },
              {
                title: "Expert Instructors",
                description: "Learn from professionals with years of industry experience",
                icon: <Users className="w-12 h-12 text-orange-500" />,
                delay: 200
              },
              {
                title: "Hands-On Projects",
                description: "Build a portfolio of real-world projects to showcase your skills",
                icon: <Code className="w-12 h-12 text-orange-500" />,
                delay: 400
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  isVisible['why-us-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2 border-b-4 border-orange-500`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="bg-gray-50 p-4 rounded-full inline-block mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta-section" className="py-20 bg-gradient-to-r from-orange-500 to-red-600 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Boost Your Tech Career?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with our expert-led courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/sign-up')}
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started For Free
              </button>
              <button
                onClick={() => navigate('/courses')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View All Courses
              </button>
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