
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
              CONDEMNED BY THE WHITE HOUSE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                KHALLID MUHAMMAD'S
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                SPEECHES
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">
                THAT SHOOK AMERICA
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            The revolutionary words they tried to silence. The speeches that challenged the system. 
            The voice that refused to be silenced.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              Get the Book
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/50 text-white hover:bg-white/20 hover:border-white/70 px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Book Cover Image */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl"></div>
          <img 
            src="/lovable-uploads/09631911-9090-4d8c-b31f-c112e2b12f13.png"
            alt="Khallid Muhammad's Speeches That Shook America"
            className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
