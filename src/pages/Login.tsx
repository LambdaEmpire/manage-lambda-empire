import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, accept any email/password
    if (formData.email && formData.password) {
      toast.success('Login successful! Welcome to Lambda Empire.');
      navigate('/dashboard');
    } else {
      toast.error('Please enter both email and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 lambda-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-playfair font-bold text-2xl">Λ</span>
          </div>
          <h1 className="font-playfair font-bold text-2xl text-lambda-900">Lambda Empire</h1>
          <p className="text-lambda-600">Member Portal Access</p>
        </div>

        <Card className="border-lambda-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-lambda-800">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your member dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-lambda-200 focus:border-lambda-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="border-lambda-200 focus:border-lambda-500 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-lambda-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-lambda-500" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full lambda-gradient text-white"
                size="lg"
              >
                Sign In to Dashboard
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-lambda-600">
                Need access? Contact your chapter administrator
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-lambda-600 hover:text-lambda-800"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;