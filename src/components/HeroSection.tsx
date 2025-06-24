
import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const parallaxOffset = scrollY * 0.5;
  const videoScale = 1 + scrollY * 0.0005;
  const textOpacity = Math.max(0, 1 - scrollY * 0.003);

  return (
    <section id="accueil" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-gradient-to-r from-industrial-dark via-industrial-medium to-industrial-dark relative"
          style={{
            transform: `scale(${videoScale}) translateY(${parallaxOffset}px)`,
          }}
        >
          {/* Video placeholder with geometric pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-6 grid-rows-4 h-full gap-2 p-8">
              {Array.from({ length: 24 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animation: 'fade-in 2s ease-out forwards'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Video overlay */}
          <div className="absolute inset-0 video-overlay" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div 
            className="max-w-4xl"
            style={{ opacity: textOpacity }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair text-white mb-6 leading-tight">
              L'excellence en
              <span className="block gradient-text">
                matériaux
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Votre partenaire privilégié pour tous vos projets de construction. 
              Découvrez notre gamme premium de matériaux et équipements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-industrial-accent hover:bg-industrial-copper text-white px-8 py-4 text-lg font-semibold"
              >
                Découvrir nos produits
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-industrial-dark px-8 py-4 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir nos réalisations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-300">Années d'expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-300">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Marques partenaires</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        style={{ opacity: textOpacity }}
      >
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
