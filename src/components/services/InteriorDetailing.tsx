
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, CheckCircle, Clock, DollarSign } from 'lucide-react';

const InteriorDetailing = () => {
  const interiorServices = [
    "Complete vacuuming (seats, carpets, crevices)",
    "Dashboard and console cleaning",
    "Leather conditioning or fabric protection",
    "Window cleaning (interior)",
    "Door jamb cleaning",
    "Air freshening",
    "Floor mat cleaning"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="automotive-gradient p-3 rounded-lg mr-4">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-montserrat">Interior Detailing</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 font-roboto">
              From vacuuming to odor elimination—we make the inside of your car feel brand new.
            </p>
            <div className="space-y-3 mb-8">
              {interiorServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-roboto">{service}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg font-roboto">
                <DollarSign className="h-4 w-4 mr-1" />
                Starting at $89
              </Badge>
              <Badge variant="outline" className="px-4 py-2 font-roboto">
                <Clock className="h-4 w-4 mr-1" />
                1-2 hours
              </Badge>
            </div>
          </div>
          <div className="automotive-gradient rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Premium Interior Package</h3>
            <p className="text-gray-100 mb-4 font-roboto">
              Complete interior transformation including steam cleaning, 
              leather conditioning, and protective treatments.
            </p>
            <Button className="btn-primary-inverse font-roboto">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDetailing;
