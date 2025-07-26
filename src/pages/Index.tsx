import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, BookOpen, TrendingUp, Shield, Award } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Multi-Level Management",
      description: "Manage members across National, Regional, and Chapter levels"
    },
    {
      icon: TrendingUp,
      title: "Dues Tracking",
      description: "Quarterly dues management with admin controls"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Ticketing system for conferences and sub-events"
    },
    {
      icon: BookOpen,
      title: "Lambda Knowledge",
      description: "Online learning management system"
    },
    {
      icon: Shield,
      title: "Service Hours",
      description: "Track member service contributions"
    },
    {
      icon: Award,
      title: "Fundraising",
      description: "Campaign management for scholarships"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lambda-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-xl">Λ</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-lambda-800">Lambda Empire</h1>
              <p className="text-sm text-lambda-600">Management System</p>
            </div>
          </div>
          <Button onClick={() => navigate('/login')} className="lambda-gradient text-white">
            Member Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 lambda-gradient text-white border-0">
            Comprehensive Member Management
          </Badge>
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-lambda-900 mb-6">
            Welcome to the
            <span className="block lambda-gradient bg-clip-text text-transparent">
              Lambda Empire
            </span>
          </h1>
          <p className="text-xl text-lambda-700 mb-8 max-w-2xl mx-auto">
            A powerful management system designed for Lambda Empire members at all organizational levels. 
            Track dues, manage events, monitor service hours, and build our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/login')}
              className="lambda-gradient text-white text-lg px-8 py-3"
            >
              Access Member Portal
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/empire-house')}
              className="border-lambda-300 text-lambda-700 hover:bg-lambda-50 text-lg px-8 py-3"
            >
              View Empire House
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-lambda-900 mb-4">
              Comprehensive Management Features
            </h2>
            <p className="text-lambda-700 max-w-2xl mx-auto">
              Everything you need to manage your Lambda Empire membership and organizational activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-lambda-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 lambda-gradient rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lambda-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lambda-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lambda-gradient">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair font-bold text-3xl text-white mb-4">
            Ready to Join the Empire?
          </h2>
          <p className="text-lambda-100 mb-8 max-w-2xl mx-auto">
            Connect with your Lambda Empire community and access all the tools you need to stay engaged and contribute to our organization.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/login')}
            className="bg-white text-lambda-700 hover:bg-lambda-50 text-lg px-8 py-3"
          >
            Enter Member Portal
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lambda-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
              <span className="text-lambda-900 font-playfair font-bold">Λ</span>
            </div>
            <span className="font-playfair font-semibold">Lambda Empire Management</span>
          </div>
          <p className="text-lambda-300">
            © 2024 Lambda Empire. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;