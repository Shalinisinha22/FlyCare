import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Award, Users, Shield, Star } from "lucide-react";

export const BrandPage = (): JSX.Element => {
  const brands = [
    {
      id: 1,
      name: "FlyCare Premium",
      tagline: "Premium Comfort, Premium Care",
      description: "Our flagship brand offering the highest quality sanitary pads with advanced Gel Lock Technology for ultimate comfort and protection.",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Gel Lock Technology", "12-hour protection", "Ultra-soft surface", "Dermatologically tested"],
      products: ["Ultra Comfort Pads", "Heavy Flow Protection", "Overnight Pads"],
      rating: 4.8,
      customers: "5M+",
      established: "2015"
    },
    {
      id: 2,
      name: "Comfort Plus",
      tagline: "Everyday Comfort, Everyday Care",
      description: "Designed for daily comfort with reliable protection. Perfect for women who need dependable care without compromising on comfort.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Breathable material", "Flexible wings", "Odor control", "Soft cotton surface"],
      products: ["Daily Comfort Pads", "Regular Flow Pads", "Panty Liners"],
      rating: 4.6,
      customers: "3M+",
      established: "2010"
    },
    {
      id: 3,
      name: "Pure Care",
      tagline: "Natural Care, Pure Protection",
      description: "Made with natural and organic materials for sensitive skin. Our eco-friendly approach ensures both comfort and environmental responsibility.",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Organic cotton", "Chemical-free", "Biodegradable", "Hypoallergenic"],
      products: ["Organic Cotton Pads", "Sensitive Skin Care", "Natural Liners"],
      rating: 4.7,
      customers: "2M+",
      established: "2018"
    },
    {
      id: 4,
      name: "Baby Soft",
      tagline: "Gentle Care for Little Ones",
      description: "Specially designed baby diapers and care products that provide gentle protection for your little one's delicate skin.",
      image: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Extra gentle", "Leak-proof design", "Soft materials", "All-day comfort"],
      products: ["Premium Diapers", "Newborn Care", "Toddler Diapers"],
      rating: 4.9,
      customers: "4M+",
      established: "2012"
    },
    {
      id: 5,
      name: "Ultra Protection",
      tagline: "Maximum Protection, Maximum Confidence",
      description: "For heavy flow days and active lifestyles. Engineered for maximum absorption and leak-proof protection when you need it most.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Maximum absorption", "Extra-long coverage", "Secure fit", "Active lifestyle"],
      products: ["Heavy Flow Pads", "Sports Protection", "Overnight Ultra"],
      rating: 4.8,
      customers: "2.5M+",
      established: "2016"
    }
  ];

  const brandStats = [
    { icon: Award, value: "35+", label: "Years of Excellence" },
    { icon: Users, value: "15M+", label: "Happy Customers" },
    { icon: Shield, value: "100%", label: "Quality Assured" },
    { icon: Star, value: "4.8", label: "Average Rating" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-[#136ea1] to-[#0f5a8a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Brands
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Discover our signature collection of brands, each designed to meet specific needs 
            and redefine excellence in feminine hygiene and baby care.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">5 Premium Brands</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">15M+ Customers</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">35+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {brandStats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#136ea1] text-white rounded-full mb-4 group-hover:bg-[#0f5a8a] transition-colors duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Brand Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each brand in our portfolio is carefully crafted to serve specific needs, 
              ensuring every woman finds the perfect solution for her lifestyle.
            </p>
          </div>

          <div className="space-y-16">
            {brands.map((brand, index) => (
              <Card
                key={brand.id}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                    <div className="absolute bottom-4 left-4 lg:hidden">
                      <div className="text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        Est. {brand.established}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{brand.name}</h3>
                      <div className="hidden lg:block text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        Est. {brand.established}
                      </div>
                    </div>
                    
                    <p className="text-lg text-[#136ea1] font-medium mb-4">{brand.tagline}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{brand.description}</p>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{brand.rating}</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-5 h-5 text-[#136ea1]" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{brand.customers}</div>
                        <div className="text-sm text-gray-600">Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{brand.products.length}</div>
                        <div className="text-sm text-gray-600">Products</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {brand.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-[#136ea1] rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Popular Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.products.map((product, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link to="/sanitary-pads" className="flex-1">
                        <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] text-white transform hover:scale-105 transition-all duration-300">
                          View Products
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" className="border-[#136ea1] text-[#136ea1] hover:bg-[#136ea1] hover:text-white transform hover:scale-105 transition-all duration-300">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Brand Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every brand under the FlyCare umbrella is built on our core values of quality, 
              innovation, and women's empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Every product undergoes rigorous testing to ensure the highest standards of safety and effectiveness.",
                icon: Shield,
                color: "bg-blue-500"
              },
              {
                title: "Innovation First",
                description: "We continuously invest in research and development to bring cutting-edge solutions to market.",
                icon: Award,
                color: "bg-green-500"
              },
              {
                title: "Customer Focused",
                description: "Our brands are designed based on real customer feedback and evolving needs of modern women.",
                icon: Users,
                color: "bg-purple-500"
              }
            ].map((promise, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${promise.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <promise.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{promise.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{promise.description}</p>
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
            Ready to Experience Our Brands?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover the perfect products for your needs from our comprehensive brand portfolio. 
            Each brand is designed with your comfort and confidence in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sanitary-pads">
              <Button className="bg-white text-[#136ea1] hover:bg-gray-100 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                Shop All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-[#136ea1] px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};