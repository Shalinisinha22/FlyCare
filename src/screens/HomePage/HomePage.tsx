import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Play, Users, Award, Shield, ShoppingCart, Eye } from "lucide-react";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Calendar, User } from 'lucide-react';
import p1 from "../../assets/product/DF 02.png";

import p2 from "../../assets/product/DF 09 1.png"

import p3 from "../../assets/product/FD32.png"

import p4 from "../../assets/product/FD35.png"
import Hb1 from "../../assets/banner/Hb1.png";
import Hb2 from "../../assets/banner/Hb2.png";

import mb1 from "../../assets/banner/Rectangle 11.png";
import mb2 from "../../assets/banner/Rectangle 12.png";

export const HomePage = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Carousel banner state
  const bannerImages = [Hb1, Hb2];
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'FlyCare Ultra Soft Pads',
      price: '₹299',
      originalPrice: '₹399',
      rating: 4.8,
      reviews: 245,
      images: [p1, p2, p3, p4],
      currentImageIndex: 0,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'FlyCare Night Protection',
      price: '₹349',
      originalPrice: '₹449',
      rating: 4.9,
      reviews: 189,
      images: [p1, p2, p3, p4],
      currentImageIndex: 0,
      badge: 'New'
    },
    {
      id: 3,
      name: 'FlyCare Daily Comfort',
      price: '₹199',
      originalPrice: '₹249',
      rating: 4.7,
      reviews: 312,
      images: [p1, p2, p3, p4],
      currentImageIndex: 0,
      badge: 'Popular'
    },
    {
      id: 4,
      name: 'FlyCare Organic Cotton',
      price: '₹399',
      originalPrice: '₹499',
      rating: 4.9,
      reviews: 156,
      images: [p1, p2, p3, p4],
      currentImageIndex: 0,
      badge: 'Eco-Friendly'
    }
  ];


  // Hot Selling Products
  const hotSellingProducts = [
    {
      id: 5,
      name: 'FlyCare XL Pads',
      price: '₹279',
      originalPrice: '₹329',
      rating: 4.6,
      reviews: 198,
      images: [p1, p2, p3, p4],
      discount: '15% OFF'
    },
    {
      id: 6,
      name: 'FlyCare Panty Liners',
      price: '₹149',
      originalPrice: '₹179',
      rating: 4.5,
      reviews: 267,
      images: [p1, p2, p3, p4],
      discount: '17% OFF'
    },
    {
      id: 7,
      name: 'FlyCare Heavy Flow',
      price: '₹329',
      originalPrice: '₹399',
      rating: 4.8,
      reviews: 143,
      images: [p1, p2, p3, p4],
      discount: '18% OFF'
    },
    {
      id: 7,
      name: 'FlyCare Heavy Flow',
      price: '₹329',
      originalPrice: '₹399',
      rating: 4.8,
      reviews: 143,
      images: [p1, p2, p3, p4],
      discount: '18% OFF'
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


  // Blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Menstrual Health: A Complete Guide',
      excerpt: 'Learn about menstrual health, hygiene practices, and how to choose the right products for your needs.',
      image: 'https://images.pexels.com/photos/6663588/pexels-photo-6663588.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Health',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Sustainable Period Products: Making Eco-Friendly Choices',
      excerpt: 'Discover how sustainable period products can benefit both your health and the environment.',
      image: 'https://images.pexels.com/photos/6663589/pexels-photo-6663589.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emma Green',
      date: '2024-01-12',
      category: 'Sustainability',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Breaking Period Taboos: Empowering Women Through Education',
      excerpt: 'How education and open conversations can help break the stigma around menstruation.',
      image: 'https://images.pexels.com/photos/6663590/pexels-photo-6663590.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Priya Sharma',
      date: '2024-01-10',
      category: 'Education',
      readTime: '6 min read'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add state to track current image index for each product in both featured and hot selling products
  const [featuredImageIndexes, setFeaturedImageIndexes] = useState<{ [id: number]: number }>({});
  const [hotImageIndexes, setHotImageIndexes] = useState<{ [id: number]: number }>({});

  const handleNextFeaturedImage = (id: number, images: string[]) => {
    setFeaturedImageIndexes(prev => ({
      ...prev,
      [id]: (prev[id] === undefined ? 1 : (prev[id] + 1) % images.length)
    }));
  };
  const handlePrevFeaturedImage = (id: number, images: string[]) => {
    setFeaturedImageIndexes(prev => ({
      ...prev,
      [id]: (prev[id] === undefined ? images.length - 1 : (prev[id] - 1 + images.length) % images.length)
    }));
  };
  const handleNextHotImage = (id: number, images: string[]) => {
    setHotImageIndexes(prev => ({
      ...prev,
      [id]: (prev[id] === undefined ? 1 : (prev[id] + 1) % images.length)
    }));
  };
  const handlePrevHotImage = (id: number, images: string[]) => {
    setHotImageIndexes(prev => ({
      ...prev,
      [id]: (prev[id] === undefined ? images.length - 1 : (prev[id] - 1 + images.length) % images.length)
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const [productImages, setProductImages] = useState(featuredProducts);

  return (
    <div className="bg-white w-full">
      {/* Carousel Banner */}
      <section className="relative h-[30vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <div className="w-full h-full relative">
          {bannerImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Banner ${idx + 1}`}
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${idx === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ transitionProperty: 'opacity' }}
            />
          ))}
        </div>
        {/* Navigation */}
        <button
          onClick={prevBanner}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 md:p-2 shadow-lg z-20"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronLeft className="w-7 h-7 md:w-6 md:h-6 text-[#136ea1]" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 md:p-2 shadow-lg z-20"
          style={{ touchAction: 'manipulation' }}
        >
          <ChevronRight className="w-7 h-7 md:w-6 md:h-6 text-[#136ea1]" />
        </button>
        {/* Indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {bannerImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${idx === currentBanner ? 'text-[#136ea1]' : 'bg-white border border-blue-600'}`}
            />
          ))}
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD600] text-white rounded-full mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
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
      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#136ea1] mb-4">
            Our Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover Our Certified and Innovative Sanitary Pads, Napkins & Liners - Born to Fly with Gel Lock Technology!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productImages.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {product.badge && (
                      <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}

<div className="w-full flex justify-center align-center">
  <img
                    className="w-60 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                    alt={product.name}
                    src={product.images[featuredImageIndexes[product.id] ?? 0]}
                  />
</div>
                

                  {/* Image Navigation */}
                  <button
                    onClick={() => handlePrevFeaturedImage(product.id, product.images)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleNextFeaturedImage(product.id, product.images)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {product.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full ${imgIndex === featuredImageIndexes[product.id] ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/90 rounded-lg px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{product.rating}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#136ea1] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-[#136ea1]">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  <Link to={`/quotation/${product.id}`}>
                    <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] transform hover:scale-105 transition-all duration-200">
                      Get a Quotation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
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
                src={mb1}
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
                src={mb2}
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

      {/* Hot Selling Products */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#136ea1] mb-4">
            Hot Selling Products
          </h2>
          <p className="text-gray-600">
            Explore Our Trendsetting and In-Demand Hot Selling Products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {hotSellingProducts.map((product, index) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.discount}
                    </div>

               
<div className="w-full flex justify-center align-center">
  <img
                    className="w-60 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                    alt={product.name}
                    src={product.images[featuredImageIndexes[product.id] ?? 0]}
                  />
</div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/90 rounded-lg px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{product.rating}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#136ea1] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-[#136ea1]">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  <Link to={`/quotation/${product.id}`}>
                    <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] transform hover:scale-105 transition-all duration-200">
                      Get a Quotation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
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


      {/* Blog Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#136ea1] mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600">
            Stay informed with our latest articles on health, wellness, and product updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="group hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    alt={post.title}
                    src={post.image}
                  />
                  <div className="absolute top-3 left-3 bg-[#136ea1] text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#136ea1] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="border-[#136ea1] text-[#136ea1] hover:bg-[#136ea1] hover:text-white transition-colors font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="bg-[#136ea1] hover:bg-[#0f5a8a] text-white px-8 py-3 font-semibold">
              View All Articles
            </Button>
          </Link>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
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