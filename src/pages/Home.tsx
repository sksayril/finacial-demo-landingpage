import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Star, Award, Users, BookOpen, DollarSign, TrendingUp, BarChart2, Clock, Shield, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [partnersScrollPosition, setPartnersScrollPosition] = useState(0);

  // Updated carousel items with normal images (no overlay change needed)
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      title: "Master Financial Literacy",
      description: "Build wealth with expert-guided financial education"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      title: "Secure Your Financial Future",
      description: "Learn investment strategies from industry professionals"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      title: "Financial Freedom Awaits",
      description: "Develop skills to achieve your long-term financial goals"
    }
  ];

  // Financial education statistics with orange color
  const stats = [
    { icon: <Users className="w-8 h-8 text-orange-600" />, value: "25,000+", label: "Students Empowered" },
    { icon: <Star className="w-8 h-8 text-orange-600" />, value: "97%", label: "Success Rate" },
    { icon: <Award className="w-8 h-8 text-orange-600" />, value: "150+", label: "Financial Experts" },
    { icon: <BookOpen className="w-8 h-8 text-orange-600" />, value: "75+", label: "Financial Courses" }
  ];

  // Updated courses for financial education
  const featuredCourses = [
    {
      title: "Investment Fundamentals",
      image: "https://notedinsights.com/wp-content/uploads/2024/02/image-1024x576.png",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 3245,
      price: "$79.99"
    },
    {
      title: "Stock Market Mastery",
      image: "https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg",
      instructor: "Michael Chen",
      rating: 4.8,
      students: 2876,
      price: "$89.99"
    },
    {
      title: "Retirement Planning",
      image: "https://www.finedge.in/public/uploads/seo/16024-retirement-plan.jpg",
      instructor: "David Wilson",
      rating: 4.7,
      students: 1987,
      price: "$69.99"
    }
  ];

  // Testimonials section
  const testimonials = [
    {
      name: "Jennifer R.",
      role: "Small Business Owner",
      image: "https://img.freepik.com/premium-photo/smiling-cartoon-character-jennifer-3d-model_899449-173014.jpg",
      text: "The investment courses completely transformed how I manage my business finances. My profits have increased by 32% after applying what I learned!"
    },
    {
      name: "Marcus T.",
      role: "Young Professional",
      image: "https://thumbs.dreamstime.com/b/professor-holding-pointer-stick-clipart-picture-cartoon-character-36773193.jpg",
      text: "I started investing in my 20s thanks to this platform. The stock market course gave me the confidence to build a portfolio that's already showing great returns."
    },
    {
      name: "Patricia L.",
      role: "Retired Teacher",
      image: "https://www.shutterstock.com/image-illustration/3d-illustration-creative-man-pointing-600nw-1975683746.jpg",
      text: "The retirement planning course helped me optimize my savings in my final working years. Now I'm enjoying a financially secure retirement!"
    }
  ];

  // Partner logos with proper card structure
  const partners = [
    { name: "JPMorgan", logo: "https://www.theforage.com/blog/wp-content/uploads/2023/08/jpmorgan-internships.jpg" },
    { name: "Goldman Sachs", logo: "https://static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/Goldman-Sachs-workers.jpg" },
    { name: "Morgan Stanley", logo: "https://t4.ftcdn.net/jpg/05/17/94/83/360_F_517948300_ACqtzqtwcpplgfsP34CRJZuiyO4QBNG7.jpg" },
    { name: "Bank of America", logo: "/api/placeholder/120/60" },
    { name: "Fidelity", logo: "/api/placeholder/120/60" },
    { name: "Charles Schwab", logo: "/api/placeholder/120/60" },
    { name: "BlackRock", logo: "/api/placeholder/120/60" },
    { name: "Vanguard", logo: "/api/placeholder/120/60" }
  ];

  // Handle carousel autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Handle testimonial rotation
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(testimonialTimer);
  }, []);

  // Handle partners scrolling animation
  useEffect(() => {
    if (!isVisible['partners-section']) return;
    
    const scrollInterval = setInterval(() => {
      setPartnersScrollPosition(prev => {
        // Reset when scrolled enough to loop
        if (prev <= -100) {
          return 0;
        }
        // Move right to left
        return prev - 0.2; // Adjust speed here
      });
    }, 30);
    
    return () => clearInterval(scrollInterval);
  }, [isVisible['partners-section']]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="pt-16 overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Carousel Section with Normal Images */}
      <div className="relative h-96 md:h-screen max-h-[700px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="absolute inset-0 bg-black/30" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>{item.title}</h2>
                <p className={`text-lg md:text-2xl mb-8 transition-all duration-700 delay-300 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>{item.description}</p>
                <button
                  onClick={() => navigate('/courses')}
                  className={`bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  Start Learning Now
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-600 w-10' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Value Proposition Section */}
      <div id="value-section" className="py-16 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['value-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Transform Your <span className="text-orange-600">Financial</span> Future
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides comprehensive financial education that equips you with the knowledge and skills to build wealth and achieve financial independence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Learn From Experts",
                description: "Get insights from certified financial advisors and successful investors",
                icon: <Users className="w-12 h-12 text-orange-600" />,
                delay: 0
              },
              {
                title: "Practical Investment Skills",
                description: "Apply proven strategies with our interactive simulations and real-world case studies",
                icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
                delay: 200
              },
              {
                title: "Financial Freedom",
                description: "Develop a personalized roadmap to achieve your financial goals and secure your future",
                icon: <Target className="w-12 h-12 text-orange-600" />,
                delay: 400
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 transform ${
                  isVisible['value-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2 border-t-4 border-orange-600`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div id="stats-section" className="py-20 bg-orange-600 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 transform ${
            isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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

      {/* Featured Courses Section */}
      <div id="courses-section" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['courses-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Top-Rated <span className="text-orange-600">Financial</span> Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses designed to help you master personal finance and investment strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible['courses-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-orange-600 font-bold">{course.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Instructor: {course.instructor}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{course.students.toLocaleString()} students</span>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-12 transition-all duration-1000 delay-500 transform ${
            isVisible['courses-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => navigate('/courses')}
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Courses
            </button>
          </div>
        </div>
      </div>

      {/* Financial Benefits Section */}
      <div id="benefits-section" className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['benefits-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
              Why Financial <span className="text-orange-600">Education</span> Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Investing in your financial knowledge today can lead to significant benefits throughout your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Build Wealth",
                description: "Learn proven investment strategies to grow your assets over time",
                icon: <DollarSign className="w-10 h-10 text-orange-600" />,
                delay: 0
              },
              {
                title: "Secure Future",
                description: "Create a solid foundation for retirement and long-term financial security",
                icon: <Shield className="w-10 h-10 text-orange-600" />,
                delay: 200
              },
              {
                title: "Market Insights",
                description: "Understand market trends and make informed investment decisions",
                icon: <BarChart2 className="w-10 h-10 text-orange-600" />,
                delay: 400
              },
              {
                title: "Financial Freedom",
                description: "Achieve independence and pursue your passions without financial constraints",
                icon: <Clock className="w-10 h-10 text-orange-600" />,
                delay: 600
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-all duration-500 transform ${
                  isVisible['benefits-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } hover:-translate-y-2 shadow-lg hover:shadow-xl`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-md">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section with motion effect */}
      <div id="testimonials-section" className="py-20 bg-gray-900 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['testimonials-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Success Stories</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              See how our financial education has transformed lives and created financial success.
            </p>
          </div>
          
          <div className="relative h-64 md:h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 transform ${
                  index === activeTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-600"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{testimonial.text}</p>
                  <div className="flex mt-6">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-orange-600 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Partners & Recognition Section with card-based scrolling effect */}
      <div id="partners-section" className="py-20 bg-gray-50 animate-on-scroll relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-3xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 transition-all duration-1000 transform ${
            isVisible['partners-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Trusted By <span className="text-orange-600">Leading</span> Financial Institutions
          </h2>
          
          {/* Card-based scrolling logo container */}
          <div className="relative w-full overflow-hidden py-8">
            <div 
              className="flex space-x-8 transition-all duration-500"
              style={{
                transform: `translateX(${partnersScrollPosition}%)`,
                width: `${partners.length * 2 * 20}%` // Double width for continuous loop
              }}
            >
              {/* First set of partner cards */}
              {partners.map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className={`flex-shrink-0 w-64 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center transform ${
                    isVisible['partners-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } hover:-translate-y-2`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
              
              {/* Duplicate set of partner cards for seamless scrolling */}
              {partners.map((partner, index) => (
                <div
                  key={`partner-duplicate-${index}`}
                  className="flex-shrink-0 w-64 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:-translate-y-2"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Gradient overlays for better visual effect */}
        <div className="absolute pointer-events-none inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute pointer-events-none inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>

      {/* CTA Section with motion effects */}
      <div id="cta-section" className="py-20 bg-orange-600 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Start Your Financial Journey Today</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Join thousands of successful students who have transformed their financial future through our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/sign-up')}
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started For Free
              </button>
              <button
                onClick={() => navigate('/plans')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced motion effects with CSS */}
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
        
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 1s ease-out forwards;
        }
        
        .animate-fadeScale {
          animation: fadeScale 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}