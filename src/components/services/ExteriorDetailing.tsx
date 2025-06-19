
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, CheckCircle, Clock, DollarSign } from 'lucide-react';

const ExteriorDetailing = () => {
  const exteriorServices = [
    "Hand wash with premium soap",
    "Clay bar treatment",
    "Tire cleaning and shine",
    "Wheel and rim detailing",
    "Window cleaning (exterior)",
    "Paint protection wax",
    "Trim restoration"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg lg:order-2">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-montserrat">Premium Exterior Package</h3>
            <p className="text-gray-600 mb-4 font-roboto">
              Complete exterior restoration including paint decontamination, 
              polishing, and premium wax protection.
            </p>
            <Button className="btn-primary-inverse font-roboto">
              Request Quote
            </Button>
          </div>
          <div className="lg:order-1">
            <div className="flex items-center mb-6">
              <div className="automotive-gradient p-3 rounded-lg mr-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-montserrat">Exterior Detailing</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 font-roboto">
              Hand wash, tire shine, clay bar, and wax for a spotless exterior.
            </p>
            <div className="space-y-3 mb-8">
              {exteriorServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-roboto">{service}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="px-4 py-2 text-lg font-roboto">
                <DollarSign className="h-4 w-4 mr-1" />
                Starting at $129
              </Badge>
              <Badge variant="outline" className="px-4 py-2 font-roboto">
                <Clock className="h-4 w-4 mr-1" />
                2-3 hours
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExteriorDetailing;
