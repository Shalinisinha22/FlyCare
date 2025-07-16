import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Star, ShoppingCart, Eye, Filter, Search, Grid, List } from "lucide-react";

export const SanitaryPadSection = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'regular', name: 'Regular Flow', count: 8 },
    { id: 'heavy', name: 'Heavy Flow', count: 6 },
    { id: 'overnight', name: 'Overnight', count: 4 },
    { id: 'panty-liners', name: 'Panty Liners', count: 6 }
  ];

  const products = [
    {
      id: 1,
      name: "Ultra Comfort Regular Pads",
      category: "regular",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 1250,
      features: ["12-hour protection", "Gel Lock Technology", "Ultra-soft surface", "Breathable"],
      description: "Perfect for regular flow days with advanced absorption technology.",
      inStock: true,
      bestseller: true
    },
    {
      id: 2,
      name: "Heavy Flow Protection Pads",
      category: "heavy",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 349,
      originalPrice: 449,
      discount: 22,
      rating: 4.7,
      reviews: 2100,
      features: ["Extra-long coverage", "Superior absorption", "Odor control", "Leak-proof"],
      description: "Designed for heavy flow days with maximum protection and comfort.",
      inStock: true,
      bestseller: false
    },
    {
      id: 3,
      name: "Overnight Protection Pads",
      category: "overnight",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 399,
      originalPrice: 499,
      discount: 20,
      rating: 4.9,
      reviews: 890,
      features: ["Extra-long length", "All-night protection", "Comfortable wings", "Anti-leak"],
      description: "Sleep peacefully with our longest and most absorbent pads.",
      inStock: true,
      bestseller: true
    },
    {
      id: 4,
      name: "Daily Comfort Panty Liners",
      category: "panty-liners",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 199,
      originalPrice: 249,
      discount: 20,
      rating: 4.6,
      reviews: 750,
      features: ["Breathable material", "Flexible fit", "Natural cotton", "Thin design"],
      description: "Perfect for daily freshness and light protection.",
      inStock: true,
      bestseller: false
    },
    {
      id: 5,
      name: "Sensitive Skin Care Pads",
      category: "regular",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 429,
      originalPrice: 529,
      discount: 19,
      rating: 4.8,
      reviews: 650,
      features: ["Hypoallergenic", "Dermatologically tested", "Chemical-free", "Organic cotton"],
      description: "Specially designed for sensitive skin with natural materials.",
      inStock: false,
      bestseller: false
    },
    {
      id: 6,
      name: "Active Lifestyle Pads",
      category: "regular",
      image: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 329,
      originalPrice: 429,
      discount: 23,
      rating: 4.7,
      reviews: 980,
      features: ["Flexible wings", "Secure fit", "Movement-friendly", "Quick-dry"],
      description: "Stay active and confident with our flexible protection.",
      inStock: true,
      bestseller: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-[#136ea1] to-[#0f5a8a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Sanitary Pads Collection
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover our complete range of sanitary pads designed for every flow, 
                every lifestyle, and every woman's unique needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Gel Lock Technology</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>12-Hour Protection</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Dermatologically Tested</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sanitary Pads"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#136ea1] focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#136ea1] focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#136ea1] focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#136ea1] text-white' : 'bg-white text-gray-600'} transition-colors duration-200`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#136ea1] text-white' : 'bg-white text-gray-600'} transition-colors duration-200`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
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
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.bestseller && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Bestseller
                        </span>
                      )}
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {product.discount}% OFF
                      </span>
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Link to={`/product/${product.id}`}>
                        <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </Link>
                      {product.inStock && (
                        <Button size="sm" className="bg-[#136ea1] hover:bg-[#0f5a8a]">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Cart
                        </Button>
                      )}
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
                      <span className="text-lg font-bold text-[#136ea1]">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <Link to="/order">
                      <Button 
                        className={`w-full transition-all duration-300 transform hover:scale-105 ${
                          product.inStock 
                            ? 'bg-[#136ea1] hover:bg-[#0f5a8a]' 
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Order Now' : 'Out of Stock'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="hover:shadow-xl transition-all duration-500 border-0 shadow-md animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        {product.bestseller && (
                          <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
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
                              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                            </div>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {product.features.map((feature, idx) => (
                                <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-center md:text-right">
                            <div className="flex items-center gap-2 mb-3 justify-center md:justify-end">
                              <span className="text-2xl font-bold text-[#136ea1]">₹{product.price}</span>
                              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                            </div>
                            <div className="text-green-600 font-medium mb-4">
                              Save ₹{product.originalPrice - product.price} ({product.discount}% OFF)
                            </div>
                            <div className="flex gap-2">
                              <Link to={`/product/${product.id}`}>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </Button>
                              </Link>
                              <Link to="/order">
                                <Button 
                                  size="sm"
                                  className={product.inStock ? 'bg-[#136ea1] hover:bg-[#0f5a8a]' : 'bg-gray-400 cursor-not-allowed'}
                                  disabled={!product.inStock}
                                >
                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                  {product.inStock ? 'Order Now' : 'Out of Stock'}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FlyCare?</h2>
            <p className="text-gray-600 text-lg">Advanced features that make the difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gel Lock Technology",
                description: "Advanced absorption technology that locks liquid instantly for up to 12 hours of protection.",
                image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Dermatologically Tested",
                description: "All products are tested by dermatologists to ensure they're safe for sensitive skin.",
                image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Eco-Friendly Materials",
                description: "Made with biodegradable materials and sustainable manufacturing processes.",
                image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};