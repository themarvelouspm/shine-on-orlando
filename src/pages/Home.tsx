
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  Shield, 
  Sparkles, 
  CheckCircle, 
  Droplets, 
  Leaf, 
  Award, 
  Star,
  ArrowRight,
  Quote
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Interior & Exterior Detailing",
      description: "Complete cleaning and protection for your entire vehicle",
      link: "/services"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection with 1, 3, and 5-year options",
      link: "/services"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Paint Correction",
      description: "Restore your paint's original luster and remove imperfections",
      link: "/services"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Fully Mobile with Water & Power",
      description: "We come to you with everything needed"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-Friendly Products",
      description: "Safe for you, your car, and the environment"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Professional & Insured",
      description: "Licensed, bonded, and fully insured service"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "5-Star Rated by Locals",
      description: "Trusted by Orlando car owners"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Full Detail + Ceramic Coating",
      rating: 5,
      text: "Absolutely incredible work! My BMW looks better than the day I bought it. The ceramic coating has been amazing - water just rolls right off!"
    },
    {
      name: "Mike Rodriguez",
      service: "Interior Deep Clean",
      rating: 5,
      text: "Had smoke odor in my truck that I thought would never come out. EV's Detail worked magic - completely odor free now!"
    },
    {
      name: "Jennifer Lee",
      service: "Paint Correction",
      rating: 5,
      text: "The paint correction service was phenomenal. Removed years of swirl marks and scratches. Highly recommend!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-bg text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-montserrat">
              Orlando's Premier
              <span className="block gold-accent">Mobile Auto Detailing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-roboto">
              We bring the shine to you—on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="btn-primary-inverse text-lg px-8 py-3 shine-effect font-roboto"
              >
                <Link to="/book">Book Now</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white text-blue-600 hover:bg-white hover:text-blue-900 text-lg px-8 py-3 font-roboto"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
              Professional auto detailing services that keep your vehicle looking its absolute best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="automotive-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 font-montserrat">{service.title}</h3>
                  <p className="text-gray-600 mb-6 font-roboto">{service.description}</p>
                  <Button asChild variant="outline" className="group font-roboto">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Why Choose EV's Detail & Buff
            </h2>
            <p className="text-lg text-gray-600 font-roboto">
              Professional service you can trust, with results that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="automotive-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 font-montserrat">{item.title}</h3>
                <p className="text-gray-600 text-sm font-roboto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-700 font-roboto">5.0 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-600 mr-2" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic font-roboto">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900 font-montserrat">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 font-roboto">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="automotive-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            Ready for That Showroom Finish?
          </h2>
          <p className="text-xl mb-8 text-gray-100 font-roboto">
            Book your appointment today and experience the difference professional detailing makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="btn-primary-inverse text-lg px-8 py-3 font-roboto"
            >
              <Link to="/book">Schedule Your Detail Today</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3 font-roboto"
            >
              <a href="tel:+14072196915">Call (407) 219-6915</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
