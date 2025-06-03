
import { BookOpen, Users, Star, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Unfiltered Speeches",
      description: "Complete, uncensored speeches exactly as they were delivered, preserving their original power and impact."
    },
    {
      icon: Users,
      title: "Historical Significance", 
      description: "The only figure in U.S. history to be condemned by the White House, Congress, and Senate simultaneously."
    },
    {
      icon: Star,
      title: "Expert Commentary",
      description: "Compiled by Khallida Bastet with a powerful foreword by Malik Zulu Shabazz, providing crucial context."
    },
    {
      icon: Zap,
      title: "Revolutionary Impact",
      description: "Words that sparked national controversy and challenged the very foundations of American society."
    }
  ];

  return (
    <section id="features" className="relative py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why This Book
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A vital piece of history that the government never wanted you to see
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-red-500/30 transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 italic">
            "Whether you agree or disagree, this is a vital piece of history that the government never wanted you to see."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
