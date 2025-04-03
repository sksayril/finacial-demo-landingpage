import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, Clock, Award } from 'lucide-react';

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    'web-development': {
      title: "Web Development",
      description: "Master modern web development with our comprehensive program",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      duration: "6 months",
      modules: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript & ES6+",
        "React.js Development",
        "Node.js & Express",
        "Database Design & Development",
        "DevOps & Deployment"
      ],
      features: [
        "Live Online Classes",
        "Real-world Projects",
        "Industry Expert Mentors",
        "Career Support"
      ]
    },
    'data-science': {
      title: "Data Science",
      description: "Learn data analysis, machine learning, and AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      duration: "8 months",
      modules: [
        "Python Programming",
        "Data Analysis with Pandas",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Big Data Processing",
        "Data Visualization"
      ],
      features: [
        "Hands-on Labs",
        "Industry Projects",
        "Certification Prep",
        "Job Placement Assistance"
      ]
    },
    // Add more services as needed
  };

  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/services')}
          className="flex items-center text-orange-500 hover:text-orange-600 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.modules.map((module, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <BookOpen className="w-5 h-5 text-orange-500 mr-3" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <h3 className="font-bold">Duration</h3>
                  <p>{service.duration}</p>
                </div>
              </div>

              <h3 className="font-bold mb-4">Course Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-orange-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full mt-8 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}