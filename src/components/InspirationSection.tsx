
import { ExternalLink, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InspirationSection = () => {
  const inspirations = [
    {
      title: "Salle de bain moderne",
      category: "Résidentiel",
      description: "Conception épurée avec faïence grand format et mobilier suspendu",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tags: ["Moderne", "Épuré", "Lumineux"]
    },
    {
      title: "Espace wellness",
      category: "Commercial",
      description: "Baignoire îlot et colonnes de douche pour un spa urbain",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tags: ["Spa", "Luxe", "Détente"]
    },
    {
      title: "Cuisine contemporaine",
      category: "Résidentiel",
      description: "Dalles grand format et plan de travail en pierre naturelle",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tags: ["Contemporain", "Fonctionnel", "Design"]
    },
    {
      title: "Showroom premium",
      category: "Commercial",
      description: "Mise en scène de nos plus beaux matériaux dans un écrin moderne",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      tags: ["Showroom", "Premium", "Inspiration"]
    },
    {
      title: "Loft industriel",
      category: "Résidentiel",
      description: "Mariage de matériaux bruts et d'équipements design",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      tags: ["Industriel", "Brut", "Caractère"]
    },
    {
      title: "Hôtel boutique",
      category: "Commercial",
      description: "Ambiance raffinée avec mobilier sur-mesure et finitions premium",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      tags: ["Hôtel", "Raffiné", "Sur-mesure"]
    }
  ];

  return (
    <section id="inspirations" className="section-padding bg-industrial-light">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-industrial-dark mb-6">
            Nos
            <span className="gradient-text"> réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos matériaux premium donnent vie aux projets 
            les plus ambitieux de nos clients.
          </p>
        </div>

        {/* Inspirations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirations.map((inspiration, index) => (
            <Card 
              key={inspiration.title}
              className="group hover-lift border-0 shadow-lg animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div 
                  className="h-64 relative overflow-hidden"
                  style={{ background: inspiration.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-industrial-dark">
                    {inspiration.category}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-industrial-dark mb-2">
                    {inspiration.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {inspiration.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {inspiration.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-industrial-accent/10 text-industrial-accent text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Vous avez un projet ? Parlons-en ensemble.
          </p>
          <button className="bg-industrial-accent hover:bg-industrial-copper text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
