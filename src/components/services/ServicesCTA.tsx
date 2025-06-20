
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="automotive-gradient text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
          Ready to Transform Your Vehicle?
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-roboto">
          Contact us today for a personalized quote tailored to your vehicle's needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="btn-primary-inverse text-blue-600 px-8 py-3 font-roboto"
          >
            Get Free Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-blue-600 hover:bg-white hover:text-blue-900 px-8 py-3 font-roboto"
          >
            <a href="tel:+14072196915">Call (407) 219-6915</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
