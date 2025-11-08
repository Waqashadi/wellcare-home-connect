import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import blogBg from '@/assets/blog-bg.jpg';
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "10 Essential Tips for Safe Home Recovery After Surgery",
    excerpt: "Learn the most important steps to ensure a smooth and safe recovery in the comfort of your own home after surgical procedures.",
    author: "Dr. Shakeel",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Recovery Care",
    image: new URL('../assets/herobg (1).jpg', import.meta.url).href
  };

  const blogPosts = [
    {
      id: 2,
      title: "Understanding Medicare Coverage for Home Health Services",
      excerpt: "A comprehensive guide to what Medicare covers for home nursing care and how to navigate the approval process.",
      author: "Dr. Shakeel",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Insurance",
      image: new URL('../assets/mission.jpg', import.meta.url).href
    },
    {
      id: 3,
      title: "Managing Chronic Conditions at Home: A Family Guide",
      excerpt: "How families can support loved ones with chronic diseases while maintaining quality of life at home.",
      author: "Dr. Shakeel",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Chronic Care",
      image: new URL('../assets/HCSimg.jpg', import.meta.url).href
    },
    {
      id: 4,
      title: "The Benefits of Home Nursing vs. Facility Care",
      excerpt: "Exploring the advantages of receiving professional nursing care in your own home environment.",
      author: "Dr. Shakeel",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Home Care",
      image: new URL('../assets/herobg (3).jpg', import.meta.url).href
    },
    {
      id: 5,
      title: "Wound Care Best Practices for Home Patients",
      excerpt: "Essential wound care techniques and when to contact your healthcare provider for concerns.",
      author: "Dr. Shakeel",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Wound Care",
      image: new URL('../assets/services-bg.jpg', import.meta.url).href
    },
    {
      id: 6,
      title: "Medication Management: Ensuring Safety at Home",
      excerpt: "Tips for organizing medications, avoiding interactions, and maintaining proper dosing schedules.",
      author: "Dr. Shakeel",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Medication",
      image: new URL('../assets/HMimg.jpg', import.meta.url).href
    },
    {
      id: 7,
      title: "Creating a Safe Home Environment for Elderly Care",
      excerpt: "Home modifications and safety measures to prevent falls and accidents for elderly patients.",
      author: "Dr. Shakeel",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Safety",
      image: new URL('../assets/HCSimg.jpg', import.meta.url).href
    }
  ];


  return (
    <>
    
     <Helmet>
        <title>WellCare Health Blog | Expert Tips & Home Nursing Care</title>
        <meta
          name="description"
          content="Stay informed with expert insights, practical tips, and valuable information about home nursing care, health management, and wellness for you and your family."
        />
        <meta
          name="keywords"
          content="home nursing care, health blog, WellCare, health tips, home healthcare, nursing tips, wellness"
        />
        <link rel="canonical" href="https://wellcareshomenursing.com/blog" />
      </Helmet>
   
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-3 animate-fade-in max-sm:text-2xl">
              WellCare Health Blog
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in max-sm:text-sm" style={{ animationDelay: '200ms' }}>
              Expert insights, practical tips, and valuable information about home nursing care, 
              health management, and wellness for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 max-sm:py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-4 max-sm:text-2xl">
              Featured Article
            </h2>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-4 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-accent-pink text-accent-pink-foreground px-4 py-2 rounded-full text-sm font-semibold max-sm:text-xm">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-medical-gray text-sm max-sm:text-xs">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-medical-blue mb-4 max-sm:text-2xl">
                  {featuredPost.title}
                </h3>
                <p className="text-medical-gray text-lg leading-relaxed mb-6 max-sm:text-sm">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-medical-blue">{featuredPost.author}</p>
                      <p className="text-medical-gray text-sm max-sm:text-xs">{featuredPost.date}</p>
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

      {/* Blog Posts Grid */}
      <section className="py-20 max-sm:py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-blue mb-3 max-sm:text-2xl">
              Latest Articles
            </h2>
            <p className="text-xl text-medical-gray max-w-3xl mx-auto max-sm:text-sm">
              Stay informed with our latest insights on home healthcare, nursing best practices, 
              and tips for maintaining wellness at home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image as any} alt={post.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-2">
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
      <section className="py-20 bg-gradient-to-r from-medical-blue to-accent-pink text-white max-sm:py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 max-sm:text-2xl">
               Caring Starts With a Conversation
            </h2>
            <p className="text-xl mb-8 text-white/90 max-sm:text-sm">
              Get the latest health tips, care updates, and expert insights delivered 
              directly to your inbox every month.
            </p>
            
            <p className="text-white/70 text-sm mt-4 max-sm:text-sm">
              No spam, unsubscribe anytime. Your privacy is important to us.
            </p>
          </div>
        </div>
      </section>
    </div>
     </>
  );
};

export default Blog;