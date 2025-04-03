import React, { useState, useEffect } from 'react';
import { Target, Lightbulb, Heart, Award, Users, BookOpen, Building } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  
  const values = [
    {
      icon: <Target className="w-12 h-12 text-orange-500" />,
      title: "Our Mission",
      description: "To empower individuals with the skills and knowledge needed to succeed in the digital age."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-500" />,
      title: "Our Vision",
      description: "To be the leading platform for technology education and career transformation."
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Our Values",
      description: "Excellence, Innovation, Integrity, and Student Success drive everything we do."
    }
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
      <div className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fadeInUp">
              About CodeCenter
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-100 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
              Transforming lives through technology education since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div id="values-section" className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Our <span className="text-orange-500">Core</span> Principles
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              The foundations that guide everything we do at CodeCenter
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 transform ${
            isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div id="story-section" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            isVisible['story-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 2020, CodeCenter emerged from a simple yet powerful idea: making quality technology education accessible to everyone. What started as a small coding bootcamp has grown into a comprehensive learning platform that has helped thousands of students launch successful careers in tech.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we continue to innovate and expand our offerings, partnering with industry leaders to ensure our curriculum remains cutting-edge and relevant to the ever-evolving tech landscape.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Founded 2020</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Global Reach</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-gray-700">Diverse Curriculum</span>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2 animate-fadeInFromRight" style={{ animationDelay: "300ms" }}>
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/api/placeholder/600/400"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg">
                <span className="font-bold">Since 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div id="achievements-section" className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Our <span className="text-orange-500">Impact</span> By The Numbers
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              The results of our commitment to educational excellence
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            isVisible['achievements-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {[
              { icon: <Users className="w-10 h-10 text-orange-500" />, number: "5000+", label: "Graduates" },
              { icon: <Award className="w-10 h-10 text-orange-500" />, number: "98%", label: "Employment Rate" },
              { icon: <Building className="w-10 h-10 text-orange-500" />, number: "50+", label: "Industry Partners" },
              { icon: <Heart className="w-10 h-10 text-orange-500" />, number: "4.9/5", label: "Student Satisfaction" }
            ].map((achievement, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div id="cta-section" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 transform ${
            isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="md:flex items-center">
              <div className="md:w-2/3 p-12 md:p-16">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Tech Journey?</h2>
                <p className="text-white/90 mb-8">
                  Join thousands of students who have transformed their careers with CodeCenter's cutting-edge curriculum and expert instruction.
                </p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Courses
                </button>
              </div>
              <div className="hidden md:block md:w-1/3 p-16">
                <div className="bg-white/20 p-8 rounded-full animate-pulse">
                  <Lightbulb className="w-24 h-24 text-white" />
                </div>
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
        
        @keyframes fadeInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        .animate-fadeInFromRight {
          animation: fadeInFromRight 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}