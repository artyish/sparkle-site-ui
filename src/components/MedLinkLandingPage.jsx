import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle, 
  User, 
  Stethoscope,
  Shield,
  Database,
  Lock,
  Star,
  ArrowRight
} from 'lucide-react';
import medlinkLogo from '@/assets/medlink-logo.png';
import doctorHero from '@/assets/doctor-hero.png';
import doctorFemale from '@/assets/doctor-female.png';

const MedLinkLandingPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    date: '',
    firstName: '',
    emailContact: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookNow = () => {
    console.log('Booking appointment:', formData);
    // API call would go here
  };

  const handleContactSubmit = () => {
    console.log('Contact form:', { firstName: formData.firstName, emailContact: formData.emailContact });
    // API call would go here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={medlinkLogo} alt="MedLink" className="h-10 w-10" />
              <span className="text-2xl font-bold text-medical-blue">MedLink</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-medical-text hover:text-medical-blue transition-colors">Home</a>
              <a href="#" className="text-medical-text hover:text-medical-blue transition-colors">Features</a>
              <a href="#" className="text-medical-text hover:text-medical-blue transition-colors">Find Doctors</a>
              <a href="#" className="text-medical-text hover:text-medical-blue transition-colors">About us</a>
              <a href="#" className="text-medical-text hover:text-medical-blue transition-colors">Contact us</a>
            </nav>
            <Button className="bg-medical-blue hover:bg-medical-blue-dark text-white px-6 py-2 rounded-full">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-medical-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-medical-text mb-6 leading-tight">
                Bridging Traditional and Modern Medicine - 
                <br />
                <span className="text-medical-blue">Seamlessly and Securely.</span>
              </h1>
              <p className="text-lg text-medical-text-light mb-8 leading-relaxed">
                Record NAMASTE codes, map to ICD-11 TMZ 5 Biomedicine, and keep your EMR fully FHIR-compliant - all in one powerful micro-service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-3 rounded-full flex items-center">
                  Sign up as doctor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-3 rounded-full flex items-center">
                  Sign up as patient <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 text-sm text-medical-text-light">
                Over 30,000 ICD-11 codes seamlessly mapped to NAMASTE terminologies, ensuring complete interoperability and global compatibility.
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img src={doctorHero} alt="Professional Doctor" className="w-full h-auto rounded-2xl shadow-2xl" />
                <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 bg-medical-blue rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-medical-text">2400+</span>
                  </div>
                  <p className="text-sm text-medical-text-light">Happy Customers</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-medical-text-light">(4.7 Stars)</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-medical-text">Dual Coding Support</span>
                  </div>
                </div>
                <div className="absolute bottom-16 right-8 bg-white rounded-lg p-3 shadow-lg">
                  <p className="text-xs text-medical-text-light mb-1">OAuth 2.0 with ABHA integration and</p>
                  <p className="text-xs text-medical-text-light">full audit trails to meet EHR standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-text mb-4">
              Easily book an appointment in 3 simple steps.
            </h2>
          </div>
          <Card className="bg-medical-gray border-none shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-medical-blue">
                    <Mail className="w-5 h-5" />
                    <label className="text-sm font-medium">Email Address</label>
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-medical-blue"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-medical-blue">
                    <Phone className="w-5 h-5" />
                    <label className="text-sm font-medium">Contact Number</label>
                  </div>
                  <Input
                    name="contact"
                    type="tel"
                    placeholder="Enter Your Contact Number"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-medical-blue"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-medical-blue">
                    <Calendar className="w-5 h-5" />
                    <label className="text-sm font-medium">Date of Appointment</label>
                  </div>
                  <Input
                    name="date"
                    type="date"
                    placeholder="Select Date of Appointment"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-medical-blue"
                  />
                </div>
                <Button 
                  onClick={handleBookNow}
                  className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-3 rounded-full h-12"
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-medical-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-text mb-4">
              Top <span className="text-medical-blue">services</span> we offer
            </h2>
            <p className="text-lg text-medical-text-light max-w-3xl mx-auto">
              In today's fast-paced world, your health deserves the utmost attention and convenience. That's why HealthNet offers a suite of integrated services designed to cater to your healthcare needs digitally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue-light rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-text ml-4">Extensive Mapping</h3>
                </div>
                <p className="text-medical-text-light leading-relaxed">
                  Over 30,000 ICD-11 codes seamlessly mapped to NAMASTE terminologies, ensuring complete interoperability and global compatibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue-light rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-text ml-4">Auto-Complete Lookup</h3>
                </div>
                <p className="text-medical-text-light leading-relaxed">
                  Quickly search NAMASTE terms and see ICD-11 TMZ & Biomedicine mappings in real-time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue-light rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-text ml-4">FHIR-Compliant API</h3>
                </div>
                <p className="text-medical-text-light leading-relaxed">
                  Upload encounters, Problem Lists, and dual-coded bundles with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue-light rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-text ml-4">Secure Access</h3>
                </div>
                <p className="text-medical-text-light leading-relaxed">
                  OAuth 2.0 with ABHA integration and full audit trails to meet EHR standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue-light rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-text ml-4">Dual Coding Support</h3>
                </div>
                <p className="text-medical-text-light leading-relaxed">
                  Record NAMASTE and ICD-11 codes together for global compatibility and insurance claims.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Find Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-text mb-4">
              Find <span className="text-medical-blue">Doctor's</span> nearby
            </h2>
          </div>
          <div className="bg-medical-gray rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-medical-blue mx-auto mb-4" />
              <p className="text-xl text-medical-text-light">Interactive Map Coming Soon</p>
              <p className="text-medical-text-light">Find qualified doctors in your area</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Platform Works Section */}
      <section className="py-20 bg-medical-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-text mb-4">
              How <span className="text-medical-blue">our platform</span> works
            </h2>
            <p className="text-lg text-medical-text-light max-w-3xl mx-auto">
              Navigating your healthcare journey with HealthNet is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also use our FAQ section for more guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-medical-text mb-2">Create Your Profile</h3>
                  <p className="text-medical-text-light">
                    Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-medical-text mb-2">Choose Your Service</h3>
                  <p className="text-medical-text-light">
                    Select from our range of services and book a consultation. Booking a consultation with HealthNet is fairly simple and straightforward.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-medical-text mb-2">Consult a Specialist</h3>
                  <p className="text-medical-text-light">
                    Seamlessly bridge dual-week Siddha, Unani, with dual-coding. Connect with certified doctors virtually or in-person, while your health records stay secure, interoperable, and accessible across hospitals with ABHA integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={doctorFemale} alt="Healthcare Professional" className="w-full h-auto rounded-2xl shadow-2xl" />
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-medical-blue" />
                  <span className="text-sm font-medium text-medical-text">Best Certified Team of Specialists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-medical-text mb-4">
              <span className="text-medical-blue">Patient Testimonials:</span>
            </h2>
            <h3 className="text-3xl font-semibold text-medical-text mb-4">
              Hear from Those We've Cared For
            </h3>
            <p className="text-lg text-medical-text-light">
              Discover the difference we make through the voices of those we've served.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-medical-blue-light border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-medical-text">Linda A.</h4>
                  </div>
                </div>
                <p className="text-medical-text-light italic mb-4">
                  "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-medical-blue-light border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-medical-text">Henry B.</h4>
                  </div>
                </div>
                <p className="text-medical-text-light italic mb-4">
                  "Managing chronic conditions like diabetes requires a lot of vigilance, but this medical refill system has simplified my life."
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">30,000+</div>
              <div className="text-medical-text-light">NAMASTE CODES</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">2,500+</div>
              <div className="text-medical-text-light">Healthcare Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">98%</div>
              <div className="text-medical-text-light">ACCURACY</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-blue mb-2">200+</div>
              <div className="text-medical-text-light">Top Specialists</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-medical-blue-light border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-medical-text">Joshua T.</h4>
                  </div>
                </div>
                <p className="text-medical-text-light italic mb-4">
                  "The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free."
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-medical-blue-light border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-medical-text">Samantha K.</h4>
                  </div>
                </div>
                <p className="text-medical-text-light italic mb-4">
                  "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life."
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-medical-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-text mb-4">
              Reach our <span className="text-medical-blue">Help Desk</span> for support
            </h2>
            <p className="text-medical-text-light mb-2">Support Hours: Mon-Fri, 9am-6pm IST</p>
            <p className="text-medical-text-light">
              Have feedback, questions, or want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input
              name="firstName"
              type="text"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="max-w-xs border-gray-300 focus:border-medical-blue"
            />
            <Input
              name="emailContact"
              type="email"
              placeholder="Enter Your Email Address"
              value={formData.emailContact}
              onChange={handleInputChange}
              className="max-w-xs border-gray-300 focus:border-medical-blue"
            />
            <Button 
              onClick={handleContactSubmit}
              className="bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-2 rounded-full"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={medlinkLogo} alt="MedLink" className="h-10 w-10" />
                <span className="text-2xl font-bold text-medical-blue">MedLink</span>
              </div>
              <p className="text-medical-text-light mb-4">Built with ❤️ by Team Allotropy</p>
            </div>

            <div>
              <h4 className="font-semibold text-medical-text mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Getting Started</a></li>
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">FAQS</a></li>
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-medical-text mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Booking appointments</a></li>
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Online consultations</a></li>
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Prescriptions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-medical-text mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Terms & Conditions</a></li>
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Privacy Policy</a></li>
                <li><a href="#" className="text-medical-text-light hover:text-medical-blue">Cookie Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-medical-text-light">📧 hemankkumar2k@gmail.com</span>
                <span className="text-medical-text-light">📞 91-7985008591</span>
              </div>
              <p className="text-medical-text-light">MedLink 2025 © All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedLinkLandingPage;