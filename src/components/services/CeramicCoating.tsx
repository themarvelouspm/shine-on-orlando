
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Sparkles, Droplets, CheckCircle } from 'lucide-react';

const CeramicCoating = () => {
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

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="automotive-gradient p-3 rounded-lg mr-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-montserrat">Ceramic Coating Protection</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-roboto">
            Long-lasting protection that keeps your vehicle looking showroom fresh. 
            Our ceramic coatings provide unmatched durability and shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ceramicOptions.map((option, index) => (
            <Card key={index} className={`hover-scale transition-all duration-300 ${index === 1 ? 'border-blue-500 border-2 scale-105' : ''}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 font-montserrat">
                  {option.duration} Protection
                </CardTitle>
                <p className="text-3xl font-bold automotive-gradient bg-clip-text text-transparent font-montserrat">
                  {option.price}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-roboto">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 btn-primary font-roboto">
                  Choose This Option
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">Benefits of Ceramic Coating:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-roboto">Protection from UV rays and oxidation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Droplets className="h-5 w-5 text-blue-600" />
              <span className="font-roboto">Hydrophobic properties for easy cleaning</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="font-roboto">Enhanced gloss and depth of color</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="font-roboto">Reduced maintenance and washing time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeramicCoating;
