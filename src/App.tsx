import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SkilledNursingCare from "./pages/services/SkilledNursingCare";
import PostSurgicalCare from "./pages/services/PostSurgicalCare";
import MedicationManagement from "./pages/services/MedicationManagement";
import WoundCare from "./pages/services/WoundCare";
import PhysicalTherapy from "./pages/services/PhysicalTherapy";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import ScrollManager from "./components/ScrollManager";
import GTMListener from "./GTMListener"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GTMListener/>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollManager />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/services/skilled-nursing-care" element={<SkilledNursingCare />} />
              <Route path="/services/post-surgical-care" element={<PostSurgicalCare />} />
              <Route path="/services/medication-management" element={<MedicationManagement />} />
              <Route path="/services/wound-care" element={<WoundCare />} />
              <Route path="/services/physical-therapy" element={<PhysicalTherapy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {/* Global compact professional contact icons */}
          <CallButton phone="+923106881824" variant="floating" />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
