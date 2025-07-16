import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Clock, Users, Award, ArrowRight, Briefcase, Heart, Target } from "lucide-react";

export const CareerPage = (): JSX.Element => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Product Manager",
      department: "Product Development",
      location: "Delhi, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead product strategy and development for our innovative sanitary pad line. Drive market research, product roadmap, and cross-functional collaboration.",
      requirements: ["MBA or equivalent", "Product management experience", "Healthcare industry knowledge", "Strong analytical skills"],
      posted: "2024-01-15",
      urgent: true
    },
    {
      id: 2,
      title: "Quality Assurance Manager",
      department: "Quality Control",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Ensure product quality and compliance with industry standards. Manage quality control processes and team.",
      requirements: ["Quality management certification", "Manufacturing experience", "Regulatory knowledge", "Team leadership skills"],
      posted: "2024-01-12",
      urgent: false
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Drive digital marketing campaigns, social media strategy, and online brand presence for FlyCare products.",
      requirements: ["Digital marketing expertise", "Social media management", "Content creation skills", "Analytics proficiency"],
      posted: "2024-01-10",
      urgent: false
    },
    {
      id: 4,
      title: "Research & Development Scientist",
      department: "R&D",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop innovative materials and technologies for next-generation feminine hygiene products.",
      requirements: ["Chemistry/Materials Science degree", "Research experience", "Innovation mindset", "Laboratory skills"],
      posted: "2024-01-08",
      urgent: true
    },
    {
      id: 5,
      title: "Sales Manager - North Region",
      department: "Sales",
      location: "Delhi, India",
      type: "Full-time",
      experience: "6-10 years",
      description: "Lead sales operations in North India, manage distributor relationships, and drive revenue growth.",
      requirements: ["Sales management experience", "FMCG background", "Regional market knowledge", "Relationship building skills"],
      posted: "2024-01-05",
      urgent: false
    },
    {
      id: 6,
      title: "HR Business Partner",
      department: "Human Resources",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4-7 years",
      description: "Partner with business leaders to drive HR strategy, talent management, and organizational development.",
      requirements: ["HR management experience", "Business partnering skills", "Talent acquisition expertise", "Change management"],
      posted: "2024-01-03",
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support for you and your family."
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Clear career progression paths, skill development programs, and leadership training opportunities."
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous leave policies to maintain work-life harmony."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based bonuses, employee recognition programs, and competitive compensation packages."
    }
  ];

  const companyValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create better products and solutions for women's health and comfort."
    },
    {
      title: "Empowerment",
      description: "We believe in empowering women through our products and creating an inclusive workplace for all."
    },
    {
      title: "Quality",
      description: "Excellence in everything we do, from product development to customer service and employee experience."
    },
    {
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable practices in all our operations."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-[#136ea1] to-[#0f5a8a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Join Our Mission
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Be part of a team that's revolutionizing women's health and hygiene. 
                Build your career while making a meaningful impact on millions of lives.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">35+ Years Legacy</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">500+ Employees</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-semibold">Growing Team</span>
                </div>
              </div>
              <Button className="bg-white text-[#136ea1] hover:bg-gray-100 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team at FlyCare"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#136ea1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{value.title[0]}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card
                key={job.id}
                className="hover:shadow-xl transition-all duration-500 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        {job.urgent && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                            Urgent
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, idx) => (
                            <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500">
                        Posted on {new Date(job.posted).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:items-end">
                      <Link to={`/apply/${job.id}`}>
                        <Button className="bg-[#136ea1] hover:bg-[#0f5a8a] text-white px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-[#136ea1] text-[#136ea1] hover:bg-[#136ea1] hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <Button variant="outline" className="border-[#136ea1] text-[#136ea1] hover:bg-[#136ea1] hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600">
              We offer comprehensive benefits and a supportive work environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#136ea1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our employees about their experience at FlyCare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                position: "Senior Product Manager",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "Working at FlyCare has been incredibly fulfilling. I get to contribute to products that make a real difference in women's lives while growing my career in a supportive environment."
              },
              {
                name: "Rajesh Kumar",
                position: "Quality Assurance Manager",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "The company's commitment to quality and innovation is inspiring. Every day, I work with a team that's passionate about creating the best products for our customers."
              },
              {
                name: "Anjali Patel",
                position: "Marketing Specialist",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
                quote: "FlyCare offers amazing growth opportunities and work-life balance. The leadership team truly cares about employee development and well-being."
              }
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#136ea1]">{testimonial.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#136ea1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our team and be part of a company that's making a positive impact 
            on women's health and well-being across India and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#136ea1] hover:bg-gray-100 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              Browse All Jobs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#136ea1] px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                Contact HR
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};