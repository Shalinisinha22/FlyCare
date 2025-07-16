import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Calendar, User, Tag, Search, ArrowRight, Clock, Eye } from "lucide-react";

export const BlogPage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "health", name: "Health & Wellness", count: 5 },
    { id: "tips", name: "Tips & Advice", count: 4 },
    { id: "lifestyle", name: "Lifestyle", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Menstrual Health: A Complete Guide",
      excerpt: "Everything you need to know about menstrual health, from cycle tracking to managing symptoms effectively.",
      content: "Menstrual health is a crucial aspect of women's overall well-being...",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "health",
      author: "Dr. Priya Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "5 Tips for Choosing the Right Sanitary Pad",
      excerpt: "Learn how to select the perfect sanitary pad for your needs with our expert recommendations.",
      content: "Choosing the right sanitary pad can make a significant difference...",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "tips",
      author: "Anjali Patel",
      date: "2024-01-12",
      readTime: "5 min read",
      views: 890,
      featured: false
    },
    {
      id: 3,
      title: "Breaking Taboos: Talking About Periods Openly",
      excerpt: "How to create open conversations about menstruation and break the stigma surrounding periods.",
      content: "Period stigma affects millions of women worldwide...",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "lifestyle",
      author: "Meera Singh",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 650,
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Period Products: Eco-Friendly Options",
      excerpt: "Explore environmentally conscious menstrual products and their benefits for both you and the planet.",
      content: "Sustainability in menstrual care is becoming increasingly important...",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "lifestyle",
      author: "Kavya Reddy",
      date: "2024-01-08",
      readTime: "7 min read",
      views: 720,
      featured: false
    },
    {
      id: 5,
      title: "Managing Period Pain: Natural Remedies That Work",
      excerpt: "Discover effective natural remedies and lifestyle changes to help manage menstrual discomfort.",
      content: "Period pain affects many women, but there are natural ways to find relief...",
      image: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "health",
      author: "Dr. Sunita Gupta",
      date: "2024-01-05",
      readTime: "9 min read",
      views: 1100,
      featured: false
    },
    {
      id: 6,
      title: "Teenage Periods: A Parent's Guide",
      excerpt: "Essential information for parents to help their teenagers navigate their first periods with confidence.",
      content: "Supporting your teenager through their first periods is crucial...",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "tips",
      author: "Ritu Sharma",
      date: "2024-01-03",
      readTime: "10 min read",
      views: 980,
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-[#136ea1] to-[#0f5a8a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            FlyCare Blog
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Your trusted source for women's health, wellness tips, and everything 
            you need to know about menstrual care.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Health & Wellness</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Expert Advice</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">Lifestyle Tips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#136ea1] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#136ea1] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#136ea1] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-[#136ea1] group-hover:text-white transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === "all" ? "All Articles" : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-xl transition-all duration-500 border-0 shadow-md animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className="capitalize">{post.category}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} views</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[#136ea1] transition-colors duration-300 cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                            <span>•</span>
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <Button variant="outline" size="sm" className="hover:bg-[#136ea1] hover:text-white transition-all duration-300">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button className="bg-[#136ea1] hover:bg-[#0f5a8a] text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Recent Posts */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex gap-3 group cursor-pointer">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#136ea1] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-[#136ea1] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Subscribe to our newsletter for the latest health tips and wellness advice.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                    />
                    <Button className="w-full bg-white text-[#136ea1] hover:bg-gray-100 transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Menstrual Health",
                      "Period Care",
                      "Women's Wellness",
                      "Health Tips",
                      "Lifestyle",
                      "Natural Remedies",
                      "Teen Health",
                      "Sustainability"
                    ].map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#136ea1] hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};