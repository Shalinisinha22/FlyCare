import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Award, Plus, Minus } from "lucide-react";
import p1 from "../assets/product/DF 02.png";
import p2 from "../assets/product/DF 09 1.png";
import p3 from "../assets/product/FD32.png";
import p4 from "../assets/product/FD35.png";

export const ProductDetail = (): JSX.Element => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('regular');

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: "Ultra Comfort Regular Pads",
    category: "Regular Flow",
    images: [p1, p2, p3, p4],
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    description: "Experience ultimate comfort and protection with our Ultra Comfort Regular Pads. Featuring advanced Gel Lock Technology, these pads provide up to 12 hours of reliable protection while maintaining exceptional comfort throughout your day.",
    features: [
      "12-hour protection with Gel Lock Technology",
      "Ultra-soft surface for maximum comfort",
      "Breathable back sheet prevents moisture buildup",
      "Flexible wings for secure fit",
      "Dermatologically tested and hypoallergenic",
      "Made with premium cotton-soft materials"
    ],
    specifications: {
      "Length": "240mm",
      "Width": "80mm",
      "Absorption": "Up to 12 hours",
      "Material": "Cotton-soft top sheet",
      "Wings": "Flexible adhesive wings",
      "Pack Size": "10 pads per pack"
    },
    sizes: [
      { id: 'regular', name: 'Regular', price: 299 },
      { id: 'large', name: 'Large', price: 329 },
      { id: 'xl', name: 'Extra Large', price: 359 }
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Heavy Flow Protection",
      image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 349,
      originalPrice: 449,
      rating: 4.7
    },
    {
      id: 3,
      name: "Overnight Protection",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 399,
      originalPrice: 499,
      rating: 4.9
    },
    {
      id: 4,
      name: "Panty Liners",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 199,
      originalPrice: 249,
      rating: 4.6
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent product! Very comfortable and provides great protection throughout the day. The gel lock technology really works.",
      verified: true
    },
    {
      id: 2,
      name: "Anjali Patel",
      rating: 4,
      date: "2024-01-10",
      comment: "Good quality pads. Soft and comfortable. Would recommend to others.",
      verified: true
    },
    {
      id: 3,
      name: "Meera Singh",
      rating: 5,
      date: "2024-01-08",
      comment: "Best pads I've used! No leakage and very comfortable. Will definitely buy again.",
      verified: true
    }
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };
  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const selectedSizeData = product.sizes.find(size => size.id === selectedSize);
  const totalPrice = (selectedSizeData?.price || product.price) * quantity;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#136ea1]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/sanitary-pads" className="hover:text-[#136ea1]">Sanitary Pads</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Product Image + Thumbnails */}
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full max-w-md h-80 object-contain rounded-xl shadow-lg bg-white border"
                />
              </div>
              <div className="flex gap-3 mt-6 w-full justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${selectedImage === idx ? 'border-[#136ea1]' : 'border-gray-200 hover:border-gray-300'}`}
                    style={{ width: 90, height: 60 }}
                  >
                    <img src={img} alt={product.name + ' ' + (idx + 1)} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>
            {/* Right: Product Info */}
            <div className="flex flex-col gap-6">
              <span className="text-base font-medium text-[#136ea1]">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-600 text-base">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl font-bold text-[#136ea1]">₹{product.price}</span>
                <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-base font-semibold">{product.discount}% OFF</span>
              </div>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">{product.description}</p>
              <Link to={`/quotation/${product.id}`} className="block w-full">
                <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] text-white py-3 rounded-lg text-lg font-semibold shadow-md">
                  Get a Quotation
                </Button>
              </Link>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-base text-gray-700">
                  <Truck className="w-5 h-5 text-[#136ea1]" />
                  Free Delivery
                </div>
                <div className="flex items-center gap-2 text-base text-gray-700">
                  <Shield className="w-5 h-5 text-[#136ea1]" />
                  Quality Assured
                </div>
                <div className="flex items-center gap-2 text-base text-gray-700">
                  <RotateCcw className="w-5 h-5 text-[#136ea1]" />
                  Easy Returns
                </div>
                <div className="flex items-center gap-2 text-base text-gray-700">
                  <Award className="w-5 h-5 text-[#136ea1]" />
                  Certified Product
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#136ea1] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {/* <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-[#136ea1] mb-2">{product.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on {product.reviews} reviews</p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Related Products */}
      {/* --- Featured Collection Section --- */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((itemId, idx) => {
              const featured = {
                id: itemId,
                name: `FlyCare Product ${itemId}`,
                images: [p1, p2, p3, p4],
                price: 249 + idx * 50,
                originalPrice: 299 + idx * 50,
                discount: `${Math.round(((299 + idx * 50 - (249 + idx * 50)) / (299 + idx * 50)) * 100)}% OFF`,
                rating: 4.5 + 0.1 * idx,
                reviews: 100 + idx * 50,
              };
              const [imgIdx, setImgIdx] = React.useState(0);
              return (
                <Link key={featured.id} to={`/product/${featured.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                          alt={featured.name}
                          src={featured.images[imgIdx]}
                        />
                        {/* Carousel Arrows */}
                        <button
                          onClick={e => { e.preventDefault(); setImgIdx((imgIdx - 1 + featured.images.length) % featured.images.length); }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow z-10"
                          style={{ touchAction: 'manipulation' }}
                        >
                          <svg className="w-4 h-4 text-[#136ea1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                          onClick={e => { e.preventDefault(); setImgIdx((imgIdx + 1) % featured.images.length); }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow z-10"
                          style={{ touchAction: 'manipulation' }}
                        >
                          <svg className="w-4 h-4 text-[#136ea1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>
                        {/* Indicators */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                          {featured.images.map((_, i) => (
                            <span
                              key={i}
                              className={`w-2 h-2 rounded-full ${i === imgIdx ? 'bg-[#136ea1]' : 'bg-white border border-[#136ea1]'}`}
                            />
                          ))}
                        </div>
                        {/* Discount Badge */}
                        <div className="absolute top-3 left-3 z-10 bg-[#136ea1] text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {featured.discount}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-[#136ea1] transition-colors">
                          {featured.name}
                        </h3>
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(featured.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({featured.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-[#136ea1]">₹{featured.price}</span>
                            <span className="text-sm text-gray-500 line-through">₹{featured.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};