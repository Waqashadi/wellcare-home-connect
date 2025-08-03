import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import blogBg from '@/assets/blog-bg.jpg';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "10 Essential Tips for Safe Home Recovery After Surgery",
    excerpt: "Learn the most important steps to ensure a smooth and safe recovery in the comfort of your own home after surgical procedures.",
    author: "Dr. Sarah Martinez",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Recovery Care",
    image: "/api/placeholder/600/400"
  };

  const blogPosts = [
    {
      id: 2,
      title: "Understanding Medicare Coverage for Home Health Services",
      excerpt: "A comprehensive guide to what Medicare covers for home nursing care and how to navigate the approval process.",
      author: "Jennifer Thompson",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Insurance"
    },
    {
      id: 3,
      title: "Managing Chronic Conditions at Home: A Family Guide",
      excerpt: "How families can support loved ones with chronic diseases while maintaining quality of life at home.",
      author: "Michael Rodriguez",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Chronic Care"
    },
    {
      id: 4,
      title: "The Benefits of Home Nursing vs. Facility Care",
      excerpt: "Exploring the advantages of receiving professional nursing care in your own home environment.",
      author: "Lisa Chen",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Home Care"
    },
    {
      id: 5,
      title: "Wound Care Best Practices for Home Patients",
      excerpt: "Essential wound care techniques and when to contact your healthcare provider for concerns.",
      author: "Robert Johnson",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Wound Care"
    },
    {
      id: 6,
      title: "Medication Management: Ensuring Safety at Home",
      excerpt: "Tips for organizing medications, avoiding interactions, and maintaining proper dosing schedules.",
      author: "Maria Gonzalez",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Medication"
    },
    {
      id: 7,
      title: "Creating a Safe Home Environment for Elderly Care",
      excerpt: "Home modifications and safety measures to prevent falls and accidents for elderly patients.",
      author: "Dr. Sarah Martinez",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Safety"
    }
  ];

  const categories = [
    "All Posts",
    "Recovery Care",
    "Chronic Care",
    "Insurance",
    "Home Care",
    "Wound Care",
    "Medication",
    "Safety"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-medical-blue to-accent-pink py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(236, 72, 153, 0.8)), url(${blogBg})` 
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              WellCare Health Blog
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Expert insights, practical tips, and valuable information about home nursing care, 
              health management, and wellness for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Featured Article
            </h2>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-medical-blue/10 to-accent-pink/10 flex items-center justify-center p-8">
                <div className="w-full h-64 lg:h-80 bg-medical-blue/20 rounded-lg flex items-center justify-center">
                  <span className="text-medical-blue text-lg">Featured Article Image</span>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-accent-pink text-accent-pink-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-medical-gray text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-medical-blue mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-medical-gray text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-medical-blue">{featuredPost.author}</p>
                      <p className="text-medical-gray text-sm">{featuredPost.date}</p>
                    </div>
                  </div>
                </div>
                <Button 
                  asChild
                  className="bg-accent-pink hover:bg-accent-pink/90 text-accent-pink-foreground w-fit"
                >
                  <Link to={`/blog/${featuredPost.id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-medical-light-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-medical-blue hover:bg-medical-blue/90" 
                  : "border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto">
              Stay informed with our latest insights on home healthcare, nursing best practices, 
              and tips for maintaining wellness at home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-medical-blue/10 to-accent-pink/10 h-48 flex items-center justify-center">
                    <span className="text-medical-blue">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-medical-blue/10 text-medical-blue px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center text-medical-gray text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-medical-blue mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-medical-gray text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-medical-blue rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-medical-blue text-sm font-semibold">{post.author}</p>
                          <p className="text-medical-gray text-xs">{post.date}</p>
                        </div>
                      </div>
                      <Button 
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-accent-pink hover:text-accent-pink hover:bg-accent-pink/10"
                      >
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get the latest health tips, care updates, and expert insights delivered 
              directly to your inbox every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-medical-blue"
              />
              <Button 
                className="bg-white text-medical-blue hover:bg-white/90"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe anytime. Your privacy is important to us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;