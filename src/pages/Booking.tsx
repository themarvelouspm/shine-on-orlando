
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Calendar,
  Clock,
  Car,
  Phone,
  Mail,
  MapPin,
  CheckCircle
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    address: '',
    services: [] as string[],
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const { toast } = useToast();

  const services = [
    { id: 'interior', name: 'Interior Detail', price: '$89' },
    { id: 'exterior', name: 'Exterior Detail', price: '$129' },
    { id: 'full', name: 'Full Detail (Interior + Exterior)', price: '$189' },
    { id: 'ceramic-1', name: 'Ceramic Coating (1-Year)', price: '$299' },
    { id: 'ceramic-3', name: 'Ceramic Coating (3-Year)', price: '$599' },
    { id: 'ceramic-5', name: 'Ceramic Coating (5-Year)', price: '$999' },
    { id: 'headlight', name: 'Headlight Restoration', price: '$75' },
    { id: 'engine', name: 'Engine Bay Cleaning', price: '$50' },
    { id: 'ozone', name: 'Ozone Odor Removal', price: '$100' }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, serviceId]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(id => id !== serviceId)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 2 hours to confirm your appointment.",
    });
    // Reset form or redirect
  };

  const selectedServices = services.filter(service => formData.services.includes(service.id));
  const totalEstimate = selectedServices.reduce((total, service) => {
    return total + parseInt(service.price.replace('$', ''));
  }, 0);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="automotive-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Detailing Service
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Schedule your mobile auto detailing appointment and we'll come to you 
            with everything needed for a professional service.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Schedule Your Service</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                            placeholder="(407) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Car className="h-4 w-4 mr-2" />
                        Vehicle Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="vehicleYear">Year *</Label>
                          <Input
                            id="vehicleYear"
                            value={formData.vehicleYear}
                            onChange={(e) => setFormData({...formData, vehicleYear: e.target.value})}
                            required
                            placeholder="2020"
                          />
                        </div>
                        <div>
                          <Label htmlFor="vehicleMake">Make *</Label>
                          <Input
                            id="vehicleMake"
                            value={formData.vehicleMake}
                            onChange={(e) => setFormData({...formData, vehicleMake: e.target.value})}
                            required
                            placeholder="BMW"
                          />
                        </div>
                        <div>
                          <Label htmlFor="vehicleModel">Model *</Label>
                          <Input
                            id="vehicleModel"
                            value={formData.vehicleModel}
                            onChange={(e) => setFormData({...formData, vehicleModel: e.target.value})}
                            required
                            placeholder="X5"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="vehicleType">Vehicle Type *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="truck">Truck</SelectItem>
                            <SelectItem value="coupe">Coupe</SelectItem>
                            <SelectItem value="convertible">Convertible</SelectItem>
                            <SelectItem value="van">Van</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Service Location
                      </h3>
                      <div>
                        <Label htmlFor="address">Complete Address *</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          required
                          rows={2}
                          placeholder="123 Main Street, Orlando, FL 32801"
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Select Services *</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={formData.services.includes(service.id)}
                              onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            />
                            <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                              <span className="font-medium">{service.name}</span>
                              <span className="text-blue-600 font-semibold ml-2">{service.price}</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Preferred Schedule
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Date *</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                            required
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredTime">Preferred Time *</Label>
                          <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>{time}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <Label htmlFor="notes">Special Requests or Notes</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        rows={3}
                        placeholder="Any special instructions, access codes, or specific concerns about your vehicle..."
                      />
                    </div>

                    <Button type="submit" className="w-full automotive-gradient text-lg py-3">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Request Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedServices.length > 0 ? (
                    <>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Selected Services:</h4>
                        {selectedServices.map((service) => (
                          <div key={service.id} className="flex justify-between text-sm">
                            <span>{service.name}</span>
                            <span className="font-semibold">{service.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total Estimate:</span>
                          <span className="text-blue-600">${totalEstimate}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 text-sm">Select services to see estimate</p>
                  )}

                  <div className="border-t pt-4 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Mobile service to your location</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>We bring water & power</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Eco-friendly products</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Professional & insured</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Need Help?</h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Call us directly for immediate assistance or custom quotes.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href="tel:+14072196915">(407) 219-6915</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
