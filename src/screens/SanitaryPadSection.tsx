import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Search, Filter, Grid, List, Star, ShoppingCart, X } from 'lucide-react';
import p1 from "../assets/product/DF 02.png";
import p2 from "../assets/product/DF 09 1.png";
import p3 from "../assets/product/FD32.png";
import p4 from "../assets/product/FD35.png";
export const SanitaryPadSection = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Add state to track current image index for each product
  const [productImageIndexes, setProductImageIndexes] = useState<{ [id: number]: number }>({});

  // Filter options
  const brands = ['FlyCare', 'Petals', 'Definer', 'Swift'];
  const types = ['Ultra Thin', 'Regular', 'Heavy Flow', 'Night Protection', 'Panty Liners'];
  const sizes = ['Small', 'Medium', 'Large', 'XL'];

  const products = [
    {
      id: 1,
      name: 'FlyCare Ultra Soft Pads',
      brand: 'FlyCare',
      type: 'Ultra Thin',
      size: 'Medium',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1250,
      images: [p1, p2, p3, p4],
      description: 'Ultra-soft cotton surface with superior absorption for all-day comfort and protection.'
    },
    {
      id: 2,
      name: 'FlyCare Night Protection',
      brand: 'FlyCare',
      type: 'Night Protection',
      size: 'Large',
      price: 349,
      originalPrice: 449,
      rating: 4.9,
      reviews: 980,
      images: [p1, p2, p3, p4],
      description: 'Extra-long design with enhanced absorption for worry-free overnight protection.'
    },
    {
      id: 3,
      name: 'FlyCare Daily Comfort',
      brand: 'FlyCare',
      type: 'Regular',
      size: 'Medium',
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 2100,
      images: [p1, p2, p3, p4],
      description: 'Perfect for daily use with breathable materials and reliable protection.'
    },
    {
      id: 4,
      name: 'FlyCare Organic Cotton',
      brand: 'FlyCare',
      type: 'Ultra Thin',
      size: 'Small',
      price: 399,
      originalPrice: 499,
      rating: 4.9,
      reviews: 750,
      images: [p1, p2, p3, p4],
      description: '100% organic cotton surface, hypoallergenic and gentle on sensitive skin.'
    },
    {
      id: 5,
      name: 'Petals Heavy Flow',
      brand: 'Petals',
      type: 'Heavy Flow',
      size: 'Large',
      price: 329,
      originalPrice: 399,
      rating: 4.6,
      reviews: 890,
      images: [p1, p2, p3, p4],
      description: 'Maximum absorption capacity for heavy flow days with leak-proof protection.'
    },
    {
      id: 6,
      name: 'Definer Panty Liners',
      brand: 'Definer',
      type: 'Panty Liners',
      size: 'Small',
      price: 149,
      originalPrice: 179,
      rating: 4.5,
      reviews: 1500,
      images: [p1, p2, p3, p4],
      description: 'Ultra-thin panty liners for daily freshness and light protection.'
    }
  ];

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleNextImage = (id: number, images: string[]) => {
    setProductImageIndexes(prev => ({
      ...prev,
      [id]: (prev[id] === undefined ? 1 : (prev[id] + 1) % images.length)
    }));
  };
  const handlePrevImage = (id: number, images: string[]) => {
    setProductImageIndexes(prev => ({
      ...prev,
      [id]: (prev[id] === undefined ? images.length - 1 : (prev[id] - 1 + images.length) % images.length)
    }));
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedTypes([]);
    setSelectedSizes([]);
    setPriceRange([0, 1000]);
    setSearchTerm('');
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesBrand && matchesType && matchesSize && matchesPrice;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sanitary Pads</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality sanitary pads for your comfort and protection. Choose from our wide range of trusted brands.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearAllFilters}
                className="text-[#136ea1] hover:text-[#0f5a8a]"
              >
                Clear All
              </Button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#136ea1] focus:border-transparent"
                />
              </div>
            </div>

            {/* Brands Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Brands</label>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="rounded border-gray-300 text-[#136ea1] focus:ring-[#136ea1]"
                    />
                    <span className="ml-2 text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Type</label>
              <div className="space-y-2">
                {types.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                      className="rounded border-gray-300 text-[#136ea1] focus:ring-[#136ea1]"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <label key={size} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      className="rounded border-gray-300 text-[#136ea1] focus:ring-[#136ea1]"
                    />
                    <span className="ml-2 text-sm text-gray-700">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedBrands.length > 0 || selectedTypes.length > 0 || selectedSizes.length > 0) && (
              <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Active Filters:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedBrands.map((brand) => (
                    <span key={brand} className="inline-flex items-center bg-[#136ea1] text-white px-2 py-1 rounded-full text-xs">
                      {brand}
                      <button onClick={() => handleBrandChange(brand)} className="ml-1">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {selectedTypes.map((type) => (
                    <span key={type} className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {type}
                      <button onClick={() => handleTypeChange(type)} className="ml-1">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  {selectedSizes.map((size) => (
                    <span key={size} className="inline-flex items-center bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                      {size}
                      <button onClick={() => handleSizeChange(size)} className="ml-1">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Mode and Results */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                
                <div className="flex items-center gap-4">
                  <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                    <option>Newest First</option>
                  </select>
                  
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'text-[#136ea1] text-white' : 'bg-white text-gray-600'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'text-[#136ea1] text-white' : 'bg-white text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearAllFilters} className="text-[#136ea1] hover:bg-[#0f5a8a]">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {filteredProducts.map((product, index) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    {viewMode === 'grid' ? (
                      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-t-lg ">
                            <div className='w-full flex justify-center items-center relative'>
                              <img
                                className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300"
                                alt={product.name}
                                src={product.images[productImageIndexes[product.id] ?? 0]}
                              />
                              {/* Left arrow */}
                              <button
                                onClick={() => handlePrevImage(product.id, product.images)}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow z-10"
                                style={{ touchAction: 'manipulation' }}
                              >
                                <svg className="w-4 h-4 text-[#136ea1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                              </button>
                              {/* Right arrow */}
                              <button
                                onClick={() => handleNextImage(product.id, product.images)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow z-10"
                                style={{ touchAction: 'manipulation' }}
                              >
                                <svg className="w-4 h-4 text-[#136ea1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                              </button>
                              {/* Indicators */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                                {product.images.map((_, idx) => (
                                  <span
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${idx === (productImageIndexes[product.id] ?? 0) ? 'bg-[#136ea1]' : 'bg-white border border-[#136ea1]'}`}
                                  />
                                ))}
                              </div>
                            </div>
                           
                            <div className="absolute top-3 left-3 bg-[#136ea1] text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                            </div>
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
                                <span className="text-xl font-bold text-[#136ea1]">₹{product.price}</span>
                                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] text-white">
                                Get a Quotation
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="relative w-32 h-32 flex-shrink-0">
                              <img
                                className="w-full h-full object-cover rounded-lg"
                                alt={product.name}
                                src={product.images[productImageIndexes[product.id] ?? 0]}
                              />
                              <div className="absolute top-2 left-2 bg-[#136ea1] text-white px-1 py-0.5 rounded text-xs font-semibold">
                                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                              </div>
                              {/* Left arrow */}
                              <button
                                onClick={() => handlePrevImage(product.id, product.images)}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow z-10"
                                style={{ touchAction: 'manipulation' }}
                              >
                                <svg className="w-4 h-4 text-[#136ea1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                              </button>
                              {/* Right arrow */}
                              <button
                                onClick={() => handleNextImage(product.id, product.images)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow z-10"
                                style={{ touchAction: 'manipulation' }}
                              >
                                <svg className="w-4 h-4 text-[#136ea1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                              </button>
                              {/* Indicators */}
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                                {product.images.map((_, idx) => (
                                  <span
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${idx === (productImageIndexes[product.id] ?? 0) ? 'bg-[#136ea1]' : 'bg-white border border-[#136ea1]'}`}
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="font-semibold text-xl mb-2 hover:text-[#136ea1] transition-colors">
                                {product.name}
                              </h3>
                              
                              <div className="flex items-center mb-3">
                                <div className="flex items-center mr-3">
                                  {renderStars(product.rating)}
                                </div>
                                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                              </div>

                              <p className="text-gray-600 mb-4">{product.description}</p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl font-bold text-[#136ea1]">₹{product.price}</span>
                                  <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                                </div>

                                <div className="flex gap-3">
                                  <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] text-white">
                                    Get a Quotation
                                  </Button>
                                  {/* <Button className="text-[#136ea1] hover:bg-[#0f5a8a]">
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                  </Button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};