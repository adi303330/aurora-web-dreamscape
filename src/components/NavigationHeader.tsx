
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            CONDEMNED
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("author")}
              className="text-white/80 hover:text-white transition-colors"
            >
              Author
            </button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Book
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("author")}
                className="text-white/80 hover:text-white transition-colors text-left"
              >
                Author
              </button>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
                Get Book
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationHeader;
