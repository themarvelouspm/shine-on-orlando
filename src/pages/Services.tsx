import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Shield, 
  Sparkles, 
  Wind, 
  Droplets, 
  Zap,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const Services = () => {
  const interiorServices = [
    "Complete vacuuming (seats, carpets, crevices)",
    "Dashboard and console cleaning",
    "Leather conditioning or fabric protection",
    "Window cleaning (interior)",
    "Door jamb cleaning",
    "Air freshening",
    "Floor mat cleaning"
  ];

  const exteriorServices = [
    "Hand wash with premium soap",
    "Clay bar treatment",
    "Tire cleaning and shine",
    "Wheel and rim detailing",
    "Window cleaning (exterior)",
    "Paint protection wax",
    "Trim restoration"
  ];

  const ceramicOptions = [
    {
      duration: "1-Year",
      price: "Starting at $299",
      features: ["Basic paint protection", "Enhanced gloss", "Easy maintenance", "UV protection"]
    },
    {
      duration: "3-Year",
      price: "Starting at $599",
      features: ["Advanced protection", "Hydrophobic coating", "Scratch resistance", "Professional application"]
    },
    {
      duration: "5-Year",
      price: "Starting at $999",
      features: ["Maximum protection", "Self-healing properties", "Lifetime support", "Warranty included"]
    }
  ];

  const addOns = [
    {
      name: "Headlight Restoration",
      price: "$75",
      description: "Restore cloudy, yellowed headlights to crystal clear condition"
    },
    {
      name: "Engine Bay Cleaning",
      price: "$50",
      description: "Deep clean and dress your engine bay for a showroom look"
    },
    {
      name: "Ozone Odor Removal",
      price: "$100",
      description: "Eliminate smoke, pet, and other stubborn odors completely"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="automotive-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Auto Detailing Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            From basic washes to complete paint correction, we offer comprehensive 
            auto detailing services to keep your vehicle looking its absolute best.
          </p>
        </div>
      </section>

      {/* Interior Detailing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="automotive-gradient p-3 rounded-lg mr-4">
                  <Wind className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Interior Detailing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                From vacuuming to odor elimination—we make the inside of your car feel brand new.
              </p>
              <div className="space-y-3 mb-8">
                {interiorServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Starting at $89
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Clock className="h-4 w-4 mr-1" />
                  1-2 hours
                </Badge>
              </div>
            </div>
            <div className="automotive-gradient rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Premium Interior Package</h3>
              <p className="text-gray-100 mb-4">
                Complete interior transformation including steam cleaning, 
                leather conditioning, and protective treatments.
              </p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Detailing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg lg:order-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Exterior Package</h3>
              <p className="text-gray-600 mb-4">
                Complete exterior restoration including paint decontamination, 
                polishing, and premium wax protection.
              </p>
              <Button className="automotive-gradient">
                Request Quote
              </Button>
            </div>
            <div className="lg:order-1">
              <div className="flex items-center mb-6">
                <div className="automotive-gradient p-3 rounded-lg mr-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Exterior Detailing</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Hand wash, tire shine, clay bar, and wax for a spotless exterior.
              </p>
              <div className="space-y-3 mb-8">
                {exteriorServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Starting at $129
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Clock className="h-4 w-4 mr-1" />
                  2-3 hours
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ceramic Coating */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="automotive-gradient p-3 rounded-lg mr-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Ceramic Coating Protection</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Long-lasting protection that keeps your vehicle looking showroom fresh. 
              Our ceramic coatings provide unmatched durability and shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ceramicOptions.map((option, index) => (
              <Card key={index} className={`hover-scale transition-all duration-300 ${index === 1 ? 'border-blue-500 border-2 scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {option.duration} Protection
                  </CardTitle>
                  <p className="text-3xl font-bold automotive-gradient bg-clip-text text-transparent">
                    {option.price}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 automotive-gradient">
                    Choose This Option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Ceramic Coating:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Protection from UV rays and oxidation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Droplets className="h-5 w-5 text-blue-600" />
                <span>Hydrophobic properties for easy cleaning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <span>Enhanced gloss and depth of color</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span>Reduced maintenance and washing time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-On Services</h2>
            <p className="text-lg text-gray-600">
              Enhance your detailing package with these specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover-scale transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{addon.name}</h3>
                    <Badge className="automotive-gradient">{addon.price}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <Button variant="outline" className="w-full">
                    Add to Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="automotive-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote tailored to your vehicle's needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              <a href="tel:+14072196915">Call (407) 219-6915</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
