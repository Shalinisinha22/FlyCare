import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Users, Award, Shield, Heart, Target, Eye, CheckCircle } from "lucide-react";

export const AboutUs = (): JSX.Element => {
  const values = [
    {
      icon: Heart,
      title: "Care & Compassion",
      description: "We prioritize the well-being and comfort of every woman, understanding their unique needs and challenges."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing to ensure the highest standards of safety and effectiveness."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously invest in research and development to bring cutting-edge solutions to market."
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "We believe in empowering women to live confidently and pursue their dreams without limitations."
    }
  ];

  const milestones = [
    { year: "1988", title: "Company Founded", description: "Started with a vision to improve menstrual hygiene" },
    { year: "1995", title: "First Product Launch", description: "Introduced our first line of sanitary pads" },
    { year: "2005", title: "National Expansion", description: "Expanded operations across India" },
    { year: "2015", title: "Technology Innovation", description: "Launched Gel Lock Technology" },
    { year: "2020", title: "10M+ Customers", description: "Reached 10 million satisfied customers" },
    { year: "2024", title: "Sustainability Focus", description: "Launched eco-friendly product line" }
  ];

  const team = [
    {
      name: "Dr. Rajesh Garg",
      position: "Founder & CEO",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Visionary leader with 35+ years in healthcare industry"
    },
    {
      name: "Priya Sharma",
      position: "Head of R&D",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Leading innovation in feminine hygiene products"
    },
    {
      name: "Amit Kumar",
      position: "Operations Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensuring quality and efficiency in manufacturing"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#136ea1]/10 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-[#136ea1]">FlyCare</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 1988, we've been dedicated to revolutionizing feminine hygiene with innovative, 
                comfortable, and reliable products that empower women to live life to the fullest.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">35+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">10M+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">ISO Certified</span>
                </div>
              </div>
              <Button className="bg-[#136ea1] hover:bg-[#0f5a8a] text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                Our Products
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About FlyCare"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-[#136ea1]">35+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#136ea1] rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide innovative, high-quality feminine hygiene products that empower women 
                  to live confidently and comfortably. We are committed to breaking barriers and 
                  creating solutions that support women's health and well-being at every stage of life.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#136ea1] rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading global brand in feminine hygiene, recognized for our commitment 
                  to innovation, quality, and women's empowerment. We envision a world where every 
                  woman has access to safe, comfortable, and reliable hygiene products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#136ea1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our path to excellence</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#136ea1] hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1 lg:pr-8">
                    <Card className="hover:shadow-xl transition-all duration-500 border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-[#136ea1] mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex w-4 h-4 bg-[#136ea1] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 lg:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


       {/* Our Certifications */}
       <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#136ea1] mb-4">
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of quality and safety through internationally recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: 'ISO 9001:2015',
              description: 'Quality Management System',
              icon: 'https://images.pexels.com/photos/6663600/pexels-photo-6663600.jpeg?auto=compress&cs=tinysrgb&w=200'
            },
            {
              name: 'ISO 14001:2015',
              description: 'Environmental Management',
              icon: 'https://images.pexels.com/photos/6663601/pexels-photo-6663601.jpeg?auto=compress&cs=tinysrgb&w=200'
            },
            {
              name: 'FDA Approved',
              description: 'Food & Drug Administration',
              icon: 'https://images.pexels.com/photos/6663602/pexels-photo-6663602.jpeg?auto=compress&cs=tinysrgb&w=200'
            },
            {
              name: 'CE Marking',
              description: 'European Conformity',
              icon: 'https://images.pexels.com/photos/6663603/pexels-photo-6663603.jpeg?auto=compress&cs=tinysrgb&w=200'
            }
          ].map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <img
                    className="w-10 h-10 object-contain"
                    alt={cert.name}
                    src={cert.icon}
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            All our products undergo rigorous testing and quality checks to ensure they meet international standards
          </p>
          <Button className="bg-[#136ea1] hover:bg-[#0f5a8a]">
            View All Certifications
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">The visionaries driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#136ea1] font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
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
            Ready to Experience the FlyCare Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join millions of women who trust FlyCare for their feminine hygiene needs. 
            Discover our range of innovative products designed for your comfort and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#136ea1] hover:bg-gray-100 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              Shop Now
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#136ea1] px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};