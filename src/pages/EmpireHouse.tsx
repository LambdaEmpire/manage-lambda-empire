import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, MapPin, Calendar, Crown } from 'lucide-react';

const EmpireHouse = () => {
  const navigate = useNavigate();

  const organizationStructure = {
    national: {
      name: "Lambda Empire National",
      established: "1995",
      members: 2847,
      regions: 4
    },
    regions: [
      {
        name: "Northeast Region",
        established: "1996",
        chapters: 8,
        members: 742,
        coordinator: "Dr. Sarah Williams"
      },
      {
        name: "Southeast Region", 
        established: "1997",
        chapters: 12,
        members: 891,
        coordinator: "Prof. Michael Davis"
      },
      {
        name: "Midwest Region",
        established: "1998", 
        chapters: 6,
        members: 634,
        coordinator: "Dr. Jennifer Brown"
      },
      {
        name: "Western Region",
        established: "1999",
        chapters: 9,
        members: 580,
        coordinator: "Prof. David Martinez"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lambda-50 via-white to-lambda-100">
      {/* Header */}
      <header className="bg-white border-b border-lambda-200 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-lambda-600 hover:text-lambda-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lambda-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">Λ</span>
              </div>
              <div>
                <h1 className="font-playfair font-bold text-xl text-lambda-800">The Empire House</h1>
                <p className="text-sm text-lambda-600">Organizational Family Tree</p>
              </div>
            </div>
          </div>
          <Button onClick={() => navigate('/login')} className="lambda-gradient text-white">
            Member Login
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* National Level */}
        <div className="text-center mb-12">
          <Card className="max-w-2xl mx-auto border-lambda-200 shadow-lg">
            <CardHeader className="lambda-gradient text-white rounded-t-lg">
              <div className="flex items-center justify-center mb-4">
                <Crown className="h-8 w-8 mr-3" />
                <CardTitle className="text-2xl font-playfair">
                  {organizationStructure.national.name}
                </CardTitle>
              </div>
              <CardDescription className="text-lambda-100">
                The Foundation of Our Empire
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-lambda-800">
                    {organizationStructure.national.established}
                  </div>
                  <div className="text-sm text-lambda-600">Established</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lambda-800">
                    {organizationStructure.national.members.toLocaleString()}
                  </div>
                  <div className="text-sm text-lambda-600">Total Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lambda-800">
                    {organizationStructure.national.regions}
                  </div>
                  <div className="text-sm text-lambda-600">Regions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lambda-800">
                    {organizationStructure.regions.reduce((sum, region) => sum + region.chapters, 0)}
                  </div>
                  <div className="text-sm text-lambda-600">Chapters</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Level */}
        <div className="mb-8">
          <h2 className="text-2xl font-playfair font-bold text-lambda-900 text-center mb-8">
            Regional Structure
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {organizationStructure.regions.map((region, index) => (
              <Card key={index} className="border-lambda-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lambda-800 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-lambda-600" />
                      {region.name}
                    </CardTitle>
                    <Badge className="bg-lambda-100 text-lambda-700">
                      Est. {region.established}
                    </Badge>
                  </div>
                  <CardDescription>
                    Regional Coordinator: {region.coordinator}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-lambda-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-lambda-800">
                        {region.chapters}
                      </div>
                      <div className="text-sm text-lambda-600">Chapters</div>
                    </div>
                    <div className="bg-lambda-50 rounded-lg p-3">
                      <div className="text-xl font-bold text-lambda-800">
                        {region.members}
                      </div>
                      <div className="text-sm text-lambda-600">Members</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chapter Level Preview */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-lambda-200">
            <CardHeader>
              <CardTitle className="text-lambda-800 flex items-center justify-center">
                <Users className="h-6 w-6 mr-3" />
                Chapter Level Structure
              </CardTitle>
              <CardDescription>
                Individual chapters form the foundation of our regional and national strength
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gradient-to-br from-lambda-50 to-lambda-100 rounded-lg p-6">
                  <div className="w-12 h-12 lambda-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-playfair font-bold">Λ</span>
                  </div>
                  <h3 className="font-semibold text-lambda-800 mb-2">Alpha Beta Chapter</h3>
                  <p className="text-sm text-lambda-600">Southeast Region</p>
                  <div className="mt-3 text-lg font-bold text-lambda-700">47 Members</div>
                </div>
                
                <div className="bg-gradient-to-br from-lambda-50 to-lambda-100 rounded-lg p-6">
                  <div className="w-12 h-12 lambda-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-playfair font-bold">Λ</span>
                  </div>
                  <h3 className="font-semibold text-lambda-800 mb-2">Gamma Delta Chapter</h3>
                  <p className="text-sm text-lambda-600">Northeast Region</p>
                  <div className="mt-3 text-lg font-bold text-lambda-700">52 Members</div>
                </div>
                
                <div className="bg-gradient-to-br from-lambda-50 to-lambda-100 rounded-lg p-6">
                  <div className="w-12 h-12 lambda-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-playfair font-bold">Λ</span>
                  </div>
                  <h3 className="font-semibold text-lambda-800 mb-2">Epsilon Zeta Chapter</h3>
                  <p className="text-sm text-lambda-600">Western Region</p>
                  <div className="mt-3 text-lg font-bold text-lambda-700">38 Members</div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="lambda-gradient text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Chapter Directory
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmpireHouse;