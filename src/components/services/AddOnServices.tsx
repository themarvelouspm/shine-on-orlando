
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AddOnServices = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">Add-On Services</h2>
          <p className="text-lg text-gray-600 font-roboto">
            Enhance your detailing package with these specialized services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addOns.map((addon, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 font-montserrat">{addon.name}</h3>
                  <Badge className="btn-primary font-roboto">{addon.price}</Badge>
                </div>
                <p className="text-gray-600 mb-4 font-roboto">{addon.description}</p>
                <Button variant="outline" className="w-full font-roboto">
                  Add to Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnServices;
