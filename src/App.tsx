import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import EmpireHouse from '@/pages/EmpireHouse';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-lambda-50 via-white to-lambda-100">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/empire-house" element={<EmpireHouse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;