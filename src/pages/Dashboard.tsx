import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  DollarSign, 
  Calendar, 
  Clock, 
  BookOpen, 
  Users, 
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Award,
  Target
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data
  const user = {
    name: "Marcus Johnson",
    memberId: "LEM-2024-001",
    level: "Chapter Member",
    chapter: "Alpha Beta Chapter",
    region: "Southeast Region",
    joinDate: "January 2024",
    status: "Active"
  };

  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: DollarSign, label: "Dues & Payments" },
    { icon: Calendar, label: "Events" },
    { icon: Clock, label: "Service Hours" },
    { icon: BookOpen, label: "Lambda Knowledge" },
    { icon: Users, label: "Directory" },
    { icon: TrendingUp, label: "Fundraising" },
    { icon: Award, label: "Empire House" },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lambda-50 via-white to-lambda-100">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-lambda-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 lambda-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-playfair font-bold">Λ</span>
          </div>
          <div>
            <h1 className="font-semibold text-lambda-800">Lambda Empire</h1>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-lambda-200 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center space-x-3 p-6 border-b border-lambda-200">
            <div className="w-10 h-10 lambda-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-xl">Λ</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-lg text-lambda-800">Lambda Empire</h1>
              <p className="text-sm text-lambda-600">Management Portal</p>
            </div>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-lambda-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                <span className="text-lambda-900 font-semibold text-lg">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-lambda-800 truncate">{user.name}</p>
                <p className="text-sm text-lambda-600 truncate">{user.memberId}</p>
                <Badge className="mt-1 bg-lambda-100 text-lambda-700 text-xs">
                  {user.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      item.active 
                        ? "lambda-gradient text-white" 
                        : "text-lambda-700 hover:bg-lambda-50"
                    }`}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Actions */}
          <div className="p-4 border-t border-lambda-200">
            <Button variant="ghost" className="w-full justify-start text-lambda-700 mb-2">
              <Settings className="mr-3 h-4 w-4" />
              Settings
            </Button>
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="w-full justify-start text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-lambda-900">
                  Welcome back, {user.name.split(' ')[0]}!
                </h1>
                <p className="text-lambda-600 mt-1">
                  {user.chapter} • {user.region}
                </p>
              </div>
              <Button className="mt-4 sm:mt-0 lambda-gradient text-white">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-lambda-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-lambda-600">Dues Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-lambda-800">Q4 2024</span>
                  <Badge className="bg-green-100 text-green-700">Paid</Badge>
                </div>
                <p className="text-sm text-lambda-600 mt-1">Next due: Jan 2025</p>
              </CardContent>
            </Card>

            <Card className="border-lambda-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-lambda-600">Service Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-lambda-800">24</span>
                  <Target className="h-5 w-5 text-lambda-500" />
                </div>
                <Progress value={80} className="mt-2" />
                <p className="text-sm text-lambda-600 mt-1">6 hours to goal</p>
              </CardContent>
            </Card>

            <Card className="border-lambda-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-lambda-600">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-lambda-800">3</span>
                  <Calendar className="h-5 w-5 text-lambda-500" />
                </div>
                <p className="text-sm text-lambda-600 mt-1">Next: Regional Conference</p>
              </CardContent>
            </Card>

            <Card className="border-lambda-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-lambda-600">Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-lambda-800">85%</span>
                  <BookOpen className="h-5 w-5 text-lambda-500" />
                </div>
                <Progress value={85} className="mt-2" />
                <p className="text-sm text-lambda-600 mt-1">2 modules remaining</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-lambda-200">
              <CardHeader>
                <CardTitle className="text-lambda-800">Recent Activity</CardTitle>
                <CardDescription>Your latest contributions and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-lambda-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-lambda-800">Q4 Dues Paid</p>
                    <p className="text-sm text-lambda-600">December 15, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-lambda-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-lambda-800">Service Hours Logged</p>
                    <p className="text-sm text-lambda-600">8 hours • Community Service</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-lambda-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-lambda-800">Module Completed</p>
                    <p className="text-sm text-lambda-600">Leadership Fundamentals</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-lambda-200">
              <CardHeader>
                <CardTitle className="text-lambda-800">Quick Actions</CardTitle>
                <CardDescription>Frequently used features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start lambda-gradient text-white">
                  <Calendar className="mr-3 h-4 w-4" />
                  Register for Events
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-lambda-200 text-lambda-700">
                  <Clock className="mr-3 h-4 w-4" />
                  Log Service Hours
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-lambda-200 text-lambda-700">
                  <BookOpen className="mr-3 h-4 w-4" />
                  Continue Learning
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-lambda-200 text-lambda-700">
                  <Users className="mr-3 h-4 w-4" />
                  View Directory
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;