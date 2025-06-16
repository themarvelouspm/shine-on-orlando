import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  Heart,
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Happy Customers" },
    { icon: <Clock className="h-8 w-8" />, number: "5+", label: "Years Experience" },
    { icon: <Award className="h-8 w-8" />, number: "100%", label: "Satisfaction Rate" },
    { icon: <Star className="h-8 w-8" />, number: "5.0", label: "Average Rating" }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion for Excellence",
      description: "We don't just clean cars—we restore them to their former glory with meticulous attention to detail."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trust & Reliability",
      description: "Fully licensed, bonded, and insured. Your vehicle is in safe, professional hands."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
    }
  ];

  const certifications = [
    "Licensed Auto Detailing Professional",
    "Ceramic Coating Certified Installer",
    "Eco-Friendly Product Specialist",
    "Mobile Service Certified",
    "Insurance & Bonding Verified"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="about-hero-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Passion for Detail.
              <span className="block gold-accent">A Commitment to Excellence.</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Founded by a car care enthusiast, EV's Detail & Buff was built on the idea 
              that quality service should be convenient and affordable. With over 5 years 
              of hands-on experience and a love for the craft, we treat every vehicle as our own.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="automotive-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What started as a passion for keeping my own vehicles pristine has grown 
                  into Orlando's trusted mobile auto detailing service. I've always believed 
                  that a clean car is more than just aesthetics—it's about pride, 
                  protection, and preserving your investment.
                </p>
                <p>
                  After years of perfecting techniques and building relationships with 
                  customers who became friends, EV's Detail & Buff was born. We're not 
                  just another detailing service; we're your neighbors who happen to be 
                  obsessed with making cars look incredible.
                </p>
                <p>
                  Every day, we bring that same passion and attention to detail to your 
                  driveway. Because when you trust us with your vehicle, we don't just 
                  see a job—we see an opportunity to exceed your expectations and earn 
                  your trust for years to come.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Professional car detailing"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">5.0 Rating</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Trusted by 500+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from the products we use to 
              the relationships we build with our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300">
                <CardContent className="p-8">
                  <div className="automotive-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Credentials
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We maintain the highest standards in the industry through continuous 
                education, professional certifications, and adherence to best practices.
              </p>
              <div className="space-y-3">
                {certifications.map((certification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{certification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Badge className="automotive-gradient text-center py-4 text-white">
                <div className="text-lg font-bold">Licensed</div>
              </Badge>
              <Badge className="automotive-gradient text-center py-4 text-white">
                <div className="text-lg font-bold">Insured</div>
              </Badge>
              <Badge className="automotive-gradient text-center py-4 text-white">
                <div className="text-lg font-bold">Bonded</div>
              </Badge>
              <Badge className="automotive-gradient text-center py-4 text-white">
                <div className="text-lg font-bold">Certified</div>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="automotive-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers and discover what makes 
            EV's Detail & Buff Orlando's premier choice for auto detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary-inverse px-8 py-3"
            >
              Schedule Your Detail
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

export default About;
