import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react';
import p1 from "../assets/product/DF 02.png";
import p2 from "../assets/product/DF 09 1.png";
import p3 from "../assets/product/FD32.png";
import p4 from "../assets/product/FD35.png";

export const QuotationForm = (): JSX.Element => {
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    brand: '',
    orderQuantity: '',
    message: ''
  });

  // Mock product data
  const product = {
    id: productId,
    name: 'FlyCare Ultra Soft Pads',
    image: p1,
    price: '₹299',
    originalPrice: '₹399',
    rating: 4.8,
    reviews: 245,
    description: 'Premium quality sanitary pads with advanced absorption technology and ultra-soft cotton surface for maximum comfort.',
    features: [
      'Ultra-soft cotton surface',
      'Advanced absorption technology',
      '12-hour protection',
      'Leak-proof design',
      'Dermatologically tested'
    ]
  };

  const brands = ['FlyCare', 'Petals', 'Definer', 'Swift'];
  const quantities = ['100 pieces', '500 pieces', '1000 pieces', '5000 pieces', '10000+ pieces'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quotation request:', formData);
    alert('Quotation request submitted successfully! We will contact you soon.');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Get a Quotation</h1>
          <p className="text-gray-600 mt-2">Fill out the form below to get a customized quote for your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Information */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    className="w-full max-w-xs mx-auto h-64 object-contain rounded-lg border shadow-lg bg-white"
                    alt={product.name}
                    src={product.image}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-3">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-gray-600">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      25% OFF
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div>
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle>Related Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                      <img
                        className="w-full h-24 object-cover rounded mb-2"
                        alt={`Product ${item}`}
                        src={item === 1 ? p2 : item === 2 ? p3 : p4}
                      />
                      <h4 className="font-medium text-sm mb-1">FlyCare Product {item}</h4>
                      <p className="text-blue-600 font-semibold text-sm">₹{199 + item * 50}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quotation Form */}
          <div>
            <Card>
              <CardHeader className="text-[#136ea1] text-white">
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Request Quotation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile No. *
                    </label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand *
                    </label>
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Brand</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Quantity *
                    </label>
                    <select
                      name="orderQuantity"
                      value={formData.orderQuantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Quantity</option>
                      {quantities.map((quantity) => (
                        <option key={quantity} value={quantity}>{quantity}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What can we help you with?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your requirements, preferred delivery timeline, or any specific questions..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-white hover:bg-blue-700 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                  >
                    Submit Request
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Our team will review your requirements</li>
                    <li>• You'll receive a customized quote within 24 hours</li>
                    <li>• We'll contact you to discuss pricing and delivery</li>
                    <li>• Flexible payment and shipping options available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};