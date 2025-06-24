
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue des Matériaux", "69000 Lyon, France"]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 4 78 XX XX XX", "Devis gratuit"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@materiapro.fr", "commercial@materiapro.fr"]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven : 8h-18h", "Sam : 9h-12h"]
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-industrial-dark mb-6">
              Contactez
              <span className="gradient-text"> nos experts</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre équipe est à votre disposition pour vous conseiller 
              et vous accompagner dans tous vos projets.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="border-0 shadow-sm hover-lift animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-industrial-accent/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-industrial-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-industrial-dark mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-to-br from-industrial-medium to-industrial-dark rounded-2xl p-8 text-white">
              <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white/50" />
              </div>
              <p className="text-sm mt-4 opacity-75">
                Retrouvez-nous dans notre showroom de 500m² au cœur de Lyon
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-industrial-dark mb-6">
                  Demander un devis
                </h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom
                      </label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom
                      </label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="votre@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input type="tel" placeholder="+33 6 XX XX XX XX" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-industrial-accent">
                      <option>Sélectionnez votre projet</option>
                      <option>Rénovation salle de bain</option>
                      <option>Construction neuve</option>
                      <option>Rénovation cuisine</option>
                      <option>Projet commercial</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Décrivez votre projet en quelques mots..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-industrial-accent hover:bg-industrial-copper text-white"
                  >
                    Envoyer ma demande
                  </Button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Réponse garantie sous 24h • Devis gratuit et sans engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
