import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Award, Plus, Minus } from "lucide-react";

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
    images: [
      "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="animate-fade-in">
              <div className="mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index ? 'border-[#136ea1]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in-up">
              <div className="mb-4">
                <span className="text-sm text-[#136ea1] font-medium">{product.category}</span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
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
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#136ea1]">₹{selectedSizeData?.price || product.price}</span>
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                    {product.discount}% OFF
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                        selectedSize === size.id
                          ? 'border-[#136ea1] bg-[#136ea1] text-white'
                          : 'border-gray-300 hover:border-[#136ea1]'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-[#136ea1]">₹{totalPrice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Link to="/order" className="flex-1">
                  <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </Link>
                <Button variant="outline" className="px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-[#136ea1]" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-[#136ea1]" />
                  <span>Quality Assured</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <RotateCcw className="w-4 h-4 text-[#136ea1]" />
                  <span>Easy Returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-[#136ea1]" />
                  <span>Certified Product</span>
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
      <section className="py-12">
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
      </section>

      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <Card
                key={relatedProduct.id}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#136ea1] transition-colors duration-300">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(relatedProduct.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-[#136ea1]">₹{relatedProduct.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{relatedProduct.originalPrice}</span>
                  </div>
                  <Link to={`/product/${relatedProduct.id}`}>
                    <Button className="w-full bg-[#136ea1] hover:bg-[#0f5a8a] transition-all duration-300 transform hover:scale-105">
                      View Product
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};