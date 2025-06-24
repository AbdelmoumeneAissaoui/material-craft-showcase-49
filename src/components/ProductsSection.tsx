
import { Tiles, Bath, Droplets, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProductsSection = () => {
  const categories = [
    {
      icon: Tiles,
      title: "Dalles & Carrelage",
      description: "Collection premium de dalles de sol et faïences murales pour tous vos projets",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      products: ["Grès cérame", "Faïence murale", "Mosaïque", "Pierre naturelle"]
    },
    {
      icon: Bath,
      title: "Sanitaires",
      description: "WC, lavabos et équipements sanitaires design et fonctionnels",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      products: ["WC suspendus", "Lavabos design", "Bidets", "Accessoires"]
    },
    {
      icon: Droplets,
      title: "Équipements douche",
      description: "Baignoires, colonnes de douche et équipements pour espaces wellness",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      products: ["Baignoires îlot", "Colonnes de douche", "Receveurs", "Robinetterie"]
    },
    {
      icon: Home,
      title: "Mobilier salle de bain",
      description: "Meubles et accessoires pour créer des espaces harmonieux",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      products: ["Meubles vasque", "Miroirs LED", "Rangements", "Accessoires design"]
    }
  ];

  return (
    <section id="produits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-industrial-dark mb-6">
            Notre gamme
            <span className="gradient-text"> premium</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection rigoureuse de matériaux et équipements 
            pour sublimer vos projets de construction et rénovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="hover-lift border-0 shadow-lg animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="h-48 relative"
                style={{ background: category.image }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-industrial-dark mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.products.map((product) => (
                    <div key={product} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-industrial-accent rounded-full mr-2" />
                      {product}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-industrial-accent to-industrial-copper p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un conseil personnalisé ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nos experts vous accompagnent dans le choix de vos matériaux
            </p>
            <button className="bg-white text-industrial-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
