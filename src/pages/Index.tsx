
import { useState, useEffect } from "react";
import { ArrowDown, BookOpen, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import AuthorSection from "@/components/AuthorSection";
import NavigationHeader from "@/components/NavigationHeader";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white overflow-x-hidden">
      <NavigationHeader />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AuthorSection />

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            "Whether you agree or disagree, this is a vital piece of history that the government never wanted you to see."
          </p>
          <p className="text-sm text-gray-500">
            &copy; 2024 Condemned by the White House. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
