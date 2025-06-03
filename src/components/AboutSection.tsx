
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header banner */}
        <div className="mb-16 animate-fade-in">
          <img 
            src="/lovable-uploads/cbdf5e66-436e-47fe-bb13-519b1cc47ef3.png"
            alt="Condemned by the White House, Congress, and Senate"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  A Voice
                </span>
                <br />
                <span className="text-white">They Tried to Silence</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Khallid Muhammad was a revolutionary activist, leader, and unapologetic voice 
                against systemic oppression. No other figure in U.S. history has been officially 
                condemned by the White House, Congress, and Senate at the same time.
              </p>
              
              <p>
                His words were labeled too dangerous, censored by the media, and attacked by the 
                highest levels of government.
              </p>
              
              <p className="text-xl font-semibold text-white">
                Yet, despite their efforts to silence him, his message refused to die.
              </p>
              
              <p>
                This book contains his most explosive, unfiltered, and unapologetic speeches—exactly 
                as he delivered them.
              </p>
            </div>
          </div>

          {/* Back cover content */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"></div>
            <img 
              src="/lovable-uploads/5f9a9cae-47a1-4cc0-91d5-197ff8283cad.png"
              alt="Book back cover"
              className="relative w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
