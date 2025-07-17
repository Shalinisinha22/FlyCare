import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle, Tag, ArrowRight } from 'lucide-react';

export const BlogDetail = (): JSX.Element => {
  const { id } = useParams();

  // Mock blog post data
  const blogPost = {
    id: id,
    title: 'Understanding Menstrual Health: A Complete Guide',
    content: `
      <p>Menstrual health is a crucial aspect of women's overall well-being that deserves proper attention and understanding. In this comprehensive guide, we'll explore everything you need to know about maintaining good menstrual health.</p>
      
      <h2>What is Menstrual Health?</h2>
      <p>Menstrual health refers to the complete physical, mental, and social well-being in relation to the menstrual cycle. It's not just about managing periods, but understanding your body, recognizing what's normal, and knowing when to seek help.</p>
      
      <h2>Key Components of Menstrual Health</h2>
      <h3>1. Understanding Your Cycle</h3>
      <p>A typical menstrual cycle lasts 21-35 days, with bleeding lasting 3-7 days. Understanding your personal cycle helps you:</p>
      <ul>
        <li>Track your periods accurately</li>
        <li>Identify any irregularities</li>
        <li>Plan ahead for your periods</li>
        <li>Recognize signs of potential health issues</li>
      </ul>
      
      <h3>2. Proper Hygiene Practices</h3>
      <p>Maintaining good hygiene during menstruation is essential for preventing infections and ensuring comfort:</p>
      <ul>
        <li>Change sanitary products every 4-6 hours</li>
        <li>Wash hands before and after changing products</li>
        <li>Clean the genital area with water regularly</li>
        <li>Avoid using harsh soaps or douches</li>
      </ul>
      
      <h3>3. Choosing the Right Products</h3>
      <p>The right menstrual products can make a significant difference in your comfort and confidence. Consider factors like:</p>
      <ul>
        <li>Flow intensity</li>
        <li>Lifestyle and activities</li>
        <li>Skin sensitivity</li>
        <li>Environmental impact</li>
      </ul>
      
      <h2>Common Menstrual Health Issues</h2>
      <p>While some discomfort during menstruation is normal, certain symptoms may indicate underlying health issues:</p>
      
      <h3>When to Consult a Healthcare Provider</h3>
      <ul>
        <li>Severe pain that interferes with daily activities</li>
        <li>Irregular periods or sudden changes in cycle</li>
        <li>Heavy bleeding that requires changing products every hour</li>
        <li>Periods lasting longer than 7 days</li>
        <li>Bleeding between periods</li>
      </ul>
      
      <h2>Nutrition and Lifestyle</h2>
      <p>A healthy lifestyle can significantly impact menstrual health:</p>
      
      <h3>Nutrition Tips</h3>
      <ul>
        <li>Eat iron-rich foods to prevent anemia</li>
        <li>Stay hydrated</li>
        <li>Include calcium and magnesium in your diet</li>
        <li>Limit caffeine and processed foods</li>
      </ul>
      
      <h3>Exercise and Rest</h3>
      <p>Regular exercise can help reduce menstrual cramps and improve mood. However, listen to your body and rest when needed.</p>
      
      <h2>Breaking the Stigma</h2>
      <p>Menstruation is a natural biological process, yet stigma and taboos surrounding it persist in many cultures. Education and open conversations are key to breaking these barriers and ensuring all women have access to proper menstrual health resources.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding and maintaining menstrual health is an important part of overall women's health. By staying informed, practicing good hygiene, and seeking help when needed, women can manage their menstrual health effectively and confidently.</p>
    `,
    image: 'https://images.pexels.com/photos/6663588/pexels-photo-6663588.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Sarah Johnson',
    authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '2024-01-15',
    category: 'Health',
    readTime: '8 min read',
    tags: ['Menstrual Health', 'Women\'s Health', 'Hygiene', 'Wellness'],
    likes: 245,
    comments: 32,
    shares: 18
  };

  // Related posts
  const relatedPosts = [
    {
      id: 2,
      title: 'Sustainable Period Products: Making Eco-Friendly Choices',
      image: 'https://images.pexels.com/photos/6663589/pexels-photo-6663589.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Emma Green',
      date: '2024-01-12',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Breaking Period Taboos: Empowering Women Through Education',
      image: 'https://images.pexels.com/photos/6663590/pexels-photo-6663590.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Priya Sharma',
      date: '2024-01-10',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Nutrition During Menstruation: What to Eat and Avoid',
      image: 'https://images.pexels.com/photos/6663591/pexels-photo-6663591.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Dr. Lisa Chen',
      date: '2024-01-08',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-[#136ea1] hover:text-[#0f5a8a] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img
              className="w-full h-full object-cover"
              alt={blogPost.title}
              src={blogPost.image}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center mb-4">
                <span className="text-[#136ea1] px-3 py-1 rounded-full text-sm font-semibold">
                  {blogPost.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {blogPost.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt={blogPost.author}
                  src={blogPost.authorImage}
                />
                <div>
                  <p className="font-semibold text-gray-900">{blogPost.author}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(blogPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPost.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-6 text-gray-500">
                  <button className="flex items-center hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 mr-1" />
                    <span>{blogPost.likes}</span>
                  </button>
                  <button className="flex items-center hover:text-[#136ea1] transition-colors">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span>{blogPost.comments}</span>
                  </button>
                  <button className="flex items-center hover:text-green-500 transition-colors">
                    <Share2 className="w-5 h-5 mr-1" />
                    <span>{blogPost.shares}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <Tag className="w-4 h-4 text-gray-500" />
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between pt-6 border-t">
              <p className="text-gray-600">Share this article:</p>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="hover:bg-[#136ea1]/10 hover:text-[#136ea1]">
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-[#136ea1]/10 hover:text-[#136ea1]">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-[#136ea1]/10 hover:text-[#136ea1]">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-[#136ea1]/10 hover:text-[#136ea1]">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img
                className="w-16 h-16 rounded-full object-cover"
                alt={blogPost.author}
                src={blogPost.authorImage}
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">About {blogPost.author}</h3>
                <p className="text-gray-600 mb-4">
                  Dr. Sarah Johnson is a gynecologist with over 15 years of experience in women's health. 
                  She is passionate about educating women about menstrual health and breaking taboos 
                  surrounding women's reproductive health.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">Follow</Button>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      alt={post.title}
                      src={post.image}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#136ea1] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="group-hover:text-[#136ea1] group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup
        <Card className="mt-12 text-[#136ea1] text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6">Subscribe to our newsletter for the latest articles on women's health and wellness.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-[#136ea1] hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};