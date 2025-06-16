import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook,
  MessageSquare,
  Send
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(407) 219-6915",
      action: "tel:+14072196915"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "evsdetailservices@gmail.com",
      action: "mailto:evsdetailservices@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Service Area",
      content: "Orlando, FL & Surrounding Areas",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: "Mon-Sat: 8AM-6PM\nSun: By Appointment",
      action: null
    }
  ];

  const faqs = [
    {
      question: "How long does a full detail take?",
      answer: "A complete interior and exterior detail typically takes 3-5 hours, depending on the vehicle's size and condition."
    },
    {
      question: "Do I need to be home during service?",
      answer: "No, you don't need to be present. We just need access to water and electricity, and a safe place to work on your vehicle."
    },
    {
      question: "What if it rains on my scheduled day?",
      answer: "We'll reschedule your appointment at no charge. We monitor weather closely and will contact you in advance."
    },
    {
      question: "Do you provide your own water and power?",
      answer: "We bring our own water tank and generator, so we only need access to your driveway or parking area."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="contact-hero-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Ready to give your vehicle the care it deserves? Contact us today for a 
            free quote or to schedule your mobile detailing service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover-scale transition-all duration-300">
                <CardContent className="p-6">
                  <div className="automotive-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-blue-600 hover:text-blue-800 transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(407) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your vehicle and what services you're interested in..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Service Area Map */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Our Service Area</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Orlando & Surrounding Areas</p>
                      <p className="text-sm">Interactive map would be embedded here</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">We Serve:</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>• Orlando</div>
                      <div>• Winter Park</div>
                      <div>• Altamonte Springs</div>
                      <div>• Maitland</div>
                      <div>• Lake Mary</div>
                      <div>• Sanford</div>
                      <div>• Apopka</div>
                      <div>• Oviedo</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-t pt-6 mt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="automotive-gradient w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="automotive-gradient w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers to help make your decision easier.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Don't wait—give your vehicle the professional care it deserves. 
            Call us now or book online for fastest service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary-inverse px-8 py-3"
            >
              Book Online Now
            </Button>
            <Button 
              asChild
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

export default Contact;
