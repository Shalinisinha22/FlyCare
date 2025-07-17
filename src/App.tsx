import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './screens/HomePage';
import { AboutUs } from './screens/AboutUs';
import { ContactUs } from './screens/ContactUs';
import { SanitaryPadSection } from './screens/SanitaryPadSection';
import { ProductDetail } from './screens/ProductDetail';
import { BrandPage } from './screens/BrandPage';
import { OrderForm } from './screens/OrderForm';
import { BlogPage } from './screens/BlogPage';
import { CareerPage } from './screens/CareerPage';
import { JobApply } from './screens/JobApply';
import { BlogDetail } from './screens/BlogDetail';
import { QuotationForm } from './screens/QuotationForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quotation/:productId" element={<QuotationForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/sanitary-pads" element={<SanitaryPadSection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/apply/:jobId" element={<JobApply />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};