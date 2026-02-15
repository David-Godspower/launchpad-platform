import React, { useState } from 'react';
import { Home, Briefcase, LayoutDashboard, User, Search, Bell, Menu, X, Calendar, MapPin, DollarSign, Clock, BookOpen, TrendingUp, Award, Users, ChevronRight, Filter, Star, Building2, Heart } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedJobs, setSavedJobs] = useState([]);

  const navigation = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'Browse', icon: Search, id: 'browse' },
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Profile', icon: User, id: 'profile' },
  ];

  const categories = [
    { id: 'all', name: 'All Internships', icon: Briefcase },
    { id: 'tech', name: 'Technology', icon: BookOpen },
    { id: 'design', name: 'Design', icon: Award },
    { id: 'business', name: 'Business', icon: TrendingUp },
    { id: 'marketing', name: 'Marketing', icon: Users },
  ];

  const internships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechVision Labs',
      location: 'Remote',
      type: 'Full-time',
      duration: '3 months',
      stipend: '$1,200/month',
      category: 'tech',
      tags: ['React', 'TypeScript', 'Tailwind'],
      logo: '🚀',
      color: 'from-blue-500 to-cyan-500',
      deadline: '2026-03-15',
      applicants: 45,
      description: 'Build modern web applications using React and TypeScript. Work with senior developers on real projects.',
    },
    {
      id: 2,
      title: 'UX/UI Design Intern',
      company: 'Creative Studios',
      location: 'New York, NY',
      type: 'Hybrid',
      duration: '6 months',
      stipend: '$1,500/month',
      category: 'design',
      tags: ['Figma', 'Prototyping', 'User Research'],
      logo: '🎨',
      color: 'from-purple-500 to-pink-500',
      deadline: '2026-03-20',
      applicants: 67,
      description: 'Design beautiful user experiences for mobile and web applications. Collaborate with product teams.',
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Analytics Pro',
      location: 'San Francisco, CA',
      type: 'On-site',
      duration: '4 months',
      stipend: '$2,000/month',
      category: 'tech',
      tags: ['Python', 'Machine Learning', 'SQL'],
      logo: '📊',
      color: 'from-emerald-500 to-teal-500',
      deadline: '2026-03-10',
      applicants: 89,
      description: 'Analyze large datasets and build predictive models. Learn from industry-leading data scientists.',
    },
    {
      id: 4,
      title: 'Marketing Intern',
      company: 'Brand Builders',
      location: 'Remote',
      type: 'Part-time',
      duration: '3 months',
      stipend: '$800/month',
      category: 'marketing',
      tags: ['Social Media', 'Content', 'SEO'],
      logo: '📱',
      color: 'from-orange-500 to-red-500',
      deadline: '2026-03-25',
      applicants: 52,
      description: 'Create engaging content and manage social media campaigns. Develop digital marketing strategies.',
    },
    {
      id: 5,
      title: 'Business Analyst Intern',
      company: 'Global Consulting',
      location: 'London, UK',
      type: 'Full-time',
      duration: '6 months',
      stipend: '£1,800/month',
      category: 'business',
      tags: ['Excel', 'Strategy', 'Analysis'],
      logo: '💼',
      color: 'from-indigo-500 to-blue-500',
      deadline: '2026-03-18',
      applicants: 73,
      description: 'Support business strategy projects and conduct market research. Work with Fortune 500 clients.',
    },
    {
      id: 6,
      title: 'Product Design Intern',
      company: 'InnovateLab',
      location: 'Austin, TX',
      type: 'Hybrid',
      duration: '5 months',
      stipend: '$1,400/month',
      category: 'design',
      tags: ['Sketch', 'Design Systems', 'Branding'],
      logo: '✨',
      color: 'from-pink-500 to-rose-500',
      deadline: '2026-03-22',
      applicants: 41,
      description: 'Shape the future of digital products. Design intuitive interfaces and create design systems.',
    },
  ];

  const applications = [
    { id: 1, internship: internships[0], status: 'Under Review', appliedDate: '2026-02-10', stage: 2 },
    { id: 2, internship: internships[1], status: 'Interview Scheduled', appliedDate: '2026-02-08', stage: 3 },
    { id: 3, internship: internships[4], status: 'Submitted', appliedDate: '2026-02-12', stage: 1 },
  ];

  const stats = [
    { label: 'Applications', value: '12', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
    { label: 'Interviews', value: '3', icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { label: 'Saved', value: savedJobs.length, icon: Heart, color: 'from-emerald-500 to-teal-500' },
    { label: 'Profile Views', value: '48', icon: Users, color: 'from-orange-500 to-red-500' },
  ];

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredInternships = selectedCategory === 'all' 
    ? internships 
    : internships.filter(int => int.category === selectedCategory);

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Trusted by 10,000+ students worldwide</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Launch Your
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover meaningful internships at top companies. Build your skills, expand your network, and kickstart your professional future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('browse')}
                className="group px-8 py-4 bg-white text-purple-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Explore Opportunities
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { label: '5,000+', desc: 'Active Internships', icon: Briefcase },
            { label: '2,000+', desc: 'Partner Companies', icon: Building2 },
            { label: '95%', desc: 'Success Rate', icon: TrendingUp },
            { label: '50+', desc: 'Countries', icon: MapPin },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore by Category</h2>
          <p className="text-xl text-slate-600">Find internships that match your passion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.slice(1).map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage('browse');
              }}
              className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 text-left animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <cat.icon className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
              <p className="text-slate-600 text-sm mb-4">Explore opportunities in {cat.name.toLowerCase()}</p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                View Internships
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Internships Preview */}
      <div className="bg-gradient-to-br from-slate-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Opportunities</h2>
              <p className="text-xl text-slate-600">Handpicked internships from top companies</p>
            </div>
            <button 
              onClick={() => setCurrentPage('browse')}
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.slice(0, 3).map((job, idx) => (
              <InternshipCard key={job.id} job={job} idx={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join thousands of students who have launched their careers through Launchpad
            </p>
            <button 
              onClick={() => setCurrentPage('browse')}
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const InternshipCard = ({ job, idx }) => (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-slate-100"
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
            {job.logo}
          </div>
          <button 
            onClick={() => toggleSaveJob(job.id)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                savedJobs.includes(job.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'
              }`} 
            />
          </button>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
          {job.title}
        </h3>
        <p className="text-slate-600 font-medium mb-4">{job.company}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-slate-600">
            <MapPin className="w-4 h-4 mr-2 text-slate-400" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <Clock className="w-4 h-4 mr-2 text-slate-400" />
            {job.duration} • {job.type}
          </div>
          <div className="flex items-center text-sm font-semibold text-purple-600">
            <DollarSign className="w-4 h-4 mr-1" />
            {job.stipend}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-500">{job.applicants} applicants</span>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
            Apply Now
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const BrowsePage = () => (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Browse Internships</h1>
          <p className="text-lg text-slate-600">Discover your next opportunity from {filteredInternships.length} available positions</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-semibold text-slate-900">Filter by Category</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Internship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((job, idx) => (
            <InternshipCard key={job.id} job={job} idx={idx} />
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No internships found</h3>
            <p className="text-slate-600">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">My Dashboard</h1>
          <p className="text-lg text-slate-600">Track your applications and progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Applications</h2>
          
          <div className="space-y-4">
            {applications.map((app, idx) => (
              <div 
                key={app.id}
                className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${app.internship.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {app.internship.logo}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{app.internship.title}</h3>
                      <p className="text-slate-600 mb-3">{app.internship.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Applied: {app.appliedDate}
                        </span>
                        <span className={`px-3 py-1 rounded-full font-medium ${
                          app.status === 'Interview Scheduled' 
                            ? 'bg-green-100 text-green-700'
                            : app.status === 'Under Review'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                      <span>Application Progress</span>
                      <span className="font-semibold">{app.stage}/4</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${app.internship.color} transition-all duration-500`}
                        style={{ width: `${(app.stage / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Jobs */}
        {savedJobs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Saved Internships</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internships
                .filter(job => savedJobs.includes(job.id))
                .map((job, idx) => (
                  <InternshipCard key={job.id} job={job} idx={idx} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ProfilePage = () => (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">My Profile</h1>
          <p className="text-lg text-slate-600">Manage your information and preferences</p>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-white">
              JD
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Jane Doe</h2>
              <p className="text-slate-600 mb-3">jane.doe@email.com</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Frontend Developer
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Available for Internships
                </span>
              </div>
            </div>

            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">About</h3>
            <p className="text-slate-600 leading-relaxed">
              Passionate computer science student with a strong foundation in web development. 
              Looking for opportunities to apply my skills in React, TypeScript, and modern frontend 
              frameworks. Eager to learn and contribute to innovative projects.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git', 'Figma', 'Python'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-900">Bachelor of Science in Computer Science</h4>
                <p className="text-slate-600">University of Technology • 2023 - 2027</p>
                <p className="text-sm text-slate-500 mt-1">GPA: 3.8/4.0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-900">Web Development Volunteer</h4>
                <p className="text-slate-600">Local Non-Profit Organization • Jan 2025 - Present</p>
                <p className="text-sm text-slate-500 mt-2">
                  Building responsive websites and maintaining web applications for community initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Launchpad
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer">
                JD
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    currentPage === item.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'browse' && <BrowsePage />}
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'profile' && <ProfilePage />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Launchpad</span>
              </div>
              <p className="text-slate-400 text-sm">
                Connecting talented students with amazing opportunities worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Browse Internships</li>
                <li className="hover:text-white cursor-pointer transition-colors">For Companies</li>
                <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                <li className="hover:text-white cursor-pointer transition-colors">Resources</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-white cursor-pointer transition-colors">Guidelines</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2026 Launchpad. All rights reserved. Built with ❤️ for students worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
