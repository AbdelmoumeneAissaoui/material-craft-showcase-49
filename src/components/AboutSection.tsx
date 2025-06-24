
import { Building2, Users, Award, Truck } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Expertise technique",
      description: "15 ans d'expérience dans la distribution de matériaux premium"
    },
    {
      icon: Users,
      title: "Service personnalisé",
      description: "Une équipe dédiée pour vous accompagner dans vos projets"
    },
    {
      icon: Award,
      title: "Qualité garantie",
      description: "Partenariat avec les meilleures marques du marché"
    },
    {
      icon: Truck,
      title: "Livraison rapide",
      description: "Logistique optimisée pour respecter vos délais"
    }
  ];

  return (
    <section id="apropos" className="section-padding bg-industrial-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-industrial-dark mb-6">
              Notre expertise au 
              <span className="gradient-text"> service</span> de vos projets
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Depuis plus de 15 ans, MatériaPro accompagne les professionnels du bâtiment 
              et les décorateurs d'intérieur dans leurs projets les plus ambitieux. 
              Notre expertise technique et notre service personnalisé font de nous 
              le partenaire de référence pour vos approvisionnements en matériaux premium.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-industrial-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-industrial-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-industrial-dark mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-industrial-medium to-industrial-dark rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i}
                      className="bg-white/10 rounded-lg hover-lift"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animation: 'fade-in 1s ease-out forwards'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-industrial-accent rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-industrial-copper rounded-full opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
