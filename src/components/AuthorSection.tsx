
import { Button } from "@/components/ui/button";

const AuthorSection = () => {
  return (
    <section id="author" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About the
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Contributors
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Malik Zulu Shabazz */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex-shrink-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MZ</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">MALIK ZULU SHABAZZ</h3>
                <p className="text-red-400 font-medium">Foreword Author</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              <strong className="text-white">Malik Zulu Shabazz</strong> is a former aide, spokesman, and 
              lawyer for Khallid Abdul Muhammad. Shabazz succeeded Khallid Muhammad and served as the 
              national chairman of the New Black Panthers following his death.
            </p>
          </div>

          {/* Khallida Bastet */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">KB</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">KHALLIDA BASTET</h3>
                <p className="text-blue-400 font-medium">Compiler & Editor</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              <strong className="text-white">Khallida Bastet</strong> is a historian, researcher, and advocate for 
              preserving Black revolutionary thought. She has worked to ensure Khallid Muhammad's most powerful 
              speeches remain accessible to future generations.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center space-y-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Compiled and edited by Khallida Bastet, with a powerful foreword by Malik Zulu Shabazz, 
              this collection preserves the words that shook America and sparked national controversy.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg">
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-12 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
