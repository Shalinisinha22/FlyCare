import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Play, ArrowRight, Star, Users, Award, Shield, ShoppingCart, Eye } from "lucide-react";
import product from "../../assets/FD"; 
export const HomePage = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Ultra Comfort Pads",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹299",
      originalPrice: "₹399",
      discount: "25% OFF",
      rating: 4.8,
      reviews: 1250,
      features: ["12-hour protection", "Gel Lock Technology", "Ultra-soft surface"]
    },
    {
      id: 2,
      name: "Premium Baby Diapers",
      image: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹599",
      originalPrice: "₹799",
      discount: "25% OFF",
      rating: 4.9,
      reviews: 890,
      features: ["All-day comfort", "Leak-proof design", "Gentle on skin"]
    },
    {
      id: 3,
      name: "Overnight Protection",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹349",
      originalPrice: "₹449",
      discount: "22% OFF",
      rating: 4.7,
      reviews: 2100,
      features: ["Extra-long coverage", "Superior absorption", "Odor control"]
    },
    {
      id: 4,
      name: "Daily Comfort Liners",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹199",
      originalPrice: "₹249",
      discount: "20% OFF",
      rating: 4.6,
      reviews: 750,
      features: ["Breathable material", "Flexible fit", "Natural cotton"]
    },
    {
      id: 5,
      name: "Sensitive Skin Care",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹399",
      originalPrice: "₹499",
      discount: "20% OFF",
      rating: 4.8,
      reviews: 650,
      features: ["Hypoallergenic", "Dermatologically tested", "Chemical-free"]
    },
    {
      id: 6,
      name: "Active Lifestyle Pads",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹329",
      originalPrice: "₹429",
      discount: "23% OFF",
      rating: 4.7,
      reviews: 980,
      features: ["Flexible wings", "Secure fit", "Movement-friendly"]
    }
  ];

  // Brand logos data
  const brands = [
    {
      id: 1,
      name: "FlyCare Premium",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Comfort Plus",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Pure Care",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Baby Soft",
      image: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Ultra Protection",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Tanvi Bhatnagar",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "FlyCare products have completely transformed my experience. The comfort and protection are unmatched, and I feel confident throughout the day.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "As a working mother, I need products I can trust. FlyCare delivers exceptional quality and reliability every single time.",
      rating: 5,
    },
    {
      id: 3,
      name: "Anjali Patel",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "The innovative technology and comfort level of these products is amazing. I recommend FlyCare to all my friends and family.",
      rating: 5,
    },
  ];

  // Stats data
  const stats = [
    { icon: Users, value: "10M+", label: "Happy Customers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Shield, value: "100%", label: "Quality Assured" },
    { icon: Star, value: "4.8", label: "Customer Rating" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#136ea1]/90 to-[#136ea1]/70 z-10"></div>
        <img
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          alt="Hero banner"
          src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Born to Fly with
              <span className="block text-yellow-300">Comfort & Care</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover our certified and innovative sanitary products with advanced Gel Lock Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/sanitary-pads">
                <Button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-yellow-200/50">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/order">
                <Button className="group bg-[#136ea1] hover:bg-[#0f5a8a] text-white font-bold px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-200/50">
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Featured Products Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#136ea1] mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover Our Best-Selling and Most Loved Products - Certified and Innovative Solutions for Your Comfort
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.discount}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Link to={`/product/${product.id}`}>
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    {/* <Button size="sm" className="bg-[#136ea1] hover:bg-[#0f5a8a]">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                    </Button> */}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#136ea1] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-[#136ea1]">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-[#136ea1] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to="/order">
                    <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] transition-all duration-300 transform hover:scale-105">
                    Get Quotation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/sanitary-pads">
              <Button variant="outline" className="border-[#136ea1] text-[#136ea1] hover:bg-[#136ea1] hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#136ea1] mb-4">
              Our Product Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive Range of Personal Care Products for Every Need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Sanitary Pads"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Sanitary Pads</h3>
                <p className="text-white/90 max-w-sm mb-4">
                  Experience Ultimate Comfort and Protection with Our Premium Sanitary Pads.
                </p>
                <Link to="/sanitary-pads">
                  <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 transition-all duration-300">
                    Explore Range
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                alt="Baby Diapers"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-white text-right">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Baby Diapers</h3>
                <p className="text-white/90 max-w-sm mb-4">
                  Wrap Your Little One in Comfort and Care with Our Gentle Baby Diapers.
                </p>
                <Link to="/sanitary-pads">
                  <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 transition-all duration-300">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#136ea1] mb-4">
              See Our Products in Action
            </h2>
            <p className="text-gray-600 text-lg">
              Watch how our innovative technology provides superior comfort and protection
            </p>
          </div>
          
          <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Video thumbnail"
              src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group/play relative"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                  <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-white/50 animate-ping"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#136ea1] mb-4">
              What People Say About Us
            </h2>
            <p className="text-gray-600 text-lg">
              Real experiences from our satisfied customers
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
                <div className="flex-shrink-0">
                  <img
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg ring-4 ring-white"
                    alt={testimonials[currentTestimonial].name}
                    src={testimonials[currentTestimonial].image}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#136ea1] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-12 lg:py-20 bg-[#136ea1] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#136ea1] to-[#0f5a8a]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Brands
          </h2>
          <p className="text-white/90 text-lg mb-12">
            Our Signature Collection of Brands, Redefining Excellence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className="group bg-white rounded-xl p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-16 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm font-medium text-gray-700 group-hover:text-[#136ea1] transition-colors duration-300">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>

          <Link to="/brands">
            <Button className="bg-white text-[#136ea1] hover:bg-gray-100 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              View All Brands
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Become a Distributor */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#136ea1] mb-4">
                Become a Distributor
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Join our growing network of distributors and be part of our mission to provide quality healthcare products to communities everywhere.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2 text-[#136ea1]" />
                  Exclusive Territory Rights
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-[#136ea1]" />
                  Marketing Support
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link to="/contact">
                <Button className="bg-[#136ea1] hover:bg-[#0f5a8a] text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};